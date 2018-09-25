// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// IMPORT PROJECT REFERENCES
import { getBlogs } from '../../state/actions/BlogActions';
import { BlogsItem } from './BlogsItem';


// COMPONENT

class Blogs extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getBlogs();
    }

    render() {
        return (
            <div>
                { this.props.blogs.map(blog => 
                    <BlogsItem blog={blog} key={blog.id}/>
                )}
            </div>
        );
    }
}

Blogs.propTypes = {
    getBlogs: PropTypes.func.isRequired,
    blogs: PropTypes.array.isRequired,
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { blogs } = state.blogs;
    return { blogs };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ getBlogs }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Blogs);


// EXPORT COMPONENT

export { hoc as Blogs };