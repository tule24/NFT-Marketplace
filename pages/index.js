import React from 'react'

// INTERNAL IMPORT
import Style from '../styles/Home.module.css'
import { HeroSection } from '../components'

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
    </div>
  )
}

export default Home