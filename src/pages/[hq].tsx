import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'

import { CardHqDetails } from '../components/CardHqDetails'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { SmallCard } from '../components/SmallCard'

import {
  Body,
  Main,
  Wrap,
  BreadcrumbContainer,
  PageTitle,
  HQToBuyDetailsContainer,
  BuyCardContainer,
  HQAvailability,
  Text,
  HQPrice,
  FormFretContainer,
  Label,
  Content,
  Input,
  SimulateShippingButton,
  IDontKnowCEP,
  BuyCardFooter,
  Actions,
  AddToCarButton,
  AddToFavoritesButton,
  YouCanLikeTitle,
  YouCanLikeContainer
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

            <BuyCardContainer>
              <HQAvailability>
                <Text>Disponibilidade: Pronta entrega</Text>
              </HQAvailability>

              <HQPrice>R$ 35, 50</HQPrice>

              <FormFretContainer>
                <Label>Consulte o prazo de entrega</Label>

                <Content>
                  <Input placeholder='Digite o CEP' />

                  <SimulateShippingButton>Consultar</SimulateShippingButton>
                </Content>

                <IDontKnowCEP>Não sei meu CEP</IDontKnowCEP>
              </FormFretContainer>

              <BuyCardFooter>
                <Actions>
                  <AddToCarButton>Add to car</AddToCarButton>

                  <AddToFavoritesButton>
                    <FaHeart size={20} />
                  </AddToFavoritesButton>
                </Actions>

              </BuyCardFooter>
            </BuyCardContainer>

          </HQToBuyDetailsContainer>

          <YouCanLikeTitle>Você pode gostar!</YouCanLikeTitle>

          <YouCanLikeContainer>
            <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </YouCanLikeContainer>

        </Wrap>
      </Main>

      <Footer />
    </Body>
  )
}