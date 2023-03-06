import React, { useContext, useEffect } from 'react'
import { useRouter } from 'next/router'
// INTERNAL IMPORT
import NftDetailPage from '@/components/NFTDetail/NftDetailPage'
import { NFTMarketplaceContext } from '@/Context/NFTMarketplaceContext'
// import { Brand } from '@/components/Home'
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