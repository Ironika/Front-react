// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';

import { DOMAIN_API } from '../../App';


// COMPONENT

const Img = (props) => (
    <img src={ DOMAIN_API + 'uploads/media/default/0001/01/' + props.imgName } className={props.className} />
);

Img.propTypes = {
    imgName: PropTypes.string.isRequired,
    className: PropTypes.string
};

export { Img };