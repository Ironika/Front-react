// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFilters } from '../../../services/ShopService';

//import { Link } from 'react-router-dom';
// COMPONENT

class Filters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            filters: {
                sort: 'newness',
                size: null,
                shape: null,
                material: null,
                collecction: null
            }
        };
    }

    componentDidMount() {
        
    }

    handleClickSort(sort) {
        let filters = this.state.filters;
        filters.sort = sort;
        this.props.setFilters(filters);
        this.setState({filters: filters});
    }

    openFilters() {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <div className="flex-w flex-sb-m p-b-52">
                <div className="flex-w flex-c-m m-tb-10">
                    <div className="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter" onClick={this.openFilters.bind(this)}>
                        <i className="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"></i>
                        <i className="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"></i>
                         Filter
                    </div>
                </div>

                <div className={'panel-filter w-full p-t-10' + (this.state.open ? '' : ' dis-none')}>
                    <div className="wrap-filter flex-w bg6 w-full p-lr-40 p-t-27 p-lr-15-sm">
                        <div className="filter-col1 p-r-15 p-b-27">
                            <div className="mtext-102 cl2 p-b-15">
                                Sort By
                            </div>

                            <ul>
                                <li className="p-b-6">
                                    <span className={'filter-link stext-106 trans-04 ' + ((this.state.filters.sort == 'newness') ? 'filter-link-active' : '')} onClick={this.handleClickSort.bind(this, 'newness')}>
                                        Newness
                                    </span>
                                </li>

                                <li className="p-b-6">
                                    <span className={'filter-link stext-106 trans-04 ' + ((this.state.filters.sort == 'priceLowToHigh') ? 'filter-link-active' : '')} onClick={this.handleClickSort.bind(this, 'priceLowToHigh')}>
                                        Price: Low to High
                                    </span>
                                </li>

                                <li className="p-b-6">
                                    <span className={'filter-link stext-106 trans-04 ' + ((this.state.filters.sort == 'priceHighToLow') ? 'filter-link-active' : '')} onClick={this.handleClickSort.bind(this, 'priceHighToLow')}>
                                        Price: High to Low
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div className="filter-col2 p-r-15 p-b-27">
                            <div className="mtext-102 cl2 p-b-15">
                                Materials
                            </div>

                            <select name="material">
                                <option value="all">All</option>
                                <option value="material.id">material.name</option>
                            </select>
                        </div>

                        <div className="filter-col3 p-r-15 p-b-27">
                            <div className="mtext-102 cl2 p-b-15">
                                Shapes
                            </div>

                            <select name="shape">
                                <option value="all">All</option>
                                <option value="shape.id">shape.name</option>
                            </select>
                        </div>

                        <div className="filter-col4 p-b-27">
                            <div className="mtext-102 cl2 p-b-15">
                                Collections
                            </div>

                            <div className="flex-w p-t-4 m-r--5">
                                <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                    Fashion
                                </a>

                                <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                    Lifestyle
                                </a>

                                <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                    Denim
                                </a>

                                <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                    Streetstyle
                                </a>

                                <a href="#" className="flex-c-m stext-107 cl6 size-301 bor7 p-lr-15 hov-tag1 trans-04 m-r-5 m-b-5">
                                    Crafts
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Filters.propTypes = {
    setFilters: PropTypes.func.isRequired
};

// CONFIGURE REACT REDUX

const mapDispatchToProps = dispatch => (
    bindActionCreators({ setFilters }, dispatch)
);

const hoc = connect(null, mapDispatchToProps)(Filters);

export { hoc as Filters };