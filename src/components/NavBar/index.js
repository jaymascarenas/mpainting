import React from 'react'
import { StyledLink } from '../../GlobalStyles'
import { Nav, Img, StyledList } from './Styles'
import logo from '../../assets/images/logo.png'

const NavBar = () => {
  return (
    <Nav>
      <StyledLink to="/"><Img src={logo} alt="Mascarenas Painting" /></StyledLink>
      <StyledList>
        <li><StyledLink to="/services/">Services</StyledLink></li>
        <li><StyledLink to="/projects/">Projects</StyledLink></li>
        <li><StyledLink to="/about/">About</StyledLink></li>
        <li><StyledLink to="/contact/">Contact Us</StyledLink></li>
      </StyledList>
    </Nav>
  )
}

export default NavBar
