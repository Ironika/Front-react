// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// COMPONENT


export const Login = (props) => (
    <div className="login-container size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
        <h2 className="mtext-105 cl2 txt-center p-b-30">Login to Your Account</h2><br/>
        {props.user && typeof props.user == 'string' ? <p className='login-error'>{props.user}</p> : ''}
        {props.error != '' ? <p className='login-error'>{props.error}</p> : ''}
        <div className="form-signin">
            <div className="bor8 m-b-20 how-pos4-parent">
                <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" value={props.usernameValue} placeholder="Username" onChange={props.usernameChange}/>
            </div>
            <div className="bor8 m-b-20 how-pos4-parent">
                <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="password" value={props.passwordValue} placeholder="Password" onChange={props.passwordChange}/>
            </div>
            <input type="submit" className="login-submit flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04" id="_submit" name="_submit" value="Submit" onClick={props.submit} />
        </div>
        <div className="login-help m-b-20">
            <Link to='/register'>Register</Link> - <a href="#">Forgot Password</a>
        </div>
    </div>
);

Login.propTypes = {
    usernameValue:  PropTypes.string.isRequired,
    usernameChange: PropTypes.func.isRequired,
    passwordValue:  PropTypes.string.isRequired,
    passwordChange: PropTypes.func.isRequired,
    submit:         PropTypes.func.isRequired,
    error:          PropTypes.string.isRequired,
    user:           PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ])
};