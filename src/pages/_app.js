import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import {Montserrat} from "next/font/google"

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

export default function App({ Component, pageProps }) {
  return (
    <>
    <main className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </main>
    </>
  )
  
}
