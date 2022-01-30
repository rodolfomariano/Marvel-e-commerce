
import Image from 'next/image'

import { FaCrown, FaStar, FaStarHalfAlt, FaHeart } from 'react-icons/fa'

import Wolverine from '../../assets/images/wolverine.png'

import {
  Container,
  ImageContainer,
  RareTag,
  RareContent,
  RateText,
  CardContent,
  Header,
  Title,
  StarsContainer,
  DescriptionContainer,
  Text,
  KnowMoreButton,
  Footer,
  Price,
  Actions,
  AddToCarButton,
  AddToFavoritesButton
} from './styles'

export function CardDearest() {
  return (
    <Container>
      <ImageContainer>
        <Image alt='image' src={Wolverine} width={140} height={212} />

        <RareTag>
            <RareContent>
              <FaCrown size={20} />
              <RateText>Raro</RateText>
            </RareContent>
          </RareTag>
      </ImageContainer>

      <CardContent>
        <Header>
          <Title>Wolverine Imortal</Title>

          <StarsContainer>
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStarHalfAlt size={20} />
          </StarsContainer>
        </Header>

        <DescriptionContainer>
          <Text>
            The mutants of earth have risen up and founded the nation of Krakoa… but that has not meant any less trouble for them. An all-star cast of creators bring you rotating adventures of the various mutants of the world and their friends and allies!
          </Text>

          <KnowMoreButton>Saiba Mais</KnowMoreButton>
        </DescriptionContainer>

        <Footer>
          <Price>R$ 35,50</Price>

          <Actions>
            <AddToCarButton>Add to car</AddToCarButton>

            <AddToFavoritesButton>
              <FaHeart size={20} />
            </AddToFavoritesButton>
          </Actions>
        </Footer>
      </CardContent>

    </Container>
  )
}