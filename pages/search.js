import React from 'react'
// INTERNAL IMPORT
import Style from '../styles/Search.module.css'
import { NFTSlider, Brand, Filter } from '../components'
import { SearchBar } from '../searchComps'
import { Banner, NFTCardTwo } from '../collectionComps'
import images from '../img'
import { NFTMarketplaceContext } from 'Context/NFTMarketplaceContext'
const search = () => {
  const { nfts } = useContext(NFTMarketplaceContext)
  return (
    <div className={Style.searchPage}>
      <Banner bannerImg={images.creatorbackground5} />
      <SearchBar />
      <Filter />
      <NFTCardTwo nfts={nfts} />
      <NFTSlider />
      <Brand />
    </div>
  )
}

export default search