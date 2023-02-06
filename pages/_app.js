import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
// INTERNAL IMPORT
import { NavBar, Footer } from '../components'
const MyApp = ({ Component, pageProps }) => (
    <ThemeProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
    </ThemeProvider>
)

export default MyApp
