import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #ccc;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .10);
`

export const Img = styled.img`
  height: 60px;
  padding: 10px;
`
export const StyledList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  list-style: none;
  width: 100%;

  li {
    margin: 0 40px;
    font-size: calc(10px + 0.5vw);
  }
`
