// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import PropTypes from 'prop-types';
// import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { NavLink } from 'react-router-dom';


// COMPONENT

class SearchPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        // let token = window.localStorage.getItem('token');
        // if(token) {
        //     if(this.props.tags.length < 1)
        //         this.props.getTags(token);
        // }
    }

    render() {
        return (
            <main>
                <section className="bg-img2 txt-center p-lr-15 p-tb-92">
                    <h2 className="ltext-105 cl0 txt-center">
                        Search
                    </h2>
                </section>
                
                <div className="container">
                    <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                        <NavLink to='/' className='stext-109 cl8 hov-cl1 trans-04' exact={true}>
                            Home
                            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                        </NavLink>
                        <span className="stext-109 cl4"> Search </span>
                    </div>
                </div>

                <section className="sec-blog bg0 p-t-60">
                    <div className="container">
                        <div className="p-b-66">
                            <h3 className="ltext-105 cl5 txt-center respon1">
                                Results for 
                                <span className="search-word"> word </span>
                            </h3>
                        </div>
                        <div className="row">
                        
                            <p className="search-results">No Results ...</p>

                            <p className="search-results">We have founds X results.</p>

                        </div>
                    </div>
                </section>

                <section className="sec-product bg0 p-t-100 p-b-50">
                    <div className="container">
                        <div className="p-b-32">
                            <h3 className="ltext-105 cl5 txt-center respon1">
                                Products
                            </h3>
                        </div>
                        <div className="wrap-slick2">
                            <div className="slick2">

                                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15">
                                    <div className="block2">
                                        <div className="block2-pic hov-img0">
                                            <img src="#" alt="#" />

                                            <a href="#" className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04">
                                                View
                                            </a>
                                        </div>

                                        <div className="block2-txt flex-w flex-t p-t-14">
                                            <div className="block2-txt-child1 flex-col-l ">
                                                <a href="#" className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                    product.name 
                                                </a>
                                            </div>

                                            <div className="block2-txt-child2 flex-r p-t-3">
                                                <span className="stext-105 cl3">
                                                    $ product.price 
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="flex-c-m flex-w w-full p-t-45">
                            <a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
                                See more
                            </a>
                        </div>
                    </div>
                </section>

                <section className="sec-blog bg0 p-t-60 p-b-90">
                    <div className="container">
                        <div className="p-b-66">
                            <h3 className="ltext-105 cl5 txt-center respon1">
                                Blogs
                            </h3>
                        </div>

                        <div className="row">
                            <div className="col-sm-6 col-md-4 p-b-40">
                                <div className="blog-item">
                                    <div className="hov-img0">
                                        <a href="#">
                                            <img src="#" alt="#" />
                                        </a>
                                    </div>

                                    <div className="p-t-15">
                                        <div className="stext-107 flex-w p-b-14">
                                            <span className="m-r-3">
                                                <span className="cl4">
                                                    By
                                                </span>

                                                <span className="cl5">
                                                    Admin
                                                </span>
                                            </span>

                                            <span>
                                                <span className="cl4">
                                                    on
                                                </span>

                                                <span className="cl5">
                                                    date
                                                </span>
                                            </span>
                                        </div>

                                        <h4 className="p-b-12">
                                            <a href="#" className="mtext-101 cl2 hov-cl1 trans-04">
                                                blog.title
                                            </a>
                                        </h4>

                                        <p className="stext-108 cl6">
                                            blog.content
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-c-m flex-w w-full p-t-45">
                            <a href="#" className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04">
                                See more
                            </a>
                        </div>
                    </div>
                </section>
  
            </main>
        );
    }
}

// SearchPage.propTypes = {
//     match: PropTypes.object,
//     getTags: PropTypes.func.isRequired,
//     tags: PropTypes.array,
//     getProducts: PropTypes.func.isRequired,
//     products: PropTypes.array,
//     fetching: PropTypes.bool.isRequired,
// };

// CONFIGURE REACT REDUX

// const mapStateToProps = state => {
//     const { fetching, tags, products } = state.blogs;
//     return { fetching, tags, products };
// };

// const mapDispatchToProps = dispatch => (
//     bindActionCreators({ getTags, getProducts }, dispatch)
// );

// const hoc = connect(mapStateToProps, mapDispatchToProps)(SearchPage);

// EXPORT COMPONENT

export { SearchPage };