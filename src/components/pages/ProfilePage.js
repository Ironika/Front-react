// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
// import img from '../../images/icons/icon-email.png';
import { NavLink } from 'react-router-dom';

// COMPONENT


class ProfilePage extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <main className="account">
                <section className="bg-img1 txt-center p-lr-15 p-tb-92">
                    <h2 className="ltext-105 cl0 txt-center">
                        Profile
                    </h2>
                </section>

                <div className="container">
                    <div className="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                        <NavLink to='/' className='stext-109 cl8 hov-cl1 trans-04' exact={true}>
                            Home
                            <i className="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                        </NavLink>
                        <span className="stext-109 cl4"> Profile </span>
                    </div>
                </div>  

                <section className="bg0 p-t-104 p-b-116">
                    <div className="container">
                        <div className="content">
                            <div>
                                Username
                                |
                                <a href="#" className="cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04 dashboard">
                                    Go to Dashboard
                                </a>
                                |
                                <a href="#" className="cl0 size-103 bg3 bor1 hov-btn2 p-lr-15 trans-04 logout">
                                    logout
                                </a>
                            </div>
                            <a href="#">Edit Profile</a>
                            <div className="fos_user_user_show">
                                <br/>
                                <p>Username: user.username</p>
                                <p>Email: user.email </p>
                                <p>You have subscribe to the newsletter</p>
                                <br/>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <h4>Delivery Address</h4>
                                        <p>user.fullName</p>
                                        <p>user.addressDelivery.street</p>
                                        <p>user.addressDelivery.streetAdd</p>
                                        <p>user.addressDelivery.city / user.addressDelivery.zipcode</p>
                                        <p>user.addressDelivery.state</p>
                                        <p>user.addressDelivery.country</p>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <h4>Billing Address</h4>
                                        <p>user.fullName</p>
                                        <p>user.addressBilling.street</p>
                                        <p>user.addressBilling.streetAdd</p>
                                        <p>user.addressBilling.city / user.addressBilling.zipcode</p>
                                        <p>user.addressBilling.state</p>
                                        <p>user.addressBilling.country</p>
                                    </div>
                                </div>
                                <br/>
                                <h4>Orders</h4>
                                <br/>
                                <table className="table table-stripped">
                                    <thead>
                                        <tr>
                                            <th>Number</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                            <th>Total</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>order.uniqId</td>
                                            <td>order.state</td>
                                            <td>order.createdAt</td>
                                            <td>order.total €</td>
                                            <td><a href="#">Detail</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        );
    }
}


export { ProfilePage };