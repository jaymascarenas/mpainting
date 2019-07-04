import React from 'react'
import { Grid } from '../GlobalStyles'
import NavBar from './NavBar'
import Footer from './Footer'
import 'normalize.css';
import '../styles.css';

const Layout = ({ children }) => {
  return (
    <Grid>
      <NavBar />
      {children}
      <Footer />
    </Grid>
  )
}

export default Layout
