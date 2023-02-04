import React from 'react'
// INTERNAL IMPORT
import Style from '../styles/NFTDetail.module.css'
import { Button, Category, Brand } from '../components'
import NftDetailPage from '../nftDetailComps/NftDetailPage'
const nftDetail = () => {
  return (
    <div>
      <NftDetailPage />
      <Category />
      <Brand />
    </div>
  )
}

export default nftDetail