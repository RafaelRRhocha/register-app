import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AppProvider } from '../data/context/AppContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Manager Clients</title>
      </Head>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
  </>
  )
}

export default MyApp
