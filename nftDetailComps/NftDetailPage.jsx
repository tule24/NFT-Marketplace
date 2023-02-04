import React from 'react'
// INTERNAL IMPORT
import Style from './NftDetailPage.module.css'
import { NftDescription, NftDetailImg, NftTabs } from './index'
const NftDetailPage = () => {
  return (
    <div className={Style.nftDetailPage}>
      <div className={Style.nftDetailPage_box}>
        <NftDetailImg />
        <NftDescription />
      </div>
    </div>
  )
}

export default NftDetailPage