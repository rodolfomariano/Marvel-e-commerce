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
export const DearestContainer = styled.div`
  margin-top: 2.5rem;
`

export const DearestTitle = styled.h2`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  color: var(--title-color);
  letter-spacing: 0.1em;
`

export const DearestContentList = styled.div`
  overflow-x: auto;
  margin-bottom: 3rem;
  padding: 1rem 0;

  display: flex;
  gap: 1.5rem;
`

export const HQsContainer = styled.section`

`

export const HQsContainerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h2`
  font-family: 'Roboto Condensed', sans-serif;
  color: var(--title-color);
  letter-spacing: 0.1em;
  font-size: 22px;
`

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  flex: 1;
  background-color: var(--gray-100);
  padding: .25rem .5rem;
  border: none;
  color: var(--gray-600);

  &::placeholder {
    color: var(--gray-500);
  }
`

export const SearchButton = styled.button`
  background-color: var(--gray-600);
  color: #fff;
  font-size: 14px;
  padding: .25rem;
  border: none;
  text-transform: uppercase;
  transition: filter 300ms;

  &:hover {
    filter: brightness(.8);
  }
`

export const SearchResult = styled.text`
  display: inline-block;
  color: var(--text-color);
  font-weight: 500;
  margin-top: 1.5rem;
`

export const FilterContainer = styled.div`
  margin-top: 1rem;

  display: flex;
  align-items: center;
  gap: .5rem;
`
export const Label = styled.text`
  color: var(--text-color);

  @media(max-width: 500px) {
    display: none;
  }
`

export const FilterChoiceContent = styled.div`
  display: flex;
  align-items: center;
  gap: .5rem;
`


export const FilterChoiceButton = styled.button`
  background: transparent;
  border: none;
  box-shadow: 0 0 2px var(--gray-700);
  padding: .25rem .5rem;
  font-size: 14px;
  font-weight: 400;
  color: var(--title-color);
  transition: 300ms;

  &:hover {
    background-color: var(--primary);
    color: #FFFFFF;
  }
`

export const HQsList = styled.section`
  margin: 4rem 0 5rem;
`