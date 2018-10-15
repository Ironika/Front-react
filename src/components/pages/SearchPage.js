// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Link } from 'react-router-dom';
import { Img } from '../shared/Img/Img';
import { Day, MonthFull, Year } from '../shared/Date/Date';
import { Banner } from '../shared/Banner/Banner';
import { Breadcrumb } from '../shared/Breadcrumb/Breadcrumb';


// COMPONENT

class SearchPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    truncate(string, length) {
        if (string.length > length)
            return string.substring(0,length) + ' ...';
        else
            return string;
    }

    insertProducts() {
        if(this.props.results[1] && this.props.results[1].length > 0)
            return (
                <section className="sec-product bg0 p-b-50">
                    <div className="container">
                        <div className="p-b-32">
                            <h3 className="ltext-105 cl5 txt-center respon1">
                                Products
                            </h3>
                        </div>
                        <div className="wrap-slick2">
                            <div className="slick2">
                                {this.props.results[1].map(product =>
                                    <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15" key={product.id}>
                                        <div className="block2">
                                            <div className="block2-pic hov-img0">
                                                <Img imgName={ product.medias[0].provider_reference } />
                                                <Link to={'/shop/' + product.slug } className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04">View</Link>
                                            </div>

                                            <div className="block2-txt flex-w flex-t p-t-14">
                                                <div className="block2-txt-child1 flex-col-l ">
                                                    <Link to={'/shop/' + product.slug } className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">{ product.name }</Link>
                                                </div>

                                                <div className="block2-txt-child2 flex-r p-t-3">
                                                    <span className="stext-105 cl3">
                                                        $ { product.price }
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            );
    }

    insertBlogs() {
        if(this.props.results[0] && this.props.results[0].length > 0)
            return (
                <section className="sec-blog bg0 p-t-60 p-b-90">
                    <div className="container">
                        <div className="p-b-66">
                            <h3 className="ltext-105 cl5 txt-center respon1">
                                Blogs
                            </h3>
                        </div>

                        <div className="row">
                            {this.props.results[0].map(blog => 
                                <div className="col-sm-6 col-md-4 p-b-40" key={blog.id}>
                                    <div className="blog-item">
                                        <div className="hov-img0">
                                            <Link to={'/blog/' + blog.slug }>
                                                <Img imgName={ blog.media.provider_reference } />
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
                                                <Link to={'/blog/' + blog.slug } className="mtext-101 cl2 hov-cl1 trans-04">
                                                    {blog.title}
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
                    </div>
                </section>
            );
    }

    totalResult() {
        if(this.props.results.length == 0 || this.props.results[2] == 0)
            return(<p className="search-results">No Results ...</p>);
        else 
            return(<p className="search-results">We have founds {this.props.results[2]} results.</p>);
    }

    render() {
        return (
            <main className="search">
                <Banner title={'Search'} className={'bg-img2'}/>
                
                <Breadcrumb title={'Search'} haveSub={false}/>

                <section className="sec-blog bg0 p-t-60">
                    <div className="container">
                        <div className="p-b-66">
                            <h3 className="ltext-105 cl5 txt-center respon1">
                                Results for {'"'}
                                <span className="search-word">{ this.props.search }</span>
                                {'"'}
                            </h3>
                        </div>
                        <div className="row">
                            { this.totalResult() }
                        </div>
                    </div>
                </section>

                { this.insertProducts() }

                { this.insertBlogs() }
  
            </main>
        );
    }
}

SearchPage.propTypes = {
    search: PropTypes.string.isRequired,
    results: PropTypes.array.isRequired
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { search, results } = state.search;
    return { search, results };
};

const hoc = connect(mapStateToProps)(SearchPage);

// EXPORT COMPONENT

export { hoc as SearchPage };