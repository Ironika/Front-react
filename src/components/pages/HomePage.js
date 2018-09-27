// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { getHomeBlogs, getHomeProducts } from '../../services/HomeService';
import { Blogs } from '../modules/Home/Blogs';
import { Products } from '../modules/Home/Products';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Link } from 'react-router-dom';

// COMPONENT

class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() { 
        let token = window.localStorage.getItem('token');
        if(token) {
            this.props.getHomeBlogs(token);
            this.props.getHomeProducts(token);
        }
    }

    insertSlides() {
        return(
            <div className="item-slick1" /*style="background-image: url({% path slide.media, 'big' %});"*/>
                <div className="container h-full">
                    <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                        <div className="layer-slick1 animated visible-false" data-appear="fadeInDown" data-delay="0">
                            <span className="ltext-101 cl2 respon2">
                                productname
                            </span>
                        </div>
                            
                        <div className="layer-slick1 animated visible-false" data-appear="fadeInUp" data-delay="800">
                            <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1 home-slider-title">
                                titre
                            </h2>
                        </div>
                            
                        <div className="layer-slick1 animated visible-false" data-appear="zoomIn" data-delay="1600">
                            <a href="#" className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                                Shop Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    insertCollections() {
        return (
            <div className="col-md-6 p-b-30 m-lr-auto">
                <div className="block1 wrap-pic-w">
                    <img src="images/banner-01.jpg" alt="IMG-BANNER" />

                    <a href="#" className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                        <div className="block1-txt-child1 flex-col-l">
                            <span className="block1-name ltext-102 trans-04 p-b-8">
                                Women
                            </span>

                            <span className="block1-info stext-102 trans-04">
                                Spring 2018
                            </span>
                        </div>

                        <div className="block1-txt-child2 p-b-4 trans-05">
                            <div className="block1-link stext-101 cl0 trans-09">
                                Shop Now
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        );
    }

    productsOrLoading() {
        if(!this.props.fetching_products)
            return (
                <Products products={this.props.products} />
            );
        else 
            return (<LoadingIndicator busy={this.props.fetching_products} />);
    }

    blogsOrLoading() {
        if(!this.props.fetching_blogs)
            return (
                <Blogs blogs={this.props.blogs} />
            );
        else 
            return (<LoadingIndicator busy={this.props.fetching_blogs} />);
    }

    render() {
        return (
            <main>
                <section className="section-slide">
                    <div className="wrap-slick1 rs1-slick1">
                        <div className="slick1">
                            { this.insertSlides() }
                        </div>
                    </div>
                </section>

                <section className="section-collection">
                    <div className="sec-banner bg0 p-t-80 p-b-50">
                        <div className="container">
                            <div className="row">
                                { this.insertCollections() }
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sec-product bg0 p-t-100 p-b-50">
                    <div className="container">
                        <div className="p-b-32">
                            <h3 className="ltext-105 cl5 txt-center respon1">
                                Last Products
                            </h3>
                        </div>
                        <div className="wrap-slick2">
                            <div className="slick2">
                                { this.productsOrLoading() }
                            </div>
                        </div>
                        <div className="flex-c-m flex-w w-full p-t-45">
                            <Link to={'/shop'} className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04" >
                                See more
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="sec-blog bg0 p-t-60 p-b-90">
                    <div className="container">
                        <div className="p-b-66">
                            <h3 className="ltext-105 cl5 txt-center respon1">
                                Our Blogs
                            </h3>
                        </div>

                        <div className="row">
                            { this.blogsOrLoading() }
                        </div>
                        <div className="flex-c-m flex-w w-full p-t-45">
                            <Link to={'/blog'} className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04" >
                                See more
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

HomePage.propTypes = {
    getHomeBlogs: PropTypes.func.isRequired,
    fetching_blogs: PropTypes.bool.isRequired,
    blogs: PropTypes.array,
    getHomeProducts: PropTypes.func.isRequired,
    fetching_products: PropTypes.bool.isRequired,
    products: PropTypes.array
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { blogs, fetching_blogs, products, fetching_products } = state.home;
    return { blogs, fetching_blogs, products, fetching_products };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ getHomeBlogs, getHomeProducts }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export { hoc as HomePage };