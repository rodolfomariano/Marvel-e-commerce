import styled from 'styled-components'

export const Container = styled.div`
  width: 254px;
  box-shadow: 0 0 4px var(--gray-500);
  
`
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: center;
`

export const ImageHeader = styled.div`
  position: absolute;
  z-index: 100;
  top: 0;
  width: 100%;
  height: 46px;
  background-color: var(--bg-dark-transparent);
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Price = styled.text`
  color: #FFFFFF;
  font-weight: 500;
  font-size: 20px;
`

export const StarsContainer = styled.div`
  color: var(--gold-light);

  display: flex;
  gap: .25rem;
`

export const RareTag = styled.div`
  position: absolute;
  bottom: -30px;
  left: 0;
  width: 136px;
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

export const ImageFooter = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 0;
  width: 100%;
  height: 46px;
  background-color: var(--bg-dark-transparent);
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const HQTitle = styled.text`
  color: #FFFFFF;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`

export const KnowMoreButton = styled.button`
  width: 100%;
  padding: .5rem 0;
  background-color: var(--blue-action);
  border: none;
  color: #FFFFFF;
  text-transform: uppercase;
  font-size: 14px;
  transition: filter 300ms;

  &:hover {
    filter: brightness(.9);
  }
`
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const AddToCarButton = styled.button`
  width: 196px;
  height: 50px;
  border: none;
  text-transform: uppercase;
  background-color: var(--red);
  color: #FFFFFF;
`

export const AddToFavoritesButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  background-color: var(--pink);
  color: #FFFFFF;

  display: flex;
  align-items: center;
  justify-content: center;
`