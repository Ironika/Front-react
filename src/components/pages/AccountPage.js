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
import { Link } from 'react-router-dom';

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

    insertLogin() {
        if(!this.props.fetching && typeof this.props.user != 'string' && Object.keys(this.props.user).length > 0) {
            return (<Redirect to='/profile' />);
        }
        else {
            return (
                <section className="content">
                    {this.props.fetching ? <LoadingIndicator busy={this.props.fetching} /> : ''}
                    <div className="login-container size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
                        <h2 className="mtext-105 cl2 txt-center p-b-30">Login to Your Account</h2><br/>
                        {this.props.user && typeof this.props.user == 'string' ? <p className='login-error'>{this.props.user}</p> : ''}
                        <div className="form-signin">
                            <div className="bor8 m-b-20 how-pos4-parent">
                                <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" value={this.state.username} placeholder="Username" onChange={this.handleChange.bind(this, 'username')}/>
                            </div>
                            <div className="bor8 m-b-20 how-pos4-parent">
                                <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="password" value={this.state.password} placeholder="Password" onChange={this.handleChange.bind(this, 'password')}/>
                            </div>
                            <input type="submit" className="login-submit flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04" id="_submit" name="_submit" value="Submit" onClick={this.handleClickLogin.bind(this)} />
                        </div>
                        <div className="login-help m-b-20">
                            <Link to='/register'>Register</Link> - <a href="#">Forgot Password</a>
                        </div>
                    </div>
                </section>
            );
        }
    }

    insertRegister() {
        if(!this.props.fetching && typeof this.props.user != 'string' && Object.keys(this.props.user).length > 0) {
            return (<Redirect to='/profile' />);
        }
        else {
            return (
                <section className="content">
                    {this.props.fetching ? <LoadingIndicator busy={this.props.fetching} /> : ''}
                    <div className="login-container size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
                        <h2 className="mtext-105 cl2 txt-center p-b-30">Create an Account</h2>
                        <div className="form-group" id="fos_user_registration_form">
                            <div className="bor8 m-b-20 how-pos4-parent">
                                <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="Email" type="text" value={this.state.email} onChange={this.handleChange.bind(this, 'email')}/>
                            </div>
                            <div className="bor8 m-b-20 how-pos4-parent">
                                <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="Username" type="text" value={this.state.username} onChange={this.handleChange.bind(this, 'username')}/>
                            </div>
                            <div className="bor8 m-b-20 how-pos4-parent">
                                <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="Password" type="text" value={this.state.password} onChange={this.handleChange.bind(this, 'password')}/>
                            </div>
                            <div className="bor8 m-b-20 how-pos4-parent">
                                <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="Password Confirm" type="text" value={this.state.plainPassword} onChange={this.handleChange.bind(this, 'plainPassword')}/>
                            </div>
                        </div>
                        <div>
                            <input type="submit" className="login-submit flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04" id="_submit" name="_submit" value="Submit" onClick={this.handleClickRegister.bind(this)} />
                        </div>
                        <div className="login-help m-b-20">
                            <Link to='/login'>Return to Login</Link>
                        </div>
                    </div>
                </section>
            );
        }
    }

    render() {
        let title = 'Register';
        if(this.props.location.pathname == '/login')
            title = 'Login';
        return (
            <main className="login">
                <Banner title={title} className={'bg-img1'}/>

                <Breadcrumb title={title} haveSub={false}/> 

                { this.props.location.pathname == '/login' ? this.insertLogin() : this.insertRegister()}
            </main>
        );
    }
}

AccountPage.propTypes = {
    login: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    history: PropTypes.object,
    fetching: PropTypes.bool.isRequired,
    user: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
    location: PropTypes.object.isRequired
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