import Image from 'next/image'
import { useRouter } from 'next/router'

import { FaCrown, FaStar, FaStarHalfAlt, FaShoppingCart, FaHeart } from 'react-icons/fa'

import Wolverine from '../../assets/images/wolverine.png'

import { useCar } from '../../hooks/car'

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
  hqID: number
  title: string
  price: number
  image: string
  isRare: true | false
}


export function SmallCard({ hqID, title, price, image, isRare }: SmallCardProps) {
  const router = useRouter()

  const item = {
    id: String(hqID),
    title: title,
    isRare: String(isRare),
    fullThumbnail: image,
    amount: 1,
    hqPrice: price
  }

  const { handleAddToCar } = useCar()

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

          {isRare && (
            <RareTag>
              <RareContent>
                <FaCrown size={20} />
                <RateText>Raro</RateText>
              </RareContent>
            </RareTag>

          )}
        </ImageHeader>

        <Image alt='image' src={image} width={100} height={154} />

      </ImageContainer>

      <HQTitleContainer>
        <HQTitle>{title.length > 16 ? `${title.substring(0, 16)}...` : title}</HQTitle>
      </HQTitleContainer>

      <KnowMoreButton
        onClick={() => router.push({
          pathname: `/hq/details/${hqID}`,
          query: {
            isRare,
            hqID
          }
        })}
      >
        Saiba Mais
      </KnowMoreButton>

      <AddToCarButton
        onClick={() => handleAddToCar(item)}
      >
        <FaShoppingCart
          size={20}
          color='#FFFFFF'

        />
      </AddToCarButton>

      <AddToFavoritesButton>
        <FaHeart size={20} color='#FFFFFF' />
      </AddToFavoritesButton>

    </Container>
  )
}