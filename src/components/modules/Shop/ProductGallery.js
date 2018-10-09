import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import { Img } from '../../shared/Img/Img';

class ProductGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        return (
            <Fragment>
                <div className="p-l-25 p-r-30 p-lr-0-lg">
                    <div className="wrap-slick3 flex-sb flex-w">
                        <div className="wrap-slick3-dots">
                            <Slider asNavFor={this.state.nav1} ref={slider => (this.slider2 = slider)} slidesToShow={3} swipeToSlide={true} focusOnSelect={true} vertical={true}>
                                {this.props.medias.map(media =>
                                    <div className="item-slick3" key={media.id}>
                                        <div className="wrap-pic-w pos-relative">
                                            <Img className="" imgName={ media.provider_reference } />
                                        </div>
                                    </div>
                                )}
                            </Slider>
                        </div>
                        <div className="wrap-slick3-arrows flex-sb-m flex-w"></div>
                        <div className="slick3">
                            <Slider asNavFor={this.state.nav2} ref={slider => (this.slider1 = slider)} >
                                {this.props.medias.map(media =>
                                    <div className="item-slick3" key={media.id}>
                                        <div className="wrap-pic-w pos-relative">
                                            <Img className="" imgName={ media.provider_reference } />
                                        </div>
                                    </div>
                                )}
                            </Slider>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

ProductGallery.propTypes = {
    medias: PropTypes.array
};

export { ProductGallery };