import React from 'react'
import Head from 'next/head'

import Styles from '../styles/project.module.scss'

export default function ProjectPage(){

    const _title = "Test title"
    const _location = "Somewhere"

    return(
        <React.Fragment>
        <div className="container">
            <Head>
                <title>{_title} - CNSPRO</title>
            </Head>

            <section className="section p-t-60 p-b-60">
                <div className="container">
                    <div className="page-heading">
                        <h4 className="title-sub title-sub--c8 m-b-15">{_title}</h4>
                        <h2 className="title-2">
                            {_location}
                        </h2>
                    </div>
                </div>
            </section>

            {/* START project content */}
            <article className={`project-style-4 ${Styles.cnspro_project_style}`}>

                <div className="row m-t-20 m-b-20">
                    <div className="col-lg-5">
                        <div className={`entry-meta ${Styles.cnspro_entry_meta}`}>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="entry-meta__item">
                                        <h4 className="key">
                                            <i className="fa fa-bed"></i>
                                            Bedrooms:</h4>
                                        <span className="value">5</span>
                                    </div>
                                    <div className="entry-meta__item">
                                        <h4 className="key">Bathrooms:</h4>
                                        <span className="value">2</span>
                                    </div>
                                    <div className="entry-meta__item">
                                        <h4 className="key">Land area:</h4>
                                        <span className="value">230 m2</span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="entry-meta__item">
                                        <h4 className="key">Carpark:</h4>
                                        <span className="value">2</span>
                                    </div>
                                    <div className="entry-meta__item">
                                        <h4 className="key">Living room:</h4>
                                        <span className="value">2</span>
                                    </div>
                                    <div className="entry-meta__item">
                                        <h4 className="key">Floor area:</h4>
                                        <span className="value">92 m2</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="entry-content">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam remaperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                                sit
                            </p>
                        </div>
                        {/* <div className="entry-share">
                            <span className="key">Share :</span>
                            <ul className="list-social list-social--md">
                                <li className="list-social__item">
                                    <a className="ic-fb" href="#">
                                        <i className="zmdi zmdi-facebook"></i>
                                    </a>
                                </li>
                                <li className="list-social__item">
                                    <a className="ic-insta" href="#">
                                        <i className="zmdi zmdi-instagram"></i>
                                    </a>
                                </li>
                                <li className="list-social__item">
                                    <a className="ic-twi" href="#">
                                        <i className="zmdi zmdi-twitter"></i>
                                    </a>
                                </li>
                                <li className="list-social__item">
                                    <a className="ic-pinterest" href="#">
                                        <i className="zmdi zmdi-pinterest"></i>
                                    </a>
                                </li>
                                <li className="list-social__item">
                                    <a className="ic-google" href="#">
                                        <i className="zmdi zmdi-google"></i>
                                    </a>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
                    
                <div className="masonry-row js-isotope-wrapper">
                    <div className="row isotope-content">
                        <div className="col-md-6 col-lg-4 isotope-item isotope-item-sizer">
                            <img className="wp-post-image" src="https://freebw.com/templates/tatee/images/post-05.jpg" alt="Post 1" />
                        </div>
                        <div className="col-md-6 col-lg-4 isotope-item">
                            <img className="wp-post-image" src="https://freebw.com/templates/tatee/images/post-06.jpg" alt="Post 2" />
                        </div>
                        <div className="col-md-6 col-lg-4 isotope-item">
                            <img className="wp-post-image" src="https://freebw.com/templates/tatee/images/post-07.jpg" alt="Post 3" />
                        </div>
                        <div className="col-lg-8 isotope-item">
                            <img className="wp-post-image" src="https://freebw.com/templates/tatee/images/post-08.jpg" alt="Post 4" />
                        </div>
                        <div className="col-md-6 col-lg-4 isotope-item">
                            <img className="wp-post-image" src="https://freebw.com/templates/tatee/images/post-09.jpg" alt="Post 5" />
                        </div>
                    </div>
                </div>
                    
            </article>
        </div>

        <nav class="navigation project-navigation">
            <div class="container">
                <div class="nav-links">
                    {/* <div class="nav-previous">
                        <a href="#">
                            <span class="ti-arrow-left"></span>
                        </a>
                    </div> */}
                    <div class="all-link-wrap">
                        <a class="all-link" href="#">
                            <i class="fa fa-undo"></i>
                            Back
                        </a>
                    </div>
                    {/* <div class="nav-next">
                        <a href="#">
                            <span class="ti-arrow-right"></span>
                        </a>
                    </div> */}
                </div>
            </div>
        </nav>
        </React.Fragment>
    )
}