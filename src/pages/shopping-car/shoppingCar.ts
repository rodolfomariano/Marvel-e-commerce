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

export const StepText = styled.text`
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

`

export const RequestsList = styled.div`

`

export const ValueContainer = styled.div`

`