import styled from 'styled-components'

export const Container = styled.footer`
  width: 100%;
  min-height: 148px;
  background-color: var(--bg-footer);
`
export const Wrap = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: auto;
  padding: 1.5rem .5rem 2rem;
  color: var(--gray-600);

  display: flex;
  align-items: center;

  @media(max-width: 760px) {
    flex-direction: column;
  }
`
export const ContactContainer = styled.section`

  @media(max-width: 760px) {
    width: 100%;
    margin-bottom: 2rem;
  }
`

export const ContainerTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 1rem;
`

export const Contact = styled.div`

`

export const ContactText = styled.text`
  font-size: 14px;
`

export const ContactButton = styled.button`
  background: transparent;
  border: none;
  color: var(--blue-action);
  margin-left: .5rem;
  font-size: 14px;
`


export const NewsLetterContainer = styled.section`
  width: 320px;
  margin: auto;

`

export const Title = styled.h2`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
`
export const Form = styled.form`
  width: 100%;
  margin-top: 1rem;
  
  display: flex;

`

export const Input = styled.input`
  flex: 1;
  background-color: var(--gray-700);
  padding: .25rem .5rem;
  border: none;
  color: #FFF;

  &::placeholder {
    color: var(--gray-500);
  }
`

export const Button = styled.button`
  background-color: var(--gray-600);
  color: #fff;
  font-size: 14px;
  padding: 0 .5rem;
  border: none;
  text-transform: uppercase;
  transition: filter 300ms;

  &:hover {
    filter: brightness(.8);
  }
`

export const TitleButton = styled.text`
`
export const SocialMediaContainer = styled.section`
  width: 160px;
  

  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 760px) {
    margin-top: 2rem;
  }
  
`

export const SocialMediaTitle = styled.text`
  font-size: 1.5rem;
  font-weight: 500;

  @media(max-width: 760px) {
    display: none;
  }
`

export const SocialMediasIcons = styled.div`
  margin-top: 1rem;

  display: flex;
  gap: 1rem;

  @media(max-width: 760px) {
    margin-top: 0;
  }
`

export const SocialButton = styled.button`
  background: transparent;
  color: var(--gray-600);
  border: none;
  transition: filter 300ms;

  &:hover {
    filter: brightness(.8);
  }
`

export const CopyRight = styled.h3`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  padding-bottom: 1rem;
  color: var(--gray-700);
`