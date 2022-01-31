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

interface SmallCardProps {
  title: string
  price: number
  image: string
}

export function SmallCard({ title, price, image }: SmallCardProps) {
  return (
    <Container>
      <ImageContainer>
        <ImageHeader>
          <Price>R$ {price}</Price>

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

        <Image alt='image' src={image} width={100} height={154} />

      </ImageContainer>

      <HQTitleContainer>
        <HQTitle>{title.length > 18 ? `${title.substring(0, 18)}...` : title}</HQTitle>
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