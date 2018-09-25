// IMPORT PACKAGE REFERENCES

import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// IMPORT PROJECT REFERENCES

import { Header } from '../modules/Header/Header';
import { Footer } from '../modules/Footer/Footer';
import { HomePage } from '../pages/HomePage';
import { ShopPage } from '../pages/ShopPage';
import { BlogPage } from '../pages/BlogPage';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { ZipCodesPage } from '../pages/ZipCodesPage';


// COMPONENT

export const AppRouter = () => (
    <BrowserRouter>
        <Fragment>
            <Header />
            <Switch>
                <Route path='/' component={HomePage} exact={true} />
                <Route path='/shop' component={ShopPage} />
                <Route path="/blogs/:slug" component={BlogPage}/>
                <Route path='/blogs' component={BlogPage} />
                <Route path='/zipcodes' component={ZipCodesPage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/contact' component={ContactPage} />
                <Redirect to="/" />
            </Switch>
            <Footer />
        </Fragment>
    </BrowserRouter>
);