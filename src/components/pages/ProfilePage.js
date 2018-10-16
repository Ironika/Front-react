// IMPORT PACKAGE REFERENCES

import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { logout } from '../../services/UserService';
import { DOMAIN_API } from '../../components/App';
import { Day, MonthFull, Year } from '../shared/Date/Date';
import { Banner } from '../shared/Banner/Banner';
import { Breadcrumb } from '../shared/Breadcrumb/Breadcrumb';


// COMPONENT


class ProfilePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user : this.props.user
        };
        let user = JSON.parse(window.localStorage.getItem('user'));
        if(user)
            this.state.user = user;
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.handleClickLogout = this.handleClickLogout.bind(this);
    }

    insertAddressDelivery() {
        if(this.state.user.address_delivery)
            return(                                        
                <div className="col-12 col-md-6">
                    <h4>Delivery Address</h4>
                    <p>{this.state.user.address_delivery.first_name + ' ' + this.state.user.address_delivery.last_name}</p>
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
                    <p>{this.state.user.address_billing.first_name + ' ' + this.state.user.address_billing.last_name}</p>
                    <p>{this.state.user.address_billing.street}</p>
                    <p>{this.state.user.address_billing.street_add}</p>
                    <p>{this.state.user.address_billing.city + ' / ' + this.state.user.address_billing.zipcode}</p>
                    <p>{this.state.user.address_billing.state}</p>
                    <p>{this.state.user.address_billing.country}</p>
                </div>
            );
    }

    insertOrders() {
        if(this.state.user.orders && this.state.user.orders.length > 0)
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
                                    <td className={order.state == 'DONE' ? 'order-done' : ''}>{order.state}</td>
                                    <td><Day date={order.created_at} />&nbsp;<MonthFull date={order.created_at} />&nbsp;<Year date={order.created_at} />&nbsp;</td>
                                    <td>{order.total} €</td>
                                    <td><Link to={'/profile/order/' + order.id} className="cl0 size-103 bg3 bor1 hov-btn2 p-lr-15 trans-04 logout">Detail</Link></td>
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
    }

    isAdmin() {
        let isAdmin = false;
        if(this.state.user.roles.length > 0)
            this.state.user.roles.map(role => {
                if(role == 'ROLE_SUPER_ADMIN')
                    isAdmin = true;
            });
        return isAdmin;
    }

    render() {
        if(this.state.user == null || typeof this.state.user == 'string' || Object.keys(this.state.user).length == 0) {
            return (<Redirect to='/login' />);
        }
        else {
            return (
                <main className="profile">
                    <Banner title={'Profile'} className={'bg-img1'}/>

                    <Breadcrumb title={'Profile'} haveSub={false}/>  

                    <div className="actions">
                        { this.isAdmin() ? <a href={DOMAIN_API + 'admin/dashboard'} className="cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04 dashboard">Go to Dashboard</a> : ''}
                        <a href="#" className="cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04 dashboard">Edit Profile</a>
                        <span onClick={this.handleClickLogout.bind(this)} className="cl0 size-103 bg3 bor1 hov-btn2 p-lr-15 trans-04 logout">Logout</span>
                    </div>

                    <section className="bg0 p-t-104 p-b-116">
                        <div className="container">
                            <div className="content">
                                <div className="fos_user_user_show">
                                    <p>Name: { this.state.user.username }</p>
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
    user: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ]),
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