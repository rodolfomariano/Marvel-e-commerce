import { useState } from 'react'
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

interface RequestCard {
  title: string
  isRare: string
  fullThumbnail: string
  amount: number
  hqPrice: number
}

export function RequestCard({ title, isRare, fullThumbnail, amount, hqPrice }: RequestCard) {
  const [totalAmount, setTotalAmount] = useState(amount)

  return (
    <Container>
      <ImageContainer>
        <Image alt='hq image' src={fullThumbnail} width={90} height={136} />

        {isRare === 'true' && (
          <RareTag>
            <RareContent>
              <FaCrown size={20} />
              <RateText>Raro</RateText>
            </RareContent>
          </RareTag>

        )}
      </ImageContainer>

      <Content>

        <HQTitle>{title}</HQTitle>

        <ValueContainer>
          <AmountContainer>
            <Button
              onClick={() => setTotalAmount(totalAmount > 1 ? totalAmount - 1 : totalAmount)}
            >
              <FiMinus size={16} />
            </Button>

            <InputValue value={totalAmount} />

            <Button
              onClick={() => setTotalAmount(totalAmount + 1)}
            >
              <FiPlus size={16} />
            </Button>
          </AmountContainer>

          <Separator />

          <Value>R$ {hqPrice * totalAmount}</Value>

        </ValueContainer>

      </Content>

    </Container>
  )
}
