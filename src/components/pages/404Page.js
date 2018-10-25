// IMPORT PACKAGE REFERENCES

import React from 'react';
import img1 from '../../images/404.png';
import { Banner } from '../shared/Banner/Banner';
import { Breadcrumb } from '../shared/Breadcrumb/Breadcrumb';


// COMPONENT

const NotFoundPage = () => {
    window.scrollTo(0, 0);
    return (
        <main className="404">
            <Banner title={'Page not Found'} className={'bg-img1'}/>

            <Breadcrumb title={'Page not Found'} haveSub={false}/>

            <section className="bg0 p-t-75 p-b-120">
                <div className="container">
                    <div className="row p-b-148">
                        <div className="col-md-6 col-lg-6">
                            <div className="p-t-7 p-r-85 p-r-15-lg p-r-0-md">
                                <h3 className="mtext-111 cl2 p-b-16">
                                    404 : Page not Found
                                </h3>
                                <p>We&apos;re sorry, but the page you&apos;re looking for could not be found.</p>
                            </div>
                        </div>
                        <div className="col-11 col-md-6 col-lg-6 m-lr-auto">
                            <div className="how-bor1 ">
                                <div className="hov-img0">
                                    <img src={img1} alt="404" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>	
        </main>
    );
};

export { NotFoundPage };