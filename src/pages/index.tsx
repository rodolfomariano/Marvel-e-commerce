import { useEffect, useState } from 'react'
import type { NextPage } from 'next'

import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { SmallCardDearest } from '../components/SmallCardDearest'

import {
  Body,
  Main,
  Wrap,
  DearestContainer,
  DearestTitle,
  DearestContentList,
  HQsContainer,
  HQsContainerHeader,
  Title,
  SearchBar,
  Input,
  SearchButton,
  SearchResult,
  FilterContainer,
  Label,
  FilterChoiceContent,
  FilterChoiceButton,
  HQsList,
  PaginationContainer,
  ButtonsContent,
  PreviousButton,
  NextButton,
  PageButton
} from '../styles/home'

import { SmallCard } from '../components/SmallCard'
import { CardDearest } from '../components/CardDearest'
import { api } from '../services/api'

interface HQ {
  id: number
  title: string
  modified: string
  pageCount: number
  prices: [{ price: string }]
  hqPrice: number
  description: string
  resourceURI: string
  isRare: true | false
  thumbnail: {
    path: string
    extension: string
  }
  fullThumbnail: string
}

const Home: NextPage = () => {
  const [comicsList, setComicsList] = useState<HQ[]>([])
  const [currentOffset, setCurrentOffset] = useState(0)
  const [totalOfPages, setTotalOfPages] = useState(0)
  const [rareHq, setRareHq] = useState(0)

  const publicKey = process.env.NEXT_PUBLIC_KEY
  const md5 = process.env.NEXT_PUBLIC_MD5
  const ts = '1643628283'

  let hqList: HQ[] = []


  useEffect(() => {
    const hqRareList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    setRareHq(Number(Math.floor(Math.random() * hqRareList.length)))

  }, [currentOffset])


  useEffect(() => {

    api.get(`comics?ts=${ts}&apikey=${publicKey}&hash=${md5}&limit=10&offset=${currentOffset}`)
      .then(response => {

        setTotalOfPages(response.data.data.total / 10)

        response.data.data.results.map((hq: HQ, index: number) => {

          const { id, title, modified, pageCount, prices, thumbnail, resourceURI, description } = hq as HQ

          const fullThumbnail = `${thumbnail.path}.${thumbnail.extension}?ts=${ts}&apikey=${publicKey}&hash=${md5}`

          let hqPrice = 0

          prices.map(e => hqPrice = Number(e.price))

          const result = {
            id,
            title,
            modified,
            pageCount,
            prices,
            hqPrice,
            resourceURI,
            description,
            isRare: rareHq === index ? true : false,
            thumbnail: {
              path: thumbnail.path,
              extension: thumbnail.extension
            },
            fullThumbnail,
          }

          hqList.push(result)

          return result

        })
        setComicsList(hqList)

      })

  }, [currentOffset])



  return (
    <Body>
      <Header />
      <Main>
        <Wrap>

          <div>
          </div>

          <DearestContainer>
            <DearestTitle>As mais queridas</DearestTitle>

            <DearestContentList>
              <SmallCardDearest />
              <SmallCardDearest />
              <SmallCardDearest />

              <CardDearest />
              <CardDearest />

            </DearestContentList>
          </DearestContainer>

          <HQsContainer>
            <HQsContainerHeader>
              <Title>Mais HQs</Title>

              <SearchBar>
                <Input
                  placeholder='Buscar'
                />

                <SearchButton>
                  <FaSearch size={16} />
                </SearchButton>
              </SearchBar>
            </HQsContainerHeader>

            <SearchResult>32 HQs encontradas</SearchResult>

            <FilterContainer>
              <Label>Ordenar por:</Label>

              <FilterChoiceContent>
                <FilterChoiceButton>Mais novo</FilterChoiceButton>
                <FilterChoiceButton>Mais antigo</FilterChoiceButton>
                <FilterChoiceButton>Maior valor</FilterChoiceButton>
                <FilterChoiceButton>Menor valor</FilterChoiceButton>
              </FilterChoiceContent>
            </FilterContainer>

            <HQsList>
              {comicsList ?
                comicsList.map((e) => (
                  <SmallCard
                    key={e.id}
                    title={e.title}
                    price={e.hqPrice}
                    image={e.fullThumbnail}
                    isRare={e.isRare}
                  />

                )) :
                <h1>Carregando</h1>
              }
            </HQsList>

          </HQsContainer>

          <PaginationContainer>
            <ButtonsContent>
              <PreviousButton
                disabled={currentOffset === 0}
                onClick={() => setCurrentOffset(currentOffset - 10)}
              >
                <FaChevronLeft size={18} />
              </PreviousButton>

              <PageButton
                onClick={() => setCurrentOffset(0)}
                style={{ backgroundColor: currentOffset === 0 ? '#d7d8d8' : '#EBEBEB' }}

              >
                1
              </PageButton>
              <PageButton
                onClick={() => setCurrentOffset(1 * 10)}
                style={{ backgroundColor: currentOffset === 10 ? '#d7d8d8' : '#EBEBEB' }}
              >
                2
              </PageButton>
              <PageButton
                onClick={() => setCurrentOffset(1 * 20)}
                style={{ backgroundColor: currentOffset === 20 ? '#d7d8d8' : '#EBEBEB' }}
              >
                3
              </PageButton>
              <PageButton
                onClick={() => setCurrentOffset(1 * 30)}
                style={{ backgroundColor: currentOffset === 30 ? '#d7d8d8' : '#EBEBEB' }}
              >
                4
              </PageButton>
              <PageButton
                onClick={() => setCurrentOffset(1 * 40)}
                style={{ backgroundColor: currentOffset === 40 ? '#d7d8d8' : '#EBEBEB' }}
              >
                5
              </PageButton>

              <NextButton
                onClick={() => setCurrentOffset(currentOffset + 10)}
                disabled={currentOffset === 40}
              >
                <FaChevronRight size={18} />
              </NextButton>
            </ButtonsContent>
          </PaginationContainer>

        </Wrap>

      </Main>
      <Footer />
    </Body>
  )
}

export default Home
