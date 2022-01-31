import styled from 'styled-components'

export const Container = styled.div`
  flex: none;
  width: 688px;
  height: 244px;
  box-shadow: 0 0 4px var(--gray-500);
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 760px) {
    display: none;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  flex: none;
  width: 140px;
  height: 212px;
  margin-right: 1.5rem;
`

export const RareTag = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 140px;
  height: 30px;
  background-color: var(--gold-dark);

  display: flex;
  align-items: center;
  justify-content: center;

`

export const RareContent = styled.div`
  color: var(--gold-light);

  display: flex;
  align-items: center;

`

export const RateText = styled.div`
  text-transform: uppercase;
  font-weight: 500;
  margin-left: .5rem;
  font-size: 1rem;
`

export const CardContent = styled.div`
  height: 100%;

  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h2`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: var(--title-color);
`

export const StarsContainer = styled.div`
  color: var(--gold-light);

  display: flex;
  gap: .25rem;
`

export const DescriptionContainer = styled.div`

`

export const Text = styled.p`
  font-size: 1rem;
  color: var(--text-color);
`

export const KnowMoreButton = styled.button`
  margin-top: 1rem;
  background: transparent;
  border: none;
  color: var(--blue-action);
  font-size: 12px;
  padding: 0;
  transition: filter 300ms;

  &:hover {
    filter: brightness(.9);
  }
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
  color: var(--red);
`

export const Actions = styled.div`
  display: flex;
  gap: 1rem;
`

export const AddToCarButton = styled.button`
  width: 222px;
  height: 35px;
  border: none;
  text-transform: uppercase;
  background-color: var(--red);
  color: #FFFFFF;
  transition: filter 300ms;

  &:hover {
    filter: brightness(.9);
  }

`

export const AddToFavoritesButton = styled.button`
  width: 35px;
  height: 35px;
  border: none;
  background-color: var(--pink);
  color: #FFFFFF;
  transition: filter 300ms;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(.9);
  }
`