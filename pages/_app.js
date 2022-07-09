import "../styles/globals.css";
import Head from 'next/head'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Layout from "../components/Layout";



const MyApp = ({ Component, pageProps }) => {

return <>
{/* <Head>
    
</Head> */}
<Layout>
    <Component {...pageProps} />
</Layout>

</>
};
export default MyApp;