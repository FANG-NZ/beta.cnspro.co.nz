import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Styles from '../styles/project.module.scss'

export default function ProjectPage(){

    const _title = "Test title"
    const _location = "Somewhere"

    return(
        <React.Fragment>
        <div className={`container ${Styles.cnspro_container}`}>
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
                                            <span>Bedrooms:</span>
                                        </h4>
                                        <span className="value">5</span>
                                    </div>
                                    <div className="entry-meta__item">
                                        <h4 className="key">
                                            <i class="fa fa-bath"></i>
                                            <span>Bathrooms:</span>
                                        </h4>
                                        <span className="value">2</span>
                                    </div>
                                    <div className="entry-meta__item">
                                        <h4 className="key">Land area:</h4>
                                        <span className="value">230 m2</span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="entry-meta__item">
                                        <h4 className="key">
                                            <i className="fa fa-warehouse"></i>
                                            <span>Carpark:</span>
                                        </h4>
                                        <span className="value">2</span>
                                    </div>
                                    <div className="entry-meta__item">
                                        <h4 className="key">
                                            <i className="fa fa-couch"></i>
                                            <span>Living room:</span>
                                        </h4>
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

        <nav className={`navigation project-navigation ${Styles.cnspro_navigation}`}>
            <div className="container">
                <div className={`nav-links ${Styles.nav_links}`}>
                    {/* <div className="nav-previous">
                        <a href="#">
                            <span className="ti-arrow-left"></span>
                        </a>
                    </div> */}
                    <div className={`all-link-wrap ${Styles.cnspro_link_wrap}`}>
                        <Link href="/">
                            <a className={Styles.cnspro_nav_link}>
                                <i className="fa fa-home"></i>
                                <span>Home</span>
                            </a>
                        </Link>
                    </div>
                    <div className={`nav-next ${Styles.cnspro_link_wrap}`}>
                        <Link href="/all-projects">
                            <a className={Styles.cnspro_nav_link}>
                                <i className="fa fa-th-list"></i>
                                <span>All projects</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
        </React.Fragment>
    )
}


/**
 * To define the static props here
 * @returns 
 */
// export async function getStaticProps() {
    
//     return {
//         props: {
//             isShowPageLine: false
//         }
//     }
// }