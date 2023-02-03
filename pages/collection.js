import React from 'react'
//INTERNAL IMPORT
import Style from '../styles/Collection.module.css'
import images from '../img'
import { Banner, CollectionProfile, NFTCardTwo } from '../collectionComps'
import { NFTSlider, Brand, Filter } from '../components'
const collection = () => {
  const collectionArray = [1,2,3,2,3,1,3,2,1]
  return (
    <div className={Style.collection}>
      <Banner bannerImg={images.creatorbackground1}/>
      <CollectionProfile />
      <Filter />
      <NFTCardTwo NFTData={collectionArray}/>
      <NFTSlider />
      <Brand />
    </div>
  )
}

export default collection