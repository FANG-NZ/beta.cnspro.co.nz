import Head from 'next/head'
import React from 'react'

export default function ContactUsPage(){


    return(
        <React.Fragment>
            <Head>
                <title>Contact Us - CNSPRO</title>
            </Head>

            <section className="section p-t-60 p-b-60">
                <div className="container">
                    <div className="page-heading">
                        <h4 className="title-sub title-sub--c8 m-b-15">Let’s work with us</h4>
                        <h2 className="title-2">Together we can make dream come true</h2>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="wrap wrap--w1790">
                    <div className="container-fluid">
                        <img src="https://freebw.com/templates/tatee/images/page-img-01.jpg" alt="Page Image" />
                    </div>
                </div>
            </section>

            <section className="section p-t-60 p-b-60">
                <div className="container">

                    <div className="row no-gutters">
                        <div className="col-lg-4">
                            <div className="contact-info">
                                <div className="contact-info__item">
                                    <h5 className="title--sm2">address:</h5>
                                    <p className="value">998 anystreet . Hamilton , New Zealand</p>
                                </div>
                                <div className="contact-info__item">
                                    <h5 className="title--sm2">PHONE NUMBER :</h5>
                                    <p className="value">+ (64) 998-6688</p>
                                </div>
                                <div className="contact-info__item">
                                    <h5 className="title--sm2">email:</h5>
                                    <p className="value">info@cnspro.co.nz</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <form className="form-contact js-contact-form" method="POST" action="#">
                                <div className="form-row no-gutters">
                                    <div className="col-md-6">
                                        <input className="au-input" type="text" name="name" placeholder="Name" required="required" />
                                        <input className="au-input" type="email" name="email" placeholder="Email Address" required="required" pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" />
                                        <input className="au-input" type="text" name="phone" placeholder="Phone" required="required" />
                                    </div>
                                    <div className="col-md-6 p-r-0">
                                        <textarea className="au-textarea" name="message" placeholder="Message*" required="required"></textarea>
                                        <div className="text-right">
                                            <button className="au-btn au-btn--solid" type="submit">Send message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </section>
        </React.Fragment>
    )
}