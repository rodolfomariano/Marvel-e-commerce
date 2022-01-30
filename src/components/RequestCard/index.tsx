import Image from 'next/image'

import { FiMinus, FiPlus } from 'react-icons/fi'
import { FaCrown } from 'react-icons/fa'

import Wolverine from '../../assets/images/wolverine.png'

import {
  Container,
  ImageContainer,
  RareTag,
  RareContent,
  RateText,
  Content,
  HQTitle,
  ValueContainer,
  AmountContainer,
  InputValue,
  Separator,
  Value,
  Button
} from './styles'

export function RequestCard() {
  return (
    <Container>
      <ImageContainer>
        <Image alt='hq image' src={Wolverine} width={90} height={136} />

        <RareTag>
          <RareContent>
            <FaCrown size={20} />
            <RateText>Raro</RateText>
          </RareContent>
        </RareTag>
      </ImageContainer>

      <Content>

        <HQTitle>Wolverine o imortal</HQTitle>

        <ValueContainer>
          <AmountContainer>
            <Button>
              <FiMinus size={16} />
            </Button>

            <InputValue />

            <Button>
              <FiPlus size={16} />
            </Button>
          </AmountContainer>

          <Separator />

          <Value>R$ 35,50</Value>

        </ValueContainer>

      </Content>

    </Container>
  )
}
