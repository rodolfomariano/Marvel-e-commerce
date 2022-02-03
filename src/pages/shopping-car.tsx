import Link from 'next/link'
import { useEffect, useState } from 'react'

import { setCookies, getCookie } from 'cookies-next'

import { FaBoxOpen, FaMapMarkedAlt, FaWallet, FaCheck } from 'react-icons/fa'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { RequestCard } from '../components/RequestCard'

import {
  Body,
  Main,
  Wrap,
  BreadcrumbContainer,
  PageTitle,
  StepsContainer,
  ProgressBar,
  Progress,
  Step,
  StepText,
  CarContainer,
  RequestsList,
  ValueContainer,
  SubTotal,
  SubTotalText,
  Span,
  SubTotalValue,
  Divider,
  CouponContainer,
  Coupon,
  CouponLabel,
  CouponInput,
  CouponMessage,
  DiscountContainer,
  DiscountLabel,
  DiscountResult,
  FormFretContainer,
  Label,
  Content,
  Input,
  SimulateShippingButton,
  IDontKnowCEP,
  TotalContainer,
  TotalLabel,
  Value,
  ContinueButton,
  BuyMoreButton
} from '../styles/shoppingCar'
import { useCar } from '../hooks/car'

interface CarList {
  id: string
  title: string
  isRare: string
  fullThumbnail: string
  amount: number
  hqPrice: number
}

export default function ShoppingCar() {
  const [progressBar, setProgressBar] = useState(0)

  const { getCarList, car } = useCar()

  const subTotal = car.reduce((sumTotal, product) => {
    return sumTotal += product.hqPrice * product.amount
  }, 0)



  console.log(car)

  useEffect(() => {
    getCarList()

  }, [])

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
              {car.map(item => (
                <RequestCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  amount={item.amount}
                  fullThumbnail={item.fullThumbnail}
                  hqPrice={(item.hqPrice)}
                  isRare={item.isRare}
                />

              ))}

            </RequestsList>

            <ValueContainer>
              <SubTotal>
                <SubTotalText>Subtotal <Span>({car.length > 1 ? `${car.length} itens` : `${car.length} item`})</Span></SubTotalText>

                <SubTotalValue>R$ {subTotal}</SubTotalValue>
              </SubTotal>

              <Divider />

              <CouponContainer>
                <Coupon>
                  <CouponLabel>Cupom de desconto</CouponLabel>
                  <CouponInput />
                </Coupon>

                <CouponMessage>Cupom HQ RARO aplicado</CouponMessage>
              </CouponContainer>

              <Divider />

              <DiscountContainer>
                <DiscountLabel>Desconto</DiscountLabel>
                <DiscountResult>R$ 1,77</DiscountResult>
              </DiscountContainer>

              <Divider />

              <FormFretContainer>
                <Label>Consulte o prazo de entrega</Label>

                <Content>
                  <Input placeholder='Digite o CEP' />

                  <SimulateShippingButton>Consultar</SimulateShippingButton>
                </Content>

                <IDontKnowCEP>Não sei meu CEP</IDontKnowCEP>
              </FormFretContainer>

              <Divider />

              <TotalContainer>
                <TotalLabel>Valor total:</TotalLabel>
                <Value>R$ 33,72</Value>
              </TotalContainer>

              <ContinueButton>Continuar</ContinueButton>

              <BuyMoreButton>Comprar mais</BuyMoreButton>

            </ValueContainer>
          </CarContainer>

        </Wrap>
      </Main>

      <Footer />
    </Body>
  )
}