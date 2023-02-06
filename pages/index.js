import React, { useContext, useEffect } from 'react'
// INTERNAL IMPORT
import Style from '../styles/Home.module.css'
import { HeroSection, Service, BigNFTSlider, Subscribe, Title, Category, Filter, NFTCard, Collection, Follower, AudioLive, NFTSlider, Brand, Video } from '../components'

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title heading="Audio Collection" paragraph="Discover the most outstanding NFTs in all topics of life." />
      <AudioLive />
      <Follower />
      <NFTSlider />
      <Collection />
      <Title heading="Featured NFTs" paragraph="Discover the most outstanding NFTs in all topics of life." />
      <Filter />
      <NFTCard />
      <Title heading="Browse by category" paragraph="Explore the NFTs in the most featured categories." />
      <Category />
      <Video />
      <Subscribe />
      <Brand />
    </div>
  )
}

export default Home