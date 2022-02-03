import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CarProvider } from '../hooks/car'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CarProvider>
      <Component {...pageProps} />
    </CarProvider>
  )
}

export default MyApp
