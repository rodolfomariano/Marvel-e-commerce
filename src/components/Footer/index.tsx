

import { FaInstagram, FaTwitter, FaFacebookSquare, FaYoutube } from 'react-icons/fa'

import {
  Container,
  Wrap,
  NewsLetterContainer,
  Title,
  Form,
  Input,
  Button,
  TitleButton,
  SocialMediaContainer,
  SocialMediaTitle,
  SocialMediasIcons,
  SocialButton,
  ContactContainer,
  ContainerTitle,
  Contact,
  ContactText,
  ContactButton,
  CopyRight
} from './styles'

export function Footer() {

  return (
    <Container>
      <Wrap>

        <ContactContainer>
          <ContainerTitle>Contatos</ContainerTitle>

          <Contact>
            <ContactText>E-mail:</ContactText>
            <ContactButton>contato@marvelho.com</ContactButton>
          </Contact>

          <Contact>
            <ContactText>Whatsapp:</ContactText>
            <ContactButton>(11) 91111-2222</ContactButton>
          </Contact>
        </ContactContainer>

        <NewsLetterContainer>
          <Title>Join our NewsLetter</Title>

          <Form >
            <Input
              placeholder='e-mail'
            />

            <Button>
              <TitleButton>Subscribe</TitleButton>
            </Button>
          </Form>
        </NewsLetterContainer>

        <SocialMediaContainer>
          <SocialMediaTitle>
            Midias Sociais
          </SocialMediaTitle>

          <SocialMediasIcons>
            <SocialButton>
              <FaInstagram size={24} />
            </SocialButton>

            <SocialButton>
              <FaTwitter size={24} />
            </SocialButton>

            <SocialButton>
              <FaFacebookSquare size={24} />
            </SocialButton>

            <SocialButton>
              <FaYoutube size={24} />
            </SocialButton>
          </SocialMediasIcons>

        </SocialMediaContainer>
      </Wrap>

      <CopyRight>©2022 MARVEL</CopyRight>

    </Container>
  )
}