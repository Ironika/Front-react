// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// COMPONENT


export const Register = (props) => (
    <div className="login-container size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
        <h2 className="mtext-105 cl2 txt-center p-b-30">Create an Account</h2>
        {props.user && typeof props.user == 'string' ? <p className='login-error'>{props.user}</p> : ''}
        <div className="form-group" id="fos_user_registration_form">
            <div className="bor8 m-b-20 how-pos4-parent">
                <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="Email" type="text" value={props.emailValue} onChange={props.emailChange}/>
            </div>
            <div className="bor8 m-b-20 how-pos4-parent">
                <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="Username" type="text" value={props.usernameValue} onChange={props.usernameChange}/>
            </div>
            <div className="bor8 m-b-20 how-pos4-parent">
                <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="Password" type="text" value={props.passwordValue} onChange={props.passwordChange}/>
            </div>
            <div className="bor8 m-b-20 how-pos4-parent">
                <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="Password Confirm" type="text" value={props.plainPasswordValue} onChange={props.plainPasswordChange}/>
            </div>
        </div>
        <div>
            <input type="submit" className="login-submit flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04" id="_submit" name="_submit" value="Submit" onClick={props.submit} />
        </div>
        <div className="login-help m-b-20">
            <Link to='/login'>Return to Login</Link>
        </div>
    </div>
);

Register.propTypes = {
    user:                   PropTypes.object.isRequired,
    usernameValue:          PropTypes.string.isRequired,
    usernameChange:         PropTypes.func.isRequired,
    emailValue:             PropTypes.string.isRequired,
    emailChange:            PropTypes.func.isRequired,
    passwordValue:          PropTypes.string.isRequired,
    passwordChange:         PropTypes.func.isRequired,
    plainPasswordValue:     PropTypes.string.isRequired,
    plainPasswordChange:    PropTypes.func.isRequired,
    submit:                 PropTypes.func.isRequired
};