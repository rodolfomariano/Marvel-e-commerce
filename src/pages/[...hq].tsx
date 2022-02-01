import { useState, useEffect, FormEvent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { FaHeart } from 'react-icons/fa'

import { Oval } from 'react-loader-spinner'

import { api, apiAuthenticate, cepAPI } from '../services/api'

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

export default function HQ() {
  const [comicsDetails, setComicsDetails] = useState<HQ>({} as HQ)
  const [inputCEP, setInputCEP] = useState('')
  const [foundCEP, setFoundCEP] = useState<CEP>({} as CEP)
  const [searchingCEP, setSearchingCEP] = useState(false)

  const router = useRouter()

  const { hqID, isRare } = router.query

  function handleFindCEP(event: FormEvent) {
    event.preventDefault()
    setSearchingCEP(true)

    if (inputCEP === '') {
      setSearchingCEP(false)
      return
    }

    cepAPI.get(`${inputCEP ? inputCEP : '00000000'}/json/`)
      .then(response => {
        const { bairro, localidade, logradouro, uf } = response.data as CEP

        setTimeout(() => {
          setFoundCEP({
            bairro,
            localidade,
            logradouro,
            uf
          })

          setSearchingCEP(false)

        }, 3000)

      }).catch(error => {
        console.log(error)
        setSearchingCEP(false)
      })

    setInputCEP('')
  }

  useEffect(() => {
    api.get(`comics/${hqID}${apiAuthenticate}`)
      .then(response => {
        const { title, description, thumbnail, pageCount, modified, prices, textObjects, creators } = response.data.data.results[0] as HQ

        const fullThumbnail = `${thumbnail.path}.${thumbnail.extension}${apiAuthenticate}`

        let hqPrice = 0
        prices.map(e => hqPrice = Number(e.price))

        const dateFormatted = modified.substring(0, 1) === '-'
          ? `${modified.substring(9, 11)}/${modified.substring(6, 8)}/${modified.substring(1, 5)}`
          : `${modified.substring(8, 10)}/${modified.substring(5, 7)}/${modified.substring(0, 4)}`

        const result = {
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

              <HQPrice>R$ {comicsDetails.hqPrice}</HQPrice>

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
                    onClick={handleFindCEP}
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
                      <DeliveryLabel>Valor da entrega:</DeliveryLabel>

                      <Value>R$ 10,00</Value>
                    </DeliveryValue>
                  </FoundCEP>
                )}

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
            {/* <SmallCard />
            <SmallCard />
            <SmallCard />
            <SmallCard /> */}
          </YouCanLikeContainer>

        </Wrap>
      </Main>

      <Footer />
    </Body>
  )
}