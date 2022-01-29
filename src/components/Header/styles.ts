import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 50px;
  background-color: #202020;
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