
import Image from 'next/image'
import { FaHeart, FaShoppingCart } from 'react-icons/fa'

import Logo from '../../assets/images/Marvel_Logo.png'

import {
  Container,
  Wrap,
  Actions,
  Button,
  UserButtonAvatar
} from './styles'

export function Header() {
  return (
    <Container>
      <Wrap>
        <Image alt='Logo' src={Logo} width={100} height={40} />

        <Actions>
          <Button>
            <FaHeart size={24} />
          </Button>

          <Button>
            <FaShoppingCart size={24} />
          </Button>

          <UserButtonAvatar>

          </UserButtonAvatar>
        </Actions>
      </Wrap>

    </Container>
  )
}