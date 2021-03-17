import '../assets/vendor/bootstrap-4.1/bootstrap.min.css'
import '../assets/vendor/css-hamburgers/hamburgers.css'
import '../assets/vendor/mdi-font/css/material-design-iconic-font.min.css'
import '../assets/vendor/font-awesome-5/css/fontawesome-all.min.css'

import '../public/js/revolution/css/layers.css'
import '../public/js/revolution/css/navigation.css'
import '../public/js/revolution/css/settings.css'

import '../styles/main.css'
import '../styles/cnspro.scss'

import App from 'next/app'
import Layout from '../components/layout'

function MyApp({ Component, pageProps, router }) {

  return(
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  ) 
}


export default MyApp
