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
  margin-top: 2.5rem;
`

export const StepsContainer = styled.section`
  width: 100%;
`
export const ProgressBar = styled.div`
  position: relative;
  width: 80%;
  height: 6px;
  background-color: var(--gray-100);
  border-radius: 3px;
  margin: 2.5rem auto 3rem;
`

export const Progress = styled.div`
  width: 25%;
  height: 6px;
  background-color: var(--green);
  border-radius: 3px;
`

export const Step = styled.div`
  position: absolute;
  top: -20px;
  left: calc(0 - 20px);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--gray-100);
  color: var(--gray-400);

  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-child(4) {
    left: calc(33% - 20px);
  }

  &:nth-child(3) {
    left: calc(66% - 20px);
  }
  
  &:nth-child(2) {
    left: calc(100% - 20px);
  }

`

export const StepText = styled.span`
  position: absolute;
  bottom: -30px;
  width: 70px;
  color: var(--text-color);
  font-size: 10px;
  text-align: center;

  @media(min-width: 760px) {
    width: 150px;
    font-size: 14px;
  }
  
`

export const CarContainer = styled.section`
  padding-top: 4rem;

  display: flex;
  justify-content: space-between;

  @media(max-width: 760px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
`

export const RequestsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ValueContainer = styled.div`
  flex: none;
  width: 310px;
  height: 448px;
  box-shadow: 0 0 4px var(--gray-500);
  padding: 1rem;
`

export const SubTotal = styled.div`
  display: flex;
  justify-content: space-between;

`

export const SubTotalText = styled.text`
  color: var(--text-color);
`

export const Span = styled.span`

`

export const SubTotalValue = styled.text`
  color: var(--red);
  font-weight: 500;
  margin-bottom: 1rem;

`
export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--gray-100);
`

export const CouponContainer = styled.div`
  padding: 1rem 0;

  display: flex;
  flex-direction: column;
`

export const Coupon = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CouponLabel = styled.label`
  font-size: 1rem;
  color: var(--text-color);
  font-weight: 400;
`

export const CouponInput = styled.input`
  width: 110px;
  border: none;
  border-bottom: 1px solid var(--gray-400);
`

export const CouponMessage = styled.span`
  font-size: 12px;
  color: var(--blue);
  margin: .5rem auto 0;
`

export const DiscountContainer = styled.div`
  padding: 1rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const DiscountLabel = styled.div`
  font-size: 1rem;
  color: var(--text-color);
  font-weight: 400;
`

export const DiscountResult = styled.div`
  font-size: 1rem;
  color: var(--blue);
  font-weight: 600;
`

export const FormFretContainer = styled.form`
  width: 100%;
  padding: 1rem 0;

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

export const TotalContainer = styled.div`
  padding: 1rem 0;
  

  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`

export const TotalLabel = styled.label`
  color: var(--title-color);
  font-weight: 500;
`

export const Value = styled.span`
  color: var(--red);
  font-weight: 500;
  font-size: 1.25rem;
`
export const ContinueButton = styled.button`
  width: 100%;
  padding: .5rem 0;
  text-transform: uppercase;
  background-color: var(--green);
  border: none;
  margin: .5rem 0;
  color: #FFFFFF;
  font-weight: 500;
  transition: filter 300ms;

  &:hover {
    filter: brightness(.9);
  }

`

export const BuyMoreButton = styled.button`
  width: 100%;
  padding: .5rem 0;
  font-size: 14px;
  text-transform: uppercase;
  background: transparent;
  box-shadow: 0 0 4px var(--gray-500);
  border: none;
  color: var(--text-color);
  font-weight: 500;
  transition: filter 300ms;

  &:hover {
    filter: brightness(.9);
  }
  
`