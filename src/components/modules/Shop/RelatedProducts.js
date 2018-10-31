import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Img } from '../../shared/Img/Img';
import { Link } from 'react-router-dom';

class RelatedProducts extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    insertRelatedProducts() {
        let products = [];
        this.props.products.map(product => {
            if(product.id != this.props.product.id && product.collection.id == this.props.product.collection.id)
                products.push(product);
        });
        products.length = 4;
        return (products.map(product =>
            <div className="col-sm-6 col-md-4 col-lg-3 p-l-15 p-r-15 p-t-15 p-b-15" key={product.id}>
                <div className="block2">
                    <div className="block2-pic hov-img0">
                        { product.state && <span className="product-state">{product.state.name}</span>}
                        <Img className="" imgName={ product.medias[0].provider_reference } />
                        <Link to={'/shop/' + product.slug} className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04">
                            View
                        </Link>
                    </div>

                    <div className="block2-txt flex-w flex-t p-t-14">
                        <div className="block2-txt-child1 flex-col-l ">
                            <Link to={'/shop/' + product.slug} className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">
                                { product.name }
                            </Link>
                        </div>

                        <div className="block2-txt-child2 flex-r p-t-3">
                            <span className="stext-105 cl3">
                                ${ product.price }
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        ));
    }

    render() {
        return (
            <div className="container">
                <div className="p-b-45">
                    <h3 className="ltext-106 cl5 txt-center">
                        Related Products
                    </h3>
                </div>

                <div className="wrap-slick2">
                    <div className="slick2">
                        { this.insertRelatedProducts() }
                    </div>
                </div>
            </div>
        );
    }
}

RelatedProducts.propTypes = {
    product: PropTypes.object.isRequired,
    products: PropTypes.array.isRequired
};

export { RelatedProducts };