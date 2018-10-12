// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
// import img from '../../images/icons/icon-email.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { DOMAIN_API } from '../../components/App';


// COMPONENT


class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange(input, event) {
        if(input == 'username')
            this.setState({username: event.target.value});
        if(input == 'password')
            this.setState({password: event.target.value});
    }

    login() {
        let token = window.localStorage.getItem('token');
        axios({
            method: 'post',
            url: DOMAIN_API + 'api/login',
            headers: {'Authorization': 'Bearer ' + token},
            data: {
                username: this.state.username,
                password: this.state.password
            }
        }).then(function(response) {
            console.log(response);
        }.bind(this));
    }

    render() {
        return (
            <main className="login">
                <section className="bg-img1 txt-center p-lr-15 p-tb-92">
                    <h2 className="ltext-105 cl0 txt-center">
                        Login
                    </h2>
                </section>

                <div className="container">
                    <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                        <NavLink to='/' className='stext-109 cl8 hov-cl1 trans-04' exact={true}>
                            Home
                            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                        </NavLink>
                        <span className="stext-109 cl4"> Login </span>
                    </div>
                </div>  

                <section className="content">
                    <div className="login-container size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
                        <h1 className="mtext-105 cl2 txt-center p-b-30">Login to Your Account</h1><br/>
                        <div className="form-signin">
                            <div className="bor8 m-b-20 how-pos4-parent">
                                <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" id="username" name="_username" value={this.state.username} placeholder="Username" onChange={this.handleChange.bind(this, 'username')}/>
                            </div>
                            <div className="bor8 m-b-20 how-pos4-parent">
                                <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="password" id="password" name="_password" value={this.state.password} placeholder="Password" onChange={this.handleChange.bind(this, 'password')}/>
                            </div>
                            <input type="submit" className="login login-submit flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04" id="_submit" name="_submit" value="Submit" onClick={this.login.bind(this)} />
                        </div>
                        <div className="login-help m-b-20">
                            <a href="{{ path('fos_user_registration_register') }}">Register</a> - <a href="{{ path('fos_user_resetting_request') }}">Forgot Password</a>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}


export { LoginPage };