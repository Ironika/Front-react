// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { logout } from '../../services/UserService';
import { getOrder } from '../../services/OrderService';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import { Img } from '../shared/Img/Img';
import { Banner } from '../shared/Banner/Banner';
import { Breadcrumb } from '../shared/Breadcrumb/Breadcrumb';
import LazyLoad from 'react-lazyload';


// COMPONENT


class OrderPage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.handleClickLogout = this.handleClickLogout.bind(this);
        if(this.props.match.params.orderid)
            this.props.getOrder(this.props.match.params.orderid);
    }

    handleClickLogout() {
        window.localStorage.setItem('user', null);
        this.props.logout();
        this.setState({user: null});
    }

    orderOrLoading() {
        if(!this.props.fetching_order) {
            return (
                <section className="bg0 p-t-75 p-b-85">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                                <div className="m-l-25 m-r--38 m-lr-0-xl">
                                    <div className="wrap-table-shopping-cart">
                                        <table className="table-shopping-cart">
                                            <thead>
                                                <tr className="table_head">
                                                    <th className="column-1">Product</th>
                                                    <th className="column-2"></th>
                                                    <th className="column-3">Price</th>
                                                    <th className="column-4">Quantity</th>
                                                    <th className="column-5">Total</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.order.order_products.map(orderProduct => (
                                                    <tr className="table_row resume-cart" key={orderProduct.id}>
                                                        <td className="column-1">
                                                            <div className="how-itemcart1">
                                                                <Img imgName={ orderProduct.product.medias[0].provider_reference } />
                                                            </div>
                                                        </td>
                                                        <td className="column-2">
                                                            {orderProduct.product.name}
                                                            <br />
                                                            { orderProduct.size ? orderProduct.size.name : '' }
                                                            { orderProduct.size ? <br /> : '' }
                                                            { orderProduct.shape ? orderProduct.shape.name : ''}
                                                            { orderProduct.shape ? <br /> : '' }
                                                            { orderProduct.material ? orderProduct.material.name : ''}
                                                            { orderProduct.material ? <br /> : '' }
                                                        </td>
                                                        <td className="column-3">$ <span className="product-price">{orderProduct.product.price}</span></td>
                                                        <td className="column-4"><span className="product-price">{orderProduct.quantity}</span></td>
                                                        <td className="column-5">
                                                            $ <span className="total-product-price">{orderProduct.product.price * orderProduct.quantity}</span>
                                                        </td>
                                                    </tr>
                                                ))}
                                                <tr>
                                                    <td></td>
                                                    <td></td>
                                                    <td></td>
                                                    <td className="column-4">Total :</td>
                                                    <td className="column-5">$ {this.props.order.total}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            );
        } else {
            return (<LoadingIndicator busy={this.props.fetching_order} />);
        }
    }

    render() {
        let haveSub = false;
        let subTitle = '';
        if(this.props.match.params.orderid) {
            haveSub = true;
            subTitle = 'Order - ' + this.props.order.uniq_id;
        }
        return (
            <main className="profile">
                <Banner title={'Profile'} className={'bg-img1'}/>

                <Breadcrumb title={'Profile'} haveSub={haveSub} subTitle={subTitle}/>

                <div className="actions">
                    <span onClick={this.handleClickLogout.bind(this)} className="cl0 size-103 bg3 bor1 hov-btn2 p-lr-15 trans-04 logout">Logout</span>
                </div>
                <LazyLoad height={600} once>
                    { this.orderOrLoading() } 
                </LazyLoad>

            </main>
        );
    }
}

OrderPage.propTypes = {
    match:          PropTypes.object,
    logout:         PropTypes.func.isRequired,
    getOrder:       PropTypes.func.isRequired,
    order:          PropTypes.object.isRequired,
    fetching_order: PropTypes.bool.isRequired,
};

const mapStateToProps = state => {
    const { order, fetching_order } = state.orders;
    return { order, fetching_order };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ logout, getOrder }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(OrderPage);

// EXPORT COMPONENT

export { hoc as OrderPage };