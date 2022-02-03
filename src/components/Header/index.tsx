import { useRouter } from 'next/router'
import Image from 'next/image'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'

import Logo from '../../assets/images/Marvel_Logo.png'

import {
  Container,
  Wrap,
  ImageContainer,
  Actions,
  Button,
  UserButtonAvatar,
  ButtonCarContainer,
  Tag
} from './styles'
import { useCar } from '../../hooks/car'

export function Header() {
  const router = useRouter()

  const { car } = useCar()

  return (
    <Container>
      <Wrap>
        <ImageContainer>
          <Image alt='Logo' src={Logo} width={100} height={40} onClick={() => router.push('/')} />
        </ImageContainer>

        <Actions>
          <Button>
            <FaHeart size={24} />
          </Button>

          <ButtonCarContainer>
            <Button
              onClick={() => router.push('shopping-car')}
            >
              <FaShoppingCart size={24} />

            </Button>
            <Tag>{car.length}</Tag>

          </ButtonCarContainer>

          <UserButtonAvatar>

          </UserButtonAvatar>
        </Actions>
      </Wrap>

    </Container>
  )
}