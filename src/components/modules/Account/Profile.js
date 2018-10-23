// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { DOMAIN_API } from '../../../components/App';
import { Day, MonthFull, Year } from '../../shared/Date/Date';
import { LoadingIndicator } from '../../shared/LoadingIndicator/LoadingIndicator';

// COMPONENT


export const Profile = (props) => (
    <section className="bg0 p-t-50 p-b-116">
        <div className="actions">
            { isAdmin(props.user) && <a href={DOMAIN_API + 'admin/dashboard'} className="cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04 dashboard">Go to Dashboard</a>}
            <Link to={'/profile/edit/'} className="cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04 dashboard">Edit Profile</Link>
            <span onClick={props.logout} className="cl0 size-103 bg3 bor1 hov-btn2 p-lr-15 trans-04 logout">Logout</span>
        </div>
        <div className="container">
            <div className="content">
                <div className="fos_user_user_show">
                    <p>Name: { props.user.username }</p>
                    <p>Email: {props.user.email} </p>
                    <br/>
                    {props.user.have_subscribe_newsletter && <p>You have subscribe to the newsletter</p>}
                    <br/>
                    <div className="row">
                        { insertAddressDelivery(props.user) }
                        { insertAddressBilling(props.user) }
                    </div>
                    <br/>
                    { insertOrders(props.orders, props.fetching) }
                </div>

            </div>
        </div>
    </section>
);

function isAdmin(user) {
    let isAdmin = false;
    if(user.roles.length > 0)
        user.roles.map(role => {
            if(role == 'ROLE_SUPER_ADMIN')
                isAdmin = true;
        });
    return isAdmin;
}

function insertOrders(orders, fetching) {
    if(fetching)
        return (<LoadingIndicator busy={fetching} />);
    else {
        if(orders && orders.length > 0)
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
                            {orders.map(order =>
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
        else
            return(<p>No orders</p>);
    }
}

function insertAddressBilling(user) {
    if(user.address_billing)
        return(                                        
            <div className="col-12 col-md-6">
                <h4>Billing Address</h4>
                <p>{user.address_billing.first_name + ' ' + user.address_billing.last_name}</p>
                <p>{user.address_billing.street}</p>
                <p>{user.address_billing.street_add}</p>
                <p>{user.address_billing.city + ' / ' + user.address_billing.zipcode}</p>
                <p>{user.address_billing.state}</p>
                <p>{user.address_billing.country}</p>
            </div>
        );
}

function insertAddressDelivery(user) {
    if(user.address_delivery)
        return(                                        
            <div className="col-12 col-md-6">
                <h4>Delivery Address</h4>
                <p>{user.address_delivery.first_name + ' ' + user.address_delivery.last_name}</p>
                <p>{user.address_delivery.street}</p>
                <p>{user.address_delivery.street_add}</p>
                <p>{user.address_delivery.city + ' / ' + user.address_delivery.zipcode}</p>
                <p>{user.address_delivery.state}</p>
                <p>{user.address_delivery.country}</p>
            </div>
        );
}

Profile.propTypes = {
    logout:         PropTypes.func.isRequired,
    user:           PropTypes.object.isRequired,
    orders:         PropTypes.array.isRequired,
    fetching:       PropTypes.bool.isRequired
};