import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 50px;
  background-color: #202020;

  button {
    transition: color 300ms;
    
    &:hover {
      color: var(--blue);
    }
  }
`

export const Wrap = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: auto;
  padding: 0 8px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ImageContainer = styled.button`
  width: 100px;
  height: 40px;
  background: transparent;
  border: none;
`

export const Actions = styled.div`
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`

export const Button = styled.button`
  background: transparent;
  border: none;
  color: white;
`

export const UserButtonAvatar = styled.button`
  width: 30px;
  height: 30px;
  border: 1px solid red;
  border-radius: 50%;
  background: transparent;
`

export const ButtonCarContainer = styled.div`
  position: relative;
`

export const Tag = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 300;
  width: 16px;
  height: 16px;
  background-color: var(--blue);
  font-size: 10px;
  border-radius: 50%;
  pointer-events: none;

  display: flex;
  align-items: center;
  justify-content: center;
`