
import Link from 'next/link'
import { CardHqDetails } from '../components/CardHqDetails'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

import {
  Body,
  Main,
  Wrap,
  BreadcrumbContainer,
  PageTitle,
  HQToBuyDetailsContainer
} from '../styles/hq'

export default function HQ() {
  return (
    <Body>
      <Header />

      <Main>
        <Wrap>
          <BreadcrumbContainer>
            <Link href='/'>
              <a>Home</a>
            </Link>
          </BreadcrumbContainer>

          <PageTitle>Wolverine o imortal</PageTitle>

          <HQToBuyDetailsContainer>
            <CardHqDetails />
          </HQToBuyDetailsContainer>

        </Wrap>
      </Main>

      <Footer />
    </Body>
  )
}