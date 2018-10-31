// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// IMPORT PROJECT REFERENCES
import { getBlogs } from '../../../services/BlogService';
import { BlogsItem } from './BlogsItem';
import { LoadingIndicator } from '../../shared/LoadingIndicator/LoadingIndicator';
import { Pagination } from '../../shared/Pagination/Pagination';

// COMPONENT

class Blogs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            blogsPerPage: 3
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        if(this.props.blogs < 1)
            this.props.getBlogs();
    }

    handleClick(event) {
        window.scrollTo(0, 300);
        this.setState({
            currentPage: Number(event.target.id)
        });
    }

    getPagesNumber() {
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.blogs.length / this.state.blogsPerPage); i++) {
            pageNumbers.push(i);
        }
        return pageNumbers;
    }

    blogsOrLoading() {
        if(!this.props.fetching_blog) {
            const { currentPage, blogsPerPage } = this.state;

            const indexOfLastBlogs = currentPage * blogsPerPage;
            const indexOfFirstBlogs = indexOfLastBlogs - blogsPerPage;
            const currentBlogs = this.props.blogs.slice(indexOfFirstBlogs, indexOfLastBlogs);

            if(this.props.tag) {
                let blogs = [];
                currentBlogs.map(blog => 
                    blog.tags.map(tag => {
                        if(tag.slug == this.props.tag)
                            blogs.push(blog);
                    })
                );
                return (blogs.map(blog => 
                    <BlogsItem blog={blog} key={blog.id}/>
                ));
            } else
                return (currentBlogs.map(blog => 
                    <BlogsItem blog={blog} key={blog.id}/>
                ));
        } else 
            return (<LoadingIndicator busy={this.props.fetching_blog} />);
    }

    render() {
        return (
            <div>
                { this.blogsOrLoading() }
                <Pagination pageNumbers={this.getPagesNumber()} currentPage={this.state.currentPage} handleClick={this.handleClick}/>
            </div>
        );
    }
}

Blogs.propTypes = {
    getBlogs: PropTypes.func.isRequired,
    blogs: PropTypes.array.isRequired,
    fetching_blog: PropTypes.bool.isRequired,
    tag : PropTypes.string,
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