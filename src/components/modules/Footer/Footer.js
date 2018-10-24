// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { subscribeNewsletter, closeModal } from '../../../services/NewsletterService';
import { LoadingIndicator } from '../../shared/LoadingIndicator/LoadingIndicator';
import Modal from 'react-modal';
import imgClose from '../../../images/icons/icon-close.png';
import imgUser from '../../../images/icons/icon-user.png';


// COMPONENT

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
    }

    componentDidMount() {
        this.handleChange = this.handleChange.bind(this);
        this.handleClickNewsletter = this.handleClickNewsletter.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal() {
        this.props.closeModal();
    }

    handleClickNewsletter() {
        let token = window.localStorage.getItem('token');
        this.props.subscribeNewsletter(token, this.state.email);
    }

    handleChange(event) {
        this.setState({email: event.target.value});
    }

    insertNewsletter() {
        return (
            !this.props.fetching_newsletter ?
                <div>
                    <div className="wrap-input1 w-full p-b-4">
                        <label className="stext-301 cl0 p-b-30" htmlFor='newsletterEmail'>Newsletter</label>
                        <input id="newsletterEmail" className="input1 bg-none plh1 stext-107 cl7" type="email" name="email" placeholder="email@example.com" value={this.state.email} onChange={this.handleChange.bind(this)} />
                        <div className="focus-input1 trans-04"></div>                           
                    </div>
                    <div className="p-t-18">
                        <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04" type="submit" onClick={this.handleClickNewsletter.bind(this)}>
                            Subscribe
                        </button>
                    </div>
                </div> :
                <LoadingIndicator busy={this.props.fetching_newsletter} />
        );
    }

    render() {
        return(
            <footer className="bg3 p-t-75 p-b-32">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3 p-b-50">
                            <h4 className="stext-301 cl0 p-b-30">
                                Help
                            </h4>
                            <ul>
                                <li className="p-b-10">
                                    <Link to="#" className="stext-107 cl7 hov-cl1 trans-04" title="Track Order">
                                        Track Order
                                    </Link>
                                </li>
                                <li className="p-b-10">
                                    <Link to="#" className="stext-107 cl7 hov-cl1 trans-04" title="Returns">
                                        Returns 
                                    </Link>
                                </li>
                                <li className="p-b-10">
                                    <Link to="#" className="stext-107 cl7 hov-cl1 trans-04" title="Shipping">
                                        Shipping
                                    </Link>
                                </li>
                                <li className="p-b-10">
                                    <Link to="#" className="stext-107 cl7 hov-cl1 trans-04" title="FAQS">
                                        FAQs
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-6 p-b-50">
                            <h4 className="stext-301 cl0 p-b-30">
                                GET IN TOUCH
                            </h4>
                            <p className="stext-107 cl7">
                                Any questions? Let us know in store at 8th floor, 379 Hudson St, New York,<br/> NY 10018 or call us on (+1) 96 716 6879
                            </p>
                            <div className="p-t-27">
                                <Link to="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16" title="Facebook">
                                    <i className="fa fa-facebook"></i>
                                </Link>
                                <Link to="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16" title="Instagram">
                                    <i className="fa fa-instagram"></i>
                                </Link>
                                <Link to="#" className="fs-18 cl7 hov-cl1 trans-04 m-r-16" title="Pinterest">
                                    <i className="fa fa-pinterest-p"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-3 p-b-50">
                            {this.insertNewsletter()}
                        </div>
                    </div>
                    <div className="p-t-40">
                        <p className="stext-107 cl6 txt-center">
                            Copyright 2018 | All rights reserved 
                        </p>
                    </div>
                </div>
                <Modal isOpen={this.props.modal} onRequestClose={this.closeModal}>
                    <div className="container">
                        <div className="bg0 p-lr-15-lg how-pos3-parent">
                            <button className="how-pos3 hov3 trans-04 btn-modal" onClick={this.closeModal}>
                                <img src={imgClose} alt="CLOSE" />
                            </button>
                            <div className="modal-product">
                                <img src={imgUser} alt="User" className="img-cart"/>
                                <p>{this.props.newsletter == 'success' ? 'Your email have been added to the newsletter !' : 'An error occured !'}</p>
                            </div>
                        </div>
                    </div>
                </Modal>
            </footer>
        );
    }

}

Footer.propTypes = {
    subscribeNewsletter: PropTypes.func.isRequired,
    fetching_newsletter: PropTypes.bool.isRequired,
    newsletter:          PropTypes.string.isRequired,
    modal:               PropTypes.bool.isRequired,
    closeModal:          PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const { fetching_newsletter, newsletter, modal } = state.newsletter;
    return { fetching_newsletter, newsletter, modal };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ subscribeNewsletter, closeModal }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps, null, { pure: false })(Footer);


export { hoc as Footer };