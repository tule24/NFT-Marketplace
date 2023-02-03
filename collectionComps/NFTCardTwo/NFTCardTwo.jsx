import React, { useState } from 'react'
import Image from 'next/image'
import { BsImage } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { MdVerified, MdTimer } from 'react-icons/md'
//INTERNAL IMPORT
import Style from './NFTCardTwo.module.css'
import { LikeProfile } from '../../components'
import images from '../../img'
const NFTCardTwo = ({ NFTData }) => {
    const [like, setLike] = useState(false)
    const [likeInc, setLikeInc] = useState(21)

    const likeNFT = () => {
        if(!like) {
            setLike(true)
            setLikeInc(likeInc + 1)
        } else {
            setLike(false)
            setLikeInc(likeInc - 1)
        }
    }
    return (
        <div className={Style.NFTCardTwo}>
            {NFTData.map((el, i) => (
                <div className={Style.NFTCardTwo_box} key={i}>
                    <div className={Style.NFTCardTwo_box_like}>
                        <div className={Style.NFTCardTwo_box_like_box}>
                            <div className={Style.NFTCardTwo_box_like_box_box}>
                                <BsImage className={Style.NFTCardTwo_box_like_box_box}/>
                                <p onClick={() => likeNFT()}>
                                    {
                                        like ? (<AiFillHeart />) : (<AiOutlineHeart />)
                                    }
                                    {""}<span>{likeInc + 1}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={Style.NFTCardTwo_box_img}>
                        <Image src={images[`nft_image_${el}`]} alt="NFT" className={Style.NFTCardTwo_box_img_img}/>
                    </div>
                    <div className={Style.NFTCardTwo_box_info}>
                        <div className={Style.NFTCardTwo_box_info_left}>
                            <LikeProfile />
                            <p>Clone #{i + 1}</p>
                        </div>
                        <small>4{i+2}</small>
                    </div>
                    <div className={Style.NFTCardTwo_box_price}>
                        <div className={Style.NFTCardTwo_box_price_box}>
                            <small>Current Bid</small>
                            <p>1{i+5}.00 ETH</p>
                        </div>
                        <p className={Style.NFTCardTwo_box_price_stock}>
                            <MdTimer /> <span>{i+1} hours left</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default NFTCardTwo