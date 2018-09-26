// IMPORT PACKAGE REFERENCES
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Blogs } from '../modules/Blog/Blogs';
import { Blog } from '../modules/Blog/Blog';
import { Tags } from '../modules/Blog/Tags';
import { Products } from '../modules/Blog/Products';
import { NavLink } from 'react-router-dom';
import { getTags } from '../state/actions/BlogActions';
import { getProducts } from '../state/actions/BlogActions';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';


// COMPONENT

class BlogPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(this.props.tags.length < 1)
            this.props.getTags();
        if(this.props.products < 1)
            this.props.getProducts();
    }

    blogOrBlogs() {
        if(this.props.match.params.slug) {
            return (<Blog slug={this.props.match.params.slug} />);
        } else {
            if(this.props.match.params.tag)
                return (<Blogs tag={this.props.match.params.tag}/>);
            else
                return (<Blogs />);
        }
    }

    breadCrumb() {
        if(this.props.match.params.slug)
            return (
                <Fragment>
                    <NavLink to='/blog' className='stext-109 cl8 hov-cl1 trans-04' exact={true}>
                        Blog
                        <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                    </NavLink>
                    <span className="stext-109 cl4"> { this.props.match.params.slug } </span> 
                </Fragment>
            );
        else {
            return (<span className="stext-109 cl4"> Blog </span> );
        }
    }

    sideMenuOrLoading() {
        if(!this.props.fetching)
            return (
                <div className="side-menu">
                    <div className="p-t-50 tags">
                        <h4 className="mtext-112 cl2 p-b-27">
                            Tags
                        </h4>
                        <Tags tags={this.props.tags}/>
                    </div>

                    <div className="p-t-65">
                        <h4 className="mtext-112 cl2 p-b-33">
                            Last Products
                        </h4>
                        <Products products={this.props.products}/>
                    </div>
                </div>
            );
        else 
            return (<LoadingIndicator busy={this.props.fetching} />);
    }

    render() {
        return (
            <main>
                <section className="bg-img2 txt-center p-lr-15 p-tb-92">
                    <h2 className="ltext-105 cl0 txt-center">
                        Blog
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

                <section className="bg0 p-t-62 p-b-60">
                    <div className="container">
                        <div className="row layout-blog">
                            <div className="col-md-8 col-lg-9 p-b-80 blogs">
                                { this.blogOrBlogs() }
                            </div>

                            <div className="col-md-4 col-lg-3 p-b-80 blog-side-menu">
                                {this.sideMenuOrLoading()}
                            </div>
                        </div>
                    </div>
                </section>  
            </main>
        );
    }
}

BlogPage.propTypes = {
    match: PropTypes.object,
    getTags: PropTypes.func.isRequired,
    tags: PropTypes.array,
    getProducts: PropTypes.func.isRequired,
    products: PropTypes.array,
    fetching: PropTypes.bool.isRequired,
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching, tags, products } = state.blogs;
    return { fetching, tags, products };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ getTags, getProducts }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(BlogPage);

// EXPORT COMPONENT

export { hoc as BlogPage };