import styled from 'styled-components'

export const Body = styled.body`
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
`