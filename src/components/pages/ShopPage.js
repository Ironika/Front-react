// IMPORT PACKAGE REFERENCES
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Products } from '../modules/Shop/Products';
import { Product } from '../modules/Shop/Product';
// import { Filters } from '../modules/Shop/Filters';
import { getProducts } from '../../services/ShopService';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { NavLink } from 'react-router-dom';
import { Filters } from '../modules/Shop/Filters';


// COMPONENT

class ShopPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        let token = window.localStorage.getItem('token');
        if(token) {
            if(this.props.products.length < 1)
                this.props.getProducts(token);
        }
    }

    breadCrumb() {
        if(this.props.match.params.slug)
            return (
                <Fragment>
                    <NavLink to='/shop' className='stext-109 cl8 hov-cl1 trans-04' exact={true}>
                        Shop
                        <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                    </NavLink>
                    <span className="stext-109 cl4"> { this.props.match.params.slug } </span> 
                </Fragment>
            );
        else {
            return (<span className="stext-109 cl4"> Shop </span> );
        }
    }

    filtersProducts(){
        let products = JSON.parse(JSON.stringify(this.props.products));
        if(this.props.filters.sort == 'priceLowToHigh')
            products.sort((a, b) => a.price > b.price);
        if(this.props.filters.sort == 'priceHighToLow')
            products.sort((a, b) => a.price < b.price);

        return products;
    }

    productsOrLoading() {
        if(!this.props.fetching_products) {
            if(this.props.match.params.slug) {
                return (<Product slug={this.props.match.params.slug} products={this.props.products}/>);
            } else {
                if(this.props.match.params.collection) {
                    let products = this.props.products.filter(product => product.collection.slug == this.props.match.params.collection);
                    return (<Products products={products} />);
                }
                else {
                    let products = this.filtersProducts();
                    return (<Products products={products} />);
                }
            }
        }
        else 
            return (<LoadingIndicator busy={this.props.fetching_products} />);
    }

    render() {
        return (
            <main className="shop">
                <section className="bg-img1 txt-center p-lr-15 p-tb-92">
                    <h2 className="ltext-105 cl0 txt-center">
                        Shop
                    </h2>
                </section>

                <div className="container">
                    <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                        <NavLink to='/' className='stext-109 cl8 hov-cl1 trans-04' exact={true}>
                            Home
                            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                        </NavLink>
                        { this.breadCrumb() }
                    </div>
                </div>

                <div className="bg0 m-t-23 p-b-140">
                    <div className="container">
                        <Filters />
                        {this.productsOrLoading()}
                    </div>
                </div>

            </main>
        );
    }

}

ShopPage.propTypes = {
    match: PropTypes.object,
    getProducts: PropTypes.func.isRequired,
    products: PropTypes.array,
    fetching_products: PropTypes.bool.isRequired,
    filters: PropTypes.object
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching_products, products, filters } = state.products;
    return { fetching_products, products, filters };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ getProducts }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps ,null, { pure: false })(ShopPage);

// EXPORT COMPONENT

export { hoc as ShopPage };