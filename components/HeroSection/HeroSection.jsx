import React from 'react'
import { FcCameraAddon } from 'react-icons/fc'
// INTERNAL IMPORT
import Style from './HeroSection.module.css'
import { Button } from '../index'
import images from '../../img'

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, collect, and sell NFTs <FcCameraAddon className={Style.heroIcon} /></h1>
          <p>Discover the most outstanding NFTs in all topic of life. Creative your NFTs and sell them</p>
          <Button btnName='Start your search' />
        </div>
        <div className={Style.heroSection_box_right}>
          <img src="https://ipfs.io/ipfs/bafybeifsigvmactsur7vv734rlhhmagwkcqh22jvnqnkdznhcio2jznvsu/nft-image-3.png" alt="Hero section" className={Style.heroSection_img} />
        </div>
      </div>
    </div>
  )
}

export default HeroSection