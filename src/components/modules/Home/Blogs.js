// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Img } from '../../shared/Img/Img';
import { Link } from 'react-router-dom';
import { Day, MonthFull, Year } from '../../shared/Date/Date';
// COMPONENT

class Blogs extends Component {

    constructor(props) {
        super(props);
    }

    truncate(string, length) {
        if (string.length > length)
            return string.substring(0,length) + ' ...';
        else
            return string;
    }

    render() {
        this.props.blogs.length = 3;
        return (
            <div className="container">
                <div className="p-b-66">
                    <h3 className="ltext-105 cl5 txt-center respon1">
                        Our Blogs
                    </h3>
                </div>

                <div className="row">
                    {this.props.blogs.map(blog =>
                        <div className="col-sm-6 col-md-4 p-b-40" key={blog.id}>
                            <div className="blog-item">
                                <div className="hov-img0">
                                    <Link to={'/blog/' + blog.slug } title={blog.slug}>
                                        <Img imgName={ blog.media.provider_reference } alt={blog.slug}/>
                                    </Link>
                                </div>

                                <div className="p-t-15">
                                    <div className="stext-107 flex-w p-b-14">
                                        <span className="m-r-3">
                                            <span className="cl4">
                                                By&nbsp;
                                            </span>
                                            <span className="cl5">
                                                Admin
                                            </span>
                                        </span>
                                        <span>
                                            <span className="cl4">
                                                on&nbsp;
                                            </span>
                                            <span className="cl5">
                                                <Day date={blog.created_at} />&nbsp;
                                                <MonthFull date={blog.created_at} />&nbsp;
                                                <Year date={blog.created_at} />&nbsp;
                                            </span>
                                        </span>
                                    </div>

                                    <h4 className="p-b-12">
                                        <Link to={'/blog/' + blog.slug } className="mtext-101 cl2 hov-cl1 trans-04" title={blog.slug}>
                                            { blog.title }
                                        </Link>
                                    </h4>

                                    <p className="stext-108 cl6">
                                        { this.truncate(blog.content, 200) }
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="flex-c-m flex-w w-full p-t-45">
                    <Link to={'/blog'} className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04" title='blog'>
                        See more
                    </Link>
                </div>
            </div>
        );
    }
}

Blogs.propTypes = {
    blogs: PropTypes.array.isRequired,
};

// EXPORT COMPONENT

export { Blogs };