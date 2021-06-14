import { useRouter } from 'next/router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const isHome = router.pathname === '/'

  return (
    <div>
      {!isHome && <Header />}
      <Component {...pageProps} />
      {!isHome && <Footer />}
    </div>
  )
}

export default MyApp
