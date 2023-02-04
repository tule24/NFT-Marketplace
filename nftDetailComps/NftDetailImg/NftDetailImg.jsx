import React, { useState } from 'react'
import Image from 'next/image'
import { BsImages } from 'react-icons/bs'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti'
// INTERNAL IMPORT
import Style from './NftDetailImg.module.css'
import images from '../../img'
const NftDetailImg = () => {
  const [description, setDescription] = useState(true)
  const [detail, setDetail] = useState(true)
  const [like, setLike] = useState(false)
  return (
    <div className={Style.nftDetailImg}>
      <div className={Style.nftDetailImg_box}>
        <div className={Style.nftDetailImg_box_nft}>
          <div className={Style.nftDetailImg_box_nft_like}>
            <BsImages className={Style.nftDetailImg_box_nft_like_icon} />
            <p onClick={() => setLike(!like)}>
              {like ? (<AiFillHeart className={Style.nftDetailImg_box_nft_like_icon} />) : (<AiOutlineHeart className={Style.nftDetailImg_box_nft_like_icon} />)}
              <span>23</span>
            </p>
          </div>
          <div className={Style.nftDetailImg_box_nft_img}>
            <Image src={images.nft_image_1} className={Style.nftDetailImg_box_nft_img_img} alt="NFT Image"/>
          </div>
        </div>
        <div className={Style.nftDetailImg_box_description} onClick={() => setDescription(!description)}>
          <p>Description</p>
          {description ? (<TiArrowSortedUp />) : (<TiArrowSortedDown />)}
        </div>
        {description && (
          <div className={Style.nftDetailImg_box_description_box}>
            <p>Tattooed Kitty Gang ("TKG") is a collection of 666 badass kitty gangsters, with symbol of tattoos, living in the Proud Kitty Gang("PKG") metaverse. Each TKG IS AN 1/1 id as ganster member & all the join rights</p>
          </div>
        )}
        <div className={Style.nftDetailImg_box_detail} onClick={() => setDetail(!detail)}>
          <p>Detail</p>
          {detail ? (<TiArrowSortedUp />) : (<TiArrowSortedDown />)}
        </div>
        {detail && (
          <div className={Style.nftDetailImg_box_detail_box}>
            <small>2000 x 2000 px. IMAGE(685Kb) </small>
            <p>
              <small><b>Contract Address</b></small><br />
              0x50f5474725e0ee42d9a4e711ccfb275809fd6d4a
            </p>
            <p>
              <small><b>Token ID</b></small><br />
              10000372864
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default NftDetailImg