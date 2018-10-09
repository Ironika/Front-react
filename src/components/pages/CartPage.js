// IMPORT PACKAGE REFERENCES
import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import { bindActionCreators } from 'redux';
//import PropTypes from 'prop-types';
//import { NavLink } from 'react-router-dom';
import { Img } from '../shared/Img/Img';


// COMPONENT

class CartPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cart: JSON.parse(window.localStorage.getItem('cart'))
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        // let token = window.localStorage.getItem('token');
        // if(token) {
        //     if(this.props.products.length < 1)
        //         this.props.getProducts(token);
        // }
    }

    handleQuantity() {

    }

    insertOrderProduct() {
        return (this.state.cart.map(orderProduct =>
            <tr className="table_row resume-cart" key={orderProduct.product.id}>
                <td className="column-1">
                    <div className="how-itemcart1">
                        <Img className="" imgName={ orderProduct.product.media.provider_reference } />
                    </div>
                </td>
                <td className="column-2">
                    {orderProduct.product.name}
                    {/*% if orderProduct.size %}
                        <br>
                        {{ orderProduct.size.name }}
                    {% endif %}
                    {% if orderProduct.shape %}
                        <br>
                        {{ orderProduct.shape.name }}
                    {% endif %}
                    {% if orderProduct.material %}
                        <br>
                        {{ orderProduct.material.name }}
                    {% endif %*/}
                </td>
                <td className="column-3">$ <span className="product-price">{orderProduct.product.price}</span></td>
                <td className="column-4">
                    <div className="wrap-num-product flex-w m-l-auto m-r-0">
                        <div className="btn-num-cart-product-down cl8 hov-btn3 trans-04 flex-c-m">
                            <i className="fs-16 zmdi zmdi-minus"></i>
                        </div>

                        <input className="mtext-104 cl3 txt-center num-product" type="number" name="num-product1" value={orderProduct.quantity} onChange={this.handleQuantity.bind(this)}/>

                        <div className="btn-num-cart-product-up cl8 hov-btn3 trans-04 flex-c-m">
                            <i className="fs-16 zmdi zmdi-plus"></i>
                        </div>
                    </div>
                    <a className="remove-item" href="#"><i className="fs-16 zmdi zmdi-delete"></i></a>
                </td>
                <td className="column-5">
                    $ <span className="total-product-price">{orderProduct.product.price * orderProduct.quantity}</span>
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
                                                $ subTotal 
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
                                                $ subTotal
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

// ShopPage.propTypes = {
//     match: PropTypes.object,
//     getProducts: PropTypes.func.isRequired,
//     products: PropTypes.array,
//     fetching_products: PropTypes.bool.isRequired,
// };

// CONFIGURE REACT REDUX

// const mapStateToProps = state => {
//     const { fetching_products, products } = state.products;
//     return { fetching_products, products };
// };

// const mapDispatchToProps = dispatch => (
//     bindActionCreators({ getProducts }, dispatch)
// );

// const hoc = connect(mapStateToProps, mapDispatchToProps)(ShopPage);

// EXPORT COMPONENT

export { CartPage };