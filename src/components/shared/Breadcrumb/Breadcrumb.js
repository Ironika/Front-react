// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';


// COMPONENT

const Breadcrumb = (props) => (
    <div className="container">
        <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
            <NavLink to='/' className='stext-109 cl8 hov-cl1 trans-04' exact={true}>
                Home
                <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
            </NavLink>
            { haveSub(props.haveSub, props.title, props.subTitle) }
        </div>
    </div>
);

const haveSub = (haveSub, title, subTitle) => {
    if(haveSub)
        return (
            <Fragment>
                <NavLink to='/blog' className='stext-109 cl8 hov-cl1 trans-04' exact={true}>
                    {title}
                    <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                </NavLink>
                <span className="stext-109 cl4"> { subTitle } </span> 
            </Fragment>
        );
    else {
        return (<span className="stext-109 cl4"> {title} </span> );
    }
};

Breadcrumb.propTypes = {
    title: PropTypes.string.isRequired,
    haveSub: PropTypes.bool.isRequired,
    subTitle: PropTypes.string
};

export { Breadcrumb };