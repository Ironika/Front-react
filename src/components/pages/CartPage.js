// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Img } from '../shared/Img/Img';
import { Counter } from '../shared/Counter/Counter';
import { editCart } from '../../services/CartService';
import { NavLink } from 'react-router-dom';

// COMPONENT

class CartPage extends Component {

    constructor(props) {
        super(props);

        let cart = JSON.parse(window.localStorage.getItem('cart'));
        this.state = {
            cart: cart,
            subTotal: this.getSubTotal()
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        this.handleClickQuantity = this.handleClickQuantity.bind(this);
        this.handleClickRemove = this.handleClickRemove.bind(this);
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
    }

    getSubTotal() {
        let subTotal = 0;
        let cart = JSON.parse(window.localStorage.getItem('cart'));
        cart.map(orderProduct => {
            subTotal += orderProduct.product.price * orderProduct.quantity;
        });
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
                    <Counter class={'flex-w m-l-auto m-r-0'} clickMinus={this.handleClickQuantity.bind(this, '-', index)} clickPlus={this.handleClickQuantity.bind(this, '+', index)} change={this.handleChangeQuantity.bind(this, index)} inputValue={orderProduct.quantity.toString()}/>
                </td>
                <td className="column-5">
                    $ <span className="total-product-price">{parseFloat(Math.round((orderProduct.product.price * orderProduct.quantity) * 100) / 100).toFixed(2)}</span>
                </td>
            </tr>
        ));
    }

    render() {
        return (
            <main className="cart">
                <section className="bg-img1 txt-center p-lr-15 p-tb-92">
                    <h2 className="ltext-105 cl0 txt-center">
                        Cart
                    </h2>
                </section>

                <div className="container">
                    <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                        <NavLink to='/' className='stext-109 cl8 hov-cl1 trans-04' exact={true}>
                            Home
                            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                        </NavLink>
                        <span className="stext-109 cl4"> Cart </span>
                    </div>
                </div>

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
                                                { this.insertOrderProduct() }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
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

                                        <div className="size-209 p-r-18 p-r-0-sm w-full-ssm">
                                            <p className="stext-111 cl6 p-t-2">
                                                There are no shipping methods available. Please double check your address, or contact us if you need any help.
                                            </p>
                                            
                                            <div className="p-t-15">
                                                <span className="stext-112 cl8">
                                                    Calculate Shipping
                                                </span>

                                                <div className="rs1-select2 rs2-select2 bor8 bg0 m-b-12 m-t-9">
                                                    <select className="js-select2" name="time">
                                                        <option>Select a country...</option>
                                                        {/*% for key, country in countries %}
                                                            <option value="{{key}}">{{country}}</option>
                                                        {% endfor %*/}
                                                    </select>
                                                    <div className="dropDownSelect2"></div>
                                                </div>

                                                <div className="bor8 bg0 m-b-12">
                                                    <input className="stext-111 cl8 plh3 size-111 p-lr-15" type="text" name="state" placeholder="State /  country" />
                                                </div>

                                                <div className="bor8 bg0 m-b-22">
                                                    <input className="stext-111 cl8 plh3 size-111 p-lr-15" type="text" name="postcode" placeholder="Postcode / Zip" />
                                                </div>
                                                
                                                <div className="flex-w">
                                                    <div className="flex-c-m stext-101 cl2 size-115 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer">
                                                        Update Totals
                                                    </div>
                                                </div>
                                                    
                                            </div>
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
                                                $ { parseFloat(Math.round((this.state.subTotal) * 100) / 100).toFixed(2) }
                                            </span>
                                        </div>
                                    </div>

                                    <a className="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04" href="#">
                                        Proceed to Checkout
                                    </a>
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
    editCart: PropTypes.func.isRequired
};

// CONFIGURE REACT REDUX

const mapDispatchToProps = dispatch => (
    bindActionCreators({ editCart }, dispatch)
);

const hoc = connect(null, mapDispatchToProps)(CartPage);

// EXPORT COMPONENT

export { hoc as CartPage };