
import styled from 'styled-components'

export const Container = styled.div`
  max-width: 764px;
  min-height: 100%;
  box-shadow: 0 0 4px var(--gray-500);
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ImageContainer = styled.div`
  position: relative;
  flex: none;
  width: 220px;
  height: 333px;
  margin-right: 1.5rem;

  @media(max-width: 760px) {
    width: 100px;
    height: 166px;
  }
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

  @media(max-width: 760px) {
    width: 100px;
  }
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
  /* justify-content: space-between; */
`

export const Header = styled.div`
  display: flex;
  align-items: flex-end;

`
export const StarsContainer = styled.div`
  color: var(--gold-light);

  display: flex;
  gap: .25rem;
`

export const UsersRatings = styled.button`
  background: transparent;
  border: none;
  color: var(--blue-action);
  font-size: 14px;
  margin-left: .5rem;
`

export const DetailParagraph = styled.p`
  margin: 2rem 0;
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-color);

  @media(max-width: 760px) {
    font-size: 12px;
  }
`

export const CreatorsContainer = styled.div`

  @media(max-width: 760px) {
    display: none;
  }
`

export const CreatorsIcon = styled.div`
  margin-bottom: .5rem;
  color: var(--title-color);

  display: flex;
  align-items: center;

`

export const CreatorsTitle = styled.h3`
  margin-left: .5rem;
  font-size: 1rem;
`

export const CreatorsList = styled.div`
  margin-bottom: 1.5rem;
`

export const Creator = styled.button`
  font-size: 14px;
  font-weight: 400;
  color: var(--text-color);
  background: none;
  border: none;

  &:hover {
    color: var(--title-color);
  }
`
export const Footer = styled.footer`
  display: flex;
  align-items: center;

`

export const FooterContent = styled.div`
  color: var(--title-color);
  font-size: 14px;

  display: flex;
  align-items: center;

  &:first-child {
    margin-right: 1rem;
  }

  @media(max-width: 760px) {
    font-size: 12px;
  }
`

export const FooterText = styled.text`
  margin-left: .5rem;
`
