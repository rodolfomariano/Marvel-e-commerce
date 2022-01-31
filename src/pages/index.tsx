import { useEffect, useState } from 'react'
import type { NextPage } from 'next'

import { FaSearch } from 'react-icons/fa'

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
  HQsList
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
  thumbnail: {
    path: string
    extension: string
  }
  fullThumbnail: string
  // creators: {
  //   items: []
  // }
}

const Home: NextPage = () => {
  const [comicsList, setComicsList] = useState<HQ[]>([])
  const [page, setPage] = useState(0)
  const [totalOfPages, setTotalOfPages] = useState(0)

  const publicKey = process.env.NEXT_PUBLIC_KEY
  const md5 = process.env.NEXT_PUBLIC_MD5
  const ts = '1643628283'

  let array: HQ[] = []

  useEffect(() => {

    api.get(`comics?ts=${ts}&apikey=${publicKey}&hash=${md5}&limit=10&offset=${page}`)
      .then(response => {

        setTotalOfPages(response.data.data.total / 10)

        response.data.data.results.map((hq: HQ) => {

          const { id, title, modified, pageCount, prices, thumbnail, resourceURI, description } = hq as HQ

          const fullThumbnail = `${thumbnail.path}.${thumbnail.extension}?ts=${ts}&apikey=${publicKey}&hash=${md5}`

          // // creators.items.map(creator => console.log(creator.name))

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
            thumbnail: {
              path: thumbnail.path,
              extension: thumbnail.extension
            },
            fullThumbnail
          }

          array.push(result)

          return result

        })
        setComicsList(array)

      })

  }, [page])

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
                comicsList.map(e => (
                  <SmallCard key={e.id} title={e.title} price={e.hqPrice} image={e.fullThumbnail} />
                )) :
                <h1>Carregando</h1>
              }
            </HQsList>

          </HQsContainer>

          <button
            disabled={page === 0}
            onClick={() => setPage(page - 10)}
          >
            anterior
          </button>

          <button
            onClick={() => setPage(0)}
            style={{ backgroundColor: page === 0 ? 'blue' : 'red' }}
          >
            1
          </button>

          <button
            onClick={() => setPage(1 * 20)}
            style={{ backgroundColor: page === 10 ? 'blue' : 'red' }}
          >
            2
          </button>

          <button
            onClick={() => setPage(1 * 30)}
            style={{ backgroundColor: page === 20 ? 'blue' : 'red' }}
          >
            3
          </button>

          <button
            onClick={() => setPage(1 * 40)}
            style={{ backgroundColor: page === 30 ? 'blue' : 'red' }}
          >
            4
          </button>

          <button
            onClick={() => setPage(page + 10)}
            disabled={page === 30}
          >
            proxima
          </button>

        </Wrap>

      </Main>
      <Footer />
    </Body>
  )
}

export default Home
