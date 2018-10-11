// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFilters, getFilters } from '../../../services/ShopService';
import Select2 from 'react-select2-wrapper';

//import { Link } from 'react-router-dom';
// COMPONENT

class Filters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            filters: {
                sort: 'newness',
                size: 'all',
                shape: 'all',
                material: 'all',
                collection: 'all'
            }
        };
        
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
    }

    componentDidMount() {
        let token = window.localStorage.getItem('token');
        if(token) {
            if(this.props.materials.length < 1 || this.props.sizes.length < 1 || this.props.shapes.length < 1 || this.props.collections.length < 1)
                this.props.getFilters(token);
        }

        if(this.props.filters.collection && this.props.filters.collection != 'all')
            this.setState({filters: this.props.filters});
    }

    handleChangeSelect(filter, event){
        let filters = this.state.filters;

        if(filter == 'material')
            filters.material = event.target.value;
        if(filter == 'size')
            filters.size = event.target.value;
        if(filter == 'shape')
            filters.shape = event.target.value;
        if(filter == 'collection')
            filters.collection = event.target.value;

        this.props.setFilters(filters);
        this.setState({filters: filters});
    }

    insertFilters(datas, value, onchange) {
        let current_datas = [];
        current_datas.push({text: 'All', id: 'all' });
        datas.map(data => {
            current_datas.push({text: data.name, id: data.id });
        });
        return ( 
            <Select2 data={current_datas} options={{ placeholder: 'Choose one option' }} value={value} onChange={onchange} />
        );
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
                         Filters
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
                            { this.insertFilters(this.props.materials, this.state.filters.material, this.handleChangeSelect.bind(this, 'material')) }
                        </div>

                        <div className="filter-col3 p-r-15 p-b-27">
                            <div className="mtext-102 cl2 p-b-15">
                                Sizes
                            </div>
                            { this.insertFilters(this.props.sizes, this.state.filters.size, this.handleChangeSelect.bind(this, 'size')) }
                        </div>

                        <div className="filter-col4 p-r-15 p-b-27">
                            <div className="mtext-102 cl2 p-b-15">
                                Shapes
                            </div>
                            { this.insertFilters(this.props.shapes, this.state.filters.shape, this.handleChangeSelect.bind(this, 'shape')) }
                        </div>

                        <div className="filter-col5 p-b-27">
                            <div className="mtext-102 cl2 p-b-15">
                                Collections
                            </div>
                            { this.insertFilters(this.props.collections, this.state.filters.collection, this.handleChangeSelect.bind(this, 'collection')) }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Filters.propTypes = {
    setFilters: PropTypes.func,
    getFilters: PropTypes.func,
    materials: PropTypes.array,
    sizes: PropTypes.array,
    shapes: PropTypes.array,
    collections: PropTypes.array,
    filters: PropTypes.object
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { materials, sizes, shapes, collections, filters } = state.products;
    return { materials, sizes, shapes, collections, filters };
};


const mapDispatchToProps = dispatch => (
    bindActionCreators({ setFilters, getFilters }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Filters);

export { hoc as Filters };