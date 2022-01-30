import Image from 'next/image'

import { FaCrown, FaStar, FaStarHalfAlt, FaShoppingCart, FaHeart } from 'react-icons/fa'

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
  HQTitleContainer,
  HQTitle,
  KnowMoreButton,
  AddToCarButton,
  AddToFavoritesButton
} from './styles'

export function SmallCard() {
  return (
    <Container>
      <ImageContainer>
        <ImageHeader>
          <Price>R$ 35,50</Price>

          <StarsContainer>
            <FaStar size={12} />
            <FaStar size={12} />
            <FaStar size={12} />
            <FaStar size={12} />
            <FaStarHalfAlt size={12} />
          </StarsContainer>

          <RareTag>
            <RareContent>
              <FaCrown size={20} />
              <RateText>Raro</RateText>
            </RareContent>
          </RareTag>
        </ImageHeader>

        <Image alt='image' src={Wolverine} width={100} height={154} />

      </ImageContainer>

      <HQTitleContainer>
        <HQTitle>Wolverine o imortal</HQTitle>
      </HQTitleContainer>

      <KnowMoreButton>Saiba Mais</KnowMoreButton>

      <AddToCarButton>
        <FaShoppingCart size={20} color='#FFFFFF' />
      </AddToCarButton>

      <AddToFavoritesButton>
        <FaHeart size={20} color='#FFFFFF' />
      </AddToFavoritesButton>

    </Container>
  )
}