import React from 'react'
import { Grid } from '../GlobalStyles'
import NavBar from '../components/NavBar/'
import Footer from '../components/Footer/'

const Home = () => {
  return (
    <Grid>
      <NavBar />
      <h1>Home Page</h1>
      <h2>Sidebar</h2>
      <Footer />
    </Grid>
  )
}

export default Home
