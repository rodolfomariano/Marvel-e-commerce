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
  UserButtonAvatar
} from './styles'

export function Header() {
  const router = useRouter()

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

          <Button
            onClick={() => router.push('shopping-car')}
          >
            <FaShoppingCart size={24} />
          </Button>

          <UserButtonAvatar>

          </UserButtonAvatar>
        </Actions>
      </Wrap>

    </Container>
  )
}