import Image from 'next/image'

import { FaCrown, FaStar, FaStarHalfAlt, FaHeart } from 'react-icons/fa'

import Wolverine from '../../assets/images/wolverine.png'

import {
  Container,
  ImageContainer,
  ImageHeader,
  Price,
  StarsContainer,
  RareTag,
  RareContent,
  RateText,
  ImageFooter,
  HQTitle,
  KnowMoreButton,
  Footer,
  AddToCarButton,
  AddToFavoritesButton
} from './styles'

export function SmallCardDearest() {
  return (
    <Container>
      <ImageContainer>
        <ImageHeader>
          <Price>R$ 35,50</Price>

          <StarsContainer>
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStarHalfAlt size={20} />
          </StarsContainer>

          <RareTag>
            <RareContent>
              <FaCrown size={20} />
              <RateText>Raro</RateText>
            </RareContent>
          </RareTag>
        </ImageHeader>

        <Image alt='image' src={Wolverine} width={222} height={336} />

        <ImageFooter>
          <HQTitle>Wolverine o imortal</HQTitle>
        </ImageFooter>
      </ImageContainer>

      <KnowMoreButton>Saiba Mais</KnowMoreButton>

      <Footer>
        <AddToCarButton>Add to car</AddToCarButton>
        <AddToFavoritesButton>
          <FaHeart size={20} />
        </AddToFavoritesButton>
      </Footer>

    </Container>
  )
}