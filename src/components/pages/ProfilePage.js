// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { logout, edit } from '../../services/UserService';
import { getUserOrders, resetRedirect } from '../../services/OrderService';
import { Banner } from '../shared/Banner/Banner';
import { Breadcrumb } from '../shared/Breadcrumb/Breadcrumb';
import { Profile } from '../modules/Account/Profile';
import { Edit } from '../modules/Account/Edit';


// COMPONENT


class ProfilePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user : this.props.user,
            email: '',
            newsletter: false,
            address_delivery: {
                first_name: '',
                last_name: '',
                street: '',
                street_add: '',
                city: '',
                zipcode: '',
                state: '',
                country: ''
            },
            address_billing: {
                first_name: '',
                last_name: '',
                street: '',
                street_add: '',
                city: '',
                zipcode: '',
                state: '',
                country: ''
            },
            error: ''
        };
        let user = JSON.parse(window.localStorage.getItem('user'));
        if(user && typeof user != 'string')
            this.state.user = user;

        this.state.email = this.state.user.email;
        this.state.newsletter = this.state.user.have_subscribe_newsletter;
        if(this.state.user.address_delivery) {
            this.state.address_delivery.first_name = this.state.user.address_delivery.first_name;
            this.state.address_delivery.last_name = this.state.user.address_delivery.last_name;
            this.state.address_delivery.street = this.state.user.address_delivery.street;
            this.state.address_delivery.street_add = this.state.user.address_delivery.street_add;
            this.state.address_delivery.city = this.state.user.address_delivery.city;
            this.state.address_delivery.zipcode = this.state.user.address_delivery.zipcode;
            this.state.address_delivery.state = this.state.user.address_delivery.state;
            this.state.address_delivery.country = this.state.user.address_delivery.country;
        }

        if(this.state.user.address_billing) {
            this.state.address_billing.first_name = this.state.user.address_billing.first_name;
            this.state.address_billing.last_name = this.state.user.address_billing.last_name;
            this.state.address_billing.street = this.state.user.address_billing.street;
            this.state.address_billing.street_add = this.state.user.address_billing.street_add;
            this.state.address_billing.city = this.state.user.address_billing.city;
            this.state.address_billing.zipcode = this.state.user.address_billing.zipcode;
            this.state.address_billing.state = this.state.user.address_billing.state;
            this.state.address_billing.country = this.state.user.address_billing.country;
        }
    }

    componentDidMount() {
        window.scrollTo(0, 0);

        let token = window.localStorage.getItem('token');
        this.props.getUserOrders(token, this.state.user.id);
        this.props.resetRedirect();

        this.handleClickLogout = this.handleClickLogout.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClickSubmit = this.handleClickSubmit.bind(this);
    }

    handleClickLogout() {
        window.localStorage.setItem('user', null);
        this.props.logout();
        this.setState({user: null});
    }

    handleChange(input, event) {
        let address_delivery = this.state.address_delivery;
        let address_billing = this.state.address_billing;
        switch(input) {
            case 'email':
                return this.setState({email: event.target.value});
            case 'newsletter':
                return this.setState({newsletter: !this.state.newsletter});
            case 'adfirst_name':
                address_delivery.first_name = event.target.value;
                return  this.setState({address_delivery : address_delivery});
            case 'adlast_name':
                address_delivery.last_name = event.target.value;
                return this.setState({address_delivery : address_delivery});
            case 'adstreet':
                address_delivery.street = event.target.value;
                return this.setState({address_delivery : address_delivery});
            case 'adstreet_add':
                address_delivery.street_add = event.target.value;
                return this.setState({address_delivery : address_delivery});
            case 'adcity':
                address_delivery.city = event.target.value;
                return this.setState({address_delivery : address_delivery});
            case 'adzipcode':
                address_delivery.zipcode = event.target.value;
                return this.setState({address_delivery : address_delivery});
            case 'adstate':
                address_delivery.state = event.target.value;
                return this.setState({address_delivery : address_delivery});
            case 'adcountry':
                address_delivery.country = event.target.value;
                return this.setState({address_delivery : address_delivery});
            case 'abfirst_name':
                address_billing.first_name = event.target.value;
                return this.setState({address_billing : address_billing});
            case 'ablast_name':
                address_billing.last_name = event.target.value;
                return this.setState({address_billing : address_billing});
            case 'abstreet':
                address_billing.street = event.target.value;
                return this.setState({address_billing : address_billing});
            case 'abstreet_add':
                address_billing.street_add = event.target.value;
                return this.setState({address_billing : address_billing});
            case 'abcity':
                address_billing.city = event.target.value;
                return this.setState({address_billing : address_billing});
            case 'abzipcode':
                address_billing.zipcode = event.target.value;
                return this.setState({address_billing : address_billing});
            case 'abstate':
                address_billing.state = event.target.value;
                return this.setState({address_billing : address_billing});
            case 'abcountry':
                address_billing.country = event.target.value;
                return this.setState({address_billing : address_billing});
            default:
                return;
        }
    }

    isFill(address) {
        let isFill = true;
        if(address.first_name == '')
            isFill = false;
        if(address.last_name == '')
            isFill = false;
        if(address.street == '')
            isFill = false;
        if(address.city == '')
            isFill = false;
        if(address.zipcode == '')
            isFill = false;
        if(address.country == '')
            isFill = false;
        return isFill;
    }

    handleClickSubmit() {
        window.scrollTo(0, 0);
        this.setState({error: ''});
        let user = JSON.parse(JSON.stringify(this.state.user));
        if(user.email != this.state.email)
            user.email = this.state.email;

        if(user.have_subscribe_newsletter != this.state.newsletter)
            user.have_subscribe_newsletter = this.state.newsletter;

        if(user.address_delivery) {
            if(user.address_delivery.first_name != this.state.address_delivery.first_name)
                user.address_delivery.first_name = this.state.address_delivery.first_name;
            if(user.address_delivery.last_name != this.state.address_delivery.last_name)
                user.address_delivery.last_name = this.state.address_delivery.last_name;
            if(user.address_delivery.street != this.state.address_delivery.street)
                user.address_delivery.street = this.state.address_delivery.street;
            if(user.address_delivery.street_add != this.state.address_delivery.street_add)
                user.address_delivery.street_add = this.state.address_delivery.street_add;
            if(user.address_delivery.city != this.state.address_delivery.city)
                user.address_delivery.city = this.state.address_delivery.city;
            if(user.address_delivery.zipcode != this.state.address_delivery.zipcode)
                user.address_delivery.zipcode = this.state.address_delivery.zipcode;
            if(user.address_delivery.state != this.state.address_delivery.state)
                user.address_delivery.state = this.state.address_delivery.state;
            if(user.address_delivery.country != this.state.address_delivery.country)
                user.address_delivery.country = this.state.address_delivery.country;
        } else {
            if(this.isFill(this.state.address_delivery))
                user.address_delivery = this.state.address_delivery;
            else 
                this.setState({error: 'You must fill your address delivery'});
        }

        if(user.address_billing) {
            if(user.address_billing.first_name != this.state.address_billing.first_name)
                user.address_billing.first_name = this.state.address_billing.first_name;
            if(user.address_billing.last_name != this.state.address_billing.last_name)
                user.address_billing.last_name = this.state.address_billing.last_name;
            if(user.address_billing.street != this.state.address_billing.street)
                user.address_billing.street = this.state.address_billing.street;
            if(user.address_billing.street_add != this.state.address_billing.street_add)
                user.address_billing.street_add = this.state.address_billing.street_add;
            if(user.address_billing.city != this.state.address_billing.city)
                user.address_billing.city = this.state.address_billing.city;
            if(user.address_billing.zipcode != this.state.address_billing.zipcode)
                user.address_billing.zipcode = this.state.address_billing.zipcode;
            if(user.address_billing.state != this.state.address_billing.state)
                user.address_billing.state = this.state.address_billing.state;
            if(user.address_billing.country != this.state.address_billing.country)
                user.address_billing.country = this.state.address_billing.country;
        } else {
            if(this.isFill(this.state.address_billing))
                user.address_billing = this.state.address_billing;
            else 
                this.setState({error: 'You must fill your address billing'});
        }

        let token = window.localStorage.getItem('token');
        this.props.edit(token, user);
        this.setState({user: user});
        this.props.history.push('/profile');
    }

    render() {
        let haveSub = false; 
        let subTitle = '';
        if(this.props.location.pathname == '/profile/edit/') {
            haveSub = true;
            subTitle = 'Edit';
        }
        if(this.state.user == null || typeof this.state.user == 'string' || Object.keys(this.state.user).length == 0) {
            return (<Redirect to='/login' />);
        }
        else {
            return (
                <main className="profile">
                    <Banner title={'Profile'} className={'bg-img1'}/>

                    <Breadcrumb title={'Profile'} haveSub={haveSub} subTitle={subTitle}/> 
                    {this.props.location.pathname == '/profile' ?
                        <Profile user={this.state.user} logout={this.handleClickLogout.bind(this)} orders={this.props.user_orders} fetching={this.props.fetching_user_orders}/> :
                        <Edit 
                            error={this.state.error}
                            emailValue={this.state.email}
                            emailChange={this.handleChange.bind(this, 'email')}
                            newsletterValue={this.state.newsletter}
                            newsletterChange={this.handleChange.bind(this, 'newsletter')}
                            adFirstnameValue={this.state.address_delivery.first_name}
                            adFirstnameChange={this.handleChange.bind(this, 'adfirst_name')}
                            adLastnameValue={this.state.address_delivery.last_name}
                            adLastnameChange={this.handleChange.bind(this, 'adlast_name')}
                            adStreetValue={this.state.address_delivery.street}
                            adStreetChange={this.handleChange.bind(this, 'adstreet')}
                            adStreetAddValue={this.state.address_delivery.street_add}
                            adStreetAddChange={this.handleChange.bind(this, 'adstreet_add')}
                            adCityValue={this.state.address_delivery.city}
                            adCityChange={this.handleChange.bind(this, 'adcity')}
                            adZipcodeValue={this.state.address_delivery.zipcode}
                            adZipcodeChange={this.handleChange.bind(this, 'adzipcode')}
                            adStateValue={this.state.address_delivery.state}
                            adStateChange={this.handleChange.bind(this, 'adstate')}
                            adCountryValue={this.state.address_delivery.country}
                            adCountryChange={this.handleChange.bind(this, 'adcountry')}
                            abFirstnameValue={this.state.address_billing.first_name}
                            abFirstnameChange={this.handleChange.bind(this, 'abfirst_name')}
                            abLastnameValue={this.state.address_billing.last_name}
                            abLastnameChange={this.handleChange.bind(this, 'ablast_name')}
                            abStreetValue={this.state.address_billing.street}
                            abStreetChange={this.handleChange.bind(this, 'abstreet')}
                            abStreetAddValue={this.state.address_billing.street_add}
                            abStreetAddChange={this.handleChange.bind(this, 'abstreet_add')}
                            abCityValue={this.state.address_billing.city}
                            abCityChange={this.handleChange.bind(this, 'abcity')}
                            abZipcodeValue={this.state.address_billing.zipcode}
                            abZipcodeChange={this.handleChange.bind(this, 'abzipcode')}
                            abStateValue={this.state.address_billing.state}
                            abStateChange={this.handleChange.bind(this, 'abstate')}
                            abCountryValue={this.state.address_billing.country}
                            abCountryChange={this.handleChange.bind(this, 'abcountry')}
                            submit={this.handleClickSubmit.bind(this)}
                        />
                    }
                </main>
            );
        }
    }
}

ProfilePage.propTypes = {
    logout:                 PropTypes.func.isRequired,
    location:               PropTypes.object.isRequired,
    edit:                   PropTypes.func.isRequired,
    history:                PropTypes.object.isRequired,
    getUserOrders:          PropTypes.func.isRequired,
    user_orders:            PropTypes.array.isRequired,
    fetching_user_orders:   PropTypes.bool.isRequired,
    resetRedirect:          PropTypes.func.isRequired,
    user:               PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.string
    ])
};

const mapStateToProps = state => {
    const { user } = state.user;
    const { user_orders, fetching_user_orders } = state.orders;
    return { user, user_orders, fetching_user_orders };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ logout, edit, getUserOrders, resetRedirect }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(ProfilePage);

// EXPORT COMPONENT

export { hoc as ProfilePage };