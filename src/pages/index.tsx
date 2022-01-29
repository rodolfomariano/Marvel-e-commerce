import type { NextPage } from 'next'
import { Footer } from '../components/Footer'

import { Header } from '../components/Header'
import { SmallCardDearest } from '../components/SmallCardDearest'

import {
  Head,
  Main,
  Wrap
} from '../styles/home'

const Home: NextPage = () => {
  return (
    <Head>
      <Header />
      <Main>
        <Wrap>
          <h1>oi</h1>

          <SmallCardDearest />

        </Wrap>

      </Main>
      <Footer />
    </Head>
  )
}

export default Home
