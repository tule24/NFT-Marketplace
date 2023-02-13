import React, { useState } from 'react'
// INTERNAL IMPORT
import Style from '../styles/Author.module.css'
import { Banner } from '../collectionComps'
import { Brand, Title } from '../components'
import { AuthorTaps, AuthorProfileCard, AuthorNFTCardBox } from '../authorComps'
import images from '../img'
const author = () => {
  const [authorTab, setAuthorTab] = useState("All NFTs")
  return (
    <div className={Style.banner}>
      <Banner bannerImg={images.creatorbackground2} />
      <AuthorProfileCard />
      <AuthorTaps setAuthorTab={setAuthorTab}/>
      <AuthorNFTCardBox authorTab={authorTab}/>
    </div>
  )
}

export default author