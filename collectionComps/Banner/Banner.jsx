import React from 'react'
import Image from 'next/image'
// INTERNAL IMPORT
import Style from './Banner.module.css'
const Banner = ({bannerImg}) => {
  return (
    <div className={Style.banner}>
      <div className={Style.banner_img}>
        <Image src={bannerImg} alt='background'/>
      </div>
      <div className={Style.banner_img_mobile}>
        <Image src={bannerImg} alt='background' />
      </div>
    </div>
  )
}

export default Banner