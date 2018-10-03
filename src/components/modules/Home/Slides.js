// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { DOMAIN_API } from '../../App';

// COMPONENT

class Slides extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        this.props.slides.length = 1;
        return (
            this.props.slides.map(slide =>
                <div className="item-slick1" style={{'backgroundImage': 'url(' + DOMAIN_API + 'uploads/media/default/0001/01/' + slide.media.provider_reference + ')'}} key={slide.id}>
                    <div className="container h-full">
                        <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                            <div className="layer-slick1 animated" data-appear="fadeInDown" data-delay="0">
                                <span className="ltext-101 cl2 respon2">
                                    { slide.product.name }
                                </span>
                            </div>
                                
                            <div className="layer-slick1 animated" data-appear="fadeInUp" data-delay="800">
                                <h2 className="ltext-201 cl2 p-t-19 p-b-43 respon1 home-slider-title">
                                    { slide.title }
                                </h2>
                            </div>
                                
                            <div className="layer-slick1 animated" data-appear="zoomIn" data-delay="1600">
                                <Link to={'/shop/' + slide.product.slug} className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                                    Shop Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )
        );
    }
}

Slides.propTypes = {
    slides: PropTypes.array.isRequired,
};

// EXPORT COMPONENT

export { Slides };