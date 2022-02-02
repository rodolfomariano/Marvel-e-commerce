import { useEffect, useState } from 'react'
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
  id: string
  title: string
  isRare: string
  fullThumbnail: string
  amount: number
  hqPrice: number
}

export function RequestCard({ id, title, isRare, fullThumbnail, amount, hqPrice }: RequestCard) {
  const [totalAmount, setTotalAmount] = useState(amount)
  const [car, setCar] = useState<RequestCard[]>([])


  const withoutTheItem = car.filter(item => item.id !== id && item)
  // console.log(`arrai sem o item ${arraySemOitem}`)
  // const arraySemOitem = car.filter(item => item.id !== id)

  // car.filter(item => item.id === id
  //   && localStorage.setItem('car', JSON.stringify([
  //     ...arraySemOitem, { ...item, amount: totalAmount + 1 }
  //   ])))
  // const amountT = car.filter(item => item.id === id)

  function handleAddItem() {
    setTotalAmount(totalAmount + 1)

    // const findHq = car.find(item => item.id === id)
    localStorage.setItem('car', JSON.stringify([...withoutTheItem, {
      id: id,
      title: title,
      isRare: isRare,
      fullThumbnail: fullThumbnail,
      amount: totalAmount + 1,
      hqPrice: hqPrice
    }]))


    // localStorage.setItem('car', JSON.stringify(car))

  }

  function handleRemoveItem() {
    setTotalAmount(totalAmount > 1 ? totalAmount - 1 : totalAmount)

    localStorage.setItem('car', JSON.stringify([...withoutTheItem, {
      id: id,
      title: title,
      isRare: isRare,
      fullThumbnail: fullThumbnail,
      amount: totalAmount - 1,
      hqPrice: hqPrice
    }]))
  }


  useEffect(() => {
    const getCarList: any = localStorage.getItem('car')

    if (getCarList) {
      setCar(JSON.parse(getCarList))
    }
  }, [])

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
              onClick={handleRemoveItem}
            >
              <FiMinus size={16} />
            </Button>

            <InputValue value={totalAmount} />

            <Button
              onClick={handleAddItem}
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
