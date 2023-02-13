import React, { useState } from 'react'
import { BsImage } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { MdTimer } from 'react-icons/md'
//INTERNAL IMPORT
import Style from './NFTCardTwo.module.css'
import { LikeProfile } from '../../components'
const NFTCardTwo = ({ nfts }) => {
    return (
        <div className={Style.NFTCardTwo}>
            {nfts.map((el, i) => (
                <div className={Style.NFTCardTwo_box} key={i}>
                    <div className={Style.NFTCardTwo_box_like}>
                        <div className={Style.NFTCardTwo_box_like_box}>
                            <div className={Style.NFTCardTwo_box_like_box_box}>
                                <BsImage className={Style.NFTCardTwo_box_like_box_box} />
                                <p>
                                    <AiFillHeart />{""} {el.like}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={Style.NFTCardTwo_box_img}>
                        <img src={el.image} alt="NFT" className={Style.NFTCardTwo_box_img_img} />
                    </div>
                    <div className={Style.NFTCardTwo_box_info}>
                        <div className={Style.NFTCardTwo_box_info_left}>
                            <LikeProfile />
                            <p>{el.name}</p>
                        </div>
                        <small>4{i + 2}</small>
                    </div>
                    <div className={Style.NFTCardTwo_box_price}>
                        <div className={Style.NFTCardTwo_box_price_box}>
                            <small>Current Bid</small>
                            <p>{el.price} ETH</p>
                        </div>
                        <p className={Style.NFTCardTwo_box_price_stock}>
                            <MdTimer /> <span>{i + 1} hours left</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NFTCardTwo