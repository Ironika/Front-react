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
            this.props.products.map(product =>
                <div className="item-slick2 p-l-15 p-r-15 p-t-15 p-b-15" key={product.id}>
                    <div className="block2">
                        <div className="block2-pic hov-img0">
                            <Img imgName={ product.medias[0].provider_reference } />
                            <Link to={'/shop/' + product.slug } className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04">
                                View
                            </Link>
                        </div>

                        <div className="block2-txt flex-w flex-t p-t-14">
                            <div className="block2-txt-child1 flex-col-l ">
                                <Link to={'/shop/' + product.slug } className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
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
            )
        );
    }
}

Products.propTypes = {
    products: PropTypes.array.isRequired,
};

// EXPORT COMPONENT

export { Products };