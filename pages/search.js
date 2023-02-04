import React from 'react'
// INTERNAL IMPORT
import Style from '../styles/Search.module.css'
import { NFTSlider, Brand, Filter } from '../components'
import { SearchBar } from '../searchComps'
import { Banner, NFTCardTwo } from '../collectionComps'
import images from '../img'
const search = () => {
  const collectionArray = [1,2,3,2,3,1,3,2,1]
  return (
    <div className={Style.searchPage}>
      <Banner bannerImg={images.creatorbackground5}/>
      <SearchBar />
      <Filter />
      <NFTCardTwo NFTData={collectionArray}/>
      <NFTSlider />
      <Brand />
    </div>
  )
}

export default search