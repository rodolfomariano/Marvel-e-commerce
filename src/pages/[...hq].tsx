import { useState, useEffect, FormEvent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { FaHeart } from 'react-icons/fa'

import { Oval } from 'react-loader-spinner'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { api, apiAuthenticate, cepAPI } from '../services/api'

import { useCar } from '../hooks/car'
import { useCep } from '../hooks/cep'

import { coinFormat } from '../services/coinFormat'

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
  YouCanLikeContainer,
  FoundCEP,
  CepContent,
  DeliveryValue,
  DeliveryLabel,
  Value
} from '../styles/hq'

interface Query {
  hqID: string
  isRare: true | false
}

interface HQ {
  id: string,
  title: string
  modified: string
  dateFormatted: string
  pageCount: number
  prices: [{ price: string }]
  hqPrice: number
  description: string
  thumbnail: {
    path: string
    extension: string
  }
  fullThumbnail: string,
  textObjects: [{ text: string }]
  creators: {
    items: [
      {
        name: string
      }
    ]
  }
}

interface CEP {
  bairro: string
  localidade: string
  logradouro: string
  uf: string
}

interface CarList {
  id: string
  title: string
  isRare: string
  fullThumbnail: string
  amount: number
  hqPrice: number
}

export default function HQ() {
  const [comicsDetails, setComicsDetails] = useState<HQ>({} as HQ)

  const { inputCEP, setInputCEP, handleFindCEP, foundCEP, searchingCEP } = useCep()

  const { handleAddToCar, car, getCarList } = useCar()

  const router = useRouter()

  const { isRare } = router.query

  let getHqId: any = ''

  const carItem = {
    id: comicsDetails.id,
    title: comicsDetails.title,
    isRare: String(isRare),
    fullThumbnail: comicsDetails.fullThumbnail,
    amount: 1,
    hqPrice: comicsDetails.hqPrice
  }


  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)

    getHqId = urlParams.get('hqID')

  }, [])

  useEffect(() => {
    api.get(`comics/${getHqId}${apiAuthenticate}`)
      .then(response => {
        const { title, description, thumbnail, pageCount, modified, prices, textObjects, creators } = response.data.data.results[0] as HQ

        const fullThumbnail = `${thumbnail.path}.${thumbnail.extension}${apiAuthenticate}`

        let hqPrice = 0
        prices.map(e => hqPrice = Number(e.price))

        const dateFormatted = modified.substring(0, 1) === '-'
          ? `${modified.substring(9, 11)}/${modified.substring(6, 8)}/${modified.substring(1, 5)}`
          : `${modified.substring(8, 10)}/${modified.substring(5, 7)}/${modified.substring(0, 4)}`

        const result = {
          id: getHqId,
          title,
          modified,
          dateFormatted,
          pageCount,
          prices,
          hqPrice,
          description: description.length > 2 ? description : textObjects[0]?.text,
          thumbnail: {
            path: thumbnail.path,
            extension: thumbnail.extension
          },
          fullThumbnail,
          textObjects,
          creators
        }

        setComicsDetails(result)

        return result

      })
  }, [])

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

          <PageTitle>{comicsDetails.title}</PageTitle>

          <HQToBuyDetailsContainer>
            <CardHqDetails
              thumbnail={comicsDetails.fullThumbnail}
              isRare={isRare}
              description={comicsDetails.description}
              pageCount={comicsDetails.pageCount}
              date={comicsDetails.dateFormatted}
              creators={comicsDetails.creators}
            />

            <BuyCardContainer>
              <HQAvailability>
                <Text>Disponibilidade: Pronta entrega</Text>
              </HQAvailability>

              <HQPrice>{coinFormat(Number(comicsDetails.hqPrice))}</HQPrice>

              <FormFretContainer>
                <Label>Consulte o prazo de entrega</Label>

                <Content>
                  <Input
                    placeholder='Digite o CEP'
                    value={inputCEP}
                    // @ts-ignore
                    onChange={(e: FormEvent) => setInputCEP(e.target.value)}
                  />

                  <SimulateShippingButton
                    onClick={() => handleFindCEP(inputCEP)}
                    disabled={searchingCEP}
                  >
                    {searchingCEP
                      ? <Oval color="#00BFFF" height={14} width={14} />
                      : 'Consultar'}
                  </SimulateShippingButton>
                </Content>

                {foundCEP.bairro && (
                  <FoundCEP>
                    <CepContent>
                      {`${foundCEP.logradouro}, ${foundCEP.bairro}, ${foundCEP.localidade} - ${foundCEP.uf}`}
                    </CepContent>

                    <DeliveryValue>
                      <DeliveryLabel>Chega até</DeliveryLabel>

                      <Value>12 de abril</Value>
                    </DeliveryValue>
                  </FoundCEP>
                )}

                <IDontKnowCEP>Não sei meu CEP</IDontKnowCEP>
              </FormFretContainer>

              <BuyCardFooter>
                <Actions>
                  <AddToCarButton
                    onClick={() => handleAddToCar(carItem)}
                  >
                    Add to car
                  </AddToCarButton>

                  <AddToFavoritesButton>
                    <FaHeart size={20} />
                  </AddToFavoritesButton>
                </Actions>

              </BuyCardFooter>
            </BuyCardContainer>

          </HQToBuyDetailsContainer>

          <YouCanLikeTitle>Você pode gostar!</YouCanLikeTitle>

          <YouCanLikeContainer>
            {/* <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard /> */}
          </YouCanLikeContainer>

        </Wrap>
      </Main>

      <Footer />
      <ToastContainer />
    </Body>
  )
}