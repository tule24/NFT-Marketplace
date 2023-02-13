import React, { useState } from 'react'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { FaEthereum } from 'react-icons/fa'
import { BsImages } from 'react-icons/bs'
//INTERNAL IMPORT
import Style from './Card.module.css'

const Card = ({ nfts }) => {
    return (
        <div className={Style.card}>
            {nfts.map((el, i) => (
                <div className={Style.card_box} key={i}>
                    <div className={Style.card_box_item}>
                        <img src={el.image} alt="NFT images" className={Style.card_box_item_img} />
                    </div>
                    <div className={Style.card_box_update}>
                        <div className={Style.card_box_update_left}>
                            <div className={Style.card_box_update_left_like}>
                                <AiFillHeart color='red' /> {""} {el.like}
                            </div>
                        </div>
                        <div className={Style.card_box_update_right}>
                            <div className={Style.card_box_update_right_info}>
                                <small>Created At</small>
                                <p>{new Date(el.createdAt).toLocaleDateString()}</p>
                            </div>
                        </div>
                    </div>
                    <div className={Style.card_box_update_details}>
                        <div className={Style.card_box_update_details_price}>
                            <div className={Style.card_box_update_details_price_box}>
                                <h4>{el.name}</h4>
                                <div className={Style.card_box_update_details_price_box_box}>
                                    <div className={Style.card_box_update_details_price_box_bid}>
                                        <small>Current Bid</small>
                                        <p><FaEthereum />{el.price} ETH</p>
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