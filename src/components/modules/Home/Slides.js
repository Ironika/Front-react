import React, { Component } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { DOMAIN_API } from '../../App';
import { Link } from 'react-router-dom';

class Slides extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const settings = {
            dots: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
        };

        return (
            <Slider {...settings}>
                {this.props.slides.map(slide =>
                    <div key={slide.id}>
                        <div className="my-slide" style={{'backgroundImage': 'url(' + DOMAIN_API + 'uploads/media/default/0001/01/' + slide.media.provider_reference + ')'}}>
                            <div className="container h-full">
                                <div className="flex-col-l-m h-full p-t-100 p-b-30 respon5">
                                    <div className="layer-slick1 animated" data-appear="fadeInDown" data-delay="0">
                                        <span className="ltext-101 cl2 respon2">
                                            { slide.product.name }
                                        </span>
                                    </div>
                                        
                                    <div className="layer-slick1 animated" data-appear="fadeInUp" data-delay="800">
                                        <h1 className="ltext-201 cl2 p-t-19 p-b-43 respon1 home-slider-title">
                                            { slide.title }
                                        </h1>
                                    </div>
                                        
                                    <div className="layer-slick1 animated" data-appear="zoomIn" data-delay="1600">
                                        <Link to={'/shop/' + slide.product.slug} title={slide.product.slug} className="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04">
                                            Shop Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Slider>
        );
    }
}

Slides.propTypes = {
    slides: PropTypes.array.isRequired,
};

export { Slides };