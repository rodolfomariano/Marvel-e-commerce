import styled from 'styled-components'

export const Head = styled.body`
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