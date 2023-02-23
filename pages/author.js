import React, { useContext, useState } from 'react'
// INTERNAL IMPORT
import Style from '@/styles/Author.module.css'
import { Banner } from '@/components/Collection'
import { AuthorTaps, AuthorProfileCard, AuthorNFTCardBox } from '@/components/Author'
import { NFTMarketplaceContext } from '@/Context/NFTMarketplaceContext'
import images from '../img'
const author = () => {
  const { nfts, currentAccount } = useContext(NFTMarketplaceContext)
  const [authorTab, setAuthorTab] = useState("All NFTs")
  return (
    <div className={Style.banner}>
      <Banner bannerImg={images.creatorbackground2} />
      {currentAccount ? (
        <div>
          <AuthorProfileCard />
          <AuthorTaps setAuthorTab={setAuthorTab} />
          <AuthorNFTCardBox authorTab={authorTab} nfts={nfts} currentAccount={currentAccount} />
        </div>
      ): (
        <div className={Style.not_connect}><h1>Please connect your wallet to view your profile</h1></div>
      )}
    </div>
  )
}

export default author