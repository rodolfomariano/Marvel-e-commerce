import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CarProvider } from '../hooks/car'
import { CepProvider } from '../hooks/cep'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CarProvider>
      <CepProvider>
        <Component {...pageProps} />
      </CepProvider>
    </CarProvider>
  )
}

export default MyApp
