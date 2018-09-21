// IMPORT PACKAGE REFERENCES

import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';

// COMPONENT

export const Header = () => (
    <header className="header-v2">
        <div className="container-menu-desktop trans-03">
            <div className="wrap-menu-desktop">
                <nav className="limiter-menu-desktop p-l-45">      
                    <NavLink to='/' activeClassName='active-menu' exact={true}>
                        <img src={logo} width="250" alt="Ineluctable" />
                    </NavLink>
                    <div className="menu-desktop">
                        <ul className="main-menu">
                            <li>
                                <NavLink to='/' activeClassName='active-menu' exact={true}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/shop' activeClassName='active-menu'>Shop</NavLink>
                            </li>
                            <li>
                                <NavLink to='/blogs' activeClassName='active-menu'>Blog</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about' activeClassName='active-menu'>About</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact' activeClassName='active-menu'>Contact</NavLink>
                            </li>
                        </ul>
                    </div>  
                    <div className="wrap-icon-header flex-w flex-r-m h-full">
                        <div className="flex-c-m h-full p-r-24">
                            <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-modal-search">
                                <i className="zmdi zmdi-search"></i>
                            </div>
                        </div>
                            
                        <div className="flex-c-m h-full p-l-18 p-r-25 bor5">
                            <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart" data-notify="0">
                                <a href="">
                                    <i className="zmdi zmdi-shopping-cart icon-cart"></i>
                                </a>
                            </div>
                        </div>
                            
                        <div className="flex-c-m h-full p-lr-19">
                            <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11">
                                <a href="">
                                    <i className="zmdi zmdi-account icon-account"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>  
        </div>
    </header>
);