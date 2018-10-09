// IMPORT PACKAGE REFERENCES
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// IMPORT PROJECT REFERENCES
import { getProduct } from '../../../services/ShopService';
import { LoadingIndicator } from '../../shared/LoadingIndicator/LoadingIndicator';
import { ProductGallery } from './ProductGallery';
import { RelatedProducts } from './RelatedProducts';
import { Select } from '../../shared/Select/Select';

import { addToCart } from '../../../services/CartService';


// COMPONENT

class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            size: {
                text: null,
                value: null
            },
            shape: {
                text: null,
                value: null
            },
            material: {
                text: null,
                value: null
            }
        };
    }

    componentDidMount() {
        let token = window.localStorage.getItem('token');
        if(token)
            this.props.getProduct(token, this.props.slug);

        this.handleClickQuantity = this.handleClickQuantity.bind(this);
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
        this.handleClickCart = this.handleClickCart.bind(this);
        this.handleChangeSizes = this.handleChangeSizes.bind(this);
    }

    handleClickQuantity(operator) {
        if(operator == '+')
            this.setState({quantity: this.state.quantity + 1});
        else
            this.setState({quantity: this.state.quantity - 1});
    }

    handleChangeQuantity(event) {
        this.setState({quantity: event.target.value});
    }

    handleChangeSizes(event) {
        let size = {
            text: event.target.textContent,
            value: event.target.value
        };
        this.setState({size: size});
    }

    handleChangeShapes(event) {
        let shape = {
            text: event.target.textContent,
            value: event.target.value
        };
        this.setState({shape: shape});
    }

    handleChangeMaterials(event) {
        let material = {
            text: event.target.textContent,
            value: event.target.value
        };
        this.setState({material: material});
    }

    handleClickCart() {
        let orderProduct = {
            product : {
                id : this.props.product.id,
                name: this.props.product.name,
                price : this.props.product.price,
                media : this.props.product.medias[0],
            },
            quantity : this.state.quantity
        };

        if(this.state.size.value != null)
            orderProduct.size = this.state.size;
        if(this.state.shape.value != null)
            orderProduct.shape = this.state.shape;
        if(this.state.material.value != null)
            orderProduct.material = this.state.material;

        console.log(orderProduct);
        this.props.addToCart(orderProduct);
    }

    render() {
        if(!this.props.fetching_product)
            return (
                <Fragment>
                    <section className="sec-product-detail bg0 p-t-65 p-b-60">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-lg-7 p-b-30">
                                    <ProductGallery medias={this.props.product.medias}/>
                                </div>
                                    
                                <div className="col-md-6 col-lg-5 p-b-30">
                                    <div className="p-r-50 p-t-5 p-lr-0-lg">
                                        <h4 className="mtext-105 cl2 js-name-detail p-b-14">
                                            { this.props.product.name }
                                        </h4>

                                        <span className="mtext-106 cl2">
                                            ${ this.props.product.price }
                                        </span>

                                        <p className="stext-102 cl3 p-t-23">
                                            { this.props.product.description }
                                        </p>
                                        
                                        <div className="p-t-33">
                                            <Select datas={this.props.product.sizes} label="Sizes" value={this.state.size.value} change={this.handleChangeSizes.bind(this)}/>

                                            <Select datas={this.props.product.shapes} label="Shapes" value={this.state.shape.value} change={this.handleChangeShapes.bind(this)} />

                                            <Select datas={this.props.product.materials} label="Materials" value={this.state.material.value} change={this.handleChangeMaterials.bind(this)} />

                                            <div className="flex-w flex-r-m p-b-10">
                                                <div className="size-204 flex-w flex-m respon6-next">
                                                    <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                                                        <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m" onClick={this.handleClickQuantity.bind(this, '-')}>
                                                            <i className="fs-16 zmdi zmdi-minus"></i>
                                                        </div>

                                                        <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" value={this.state.quantity} onChange={this.handleChangeQuantity}/>

                                                        <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" onClick={this.handleClickQuantity.bind(this, '+')}>
                                                            <i className="fs-16 zmdi zmdi-plus"></i>
                                                        </div>
                                                    </div>
                                                    <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail" onClick={this.handleClickCart.bind(this)}>
                                                        Add to cart
                                                    </button>
                                                </div>
                                            </div>  
                                        </div>

                                        <div className="flex-w flex-m p-l-100 p-t-40 respon7">
                                            <div id="fb-root"></div>
                                            <div className="fb-share-button" 
                                                data-href="{{ absolute_url(path('product_detail', {'slug' : product.slug})) }}" 
                                                data-layout="button_count">
                                            </div>

                                            <a className="fs-24 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100 twitter-share-button" href="https://twitter.com/share?ref_src=twsrc%5Etfw" data-show-count="false" data-tooltip="Twitter">
                                                <i className="fa fa-twitter"></i>
                                            </a>

                                            <a href="#" className="fs-24 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Instagram">
                                                <i className="fa fa-instagram"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg6 flex-c-m flex-w size-302 p-tb-15">
                            <span className="stext-107 cl6 p-lr-25">
                                Collection : { this.props.product.collection.name }
                            </span>

                            <span className="stext-107 cl6 p-lr-25">
                                Category : { this.props.product.category.name }
                            </span>
                        </div>
                    </section>

                    <section className="sec-relate-product bg0 p-t-45 p-b-105">
                        <RelatedProducts products={this.props.products} product={this.props.product}/>
                    </section>
                </Fragment>
            );
        else
            return (<LoadingIndicator busy={this.props.fetching_product} />);
    }
}

Product.propTypes = {
    slug: PropTypes.string.isRequired,
    getProduct: PropTypes.func.isRequired,
    product: PropTypes.object,
    fetching_product: PropTypes.bool.isRequired,
    products: PropTypes.array,
    addToCart: PropTypes.func
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching_product, product } = state.products;
    return { fetching_product, product };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ getProduct, addToCart }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Product);


// EXPORT COMPONENT

export { hoc as Product };