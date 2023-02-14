import React, { useContext, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
// INTERNAL IMPORT
import Style from '../../styles/NftDetail.module.css'
import { Brand } from '../../components'
import NftDetailPage from '../../nftDetailComps/NftDetailPage'
import { NFTMarketplaceContext } from 'Context/NFTMarketplaceContext'
const nftDetail = () => {
  const { getNFTDetail } = useContext(NFTMarketplaceContext)
  const router = useRouter()
  const { nftID } = router.query
  useEffect(() => {
    getNFTDetail(nftID)
  }, [])

  return (
    <div>
      <NftDetailPage />
      {/* <Brand /> */}
    </div>
  )
}

export default nftDetail