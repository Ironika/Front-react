// IMPORT PACKAGE REFERENCES
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Blogs } from '../modules/Blog/Blogs';
import { Blog } from '../modules/Blog/Blog';
import { Tags } from '../modules/Blog/Tags';
import { NavLink } from 'react-router-dom';
import { getTags } from '../state/actions/BlogActions';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';


// COMPONENT

class BlogPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getTags();
    }

    blogOrBlogs() {
        if(this.props.match.params.slug) {
            return (<Blog slug={this.props.match.params.slug} />);
        } else {
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

    tagsOrLoading() {
        if(!this.props.fetching)
            return (<Tags tags={this.props.tags}/>);
        else 
            return (<LoadingIndicator busy={this.props.fetching} />);
    }

    render() {
        return (
            <main>
                <section className="bg-img1 txt-center p-lr-15 p-tb-92">
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
                            <div className="col-md-8 col-lg-9 p-b-80">
                                { this.blogOrBlogs() }
                            </div>

                            <div className="col-md-4 col-lg-3 p-b-80 blog-side-menu">
                                <div className="side-menu">
                                    
                                    <div className="p-t-50">
                                        <h4 className="mtext-112 cl2 p-b-27">
                                            Tags
                                        </h4>
                                        { this.tagsOrLoading() }
                                    </div>

                                    <div className="p-t-65">
                                        <h4 className="mtext-112 cl2 p-b-33">
                                            Last Products
                                        </h4>

                                        <ul>
                                            
                                        </ul>
                                    </div>

                                </div>
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
    fetching: PropTypes.bool.isRequired,
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching, tags } = state.blogs;
    return { fetching, tags };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ getTags }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(BlogPage);

// EXPORT COMPONENT

export { hoc as BlogPage };