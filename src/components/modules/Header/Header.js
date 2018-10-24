// IMPORT PACKAGE REFERENCES

import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { setSearch, getSearch } from '../../../services/SearchService';
import { getTypes } from '../../../services/TypeService';
import { LoadingIndicator } from '../../shared/LoadingIndicator/LoadingIndicator';
import { setFilters } from '../../../services/ShopService';


// COMPONENT

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            search: '',
            token: window.localStorage.getItem('token')
        };
    }

    componentDidMount() {
        this.props.getTypes(this.state.token);
        this.handleClick = this.handleClick.bind(this);
        this.handleClickSearch = this.handleClickSearch.bind(this);
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
    }

    handleClickSearch() {
        this.setState({open: !this.state.open});
    }

    handleChangeSearch(event) {
        this.props.setSearch(event.target.value);
        this.setState({search: event.target.value});
        this.props.getSearch(this.state.token, event.target.value);
        if(this.props.location.pathname != '/search') {
            this.props.history.push('/search');
        }
    }

    handleClick(id, link) {
        let filters = {
            sort: 'newness',
            size: 'all',
            shape: 'all',
            material: 'all',
            collection: 'all',
            type: 'all',
            category: 'all'
        };

        if( link == 'category')
            filters.category = id.toString();
        else
            filters.type = id.toString();

        this.props.setFilters(filters);
        this.props.history.push('/shop');
    }

    insertTypes() {
        if(!this.props.fetching_types) {
            return(
                <Fragment>
                    {this.props.types.length > 0 && this.props.types.map(type => 
                        type.categories.length > 0 &&
                        <div className="column" key={type.id}>
                            <p onClick={this.handleClick.bind(this, type.id, 'type')}>{type.name}</p>
                            {type.categories.map(category =>
                                <span onClick={this.handleClick.bind(this, category.id, 'category')} key={category.id}>{category.name}</span>
                            )}
                        </div>
                    )}
                </Fragment>
            );
        } else {
            return (<LoadingIndicator busy={this.props.fetching_types} />);
        }
    }

    render() {
        return (
            <header className="header-v2 header">
                <div className="container-menu-desktop trans-03">
                    <div className="wrap-menu-desktop">
                        <nav className="limiter-menu-desktop p-l-45">      
                            <NavLink to='/' title="Home">
                                <img src={logo} width="250" alt="Ineluctable" />
                            </NavLink>
                            <div className="menu-desktop">
                                <ul className="main-menu">
                                    <li>
                                        <NavLink to='/' activeClassName='active-menu' exact title="Home">Home</NavLink>
                                    </li>
                                    <li className="shop-header">
                                        <NavLink to='/shop' activeClassName='active-menu' title="Shop">Shop</NavLink>
                                        <div className="dropdown-select">
                                            {this.insertTypes()}
                                        </div>
                                    </li>
                                    <li>
                                        <NavLink to='/blog' activeClassName='active-menu' title="Blog">Blog</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/about' activeClassName='active-menu' title="About">About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/contact' activeClassName='active-menu' title="Contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>  
                            <div className="wrap-icon-header flex-w flex-r-m h-full">
                                <div className="flex-c-m h-full p-r-24">
                                    { this.state.open ? <input type="text" className="search" value={this.state.search} onChange={this.handleChangeSearch.bind(this)}/> : ''}
                                    <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 js-show-modal-search" onClick={this.handleClickSearch.bind(this)}>
                                        <i className={'zmdi zmdi-search ' + ((this.props.location.pathname == '/search') ? 'active-menu' : '')}></i>
                                    </div>
                                </div>
                                    
                                <div className="flex-c-m h-full p-l-18 p-r-25 bor5">
                                    <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11 icon-header-noti js-show-cart" data-notify={JSON.parse(window.localStorage.getItem('cart')) ? JSON.parse(window.localStorage.getItem('cart')).length : this.props.cart.length}>
                                        <NavLink to='/cart' activeClassName='active-menu' title="Cart">
                                            <i className="zmdi zmdi-shopping-cart icon-cart"></i>
                                        </NavLink>
                                    </div>
                                </div>
                                    
                                <div className="flex-c-m h-full p-lr-19">
                                    <div className="icon-header-item cl2 hov-cl1 trans-04 p-lr-11">
                                        <NavLink to='/profile' activeClassName='active-menu' title="Profile">
                                            <i className="zmdi zmdi-account icon-account"></i>
                                        </NavLink>
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
    cart: PropTypes.array,
    location: PropTypes.object.isRequired,
    setSearch: PropTypes.func.isRequired,
    getSearch: PropTypes.func.isRequired,
    getTypes: PropTypes.func.isRequired,
    setFilters: PropTypes.func.isRequired,
    types: PropTypes.array.isRequired,
    history: PropTypes.object,
    fetching_types: PropTypes.bool.isRequired
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { cart } = state.cart;
    const { types, fetching_types } = state.types;
    return { cart, types, fetching_types };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ setSearch, getSearch, getTypes, setFilters }, dispatch)
);

const hoc = withRouter(connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Header));

export { hoc as Header };