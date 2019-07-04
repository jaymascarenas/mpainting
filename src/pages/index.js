import React from 'react'
import Hero from '../components/Hero'
import Body from '../components/Body'

import Layout from '../components/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="hero">
        <div className="inner-hero">
          <h1>Mascarenas Painting</h1>
          <p>A lousy paragraph no one is going to read</p>
          <a href="/" className="cta">
            Free Estimates!
          </a>
        </div>
      </div>
      <Body>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Et sollicitudin ac orci phasellus
          egestas. Mattis molestie a iaculis at. Nisi scelerisque eu ultrices vitae. In fermentum et sollicitudin ac.
          Tincidunt id aliquet risus feugiat in. Diam in arcu cursus euismod quis viverra nibh cras pulvinar. Mi
          bibendum neque egestas congue quisque egestas diam. Posuere lorem ipsum dolor sit amet consectetur. Enim ut
          tellus elementum sagittis vitae et leo duis ut. Lectus quam id leo in vitae turpis. Blandit aliquam etiam erat
          velit scelerisque in dictum. Quis commodo odio aenean sed adipiscing diam donec.
        </p>
      </Body>
    </Layout>
  )
}

export default Home
