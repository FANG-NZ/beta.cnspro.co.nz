import Head from 'next/head'
import React from 'react'

export default function AboutUsPage(){

    return(
        <React.Fragment>
            <Head>
                <title>About Us - CNSPRO</title>
            </Head>

            <section className="section p-t-100 p-b-65">
                <div className="container">
                    <div className="page-heading">
                        <h4 className="title-sub title-sub--c8 m-b-15">we are CNSPRO</h4>
                        <h2 className="title-2">Our bulding are inspired by
                            <br/>the challenge of balancing function & beauty .</h2>
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

            {/* what we do section */}
            <section className="p-t-60 p-b-60">
                <div className="container">
                    <div className="section-title">
                        <h5 className="title-sub">what we do</h5>
                        <h2 className="title-1">Our specilization</h2>
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-6 col-lg-4">
                            <article className="media media-service">
                                <figure className="media__img">
                                    <img src="images/icon/service-01.png" alt="architecture" />
                                </figure>
                                <div className="media__title">
                                    <h3 className="title">
                                        <a href="#">architecture</a>
                                    </h3>
                                    <span className="number">01</span>
                                </div>
                                <p className="media__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo invest ntore veritatis et quasi architecto beatae vitaest dicta sunt explicabo.
                                    Nemo enim ipsam vost lmat oluptatem quia voluptas sit aspernatur</p>
                            </article>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <article className="media media-service">
                                <figure className="media__img">
                                    <img src="images/icon/service-02.png" alt="Interior" />
                                </figure>
                                <div className="media__title">
                                    <h3 className="title">
                                        <a href="#">Innovation & Design</a>
                                    </h3>
                                    <span className="number">02</span>
                                </div>
                                <p className="media__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo invest ntore veritatis et quasi architecto beatae vitaest dicta sunt explicabo.
                                    Nemo enim ipsam vost lmat oluptatem quia voluptas sit aspernatur</p>
                            </article>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <article className="media media-service">
                                <figure className="media__img">
                                    <img src="images/icon/service-03.png" alt="planning" />
                                </figure>
                                <div className="media__title">
                                    <h3 className="title">
                                        <a href="#">Community</a>
                                    </h3>
                                    <span className="number">03</span>
                                </div>
                                <p className="media__text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo invest ntore veritatis et quasi architecto beatae vitaest dicta sunt explicabo.
                                    Nemo enim ipsam vost lmat oluptatem quia voluptas sit aspernatur</p>
                            </article>
                        </div>
                    </div>
                </div>
            </section>


        </React.Fragment>
    )
}