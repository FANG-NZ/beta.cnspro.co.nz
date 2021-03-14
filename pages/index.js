import React, { useEffect } from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import SliderSection from '../components/slider-section'
//import $ from "../assets/vendor/jquery/jquery.min.js"


// const DynamicSliderSection = dynamic(
//   () => import('../components/slider-section'),
//   { ssr: false }
// );



export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Home - CNSPRO</title>
      </Head>

      {/* START page body */}
      <div className="page-line">
          <div className="container">
              <div className="page-line__inner">
                  <div className="page-col"></div>
                  <div className="page-col"></div>
                  <div className="page-col"></div>
              </div>
          </div>
      </div>

      <SliderSection  />

    </React.Fragment>
  )
}
