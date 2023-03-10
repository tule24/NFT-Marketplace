import React, { useContext } from 'react'
// INTERNAL IMPORT
import Style from '../styles/Home.module.css'
import { HeroSection, Service, BigNFTSlider, Title, NFTCard, Follower, AudioLive, NFTSlider, Brand, Video } from '@/components/Home'
import { NFTMarketplaceContext } from '@/Context/NFTMarketplaceContext'

const Home = () => {
  const { nfts } = useContext(NFTMarketplaceContext)
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider nfts={nfts} />
      <Title heading="Audio Collection" paragraph="Discover the most outstanding NFTs in all topics of life." />
      <AudioLive />
      <Follower />
      <NFTSlider />
      <Title heading="Featured NFTs" paragraph="Discover the most outstanding NFTs in all topics of life." />
      <NFTCard nfts={nfts} />
      <Video />
      <Brand />
    </div>
  )
}

export default Home