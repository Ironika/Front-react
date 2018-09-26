// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Img } from '../../shared/Img/Img';

// COMPONENT

function insertProducts(products) {
    if(products) {
        products.length = 5;
        return (products.map(product => 
            <li key={product.id} className="flex-w flex-t p-b-30">
                <Link to={'/shop/' + product.slug } className="wrao-pic-w size-214 hov-ovelay1 m-r-20">
                    <Img className="img-last-products" imgName={ product.medias[0].provider_reference } />
                </Link>

                <div className="size-215 flex-col-t p-t-8">
                    <Link to={'/shop/' + product.slug } className="stext-116 cl8 hov-cl1 trans-04">{product.name}</Link>
                    <span className="stext-116 cl6 p-t-20">
                        ${ product.price }
                    </span>
                </div>
            </li>
        ));
    }
}

const Products = (props) => (
    <div className="flex-w m-r--5">
        <ul>
            { insertProducts(props.products) }
        </ul>
    </div>
);

Products.propTypes = {
    products: PropTypes.array
};

export { Products };