import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import SliderSection from '../components/slider-section'

import Styles from '../styles/index.module.scss'


/**
 * defien the introduction section
 * @returns 
 */
const IntroSection = () => {

  return(
    <section className={`section-pp pp-easing section-pp--pad ${Styles.cnspro_intro_section}`} 
        data-background="light" 
        data-title="What we do"
    >
        
        <div className="page-line">
            <div className="container">
                <div className="page-line__inner">
                    <div className="page-col"></div>
                    <div className="page-col"></div>
                    <div className="page-col"></div>
                </div>
            </div>
        </div>
        
        <div className="section-content">
            <div className="container">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <article className="media media-service-1">
                            <figure className="media__img">
                                <div className="media__img-inner">
                                    <img src="https://freebw.com/templates/tatee/images/service-01.jpg" alt="architecture" />
                                </div>
                                <img className="img-line" src="images/line.png" alt="Line" />
                            </figure>

                            <div className="media__title title-number">
                                <h3 className="title title--sm">
                                    <a href="#">architecture</a>
                                </h3>
                                <span className="number">01</span>
                            </div>
                            <p className="media__text">
                              Although hierarchies exist for practical business management, every 
                              member of our team should feel the ability to make decisions and recommend 
                              how things could be done better. 
                            </p>
                        </article>
                    </div>

                    <div className="col-md-4">
                        <article className="media media-service-1">
                            <figure className="media__img">
                                <div className="media__img-inner">
                                    <img src="https://freebw.com/templates/tatee/images/service-02.jpg" alt="Interior" />
                                </div>
                                <img className="img-rotate-1 img-line" src="images/line.png" alt="Line" />
                            </figure>
                            <div className="media__title title-number">
                                <h3 className="title title--sm">
                                    <a href="#">Innovation & Design</a>
                                </h3>
                                <span className="number">02</span>
                            </div>
                            <p className="media__text">
                              To push boundaries, not accept the status quo, improve housing 
                              development processes and producing homes that will stand the test 
                              of time.
                            </p>
                        </article>
                    </div>
                    <div className="col-md-4">
                        <article className="media media-service-1">
                            <figure className="media__img">
                                <div className="media__img-inner">
                                    <img src="https://freebw.com/templates/tatee/images/service-03.jpg" alt="planning" />
                                </div>
                                <img className="img-rotate-2 img-line" src="images/line.png" alt="Line" />
                            </figure>
                            <div className="media__title title-number">
                                <h3 className="title title--sm">
                                    <a href="#">Community</a>
                                </h3>
                                <span className="number">03</span>
                            </div>
                            <p className="media__text">
                              To support the communities we build our developments in and enable 
                              our customers to live work and play doing things they love!
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

/**
 * define the projects section
 * @returns 
 */
const ProjectsSection = () => {

    return(
        <section className="wrap wrap--w1790 p-b-75">
            <div className="section-title m-b-70">
                <h5 className="title-sub">our works</h5>
                <h2 className="title-1">Latest projects</h2>
            </div>
            <div className="container-fluid">
                <div className="slick-wrap slick-project js-slick-wrapper">
                    <div className="slick-wrap-content">
                        <div className={`slick-content js-slick-content ${Styles.cnspro_slick_content}`}>

                            <div className={`slick-item ${Styles.cnspro_slick_item}`}>
                                <article className="media media-project">
                                    <figure className="media__img">
                                        <img src="https://freebw.com/templates/tatee/images/project-01.jpg" alt="luxury villa" />
                                    </figure>
                                    <div className="bg-overlay"></div>
                                    <span className="line"></span>
                                    <span className="line line--bottom"></span>
                                    <div className="media__body">
                                        <h3 className="title">
                                            <Link href="project">
                                                <a>Hamilton East</a>
                                            </Link>
                                        </h3>
                                        <div className="address">New Zealand</div>
                                    </div>
                                </article>
                            </div>

                            <div className={`slick-item ${Styles.cnspro_slick_item}`}>
                                <article className="media media-project">
                                    <figure className="media__img">
                                        <img src="https://freebw.com/templates/tatee/images/project-02.jpg" alt="wooden villa" />
                                    </figure>
                                    <div className="bg-overlay"></div>
                                    <span className="line"></span>
                                    <span className="line line--bottom"></span>
                                    <div className="media__body">
                                        <h3 className="title">
                                            <Link href="project">
                                                <a>Rototuna</a>
                                            </Link>
                                        </h3>
                                        <div className="address">Hamilton, New Zealand</div>
                                    </div>
                                </article>
                            </div>

                            <div className={`slick-item ${Styles.cnspro_slick_item}`}>
                                <article className="media media-project">
                                    <figure className="media__img">
                                        <img src="https://freebw.com/templates/tatee/images/project-03.jpg" alt="Skyline" />
                                    </figure>
                                    <div className="bg-overlay"></div>
                                    <span className="line"></span>
                                    <span className="line line--bottom"></span>
                                    <div className="media__body">
                                        <h3 className="title">
                                            <Link href="project">
                                                <a>Falgstaff</a>
                                            </Link>
                                        </h3>
                                        <div className="address">Hamilton</div>
                                    </div>
                                </article>
                            </div>

                            <div className={`slick-item ${Styles.cnspro_slick_item}`}>
                                <article className="media media-project">
                                    <figure className="media__img">
                                        <img src="https://freebw.com/templates/tatee/images/project-04.jpg" alt="Frozen house" />
                                    </figure>
                                    <div className="bg-overlay"></div>
                                    <span className="line"></span>
                                    <span className="line line--bottom"></span>
                                    <div className="media__body">
                                        <h3 className="title">
                                            <Link href="project">
                                                <a>Hillcrest</a>
                                            </Link>
                                        </h3>
                                        <div className="address">New Zealand</div>
                                    </div>
                                </article>
                            </div>
                            
                        </div>
                    </div>
                    {/* <div className="slick__nav arrows-1">
                        <i className="slick-prev slick-arrow js-slick-prev ti-angle-left"></i>
                        <i className="slick-next slick-arrow js-slick-next ti-angle-right"></i>
                    </div> */}
                </div>
            </div>
        </section>
    )
}


const PartnerSection = () => {

    return(
        <section className="p-t-15">
            <div className="container">
                <div className="section-title m-b-100">
                    <h5 className="title-sub">awesome partner</h5>
                    <h2 className="title-1">Our clients</h2>
                </div>
                <div className="row">

                    <div className="col-lg-3 col-md-6">
                        <a className="img-client" href="#">
                            <img src="images/icon/client-01.png" alt="Client 1" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a className="img-client" href="#">
                            <img src="images/icon/client-02.png" alt="Client 2" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a className="img-client" href="#">
                            <img src="images/icon/client-03.png" alt="Client 3" />
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <a className="img-client" href="#">
                            <img src="images/icon/client-04.png" alt="Client 4" />
                        </a>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}



export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - CNSPRO</title>
      </Head>

      {/* START page body */}
      <SliderSection  />

      <IntroSection />

      <ProjectsSection />

      <PartnerSection />

    </React.Fragment>
  )
}
