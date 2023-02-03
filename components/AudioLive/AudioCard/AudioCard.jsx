import React, { useState } from 'react'
import Image from 'next/image'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { TbPlayerPlay, TbPlayerPause } from 'react-icons/tb'
// INTERNAL IMPORT
import Style from './AudioCard.module.css'
import images from '../../../img'
import LikeProfile from '../../LikeProfile/LikeProfile'

const AudioCard = () => {
    const [like, setLike] = useState(false)
    const [play, setPlay] = useState(false)
    return (
        <div className={Style.audioCard}>
            <div className={Style.audioCard_box}>
                <div className={Style.audioCard_box_like_time}>
                    <div className={Style.audioCard_box_icon} onClick={() => setLike(!like)}>
                        {
                            like ? (<AiFillHeart className={Style.audioCard_box_icon_like} />)
                                : (<AiOutlineHeart className={Style.audioCard_box_icon_unlike} />)
                        }
                        <span>24</span>
                    </div>
                    <div className={Style.audioCard_box_time}>
                        <div className={Style.audioCard_box_like_time_remain}>
                            <small>Remaining time</small>
                            <h5>3h : 15m : 20s</h5>
                        </div>
                    </div>
                </div>
                <div className={Style.audioCard_box_player}>
                    <Image src={images.musiceWave} alt="music" width={200}/>
                    <div className={Style.audioCard_box_musicPlayer} onClick={() => setPlay(!play)}>
                        {
                            play ? (
                                <div className={Style.audioCard_box_musicPlayer_icon}>
                                    <TbPlayerPause />
                                </div>
                            ) : (
                                <div className={Style.audioCard_box_musicPlayer_icon}>
                                    <TbPlayerPlay />
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className={Style.audioCard_box_details}>
                    <div className={Style.audioCard_box_details_info}>
                        <h4>NFT music #1123</h4>
                        <div className={Style.audioCard_box_details_info_price}>
                            <small>Price</small>
                            <p>$3,221.33</p>
                        </div>
                    </div>
                    <div className={Style.audioCard_box_details_stock}>
                        <LikeProfile />
                        <small>24 in stock</small>
                    </div>
                </div>
                <div className={Style.audioCard_box_img}>
                    <Image src={images.creatorbackground10} alt="background" className={Style.audioCard_box_img_img}/>
                </div>
            </div>
        </div>
    )
}

export default AudioCard