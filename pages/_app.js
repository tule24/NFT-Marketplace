import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
// INTERNAL IMPORT
import { NavBar, Footer } from '../components'
import { NFTMarketplaceProvider } from '../Context/NFTMarketplaceContext'
const MyApp = ({ Component, pageProps }) => (
    <ThemeProvider>
        <NFTMarketplaceProvider>
            <NavBar />
            <Component {...pageProps} />
            <Footer />
        </NFTMarketplaceProvider>
    </ThemeProvider>
)

export default MyApp
