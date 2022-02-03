import { useEffect, useState } from 'react'
import Image from 'next/image'

import { FiMinus, FiPlus } from 'react-icons/fi'
import { FaCrown } from 'react-icons/fa'
import { FiTrash } from 'react-icons/fi'

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
  Button,
  RemoveItem
} from './styles'
import { useCar } from '../../hooks/car'
import { coinFormat } from '../../services/coinFormat'

interface RequestCard {
  id: string
  title: string
  isRare: string
  fullThumbnail: string
  amount: number
  hqPrice: number
}

export function RequestCard({ id, title, isRare, fullThumbnail, amount, hqPrice }: RequestCard) {
  const [totalAmount, setTotalAmount] = useState(amount)

  const { car, subTotalCalc, setCar, removeItem } = useCar()

  const withoutTheItem = car.filter(item => item.id !== id && item)

  function handleIncrementItem() {
    setTotalAmount(totalAmount + 1)

    localStorage.setItem('car', JSON.stringify([...withoutTheItem, {
      id: id,
      title: title,
      isRare: isRare,
      fullThumbnail: fullThumbnail,
      amount: totalAmount + 1,
      hqPrice: hqPrice
    }]))

    setCar([...withoutTheItem, {
      id: id,
      title: title,
      isRare: isRare,
      fullThumbnail: fullThumbnail,
      amount: totalAmount + 1,
      hqPrice: hqPrice
    }])

  }

  function handleDecrementItem() {
    setTotalAmount(totalAmount > 1 ? totalAmount - 1 : totalAmount)


    localStorage.setItem('car', JSON.stringify([...withoutTheItem, {
      id: id,
      title: title,
      isRare: isRare,
      fullThumbnail: fullThumbnail,
      amount: totalAmount - 1,
      hqPrice: hqPrice
    }]))

    setCar([...withoutTheItem, {
      id: id,
      title: title,
      isRare: isRare,
      fullThumbnail: fullThumbnail,
      amount: totalAmount - 1,
      hqPrice: hqPrice
    }])

  }


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
              onClick={handleDecrementItem}
            >
              <FiMinus size={16} />
            </Button>

            <InputValue value={totalAmount} />

            <Button
              onClick={handleIncrementItem}
            >
              <FiPlus size={16} />
            </Button>
          </AmountContainer>

          <Separator />

          <Value>{coinFormat(hqPrice * totalAmount)}</Value>

        </ValueContainer>

      </Content>

      <RemoveItem
        onClick={() => removeItem(id)}
      >
        <FiTrash size={16} />
      </RemoveItem>

    </Container>
  )
}
