import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import { AiFillFire } from 'react-icons/ai'
import { MdVerified, MdTimer } from 'react-icons/md'
import { TbArrowBigLeftLine, TbArrowBigRightLine } from 'react-icons/tb'
import { FcLike } from 'react-icons/fc'
import { FaEthereum } from 'react-icons/fa'
// INTERNAL IMPORT
import Style from './BigNFTSlider.module.css'
import { Button } from '../index'
import { minifyAddress } from '@/helpers'
import Blockies from 'react-blockies'
import Link from 'next/link'
import { GoUnverified, GoVerified } from 'react-icons/go'

const BigNFTSlider = ({ nfts }) => {
    const [idNumber, setIdNumber] = useState(0);
    const handleSlide = useCallback((num) => {
        if (idNumber + num >= nfts.length) {
            setIdNumber(0)
        } else if (idNumber + num < 0) {
            setIdNumber(nfts.length - 1)
        } else {
            setIdNumber(idNumber + num)
        }
    }, [nfts.length, idNumber])
    return (
        <div className={Style.bigNFTSlider}>
            <div className={Style.bigNFTSlider_box}>
                <div className={Style.bigNFTSlider_box_left}>
                    <h2>{nfts[idNumber]?.name}</h2>
                    <div className={Style.bigNFTSlider_box_left_creator}>
                        <div className={Style.bigNFTSlider_box_left_creator_profile}>
                            <Blockies seed={nfts[idNumber]?.owner.toLowerCase() || "0x1BfC7c4Bce1DB93Ea3F48BFC52A6a7fccc770D3B"} className={Style.bigNFTSlider_box_left_creator_profile_ava} />
                            <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                                <p>Creator</p>
                                <h3>{nfts[idNumber]?.owner && minifyAddress(nfts[idNumber]?.owner)} <span><MdVerified color='green' /></span></h3>
                            </div>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_creator_collection}>
                            <AiFillFire className={Style.bigNFTSlider_box_left_creator_collection_icon} />
                            <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                                <p>Collection</p>
                                <h3>{nfts[idNumber]?.collections}</h3>
                            </div>
                        </div>
                    </div>
                    <div className={Style.bigNFTSlider_box_left_bidding}>
                        <div className={Style.bigNFTSlider_box_left_bidding_box}>
                            <small>Current Bid</small>
                            <p><FaEthereum size={20} /> <span>{nfts[idNumber]?.price} <b>ETH</b></span></p>
                        </div>
                        <p className={Style.bigNFTSlider_box_left_bidding_auction}>
                            <MdTimer className={Style.bigNFTSlider_box_left_bidding_auction_icon} />
                            <span>Auction ending in (coming soon)</span>
                        </p>
                        <div className={Style.bigNFTSlider_box_left_bidding_timer}>
                            <div className={Style.bigNFTSlider_box_left_bidding_timer_item}>
                                <p>10</p>
                                <p>Days</p>
                            </div>
                            <div className={Style.bigNFTSlider_box_left_bidding_timer_item}>
                                <p>09</p>
                                <p>Hours</p>
                            </div>
                            <div className={Style.bigNFTSlider_box_left_bidding_timer_item}>
                                <p>08</p>
                                <p>Mins</p>
                            </div>
                            <div className={Style.bigNFTSlider_box_left_bidding_timer_item}>
                                <p>07</p>
                                <p>Secs</p>
                            </div>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_button}>
                            <Link href={`nftDetail/${nfts[idNumber]?._id}`}>
                                <Button btnName="Place" handleClick={() => { }} />
                            </Link>
                            <Link href={`nftDetail/${nfts[idNumber]?._id}`}>
                                <Button btnName="View" handleClick={() => { }} />
                            </Link>
                        </div>
                    </div>
                    <div className={Style.bigNFTSlider_box_left_sliderBtn}>
                        <TbArrowBigLeftLine className={Style.bigNFTSlider_box_left_sliderBtn_icon} onClick={() => handleSlide(-1)} />
                        <TbArrowBigRightLine className={Style.bigNFTSlider_box_left_sliderBtn_icon} onClick={() => handleSlide(1)} />
                    </div>
                </div>
                <div className={Style.bigNFTSlider_box_right}>
                    <div className={Style.bigNFTSlider_box_right_box}>
                        <img src={nfts[idNumber]?.image} alt="NFT image" className={Style.bigNFTSlider_box_right_box_img} />
                        <div className={Style.bigNFTSlider_box_right_box_like}>
                            {nfts[idNumber]?.listing ? <><GoVerified color='green' /> {""} Listing</>
                                : <><GoUnverified color='orange' /> {""} Unlisting</>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BigNFTSlider