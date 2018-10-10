// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Img } from '../../shared/Img/Img';
import { Link } from 'react-router-dom';

// COMPONENT

class Collections extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        this.props.collections.length = 3;
        return (
            <div className="sec-banner bg0 p-t-80 p-b-50">
                <div className="container">
                    <div className="row">
                        {this.props.collections.map(collection =>
                            <div className="col-md-6 p-b-30 m-lr-auto" key={collection.id}>
                                <div className="block1 wrap-pic-w">
                                    <Img imgName={collection.media.provider_reference} alt="IMG-BANNER" />

                                    <Link to={'/shop/collection/' + collection.slug} className="block1-txt ab-t-l s-full flex-col-l-sb p-lr-38 p-tb-34 trans-03 respon3">
                                        <div className="block1-txt-child1 flex-col-l">
                                            <span className="block1-name ltext-102 trans-04 p-b-8">
                                                { collection.name }
                                            </span>

                                            <span className="block1-info stext-102 trans-04">
                                                { collection.catch_phrase }
                                            </span>
                                        </div>

                                        <div className="block1-txt-child2 p-b-4 trans-05">
                                            <div className="block1-link stext-101 cl0 trans-09">
                                                Shop Now
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

Collections.propTypes = {
    collections: PropTypes.array.isRequired,
};

// EXPORT COMPONENT

export { Collections };