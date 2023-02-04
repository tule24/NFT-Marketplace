import React, { useState } from 'react'
import Image from 'next/image'
import { MdVerified } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'
// INTERNAL IMPORT
import Style from './FollowerCard.module.css'
import images from '../../../img'

const FollowerCard = ({ cardData }) => {
    const [follow, setFollow] = useState(true)
    return (
        <div className={Style.follower_box}>
            {cardData.map((el, i) => (
                <div className={Style.followerCard} key={i}>
                    <div className={Style.followerCard_rank}>
                        <p>
                            #{i + 1} <span> 🏅 </span>
                        </p>
                    </div>
                    <div className={Style.followerCard_box}>
                        <div className={Style.followerCard_box_img}>
                            <Image src={images[`creatorbackground${i + 1}`]} alt="profile background" className={Style.followerCard_box_img_img} />
                        </div>
                        <div className={Style.followerCard_box_profile}>
                            <Image src={images[`user${i + 1}`]} alt="ava" width={50} height={50} className={Style.followerCard_box_profile_img} />
                        </div>
                        <div className={Style.followerCard_box_info}>
                            <div className={Style.followerCard_box_info_name}>
                                <h4>Zenitsu <span><MdVerified color='green' /></span></h4>
                                <p>12.321 ETH</p>
                            </div>
                            <div className={Style.followerCard_box_info_following}>
                                {
                                    follow ? (
                                        <a onClick={() => setFollow(!follow)}>Follow <span><TiTick /></span></a>
                                    ) : (
                                        <a onClick={() => setFollow(!follow)}>Following <span><TiTick /></span></a>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default FollowerCard