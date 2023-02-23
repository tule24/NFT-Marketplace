import React from 'react'
import Image from 'next/image'
// INTERNAL IMPORT
import Style from './NftTabs.module.css'
import images from '@/img'

const NftTabs = ({ dataTab, icon }) => {
  return (
    <div className={Style.nftTabs}>
      {dataTab.map((el, i) => (
        <div className={Style.nftTabs_box} key={i}>
          <Image src={images[`user${el}`]} alt='ava' width={40} height={40} className={Style.nftTabs_box_img} />
          <div className={Style.nftTabs_box_info}>
            <span>Offer by $770 by <small>Shoaib Baih</small> {icon}</span>
            <small>Jun 14 - 4:12 PM</small>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NftTabs