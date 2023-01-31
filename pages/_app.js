import '../styles/globals.css'
// INTERNAL IMPORT
import { NavBar } from '../components'
const MyApp = ({ Component, pageProps }) => (
    <div>
        <NavBar />
        <Component {...pageProps} />
    </div>
)

export default MyApp
