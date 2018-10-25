// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Img } from '../../shared/Img/Img';
import { Link } from 'react-router-dom';

// COMPONENT

class Products extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        this.props.products.length = 8;
        return (
            <div className="container">
                <div className="p-b-32">
                    <h3 className="ltext-105 cl5 txt-center respon1">
                        Last Products
                    </h3>
                </div>
                <div className="wrap-slick2">
                    <div className="slick2">
                        {this.props.products.map(product =>
                            <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15" key={product.id}>
                                <div className="block2">
                                    <div className="block2-pic hov-img0">
                                        { product.state && <span>{product.state.name}</span>}
                                        <Img imgName={ product.medias[0].provider_reference } alt={product.slug}/>
                                        <Link to={'/shop/' + product.slug } title={product.slug} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04">
                                            View
                                        </Link>
                                    </div>

                                    <div className="block2-txt flex-w flex-t p-t-14">
                                        <div className="block2-txt-child1 flex-col-l ">
                                            <Link to={'/shop/' + product.slug } title={product.slug} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                                { product.name }
                                            </Link>
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
                <div className="flex-c-m flex-w w-full p-t-45">
                    <Link to={'/shop'} className="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04" title='shop' >
                        See more
                    </Link>
                </div>
            </div>
        );
    }
}

Products.propTypes = {
    products: PropTypes.array.isRequired,
};

// EXPORT COMPONENT

export { Products };