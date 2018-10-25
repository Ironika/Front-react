// IMPORT PACKAGE REFERENCES

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import img from '../../images/icons/icon-email.png';
import { Banner } from '../shared/Banner/Banner';
import { Breadcrumb } from '../shared/Breadcrumb/Breadcrumb';
import { sendContact, closeContactModal } from '../../services/ContactService';
import { LoadingIndicator } from '../shared/LoadingIndicator/LoadingIndicator';
import Modal from 'react-modal';
import imgClose from '../../images/icons/icon-close.png';
import imgUser from '../../images/icons/icon-user.png';

// COMPONENT

class ContactPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            msg: ''
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.closeModal = this.closeModal.bind(this);
        Modal.setAppElement('#Contact');
    }

    closeModal() {
        this.props.closeContactModal();
    }

    handleChange(input, event) {
        if(input == 'email')
            this.setState({email: event.target.value});
        else
            this.setState({msg: event.target.value});
    }

    handleClick() {
        let token = window.localStorage.getItem('token');
        this.props.sendContact(token, this.state.email, this.state.msg);
    }

    render () {
        return (
            <main className="contact" id="Contact">
                <Banner title={'Contact'} className={'bg-img1'}/>

                <Breadcrumb title={'Contact'} haveSub={false}/>  

                <section className="bg0 p-t-104 p-b-116">
                    <div className="container">
                        <div className="flex-w flex-tr">
                            <div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
                                {!this.props.fetching_contact ?
                                    <div>
                                        <h4 className="mtext-105 cl2 txt-center p-b-30">
                                            Send Us A Message
                                        </h4>

                                        <div className="bor8 m-b-20 how-pos4-parent">
                                            <input className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" type="text" name="email" placeholder="Your Email Address" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} />
                                            <img className="how-pos4 pointer-none" src={img} alt="ICON"/>
                                        </div>

                                        <div className="bor8 m-b-30">
                                            <textarea className="stext-111 cl2 plh3 size-120 p-lr-28 p-tb-25" name="msg" placeholder="How Can We Help?" value={this.state.msg} onChange={this.handleChange.bind(this, 'msg')}></textarea>
                                        </div>

                                        <button type="submit" className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer" onClick={this.handleClick.bind(this)}>
                                            Submit
                                        </button>
                                    </div> :
                                    <LoadingIndicator busy={this.props.fetching_contact} />
                                }
                            </div> 

                            <div className="size-210 bor10 flex-w flex-col-m p-lr-93 p-tb-30 p-lr-15-lg w-full-md">
                                <div className="flex-w w-full p-b-42">
                                    <span className="fs-18 cl5 txt-center size-211">
                                        <span className="lnr lnr-map-marker"></span>
                                    </span>

                                    <div className="size-212 p-t-2">
                                        <span className="mtext-110 cl2">
                                            Address
                                        </span>

                                        <p className="stext-115 cl6 size-213 p-t-18">
                                            Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US
                                        </p>
                                    </div>
                                </div>

                                <div className="flex-w w-full p-b-42">
                                    <span className="fs-18 cl5 txt-center size-211">
                                        <span className="lnr lnr-phone-handset"></span>
                                    </span>

                                    <div className="size-212 p-t-2">
                                        <span className="mtext-110 cl2">
                                            Lets Talk
                                        </span>

                                        <p className="stext-115 cl1 size-213 p-t-18">
                                            +1 800 1236879
                                        </p>
                                    </div>
                                </div>

                                <div className="flex-w w-full">
                                    <span className="fs-18 cl5 txt-center size-211">
                                        <span className="lnr lnr-envelope"></span>
                                    </span>

                                    <div className="size-212 p-t-2">
                                        <span className="mtext-110 cl2">
                                            Sale Support
                                        </span>

                                        <p className="stext-115 cl1 size-213 p-t-18">
                                            contact@example.com
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Modal isOpen={this.props.modal} onRequestClose={this.closeModal}>
                    <div className="container">
                        <div className="bg0 p-lr-15-lg how-pos3-parent">
                            <button className="how-pos3 hov3 trans-04 btn-modal" onClick={this.closeModal}>
                                <img src={imgClose} alt="CLOSE" />
                            </button>
                            <div className="modal-product">
                                <img src={imgUser} alt="User" className="img-cart"/>
                                <p>{this.props.contact == 'success' ? 'Your email have been sent !' : 'An error occured !'}</p>
                            </div>
                        </div>
                    </div>
                </Modal>
            </main>
        );
    }
}

ContactPage.propTypes = {
    sendContact:            PropTypes.func.isRequired,
    fetching_contact:       PropTypes.bool.isRequired,
    contact:                PropTypes.string.isRequired,
    modal:                  PropTypes.bool.isRequired,
    closeContactModal:      PropTypes.func.isRequired
};

const mapStateToProps = state => {
    const { fetching_contact, contact, modal } = state.contact;
    return { fetching_contact, contact, modal };
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({ sendContact, closeContactModal }, dispatch)
);

const hoc = connect(mapStateToProps, mapDispatchToProps)(ContactPage);

export { hoc as ContactPage };