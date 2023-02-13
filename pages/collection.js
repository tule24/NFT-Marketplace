import React from 'react'
//INTERNAL IMPORT
import Style from '../styles/Collection.module.css'
import { CollectionProfile, NFTCardTwo } from '../collectionComps'
import { Filter } from '../components'
import { NFTMarketplaceContext } from 'Context/NFTMarketplaceContext'

const collection = () => {
  const { nfts } = useContext(NFTMarketplaceContext)
  return (
    <div className={Style.collection}>
      <CollectionProfile />
      <Filter />
      <NFTCardTwo nfts={nfts} />
    </div>
  )
}

export default collection