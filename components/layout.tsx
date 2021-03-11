import React, { ReactNode } from 'react'
import Head from "next/head"
import Header from '../components/header'

type Props = {
    children?: ReactNode,
    title?: string
}

const Layout = ({children, title="PAGE"}:Props) => {
    return(
        <div className="page-wrapper">
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />

                <link rel="icon" href="/favicon.ico" />

                <meta
                    name="description"
                    content="CNS Properties, Hamilton, New Zealand"
                />
            </Head>

            {/* Page Header */}
            <Header />
            
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