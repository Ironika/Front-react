// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';


// COMPONENT

const Banner = (props) => (
    <section className={'txt-center p-lr-15 p-tb-92 ' + props.className}>
        <h2 className="ltext-105 cl0 txt-center">
            {props.title}
        </h2>
    </section>
);

Banner.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string
};

export { Banner };