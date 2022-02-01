import styled from 'styled-components'

export const Body = styled.div`
  width: 100%;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
`

export const Main = styled.main`
  flex: 1;
  width: 100%;
  padding-bottom: 3rem;
  background-color: var(--bg-color);
`

export const Wrap = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: auto;
  padding: 0 8px;
`

export const BreadcrumbContainer = styled.div`
  margin: 2.5rem 0 1.5rem;

  
  a {
    text-transform: uppercase;
    color: var(--blue-action);


    &:hover {
      text-decoration: underline;

    }

  }
`

export const PageTitle = styled.h1`
  font-size: 22px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 0.05em;
  font-family: 'Roboto Condensed', sans-serif;
  color: var(--title-color);

`

export const HQToBuyDetailsContainer = styled.section`
  margin-top: 1.5rem;
  margin-bottom: 4.5rem;

  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  
  @media(max-width: 870px) {
    flex-direction: column;
    align-items: center;
  }
`

export const BuyCardContainer = styled.div`
  position: relative;
  flex: none;
  width: 322px;
  height: 260px;

  box-shadow: 0 0 4px var(--gray-500);
  padding: 0 1.5rem 1.5rem;
`

export const HQAvailability = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 24px;
  background-color: var(--green);
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  `

export const Text = styled.span`
  font-size: 12px;

`

export const HQPrice = styled.span`
  display: inline-block;
  margin: 2.5rem 0 1rem;
  font-size: 1.75rem;
  font-weight: 500;
  color: var(--red);
`

export const FormFretContainer = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: 14px;
  color: var(--text-color);
`

export const Content = styled.div`
  margin: .5rem 0;
`

export const Input = styled.input`
  width: 154px;
  background-color: var(--gray-100);
  border: none;
  padding: .25rem;

  &::placeholder {
    font-size: 14px;
    color: var(--gray-400);
  }
`

export const SimulateShippingButton = styled.button`
  width: 117px;
  border: none;
  background-color: var(--gray-700);
  color: #FFFFFF;
  padding: .25rem .5rem;
  font-size: 14px;
  font-weight: 400;
  transition: filter 300ms;

  &:hover {
    background-color: var(--primary);
    color: #FFFFFF;
  }
`

export const IDontKnowCEP = styled.button`
  width: 100px;
  background: transparent;
  border: none;
  font-size: 12px;
  color: var(--blue-action);
  text-align: center;
  margin: auto;
  transition: filter 300ms;

  &:hover {
    filter: brightness(.9);
  }
`

export const BuyCardFooter = styled.footer`
  margin-top: 1.5rem;
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
export const YouCanLikeTitle = styled.h3`
  letter-spacing: 0.05em;
  font-family: 'Roboto Condensed', sans-serif;
  color: var(--title-color);
  font-weight: 600;
`

export const YouCanLikeContainer = styled.div`
  overflow-x: auto;
  padding: 2rem .5rem;

  display: flex;
  gap: 1.5rem;
`