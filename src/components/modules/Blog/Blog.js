// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// IMPORT PROJECT REFERENCES
import { BlogItem } from './BlogItem';
import { getBlog } from '../../state/actions/BlogActions';
import { LoadingIndicator } from '../../shared/LoadingIndicator/LoadingIndicator';


// COMPONENT

class Blog extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getBlog(this.props.slug);
    }

    blogOrLoading() {
        if(!this.props.fetching_blog)
            return (<BlogItem blog={this.props.blog} />);
        else
            return (<LoadingIndicator busy={this.props.fetching_blog} />);
    }

    render() {
        return (
            <div className="p-r-45 p-r-0-lg">
                {  this.blogOrLoading() }
            </div>
        );
    }
}

Blog.propTypes = {
    slug: PropTypes.string.isRequired,
    getBlog: PropTypes.func.isRequired,
    blog: PropTypes.object,
    fetching_blog: PropTypes.bool.isRequired,
};


// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { fetching_blog, blog } = state.blogs;
    return { fetching_blog, blog };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ getBlog }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Blog);


// EXPORT COMPONENT

export { hoc as Blog };