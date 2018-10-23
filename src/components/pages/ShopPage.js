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
import { Banner } from '../shared/Banner/Banner';
import { Breadcrumb } from '../shared/Breadcrumb/Breadcrumb';


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

    haveData(datas, id) {
        let checkedData = null;
        datas.map(data => {
            if(data.id == id)
                checkedData = data.id;
        });
        return checkedData;
    }

    filtersProducts(){
        let products = JSON.parse(JSON.stringify(this.props.products));

        if(this.props.filters.collection != 'all') {
            products = products.filter(product => product.collection.id == this.props.filters.collection);
        }
        if(this.props.filters.material != 'all') {
            products = products.filter(product => this.haveData(product.materials, this.props.filters.material) == this.props.filters.material);
        }
        if(this.props.filters.size != 'all') {
            products = products.filter(product => this.haveData(product.sizes, this.props.filters.size) == this.props.filters.size);
        }
        if(this.props.filters.shape != 'all') {
            products = products.filter(product => this.haveData(product.shapes, this.props.filters.shape) == this.props.filters.shape);
        }
        if(this.props.filters.category != 'all') {
            products = products.filter(product => product.category.id == this.props.filters.category);
        }
        if(this.props.filters.type != 'all') {
            products = products.filter(product => product.category.type.id == this.props.filters.type);
        }

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
                let products = this.filtersProducts();
                return (
                    <Fragment>
                        <Filters />
                        <Products products={products} />
                    </Fragment>
                );
            }
        }
        else 
            return (<LoadingIndicator busy={this.props.fetching_products} />);
    }

    render() {
        let haveSub = false; 
        let subTitle = '';
        if(this.props.match.params.slug) {
            haveSub = true;
            subTitle = this.props.match.params.slug;
        }
        return (
            <main className="shop" id="Shop">
                <Banner title={'Shop'} className={'bg-img1'}/>

                <Breadcrumb title={'Shop'} haveSub={haveSub} subTitle={subTitle}/>

                <div className="bg0 m-t-23 p-b-140">
                    <div className="container">
                        {this.productsOrLoading()}
                    </div>
                </div>

            </main>
        );
    }

}

ShopPage.propTypes = {
    match:              PropTypes.object,
    getProducts:        PropTypes.func.isRequired,
    products:           PropTypes.array,
    fetching_products:  PropTypes.bool.isRequired,
    filters:            PropTypes.object
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