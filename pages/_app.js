import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
// INTERNAL IMPORT
import { NavBar, Footer, Loader } from '@/components/Home'
import { NFTMarketplaceProvider } from '@/Context/NFTMarketplaceContext'

const MyApp = ({ Component, pageProps }) => (
    <ThemeProvider>
        <NFTMarketplaceProvider>
            <Loader />
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </NFTMarketplaceProvider>
    </ThemeProvider>
)

export default MyApp
