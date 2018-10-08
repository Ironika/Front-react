// IMPORT PACKAGE REFERENCES
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// IMPORT PROJECT REFERENCES
import { getProduct } from '../../../services/ShopService';
import { Img } from '../../shared/Img/Img';
import { Link } from 'react-router-dom';
import { LoadingIndicator } from '../../shared/LoadingIndicator/LoadingIndicator';
import { ProductGallery } from './ProductGallery';


// COMPONENT

class Product extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let token = window.localStorage.getItem('token');
        if(token)
            this.props.getProduct(token, this.props.slug);
    }


    insertRelatedProducts() {
        let products = [];
        this.props.products.map(product => {
            if(product.id != this.props.product.id && product.collection.id == this.props.product.collection.id)
                products.push(product);
        });
        products.length = 4;
        return (products.map(product =>
            <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15" key={product.id}>
                <div className="block2">
                    <div className="block2-pic hov-img0">
                        <Img className="" imgName={ product.medias[0].provider_reference } />
                        <Link to={'/shop/' + product.slug} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04">
                            View
                        </Link>
                    </div>

                    <div className="block2-txt flex-w flex-t p-t-14">
                        <div className="block2-txt-child1 flex-col-l ">
                            <Link to={'/shop/' + product.slug} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                { product.name }
                            </Link>
                        </div>

                        <div className="block2-txt-child2 flex-r p-t-3">
                            <span className="stext-105 cl3">
                                ${ product.price }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        ));
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
                                            <div className="flex-w flex-r-m p-b-10">
                                                <div className="size-203 flex-c-m respon6">
                                                    Size
                                                </div>

                                                <div className="size-204 respon6-next">
                                                    <div className="rs1-select2 bor8 bg0">
                                                        <select className="js-select2" name="time" id="size">
                                                            <option value="null">Choose an option</option>
                                                            {/*% for size in product.sizes %}
                                                                <option value="{{ size.id }}">{{ size.name }}</option>
                                                            {% endfor %*/}
                                                        </select>
                                                        <div className="dropDownSelect2"></div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="flex-w flex-r-m p-b-10">
                                                <div className="size-203 flex-c-m respon6">
                                                    Shape
                                                </div>

                                                <div className="size-204 respon6-next">
                                                    <div className="rs1-select2 bor8 bg0">
                                                        <select className="js-select2" name="time" id="shape">
                                                            <option value="null">Choose an option</option>
                                                            {/*% for shape in product.shapes %}
                                                                <option value="{{ shape.id }}">{{ shape.name }}</option>
                                                            {% endfor %*/}
                                                        </select>
                                                        <div className="dropDownSelect2"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex-w flex-r-m p-b-10">
                                                <div className="size-203 flex-c-m respon6">
                                                    Material
                                                </div>

                                                <div className="size-204 respon6-next">
                                                    <div className="rs1-select2 bor8 bg0">
                                                        <select className="js-select2" name="time" id="material">
                                                            <option value="null">Choose an option</option>
                                                            {/*% for material in product.materials %}
                                                                <option value="{{ material.id }}">{{ material.name }}</option>
                                                            {% endfor %*/}
                                                        </select>
                                                        <div className="dropDownSelect2"></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex-w flex-r-m p-b-10">
                                                <div className="size-204 flex-w flex-m respon6-next">
                                                    <div className="wrap-num-product flex-w m-r-20 m-tb-10">
                                                        <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                            <i className="fs-16 zmdi zmdi-minus"></i>
                                                        </div>

                                                        <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" defaultValue="1"/>

                                                        <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                            <i className="fs-16 zmdi zmdi-plus"></i>
                                                        </div>
                                                    </div>
                                                    <button className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail" data-product="{{ product.id }}">
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
                        <div className="container">
                            <div className="p-b-45">
                                <h3 className="ltext-106 cl5 txt-center">
                                    Related Products
                                </h3>
                            </div>

                            <div className="wrap-slick2">
                                <div className="slick2">
                                    { this.insertRelatedProducts() }
                                </div>
                            </div>
                        </div>
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
    products: PropTypes.array
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching_product, product } = state.products;
    return { fetching_product, product };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ getProduct }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Product);


// EXPORT COMPONENT

export { hoc as Product };