// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// IMPORT PROJECT REFERENCES
import { getBlogs } from '../../state/actions/BlogActions';
import { BlogsItem } from './BlogsItem';
import { LoadingIndicator } from '../../shared/LoadingIndicator/LoadingIndicator';



// COMPONENT

class Blogs extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(this.props.blogs < 1)
            this.props.getBlogs();
    }

    blogsOrLoading() {
        if(!this.props.fetching_blog)
            if(this.props.tag) {
                let blogs = [];
                this.props.blogs.map(blog => 
                    blog.tags.map(tag => {
                        if(tag.slug == this.props.tag)
                            blogs.push(blog);
                    })
                );
                return (blogs.map(blog => 
                    <BlogsItem blog={blog} key={blog.id}/>
                ));
            } else
                return (this.props.blogs.map(blog => 
                    <BlogsItem blog={blog} key={blog.id}/>
                ));
        else 
            return (<LoadingIndicator busy={this.props.fetching_blog} />);
    }

    render() {
        return (
            <div>
                { this.blogsOrLoading() }
            </div>
        );
    }
}

Blogs.propTypes = {
    getBlogs: PropTypes.func.isRequired,
    blogs: PropTypes.array.isRequired,
    fetching_blog: PropTypes.bool.isRequired,
    tag : PropTypes.string
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching_blog, blogs } = state.blogs;
    return { fetching_blog, blogs };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ getBlogs }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Blogs);


// EXPORT COMPONENT

export { hoc as Blogs };