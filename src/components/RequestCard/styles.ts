import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  min-width: 350px;
  max-width: 764px;
  height: 166px;
  box-shadow: 0 0 4px var(--gray-500);
  padding: 1rem;

  display: flex;
  align-items: center;
`

export const ImageContainer = styled.div`
  position: relative;
  flex: none;
  width: 90px;
  height: 136px;
  margin-right: 1.5rem;
`

export const RareTag = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 90px;
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

export const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media(max-width: 760px) {
    flex-direction: column;
  }

`
export const HQTitle = styled.h2`
  margin: 0 1rem;
  color: var(--title-color);
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.05em;
  text-transform: uppercase;

  @media(max-width: 760px) {
    margin-bottom: 1rem;
  }
`

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  
`



export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
`

export const InputValue = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  margin: 0 .5rem;
`

export const Button = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  border-radius: 50%;
  color: var(--gray-500);

  display: flex;
  align-items: center;
  justify-content: center;

`

export const Separator = styled.div`
  width: 2px;
  height: 100px;
  background-color: var(--gray-100);

  @media(max-width: 760px) {
    height: 50px;
  }
`
export const Value = styled.h2`
  font-size: 1.5rem;
  color: var(--red);
  font-weight: 500;
`
export const RemoveItem = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: 30px;
  border: none;
  background-color: var(--red);
  color: #FFFFFF;

  display: flex;
  align-items: center;
  justify-content: center;
`