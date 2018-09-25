// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Blogs } from '../modules/Blog/Blogs';
import { Blog } from '../modules/Blog/Blog';



// COMPONENT

class BlogPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    blogOrBlogs() {
        if(this.props.match.params.slug) {
            return (<Blog slug={this.props.match.params.slug} />);
        } else {
            return (<Blogs />);
        }
    }

    render() {
        return (
            <main>
                <section className="bg-img1 txt-center p-lr-15 p-tb-92">
                    <h2 className="ltext-105 cl0 txt-center">
                        Blog
                    </h2>
                </section>
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

                                        <div className="flex-w m-r--5">
                                            
                                        </div>
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
};

// EXPORT COMPONENT

export { BlogPage };