import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

/**
 * It is to return year formart for copyright
 * @returns Years string
 */
const copyrightYear = () => {
    const _current = new Date().getFullYear()
    return `${_current} - 2020`
}

const Footer = () => {

    return(
        <footer className="footer bg-parallax">
            <div className="bg-overlay bg-overlay--p85" style={{backgroundColor: "0, 0, 0, 0.75"}}></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="footer-col">
                            <div className="widget m-b-25">
                                <div>
                                    <Image 
                                        src="/images/cns-logo-176X176.png"
                                        alt="CNSPRO"
                                        width="60"
                                        height="60"
                                    />
                                </div>
                            </div>
                            <div className="widget widget-address">
                                <ul>
                                    <li>Address : 666 somewhere street, Hamilton, New Zealand</li>
                                    <li>Phone number : (0064) 888 6888</li>
                                    <li>Email : info@cnspro.co.nz</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="footer-col p-l-70 p-md-l-0">
                            <div className="widget widget_pages">
                                <h4 className="widget-title">Link</h4>
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about-us">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-col p-l-70 p-md-l-0">
                            <h4 className="widget-title">Social</h4>
                            <div className="widget widget_socials">
                                <ul className="list-social list-social-2">
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
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-col">
                            <div className="widget widget_text">
                                <h4 className="widget-title">copyright</h4>
                                <p>©{copyrightYear()} CNSPRO.<br/> Designed by FSTUDIO</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer