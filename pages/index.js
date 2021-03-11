import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
//import styles from '../styles/Home.module.css'

export default function HomePage() {
  return (
    <div className="page-wrapper">
      <Head>
         <title>CNSPRO</title>
         <link rel="icon" href="/favicon.ico" />
      </Head>

        <header id="header">
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
    </div>


    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main className={styles.main}>
    //     <h1 className={styles.title}>
    //       Welcome to <a href="https://nextjs.org">Next.js!</a>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing{' '}
    //       <code className={styles.code}>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h3>Documentation &rarr;</h3>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h3>Learn &rarr;</h3>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/master/examples"
    //         className={styles.card}
    //       >
    //         <h3>Examples &rarr;</h3>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h3>Deploy &rarr;</h3>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer className={styles.footer}>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
    //     </a>
    //   </footer>
    // </div>
  )
}
