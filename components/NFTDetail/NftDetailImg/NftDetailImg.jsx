import React, { useContext, useState } from 'react'
import { BsImages } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { TiArrowSortedUp, TiArrowSortedDown } from 'react-icons/ti'
// INTERNAL IMPORT
import Style from './NftDetailImg.module.css'
import { NFTMarketplaceContext } from '@/Context/NFTMarketplaceContext'
const NftDetailImg = () => {
  const [desc, setDesc] = useState(false)
  const [detail, setDetail] = useState(false)
  const { nftDetail } = useContext(NFTMarketplaceContext)
  
  return (
    <div className={Style.nftDetailImg}>
      <div className={Style.nftDetailImg_box}>
        <div className={Style.nftDetailImg_box_nft}>
          <div className={Style.nftDetailImg_box_nft_like}>
            <BsImages className={Style.nftDetailImg_box_nft_like_icon} />
            <p onClick={() => setLike(!like)}>
              <AiFillHeart className={Style.nftDetailImg_box_nft_like_icon} />{""}
              <span>{nftDetail?.like}</span>
            </p>
          </div>
          <div className={Style.nftDetailImg_box_nft_img}>
            <img src={nftDetail?.image} className={Style.nftDetailImg_box_nft_img_img} alt="NFT Image" />
          </div>
        </div>
        <div className={Style.nftDetailImg_box_description} onClick={() => setDesc(!desc)}>
          <p>Description</p>
          {desc ? (<TiArrowSortedUp />) : (<TiArrowSortedDown />)}
        </div>
        {desc && (
          <div className={Style.nftDetailImg_box_description_box}>
            <p>{nftDetail?.description}</p>
          </div>
        )}
        <div className={Style.nftDetailImg_box_detail} onClick={() => setDetail(!detail)}>
          <p>Detail</p>
          {detail ? (<TiArrowSortedUp />) : (<TiArrowSortedDown />)}
        </div>
        {detail && (
          <div className={Style.nftDetailImg_box_detail_box}>
            <p>
              <small><b>Name</b></small><br />
              {nftDetail?.name}
            </p>
            <p>
              <small><b>Collection</b></small><br />
              {nftDetail?.collections}
            </p>
            <p>
              <small><b>Token URI</b></small><br />
              {nftDetail?.uri}
            </p>
            <p>
              <small><b>Token ID</b></small><br />
              {nftDetail?.tokenId}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default NftDetailImg