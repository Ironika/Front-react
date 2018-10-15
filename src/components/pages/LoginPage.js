// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { login } from '../../services/UserService';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Redirect } from 'react-router-dom';
import { Banner } from '../shared/Banner/Banner';
import { Breadcrumb } from '../shared/Breadcrumb/Breadcrumb';

// COMPONENT


class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
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
        if(input == 'password')
            this.setState({password: event.target.value});
    }

    handleClickLogin() {
        let token = window.localStorage.getItem('token');
        this.props.login(token, this.state.username, this.state.password);
    }

    insertLogin() {
        if(!this.props.fetching && typeof this.props.user != 'string' && Object.keys(this.props.user).length > 0) {
            return (<Redirect to='/profile' />);
        }
        else {
            return (
                <section className="content">
                    {this.props.fetching ? <LoadingIndicator busy={this.props.fetching} /> : ''}
                    <div className="login-container size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
                        <h1 className="mtext-105 cl2 txt-center p-b-30">Login to Your Account</h1><br/>
                        {this.props.user && typeof this.props.user == 'string' ? <p className='login-error'>{this.props.user}</p> : ''}
                        <div className="form-signin">
                            <div className="bor8 m-b-20 how-pos4-parent">
                                <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" id="username" name="_username" value={this.state.username} placeholder="Username" onChange={this.handleChange.bind(this, 'username')}/>
                            </div>
                            <div className="bor8 m-b-20 how-pos4-parent">
                                <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="password" id="password" name="_password" value={this.state.password} placeholder="Password" onChange={this.handleChange.bind(this, 'password')}/>
                            </div>
                            <input type="submit" className="login-submit flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04" id="_submit" name="_submit" value="Submit" onClick={this.handleClickLogin.bind(this)} />
                        </div>
                        <div className="login-help m-b-20">
                            <a href="{{ path('fos_user_registration_register') }}">Register</a> - <a href="{{ path('fos_user_resetting_request') }}">Forgot Password</a>
                        </div>
                    </div>
                </section>
            );
        }
    }

    render() {
        return (
            <main className="login">
                <Banner title={'Login'} className={'bg-img1'}/>

                <Breadcrumb title={'Contact'} haveSub={false}/> 

                { this.insertLogin() }
            </main>
        );
    }
}

LoginPage.propTypes = {
    login: PropTypes.func.isRequired,
    history: PropTypes.object,
    fetching: PropTypes.bool.isRequired,
    user: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
};

const mapStateToProps = state => {
    const { fetching, user } = state.user;
    return { fetching, user };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ login }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

// EXPORT COMPONENT

export { hoc as LoginPage };