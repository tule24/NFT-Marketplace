import React, { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaEthereum } from 'react-icons/fa'
import { BsImages } from 'react-icons/bs'
import Image from 'next/image'
//INTERNAL IMPORT
import Style from './Card.module.css'
import images from '../../img'

const Card = () => {
    const CardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const [like, setLike] = useState(true)
    
    return (
        <div className={Style.card}>
            {CardArray.map((el, i) => (
                <div className={Style.card_box} key={i}>
                    <div className={Style.card_box_item}>
                        <Image src={images[`nft_image_${(i+1)%3 + 1}`]} alt="NFT images" className={Style.card_box_item_img}/>
                    </div>
                    <div className={Style.card_box_update}>
                        <div className={Style.card_box_update_left}>
                            <div className={Style.card_box_update_left_like} onClick={() => setLike(!like)}>
                                {like ? <AiOutlineHeart /> : <AiFillHeart className={Style.card_box_update_left_like_icon}/>} {""} 22
                            </div>
                        </div>
                        <div className={Style.card_box_update_right}>
                            <div className={Style.card_box_update_right_info}>
                                <small>Remaining time</small>
                                <p>3h : 15m : 20s</p>
                            </div>
                        </div>
                    </div>
                    <div className={Style.card_box_update_details}>
                        <div className={Style.card_box_update_details_price}>
                            <div className={Style.card_box_update_details_price_box}>
                                <h4>Clone #12345</h4>
                                <div className={Style.card_box_update_details_price_box_box}>
                                    <div className={Style.card_box_update_details_price_box_bid}>
                                        <small>Current Bid</small>
                                        <p><FaEthereum />1.00 ETH</p>
                                    </div>
                                    <div className={Style.card_box_update_details_price_box_stock}>
                                        <small>61 in stock</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={Style.card_box_update_details_category}>
                            <BsImages />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Card