import React, { ReactNode } from 'react'
import Head from "next/head"
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    children?: ReactNode,
    title?: string
}

const Layout = ({children, title="PAGE"}:Props) => {
    return(
        <div className="page-wrapper">
            <Head>
                <title>{title} - CNSPRO</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header id="header">
                {/* normal header */}
                <div className="header header-1 d-none d-lg-block js-header-1">
                    <div className="header__bar">
                        <div className="wrap wrap--w1790">
                            <div className="container-fluid">
                                <div className="header__content">
                                    <div className="logo">                            
                                        <Image  
                                        src="/images/cns-icon-152.png"
                                        width="60"
                                        height="60"
                                        alt="CNSPRO"
                                        />
                                        <span>CNSPRO</span>
                                    </div>

                                    <div className="header__content-right">
                                        <nav className="header-nav-menu">
                                            <ul className="menu nav-menu">
                                                <li className="menu-item menu-item-has-children">
                                                    <a href="home-main.html">Home</a>
                                                </li>
                                                <li className="menu-item">
                                                    <Link href="/about-us">
                                                    about
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                        {/* social links */}
                                        <div className="header-social">
                                            <ul className="list-social">
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
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* mobile header */}
                <div className="header-mobile d-block d-lg-none">
                    <div className="header-mobile__bar">
                        <div className="container-fluid">
                            <div className="header-mobile__bar-inner">
                                <a className="logo" href="index.html">
                                    <img src="/images/cns-icon-76.png" alt="CNSPRO" />
                                </a>
                                <button className="hamburger hamburger--slider float-right" type="button">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner"></span>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <nav className="header-nav-menu-mobile">
                        <div className="container-fluid">
                            <ul className="menu nav-menu menu-mobile">
                                <li className="menu-item menu-item-has-children">
                                    <a href="home-main.html">Home</a>
                                </li>
                                <li className="menu-item">
                                    <a href="about-us.html">about</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

            <main id="main">
                {children}
            </main>
            
            <footer className="footer bg-parallax">
                <h1>TEST FOOTER</h1>
            </footer>
        </div>
    )
}

export default Layout