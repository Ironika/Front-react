// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setFilters, getFilters } from '../../../services/ShopService';
import Select2 from 'react-select2-wrapper';

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
                color: 'all',
                state: 'all',
                collection: 'all',
                type: 'all',
                category: 'all'
            }
        };

        if(Object.keys(this.props.filters).length > 0 ) {
            if(this.props.filters.collection != 'all' || this.props.filters.type != 'all' || this.props.filters.category != 'all') {
                this.state.filters = this.props.filters;
            }
        }
        
        this.handleChangeSelect = this.handleChangeSelect.bind(this);
    }

    componentDidMount() {
        let token = window.localStorage.getItem('token');
        if(token) {
            if(this.props.materials.length < 1 || this.props.sizes.length < 1 || this.props.shapes.length < 1 || this.props.collections.length < 1)
                this.props.getFilters(token);
        }
    }

    handleChangeSelect(filter, event){
        let filters = JSON.parse(JSON.stringify(this.state.filters));

        if(filter == 'material')
            filters.material = event.target.value;
        else if(filter == 'size')
            filters.size = event.target.value;
        else if(filter == 'shape')
            filters.shape = event.target.value;
        else if(filter == 'color')
            filters.color = event.target.value;
        else if(filter == 'collection' && event.target.value != '')
            filters.collection = event.target.value;
        else if(filter == 'state' && event.target.value != '')
            filters.state = event.target.value;
        else
            return;

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
                            <div className="mtext-102 cl2">
                                Materials
                            </div>
                            { this.insertFilters(this.props.materials, this.state.filters.material, this.handleChangeSelect.bind(this, 'material')) }
                            <div className="mtext-102 cl2 p-t-15">
                                Sizes
                            </div>
                            { this.insertFilters(this.props.sizes, this.state.filters.size, this.handleChangeSelect.bind(this, 'size')) }
                        </div>

                        <div className="filter-col3 p-r-15 p-b-27">
                            <div className="mtext-102 cl2">
                                Shapes
                            </div>
                            { this.insertFilters(this.props.shapes, this.state.filters.shape, this.handleChangeSelect.bind(this, 'shape')) }
                            <div className="mtext-102 cl2 p-t-15">
                                Colors
                            </div>
                            { this.insertFilters(this.props.colors, this.state.filters.color, this.handleChangeSelect.bind(this, 'color')) }
                        </div>

                        <div className="filter-col4 p-r-15 p-b-27">
                            <div className="mtext-102 cl2">
                                Collections
                            </div>
                            { this.insertFilters(this.props.collections, this.state.filters.collection, this.handleChangeSelect.bind(this, 'collection')) }
                            <div className="mtext-102 cl2 p-t-15">
                                State
                            </div>
                            { this.insertFilters(this.props.states, this.state.filters.state, this.handleChangeSelect.bind(this, 'state')) }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Filters.propTypes = {
    setFilters: PropTypes.func.isRequired,
    getFilters: PropTypes.func.isRequired,
    materials: PropTypes.array.isRequired,
    sizes: PropTypes.array.isRequired,
    shapes: PropTypes.array.isRequired,
    colors: PropTypes.array.isRequired,
    states: PropTypes.array.isRequired,
    collections: PropTypes.array.isRequired,
    filters: PropTypes.object.isRequired
};

// CONFIGURE REACT REDUX

const mapStateToProps = state => {
    const { materials, sizes, shapes, colors, states, collections, filters } = state.products;
    return { materials, sizes, shapes, colors, states, collections, filters };
};


const mapDispatchToProps = dispatch => (
    bindActionCreators({ setFilters, getFilters }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(Filters);

export { hoc as Filters };