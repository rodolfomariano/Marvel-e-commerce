import { useState } from 'react'

import { FaBoxOpen, FaMapMarkedAlt, FaWallet, FaCheck } from 'react-icons/fa'

import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { RequestCard } from '../../components/RequestCard'

import {
  Body,
  Main,
  Wrap,
  PageTitle,
  StepsContainer,
  ProgressBar,
  Progress,
  Step,
  StepText,
  CarContainer,
  RequestsList,
  ValueContainer
} from './shoppingCar'

export default function ShoppingCar() {
  const [progressBar, setProgressBar] = useState(66)

  return (
    <Body>
      <Header />

      <Main>
        <Wrap>
          <PageTitle>Meu Carrinho</PageTitle>

          <StepsContainer>
            <ProgressBar>
              <Progress style={{ width: `${progressBar}%` }} />

              <Step id='4'
                style={{
                  background: progressBar === 100 ? '#88DD8C' : '#EBEBEB',
                  color: progressBar === 100 ? '#FFFFFF' : '#A9A9A9'
                }}  >
                <FaCheck size={16} />
                <StepText>Dados da compra</StepText>
              </Step>

              <Step id='3'
                style={{
                  background: progressBar > 66 ? '#88DD8C' : '#EBEBEB',
                  color: progressBar > 66 ? '#FFFFFF' : '#A9A9A9'
                }}>
                <FaWallet size={16} />
                <StepText>Formas de pagamento</StepText>
              </Step>

              <Step id='2'
                style={{
                  background: progressBar > 33 ? '#88DD8C' : '#EBEBEB',
                  color: progressBar > 33 ? '#FFFFFF' : '#A9A9A9'
                }} >
                <FaMapMarkedAlt size={16} />
                <StepText>Endereço de entrega</StepText>
              </Step>

              <Step id='1'
                style={{
                  background: progressBar > 0 ? '#88DD8C' : '#EBEBEB',
                  color: progressBar > 0 ? '#FFFFFF' : '#A9A9A9'
                }}>
                <FaBoxOpen size={16} />
                <StepText>Em seu carrinho</StepText>
              </Step>


            </ProgressBar>

          </StepsContainer>

          <CarContainer>
            <RequestsList>
              <RequestCard />
            </RequestsList>

            <ValueContainer>

            </ValueContainer>
          </CarContainer>

        </Wrap>
      </Main>

      <Footer />
    </Body>
  )
}