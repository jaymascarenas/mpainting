import React from 'react'
import { StyledBody } from './BodyStyles'

const Body = (props) => {
  return (
    <StyledBody>
      {props.children}
    </StyledBody>
  )
}

export default Body
