import Image from 'next/image'

import {
  FaCrown,
  FaStar,
  FaStarHalfAlt,
  FaHeart,
  FaUserFriends,
  FaBookOpen,
  FaCalendarAlt
} from 'react-icons/fa'

import Wolverine from '../../assets/images/wolverine.png'

import {
  Container,
  ImageContainer,
  RareTag,
  RareContent,
  RateText,
  CardContent,
  Header,
  StarsContainer,
  UsersRatings,
  DetailParagraph,
  CreatorsContainer,
  CreatorsIcon,
  CreatorsTitle,
  CreatorsList,
  Creator,
  Footer,
  FooterContent,
  FooterText
} from './styles'

interface CardHqDetailsProps {
  isRare: string | undefined | string[]
  thumbnail: string
  description: string
  pageCount: number
  date: string
  creators: {
    items: [
      {
        name: string
      }
    ]
  }
}

export function CardHqDetails({ isRare, thumbnail, description, pageCount, date, creators }: CardHqDetailsProps) {

  return (
    <Container>
      <ImageContainer>
        <Image alt='image' src={thumbnail ? thumbnail : Wolverine} width={220} height={333} />

        {isRare === 'true' && (
          <RareTag>
            <RareContent>
              <FaCrown size={20} />
              <RateText>Raro</RateText>
            </RareContent>
          </RareTag>

        )}

      </ImageContainer>

      <CardContent>
        <Header>
          <StarsContainer>
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStar size={20} />
            <FaStarHalfAlt size={20} />
          </StarsContainer>

          <UsersRatings>550 avaliações</UsersRatings>
        </Header>

        <DetailParagraph>
          {description && description.length > 0 ? description : 'Quadrinho SHOW'}
        </DetailParagraph>

        <CreatorsContainer>
          <CreatorsIcon>
            <FaUserFriends size={20} />

            <CreatorsTitle>Criadores</CreatorsTitle>
          </CreatorsIcon>

          <CreatorsList>
            {creators && creators.items.map((creator, index) => (
              <Creator key={index}>{creator.name}</Creator>

            ))}
          </CreatorsList>
        </CreatorsContainer>

        <Footer>
          <FooterContent>
            <FaBookOpen size={20} />
            <FooterText>{pageCount > 0 ? pageCount : 10} páginas</FooterText>
          </FooterContent>

          <FooterContent>
            <FaCalendarAlt size={20} />
            <FooterText>{date}</FooterText>
          </FooterContent>
        </Footer>

      </CardContent>

    </Container>
  )
}