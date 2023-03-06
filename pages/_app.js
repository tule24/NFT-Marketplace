import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
// INTERNAL IMPORT
import { NavBar, Footer, Loader } from '@/components/Home'
import { NFTMarketplaceProvider } from '@/Context/NFTMarketplaceContext'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }) => (
    <ThemeProvider>
        <NFTMarketplaceProvider>
            <Head>
                <title>NFT Marketplace</title>
                <meta name='description' content='NFT Marketplace' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Loader />
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </NFTMarketplaceProvider>
    </ThemeProvider>
)

export default MyApp
