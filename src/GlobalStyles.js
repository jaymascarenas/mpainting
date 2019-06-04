import styled from 'styled-components'
import { Link } from 'gatsby'

const primaryColor = '#AA3033'
const secondaryColor = '#914647'
// const cta = '#30aa6b'
// const blue = '#306faa'

export const Grid = styled.div`
  margin: 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;
  height: 100vh;
`
export const StyledLink = styled(Link)`
  color: ${primaryColor};
  font-weight: bold;
  text-decoration: none;

  :hover {
    color: ${secondaryColor};
  }
`
