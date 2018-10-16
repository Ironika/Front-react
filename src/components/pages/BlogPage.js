// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Blogs } from '../modules/Blog/Blogs';
import { Blog } from '../modules/Blog/Blog';
import { Tags } from '../modules/Blog/Tags';
import { Products } from '../modules/Blog/Products';
import { getTags, getProducts } from '../../services/BlogService';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Banner } from '../shared/Banner/Banner';
import { Breadcrumb } from '../shared/Breadcrumb/Breadcrumb';


// COMPONENT

class BlogPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        let token = window.localStorage.getItem('token');
        if(token) {
            if(this.props.tags.length < 1)
                this.props.getTags(token);
            if(this.props.products.length < 1)
                this.props.getProducts(token);
        }
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
        let haveSub = false; 
        let subTitle = '';
        if(this.props.match.params.slug) {
            haveSub = true;
            subTitle = this.props.match.params.slug;
        }
        return (
            <main>
                <Banner title={'Blog'} className={'bg-img2'}/>
                
                <Breadcrumb title={'Blog'} haveSub={haveSub} subTitle={subTitle}/>

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