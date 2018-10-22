// IMPORT PACKAGE REFERENCES

import React from 'react';
import { Link } from 'react-router-dom';

// COMPONENT

export const Footer = () => (
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
                    <form method="post" action="">
                        <div className="wrap-input1 w-full p-b-4">
                            <label className="stext-301 cl0 p-b-30" htmlFor='newsletterEmail'>Newsletter</label>
                            <input id="newsletterEmail" className="input1 bg-none plh1 stext-107 cl7" type="email" name="email" placeholder="email@example.com" />
                            <div className="focus-input1 trans-04"></div>						    
                        </div>
                        <div className="p-t-18">
                            <button className="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04" type="submit">
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="p-t-40">
                <p className="stext-107 cl6 txt-center">
                    Copyright 2018 | All rights reserved 
                </p>
            </div>
        </div>
    </footer>
);