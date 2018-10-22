// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Img } from '../shared/Img/Img';
import { Counter } from '../shared/Counter/Counter';
import { editCart } from '../../services/CartService';
import { Banner } from '../shared/Banner/Banner';
import { Breadcrumb } from '../shared/Breadcrumb/Breadcrumb';
import { Link } from 'react-router-dom';

// COMPONENT

class CartPage extends Component {

    constructor(props) {
        super(props);

        let cart = JSON.parse(window.localStorage.getItem('cart'));
        this.state = {
            cart: cart,
            subTotal: this.getSubTotal(),
            shipping: 15.99,
            user : this.props.user
        };

        if(Object.keys(this.state.user).length == 0)
            this.state.user = JSON.parse(window.localStorage.getItem('user'));

    }

    componentDidMount() {
        window.scrollTo(0, 0);

        this.handleClickQuantity = this.handleClickQuantity.bind(this);
        this.handleClickRemove = this.handleClickRemove.bind(this);
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
        this.handleClickCheckout = this.handleClickCheckout.bind(this);
    }

    getSubTotal() {
        let subTotal = 0;
        if(window.localStorage.getItem('cart')) {
            let cart = JSON.parse(window.localStorage.getItem('cart'));
            cart.map(orderProduct => {
                subTotal += orderProduct.product.price * orderProduct.quantity;
            });
        }
        return subTotal;
    }

    handleClickQuantity(operator, index) {
        let cart = this.state.cart;
        if(operator == '+') {
            cart[index].quantity = cart[index].quantity + 1;
            window.localStorage.setItem('cart', JSON.stringify(cart));
            this.setState({cart: cart, subTotal: this.getSubTotal()});
        }
        else {
            if(cart[index].quantity - 1 > 0) {
                cart[index].quantity = cart[index].quantity - 1;
                window.localStorage.setItem('cart', JSON.stringify(cart));
                this.setState({cart: cart, subTotal: this.getSubTotal()});
            }
        }
    }

    handleChangeQuantity(index, event) {
        let cart = this.state.cart;
        cart[index].quantity = event.target.value;
        window.localStorage.setItem('cart', JSON.stringify(cart));
        this.setState({cart: cart, subTotal: this.getSubTotal()});
    }

    handleClickRemove(index) {
        let cart = this.state.cart;
        cart.splice(index, 1);
        window.localStorage.setItem('cart', JSON.stringify(cart));
        this.setState({cart: cart, subTotal: this.getSubTotal()});
        this.props.editCart(cart);
    }

    insertOrderProduct() {
        return (this.state.cart.map((orderProduct, index) =>
            <tr className="table_row resume-cart" key={ orderProduct.id }>
                <td className="column-1">
                    <div className="how-itemcart1" onClick={this.handleClickRemove.bind(this, index)}>
                        <Img className="" imgName={ orderProduct.product.media.provider_reference } />
                    </div>
                </td>
                <td className="column-2">
                    { orderProduct.product.name }
                    <br />
                    { orderProduct.size ? orderProduct.size.text : '' }
                    { orderProduct.size ? <br /> : '' }
                    { orderProduct.shape ? orderProduct.shape.text : ''}
                    { orderProduct.shape ? <br /> : '' }
                    { orderProduct.material ? orderProduct.material.text : ''}
                    { orderProduct.material ? <br /> : '' }
                </td>
                <td className="column-3">$ <span className="product-price">{orderProduct.product.price}</span></td>
                <td className="column-4">
                    {
                        this.props.location.pathname == '/cart' ? <Counter class={'flex-w m-l-auto m-r-0'} clickMinus={this.handleClickQuantity.bind(this, '-', index)} clickPlus={this.handleClickQuantity.bind(this, '+', index)} change={this.handleChangeQuantity.bind(this, index)} inputValue={orderProduct.quantity.toString()}/> : orderProduct.quantity.toString()
                    }
                </td>
                <td className="column-5">
                    $ <span className="total-product-price">{parseFloat(Math.round((orderProduct.product.price * orderProduct.quantity) * 100) / 100).toFixed(2)}</span>
                </td>
            </tr>
        ));
    }

    insertUserInfos() {
        return(
            <div className="m-l-25 m-r--38 m-lr-0-xl wrap-table-shopping-cart addresses">
                <div className="row">
                    <div className="col-md-6 address">
                        <h4>Delivery Address</h4>
                        { this.state.user.address_delivery ?
                            <div>
                                <p>{this.state.user.address_delivery.last_name} {this.state.user.address_delivery.first_name}</p>
                                <p>{this.state.user.address_delivery.street}</p>
                                <p>{this.state.user.address_delivery.street_add}</p>
                                <p>{this.state.user.address_delivery.city} / {this.state.user.address_delivery.zipcode}</p>
                                <p>{this.state.user.address_delivery.state}</p>
                                <p>{this.state.user.address_delivery.country}</p>
                            </div> :
                            <Link to='/profile/edit'>Add Delivery Address</Link>
                        }
                    </div>
                    <div className="col-md-6 address">
                        <h4>Billing Address</h4>
                        { this.state.user.address_billing ?
                            <div>
                                <p>{this.state.user.address_billing.last_name} {this.state.user.address_billing.first_name}</p>
                                <p>{this.state.user.address_billing.street}</p>
                                <p>{this.state.user.address_billing.street_add}</p>
                                <p>{this.state.user.address_billing.city} / {this.state.user.address_billing.zipcode}</p>
                                <p>{this.state.user.address_billing.state}</p>
                                <p>{this.state.user.address_billing.country}</p>
                            </div> :
                            <Link to='/profile/edit'>Add Billing Address</Link>
                        }
                    </div>
                </div>
            </div>
        );
    }

    handleClickCheckout() {
        if(this.state.user)
            this.props.history.push('/checkout');
        else
            this.props.history.push('/login');
    }

    render() {
        return (
            <main className="cart">
                <Banner title={'Cart'} className={'bg-img1'} />

                <Breadcrumb title={'Cart'} haveSub={false}/>

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
                                                { this.state.cart && this.insertOrderProduct() }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                { this.props.location.pathname == '/checkout' &&  this.insertUserInfos() }
                            </div>

                            <div className="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                                <div className="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm">
                                    <h4 className="mtext-109 cl2 p-b-30">
                                        Cart Totals
                                    </h4>

                                    <div className="flex-w flex-t bor12 p-b-13">
                                        <div className="size-208">
                                            <span className="stext-110 cl2">
                                                Subtotal:
                                            </span>
                                        </div>

                                        <div className="size-209">
                                            <span className="mtext-110 cl2">
                                                $ { parseFloat(Math.round((this.state.subTotal) * 100) / 100).toFixed(2) }
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex-w flex-t bor12 p-t-15 p-b-30">
                                        <div className="size-208 w-full-ssm">
                                            <span className="stext-110 cl2">
                                                Shipping: 
                                            </span>
                                        </div>
                                        <div className="size-209">
                                            <span className="mtext-110 cl2">
                                                $ { this.state.shipping }
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex-w flex-t p-t-27 p-b-33">
                                        <div className="size-208">
                                            <span className="mtext-101 cl2">
                                                Total:
                                            </span>
                                        </div>

                                        <div className="size-209 p-t-1">
                                            <span className="mtext-110 cl2">
                                                $ { parseFloat(Math.round((this.state.subTotal + this.state.shipping) * 100) / 100).toFixed(2) }
                                            </span>
                                        </div>
                                    </div>
                                    {
                                        this.props.location.pathname == '/cart' && 
                                        <div className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 checkout" onClick={this.handleClickCheckout.bind(this)}>
                                            Proceed to Checkout
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

}

CartPage.propTypes = {
    editCart: PropTypes.func.isRequired,
    history:  PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    const { user } = state.user;
    return { user };
};

// CONFIGURE REACT REDUX

const mapDispatchToProps = dispatch => (
    bindActionCreators({ editCart }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(CartPage);

// EXPORT COMPONENT

export { hoc as CartPage };