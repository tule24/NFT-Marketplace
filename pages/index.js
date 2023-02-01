import React from 'react'

// INTERNAL IMPORT
import Style from '../styles/Home.module.css'
import { HeroSection, Service } from '../components'

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
    </div>
  )
}

export default Home