import React from 'react'
import Image from 'next/image'
//INTERNAL IMPORT
import Style from './SliderCard.module.css'
import images from '../../../img'
import LikeProfile from '../../LikeProfile/LikeProfile'

const SliderCard = ({i}) => {
  return (
    <div className={Style.sliderCard}>
        <div className={Style.sliderCard_box}>
            <div className={Style.sliderCard_box_img}>
                <Image src={images[`creatorbackground${i + 1}`]} alt="slider profile" className={Style.sliderCard_box_img_img}/>
            </div>
            <div className={Style.sliderCard_box_title}>
                <p>NFT Video #1234</p>
                <div className={Style.sliderCard_box_title_like}>
                    <LikeProfile />
                    <small>1 of 100</small>
                </div>
            </div>
            <div className={Style.sliderCard_box_price}>
                <div className={Style.sliderCard_box_price_box}>
                    <small>Current Bid</small>
                    <p>1.000 ETH</p>
                </div>
                <div className={Style.sliderCard_box_price_time}>
                    <small>Remaining time</small>
                    <p>3h : 15m : 20s</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SliderCard