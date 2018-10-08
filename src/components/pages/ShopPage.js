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

    productsOrLoading() {
        if(!this.props.fetching_products) {
            if(this.props.match.params.slug) {
                return (<Product slug={this.props.match.params.slug} products={this.props.products}/>);
            } else {
                if(this.props.match.params.tag)
                    return (<Products products={this.props.products} />);
                else 
                    return (<Products products={this.props.products} />);
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

                {this.productsOrLoading()}

            </main>
        );
    }

}

ShopPage.propTypes = {
    match: PropTypes.object,
    getProducts: PropTypes.func.isRequired,
    products: PropTypes.array,
    fetching_products: PropTypes.bool.isRequired,
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching_products, products } = state.products;
    return { fetching_products, products };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ getProducts }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(ShopPage);

// EXPORT COMPONENT

export { hoc as ShopPage };