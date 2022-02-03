import { useState, useEffect, FormEvent } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import { FaHeart } from 'react-icons/fa'

import { Oval } from 'react-loader-spinner'
import { setCookies } from 'cookies-next'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
import { useCar } from '../hooks/car'
import { coinFormat } from '../services/coinFormat'

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
  const [inputCEP, setInputCEP] = useState('')
  const [foundCEP, setFoundCEP] = useState<CEP>({} as CEP)
  const [searchingCEP, setSearchingCEP] = useState(false)

  const { handleAddToCar } = useCar()

  const router = useRouter()

  const { isRare } = router.query

  let getHqId: any = ''
  // let isRare: any = ''

  const carItem = {
    id: comicsDetails.id,
    title: comicsDetails.title,
    isRare: String(isRare),
    fullThumbnail: comicsDetails.fullThumbnail,
    amount: 1,
    hqPrice: comicsDetails.hqPrice
  }

  const notifyCepError = () => toast("Digite um CEP valido!", {
    autoClose: 3000,
    type: 'error',
    closeButton: true,
    theme: 'colored'
  })


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
          localStorage.setItem('cep', inputCEP)

          setSearchingCEP(false)

        }, 3000)

      }).catch(error => {
        console.log(error)
        setSearchingCEP(false)

        notifyCepError()
      })

    setInputCEP('')
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

              <HQPrice>{coinFormat(comicsDetails.hqPrice)}</HQPrice>

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