import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  width: 180px;
  box-shadow: 0 0 4px var(--gray-500);
`
export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  padding-top: 1.5rem;

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
  font-size: 14px;
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

export const HQTitleContainer = styled.div`
  margin: 1rem 0 ;

  display: flex;
  justify-content: center;
`

export const HQTitle = styled.text`
  color: var(--title-color);
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
export const AddToCarButton = styled.button`
  position: absolute;
  top: 70px;
  right: 0;
  width: 40px;
  height: 40px;
  background-color: var(--red);
  border: none;
  transition: filter 300ms;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(.9);
  }
`
export const AddToFavoritesButton = styled.button`
  position: absolute;
  top: 120px;
  right: 0;
  width: 40px;
  height: 40px;
  background-color: var(--pink);
  border: none;
  transition: filter 300ms;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    filter: brightness(.9);
  }
`