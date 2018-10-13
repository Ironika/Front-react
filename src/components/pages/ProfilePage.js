// IMPORT PACKAGE REFERENCES

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { logout } from '../../services/UserService';

// COMPONENT


class ProfilePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user : this.props.user
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        let user = JSON.parse(window.localStorage.getItem('user'));
        if(user)
            this.setState({user : user});
        this.handleClickLogout = this.handleClickLogout.bind(this);
    }

    insertAddressDelivery() {
        if(this.state.user.address_delivery)
            return(                                        
                <div className="col-12 col-md-6">
                    <h4>Delivery Address</h4>
                    <p>{this.state.user.address_delivery.street}</p>
                    <p>{this.state.user.address_delivery.street_add}</p>
                    <p>{this.state.user.address_delivery.city + ' / ' + this.state.user.address_delivery.zipcode}</p>
                    <p>{this.state.user.address_delivery.state}</p>
                    <p>{this.state.user.address_delivery.country}</p>
                </div>
            );
    }

    insertAddressBilling() {
        if(this.state.user.address_billing)
            return(                                        
                <div className="col-12 col-md-6">
                    <h4>Billing Address</h4>
                    <p>{this.state.user.address_billing.street}</p>
                    <p>{this.state.user.address_billing.street_add}</p>
                    <p>{this.state.user.address_billing.city + ' / ' + this.state.user.address_billing.zipcode}</p>
                    <p>{this.state.user.address_billing.state}</p>
                    <p>{this.state.user.address_billing.country}</p>
                </div>
            );
    }

    insertOrders() {
        if(this.state.user.orders.length > 0)
            return(
                <Fragment>
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
                            {this.state.user.orders.map(order =>
                                <tr key={order.uniq_id}>
                                    <td>{order.uniq_id}</td>
                                    <td>{order.state}</td>
                                    <td>{order.created_at}</td>
                                    <td>{order.total} €</td>
                                    <td><a href="#">Detail</a></td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </Fragment>
            );
    }

    handleClickLogout() {
        window.localStorage.setItem('user', null);
        this.props.logout();
        this.setState({user: null});
        console.log(this.state.user);
    }

    render() {
        if(this.state.user == null || Object.keys(this.state.user).length == 0) {
            return (<Redirect to='/login' />);
        }
        else {
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
                                    { this.state.user.username }
                                    |
                                    <a href="#" className="cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04 dashboard">
                                        Go to Dashboard
                                    </a>
                                    |
                                    <span onClick={this.handleClickLogout.bind(this)} className="cl0 size-103 bg3 bor1 hov-btn2 p-lr-15 trans-04 logout">
                                        logout
                                    </span>
                                </div>
                                <a href="#">Edit Profile</a>
                                <div className="fos_user_user_show">
                                    <br/>
                                    <p>Name: {this.state.user.first_name + ' ' + this.state.user.last_name}</p>
                                    <p>Email: {this.state.user.email} </p>
                                    <br/>
                                    {(this.state.user.have_subscribe_newsletter) ? <p>You have subscribe to the newsletter</p> : ''}
                                    <br/>
                                    <div className="row">
                                        { this.insertAddressDelivery() }
                                        { this.insertAddressBilling() }
                                    </div>
                                    <br/>
                                    { this.insertOrders() }
                                </div>

                            </div>
                        </div>
                    </section>
                </main>
            );
        }
    }
}

ProfilePage.propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const { user } = state.user;
    return { user };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ logout }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

// EXPORT COMPONENT

export { hoc as ProfilePage };