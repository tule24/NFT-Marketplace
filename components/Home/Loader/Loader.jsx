import React, { useContext } from 'react'
import Image from 'next/image'
// INTERNAL IMPORT
import Style from './Loader.module.css'
import images from '@/img'
import { NFTMarketplaceContext } from '@/Context/NFTMarketplaceContext'
const Loader = () => {
  const { loading } = useContext(NFTMarketplaceContext)
  return (
    loading && (<div className={Style.loader}>
      <h2>Please wait a while. It takes some time to complete. </h2>
      <Image src={images.giphy} alt="loader" className={Style.loader_img} />
    </div>)
  )
}

export default Loader