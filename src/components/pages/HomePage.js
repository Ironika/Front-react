// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';

import { getHomeBlogs, getHomeProducts, getHomeCollections, getHomeSlides } from '../../services/HomeService';
import { Blogs } from '../modules/Home/Blogs';
import { Products } from '../modules/Home/Products';
import { Collections } from '../modules/Home/Collections';
import { Slides } from '../modules/Home/Slides';
import LazyLoad from 'react-lazyload';

// COMPONENT

class HomePage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        if(this.props.blogs.length < 1)
            this.props.getHomeBlogs();
        if(this.props.products.length < 1)
            this.props.getHomeProducts();
        if(this.props.collections.length < 1)
            this.props.getHomeCollections();
        if(this.props.slides.length < 1)
            this.props.getHomeSlides();
    }

    slidesOrLoading() {
        if(!this.props.fetching_slides)
            return (
                <Slides slides={this.props.slides} />
            );
        else 
            return (<LoadingIndicator busy={this.props.fetching_slides} />);
    }

    collectionsOrLoading() {
        if(!this.props.fetching_collections)
            return (
                <Collections collections={this.props.collections} />
            );
        else 
            return (<LoadingIndicator busy={this.props.fetching_collections} />);
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
            <main className="home">
                <LazyLoad height={600} once>
                    <section className="section-slide">
                        { this.slidesOrLoading() }
                    </section>
                </LazyLoad>
                <LazyLoad height={600} once>
                    <section className="section-collection">
                        { this.collectionsOrLoading() }
                    </section>
                </LazyLoad>
                <LazyLoad height={600} once>
                    <section className="sec-product bg0 p-t-30 p-b-50">
                        { this.productsOrLoading() }
                    </section>
                </LazyLoad>
                <LazyLoad height={600} once>
                    <section className="sec-blog bg0 p-t-60 p-b-90">
                        { this.blogsOrLoading() }
                    </section>
                </LazyLoad>
            </main>
        );
    }
}

HomePage.propTypes = {
    getHomeBlogs:           PropTypes.func.isRequired,
    fetching_blogs:         PropTypes.bool.isRequired,
    blogs:                  PropTypes.array,
    getHomeProducts:        PropTypes.func.isRequired,
    fetching_products:      PropTypes.bool.isRequired,
    products:               PropTypes.array,
    getHomeCollections:     PropTypes.func.isRequired,
    fetching_collections:   PropTypes.bool.isRequired,
    collections:            PropTypes.array,
    getHomeSlides:          PropTypes.func.isRequired,
    fetching_slides:        PropTypes.bool.isRequired,
    slides:                 PropTypes.array
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { blogs, fetching_blogs, products, fetching_products, collections, fetching_collections, slides, fetching_slides } = state.home;
    return { blogs, fetching_blogs, products, fetching_products, collections, fetching_collections, slides, fetching_slides };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ getHomeBlogs, getHomeProducts, getHomeCollections, getHomeSlides }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export { hoc as HomePage };