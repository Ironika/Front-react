// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { login, register } from '../../services/UserService';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Redirect } from 'react-router-dom';
import { Banner } from '../shared/Banner/Banner';
import { Breadcrumb } from '../shared/Breadcrumb/Breadcrumb';
import { Login } from '../modules/Account/Login';
import { Register } from '../modules/Account/Register';

// COMPONENT


class AccountPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            plainPassword: '',
            token: window.localStorage.getItem('token')
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.handleChange = this.handleChange.bind(this);
        this.handleClickLogin = this.handleClickLogin.bind(this);
    }

    handleChange(input, event) {
        if(input == 'username')
            this.setState({username: event.target.value});
        else if(input == 'email')
            this.setState({email: event.target.value});
        else if(input == 'password')
            this.setState({password: event.target.value});
        else if(input == 'plainPassword')
            this.setState({plainPassword: event.target.value});
        
    }

    handleClickLogin() {
        let token = window.localStorage.getItem('token');
        this.props.login(token, this.state.username, this.state.password);
    }

    handleClickRegister() {
        let token = window.localStorage.getItem('token');
        this.props.register(token, this.state.email, this.state.username, this.state.password, this.state.plainPassword);
    }

    render() {
        let title = 'Register';
        if(this.props.location.pathname == '/login')
            title = 'Login';
        if(!this.props.fetching && typeof this.props.user != 'string' && Object.keys(this.props.user).length > 0) {
            return (<Redirect to='/profile' />);
        } else {
            return (
                <main className="account">
                    <Banner title={title} className={'bg-img1'}/>

                    <Breadcrumb title={title} haveSub={false}/> 

                    <section className="content">
                        {this.props.fetching ? <LoadingIndicator busy={this.props.fetching} /> : ''}

                        { this.props.location.pathname == '/login' ? 
                            <Login 
                                user={this.props.user} 
                                usernameValue={this.state.username} 
                                usernameChange={this.handleChange.bind(this, 'username')} 
                                passwordValue={this.state.password} 
                                passwordChange={this.handleChange.bind(this, 'password')} 
                                submit={this.handleClickLogin.bind(this)} 
                            /> : 
                            <Register 
                                user={this.props.user} 
                                emailValue={this.state.email} 
                                emailChange={this.handleChange.bind(this, 'email')}
                                usernameValue={this.state.username} 
                                usernameChange={this.handleChange.bind(this, 'username')} 
                                passwordValue={this.state.password} 
                                passwordChange={this.handleChange.bind(this, 'password')} 
                                plainPasswordValue={this.state.plainPassword} 
                                plainPasswordChange={this.handleChange.bind(this, 'plainPassword')} 
                                submit={this.handleClickRegister.bind(this)} 
                            />
                        }
                    </section>
                </main>
            );
        }
    }
}

AccountPage.propTypes = {
    login:      PropTypes.func.isRequired,
    register:   PropTypes.func.isRequired,
    history:    PropTypes.object,
    fetching:   PropTypes.bool.isRequired,
    location:   PropTypes.object.isRequired,
    user:       PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
};

const mapStateToProps = state => {
    const { fetching, user } = state.user;
    return { fetching, user };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ login, register }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(AccountPage);

// EXPORT COMPONENT

export { hoc as AccountPage };