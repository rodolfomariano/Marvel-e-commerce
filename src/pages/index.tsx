import type { NextPage } from 'next'
import { Footer } from '../components/Footer'

import { FaSearch } from 'react-icons/fa'

import { Header } from '../components/Header'
import { SmallCardDearest } from '../components/SmallCardDearest'

import {
  Head,
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

const Home: NextPage = () => {
  return (
    <Head>
      <Header />
      <Main>
        <Wrap>

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
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
              <SmallCard />
            </HQsList>

          </HQsContainer>

        </Wrap>

      </Main>
      <Footer />
    </Head>
  )
}

export default Home
