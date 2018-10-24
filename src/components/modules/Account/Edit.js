// IMPORT PACKAGE REFERENCES

import React from 'react';
import PropTypes from 'prop-types';

// COMPONENT


export const Edit = (props) => (
    <section className="bg0 p-t-50 p-b-116">
        <div className="container">
            <div className="fos_user_profile_edit">
                <div className="flex-w flex-tr">
                    <div className="size-420 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full">
                        <h3 className="mtext-105 cl2 txt-center p-b-30">Update infos</h3>
                        {props.error != '' && <p className='login-error'>{props.error}</p>}
                        <div className="bor8 m-b-20 how-pos4-parent">
                            <input type="text" className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="Email" value={props.emailValue} onChange={props.emailChange}/>
                        </div>
                        <div className="newsletter">
                            <label>Subscribe to the newsletter</label>
                            <input type="checkbox" value={props.newsletterValue} defaultChecked={props.newsletterValue} onChange={props.newsletterChange}/>
                        </div>
                    </div>
                </div>
                <div className="flex-w flex-tr">
                    <div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
                        <h3 className="mtext-105 cl2 txt-center p-b-30">Delivery Address</h3>

                        <div className="bor8 m-b-20 how-pos4-parent">
                            <input type="text" className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="First name *" value={props.adFirstnameValue} onChange={props.adFirstnameChange}/>
                        </div>

                        <div className="bor8 m-b-20 how-pos4-parent">
                            <input type="text" className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="Last name *" value={props.adLastnameValue} onChange={props.adLastnameChange}/>
                        </div>

                        <div className="bor8 m-b-20 how-pos4-parent">
                            <input type="text" className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="Street *" value={props.adStreetValue} onChange={props.adStreetChange}/>
                        </div>

                        <div className="bor8 m-b-20 how-pos4-parent">
                            <input type="text" className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="Street add" value={props.adStreetAddValue} onChange={props.adStreetAddChange}/>
                        </div>

                        <div className="bor8 m-b-20 how-pos4-parent">
                            <input type="text" className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="City *" value={props.adCityValue} onChange={props.adCityChange}/>
                        </div>

                        <div className="bor8 m-b-20 how-pos4-parent">
                            <input type="text" className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="ZipCode *" value={props.adZipcodeValue} onChange={props.adZipcodeChange}/>
                        </div>

                        <div className="bor8 m-b-20 how-pos4-parent">
                            <input type="text" className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="State" value={props.adStateValue} onChange={props.adStateChange}/>
                        </div>

                        <div className="bor8 m-b-20 how-pos4-parent">
                            <input type="text" className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="Country *" value={props.adCountryValue} onChange={props.adCountryChange}/>
                        </div>
                    </div>
                    <div className="size-210 bor10 p-lr-70 p-t-55 p-b-70 p-lr-15-lg w-full-md">
                        <h3 className="mtext-105 cl2 txt-center p-b-30">Billing Address</h3>

                        <div className="bor8 m-b-20 how-pos4-parent">
                            <input type="text" className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="First name *" value={props.abFirstnameValue} onChange={props.abFirstnameChange}/>
                        </div>

                        <div className="bor8 m-b-20 how-pos4-parent">
                            <input type="text" className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="Last name *" value={props.abLastnameValue} onChange={props.abLastnameChange}/>
                        </div>

                        <div className="bor8 m-b-20 how-pos4-parent">
                            <input type="text" className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="Street *" value={props.abStreetValue} onChange={props.abStreetChange}/>
                        </div>

                        <div className="bor8 m-b-20 how-pos4-parent">
                            <input type="text" className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="Street add" value={props.abStreetAddValue} onChange={props.abStreetAddChange}/>
                        </div>

                        <div className="bor8 m-b-20 how-pos4-parent">
                            <input type="text" className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="City *" value={props.abCityValue} onChange={props.abCityChange}/>
                        </div>

                        <div className="bor8 m-b-20 how-pos4-parent">
                            <input type="text" className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="ZipCode *" value={props.abZipcodeValue} onChange={props.abZipcodeChange}/>
                        </div>

                        <div className="bor8 m-b-20 how-pos4-parent">
                            <input type="text" className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="State" value={props.abStateValue} onChange={props.abStateChange}/>
                        </div>

                        <div className="bor8 m-b-20 how-pos4-parent">
                            <input type="text" className="stext-111 cl2 plh3 size-116 p-l-62 p-r-30" placeholder="Country *" value={props.abCountryValue} onChange={props.abCountryChange}/>
                        </div>
                    </div>
                    <div className="submit-edit">
                        <input type="submit" value="Submit" className="flex-c-m stext-101 cl0 size-121 bg3 bor1 hov-btn3 p-lr-15 trans-04 pointer" onClick={props.submit} />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

Edit.propTypes = {
    emailValue:         PropTypes.string.isRequired,
    emailChange:        PropTypes.func.isRequired,
    newsletterValue:    PropTypes.bool.isRequired,
    newsletterChange:   PropTypes.func.isRequired,
    adFirstnameValue:   PropTypes.string.isRequired,
    adFirstnameChange:  PropTypes.func.isRequired,
    adLastnameValue:    PropTypes.string.isRequired,
    adLastnameChange:   PropTypes.func.isRequired,
    adStreetValue:      PropTypes.string.isRequired,
    adStreetChange:     PropTypes.func.isRequired,
    adStreetAddValue:   PropTypes.string.isRequired,
    adStreetAddChange:  PropTypes.func.isRequired,
    adCityValue:        PropTypes.string.isRequired,
    adCityChange:       PropTypes.func.isRequired,
    adZipcodeValue:     PropTypes.string.isRequired,
    adZipcodeChange:    PropTypes.func.isRequired,
    adStateValue:       PropTypes.string.isRequired,
    adStateChange:      PropTypes.func.isRequired,
    adCountryValue:     PropTypes.string.isRequired,
    adCountryChange:    PropTypes.func.isRequired,
    abFirstnameValue:   PropTypes.string.isRequired,
    abFirstnameChange:  PropTypes.func.isRequired,
    abLastnameValue:    PropTypes.string.isRequired,
    abLastnameChange:   PropTypes.func.isRequired,
    abStreetValue:      PropTypes.string.isRequired,
    abStreetChange:     PropTypes.func.isRequired,
    abStreetAddValue:   PropTypes.string.isRequired,
    abStreetAddChange:  PropTypes.func.isRequired,
    abCityValue:        PropTypes.string.isRequired,
    abCityChange:       PropTypes.func.isRequired,
    abZipcodeValue:     PropTypes.string.isRequired,
    abZipcodeChange:    PropTypes.func.isRequired,
    abStateValue:       PropTypes.string.isRequired,
    abStateChange:      PropTypes.func.isRequired,
    abCountryValue:     PropTypes.string.isRequired,
    abCountryChange:    PropTypes.func.isRequired,
    submit:             PropTypes.func.isRequired,
    error:              PropTypes.string.isRequired,
};