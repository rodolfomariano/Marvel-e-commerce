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

export function CardHqDetails() {
  return (
    <Container>
      <ImageContainer>
        <Image alt='image' src={Wolverine} />

        <RareTag>
          <RareContent>
            <FaCrown size={20} />
            <RateText>Raro</RateText>
          </RareContent>
        </RareTag>
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
          The mutants of earth have risen up and founded the nation of Krakoa… but that has not meant any less trouble for them. An all-star cast of creators bring you rotating adventures of the various mutants of the world and their friends and allies!
        </DetailParagraph>

        <CreatorsContainer>
          <CreatorsIcon>
            <FaUserFriends size={20} />

            <CreatorsTitle>Criadores</CreatorsTitle>
          </CreatorsIcon>

          <CreatorsList>
            <Creator>Paul Smith</Creator>
          </CreatorsList>
        </CreatorsContainer>

        <Footer>
          <FooterContent>
            <FaBookOpen size={20} />
            <FooterText>26 páginas</FooterText>
          </FooterContent>

          <FooterContent>
            <FaCalendarAlt size={20} />
            <FooterText>21/04/2021</FooterText>
          </FooterContent>
        </Footer>

      </CardContent>

    </Container>
  )
}