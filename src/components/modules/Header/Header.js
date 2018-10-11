// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// COMPONENT

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            search: '',
            redirect: false
        };
    }

    componentDidMount() {
        this.handleClickSearch = this.handleClickSearch.bind(this);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
    }

    handleClickSearch() {
        this.setState({open: !this.state.open});
    }

    handleChangeSearch(event) {
        this.setState({redirect: false});
        console.log(this.state.redirect);
        this.setState({search: event.target.value});
        if(this.state.search.length >= 3) {
            this.setState({redirect: true});
        }
    }

    renderRedirect() {
        if (this.state.redirect) {
            return (<Redirect to='/search' />);
        }
    }

    render() {
        return (
            <header className="header-v2 header">
                {this.renderRedirect()}
                <div className="container-menu-desktop trans-03">
                    <div className="wrap-menu-desktop">
                        <nav className="limiter-menu-desktop p-l-45">      
                            <NavLink to='/'>
                                <img src={logo} width="250" alt="Ineluctable" />
                            </NavLink>
                            <div className="menu-desktop">
                                <ul className="main-menu">
                                    <li>
                                        <NavLink to='/' activeClassName='active-menu' exact>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/shop' activeClassName='active-menu'>Shop</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/blog' activeClassName='active-menu'>Blog</NavLink>
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
                                    { this.state.open ? <input type="text" className="search" value={this.state.search} onChange={this.handleChangeSearch.bind(this)}/> : ''}
                                    <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-modal-search" onClick={this.handleClickSearch.bind(this)}>
                                        <i className="zmdi zmdi-search"></i>
                                    </div>
                                </div>
                                    
                                <div className="flex-c-m h-full p-l-18 p-r-25 bor5">
                                    <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart" data-notify={JSON.parse(window.localStorage.getItem('cart')) ? JSON.parse(window.localStorage.getItem('cart')).length : this.props.cart.length}>
                                        <NavLink to='/cart' activeClassName='active-menu'>
                                            <i className="zmdi zmdi-shopping-cart icon-cart"></i>
                                        </NavLink>
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
    }
}

Header.propTypes = {
    cart: PropTypes.array
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { cart } = state.cart;
    return { cart };
};

const hoc = connect(mapStateToProps, null, null, { pure: false })(Header);

export { hoc as Header };