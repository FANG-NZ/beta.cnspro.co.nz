import '../assets/vendor/bootstrap-4.1/bootstrap.min.css'
import '../assets/vendor/css-hamburgers/hamburgers.css'
import '../assets/vendor/mdi-font/css/material-design-iconic-font.min.css'
import '../styles/main.css'

import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  ) 
}

export default MyApp
