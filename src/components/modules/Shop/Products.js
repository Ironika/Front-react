// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Img } from '../../shared/Img/Img';
import { Filters } from './Filters';

// COMPONENT

function insertProducts(products) {
    if(products) {
        return (products.map(product => 
            <div className="col-sm-6 col-md-4 col-lg-3 p-b-35 isotope-item" key={product.id}>
                <div className="block2">
                    <div className="block2-pic hov-img0">
                        <Img className="" imgName={ product.medias[0].provider_reference } />

                        <Link to={'/shop/' + product.slug } className="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15">View</Link>
                    </div>

                    <div className="block2-txt flex-w flex-t p-t-14">
                        <div className="block2-txt-child1 flex-col-l ">
                            <Link to={'/shop/' + product.slug } className="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6">{product.name}</Link>
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
}

const Products = (props) => (
    <div className="bg0 m-t-23 p-b-140">
        <div className="container">
            <Filters />
            <div className="row isotope-grid">
                { insertProducts(props.products) }
            </div>
        </div>
    </div>
);

Products.propTypes = {
    products: PropTypes.array
};

export { Products };