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
        this.props.getBlogs();
    }

    blogsOrLoading() {
        if(!this.props.fetching)
            return (this.props.blogs.map(blog => 
                <BlogsItem blog={blog} key={blog.id}/>
            ));
        else 
            return (<LoadingIndicator busy={this.props.fetching} />);
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
    fetching: PropTypes.bool.isRequired,
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching, blogs } = state.blogs;
    return { fetching, blogs };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ getBlogs }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Blogs);


// EXPORT COMPONENT

export { hoc as Blogs };