import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CarProvider } from '../hooks/car'
import { CepProvider } from '../hooks/cep'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CepProvider>
      <CarProvider>
        <Component {...pageProps} />
      </CarProvider>
    </CepProvider>
  )
}

export default MyApp
