import React from 'react'

// INTERNAL IMPORT
import Style from '../styles/Home.module.css'
import { HeroSection, Service, BigNFTSlider, Subscribe, Title } from '../components'

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Subscribe />
      <Title heading="Browse by category" paragraph="Explore the NFTs in the most featured categories."/>
    </div>
  )
}

export default Home