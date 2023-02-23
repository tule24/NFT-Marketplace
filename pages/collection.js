import React, { useContext } from 'react'
//INTERNAL IMPORT
import Style from '@/styles/Collection.module.css'
import { CollectionProfile, NFTCardTwo } from '@/components/Collection'
import { NFTMarketplaceContext } from '@/Context/NFTMarketplaceContext'

const collection = () => {
  const { nfts } = useContext(NFTMarketplaceContext)
  return (
    <div className={Style.collection}>
      <CollectionProfile />
      <NFTCardTwo nfts={nfts} />
    </div>
  )
}

export default collection