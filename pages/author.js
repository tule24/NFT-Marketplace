import React, { useContext, useState } from 'react'
// INTERNAL IMPORT
import Style from '../styles/Author.module.css'
import { Banner } from '../collectionComps'
import { AuthorTaps, AuthorProfileCard, AuthorNFTCardBox } from '../authorComps'
import { NFTMarketplaceContext } from 'Context/NFTMarketplaceContext'
import images from '../img'
const author = () => {
  const { nfts, currentAccount } = useContext(NFTMarketplaceContext)
  const [authorTab, setAuthorTab] = useState("All NFTs")
  return (
    <div className={Style.banner}>
      <Banner bannerImg={images.creatorbackground2} />
      <AuthorProfileCard />
      <AuthorTaps setAuthorTab={setAuthorTab} />
      <AuthorNFTCardBox authorTab={authorTab} nfts={nfts} currentAccount={currentAccount} />
    </div>
  )
}

export default author