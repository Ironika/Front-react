// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';

// COMPONENT

const Counter = (props) => (
    <div className={'wrap-num-product ' + props.class}>
        <div className="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m" onClick={props.clickMinus}>
            <i className="fs-16 zmdi zmdi-minus"></i>
        </div>

        <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product" value={props.inputValue} onChange={props.change}/>

        <div className="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m" onClick={props.clickPlus}>
            <i className="fs-16 zmdi zmdi-plus"></i>
        </div>
    </div>
);


Counter.propTypes = {
    class: PropTypes.string,
    clickMinus: PropTypes.func.isRequired,
    clickPlus: PropTypes.func.isRequired,
    change: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired
};

export { Counter };