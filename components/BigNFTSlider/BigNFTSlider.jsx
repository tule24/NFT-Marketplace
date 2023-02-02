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
import { sliderData } from './SliderData'

const BigNFTSlider = () => {
    const [idNumber, setIdNumber] = useState(0);
    const handleSlide = useCallback((num) => {
        if (idNumber + num >= sliderData.length) {
            setIdNumber(0)
        } else if (idNumber + num < 0) {
            setIdNumber(sliderData.length - 1)
        } else {
            setIdNumber(idNumber + num)
        }
    }, [sliderData.length, idNumber])
    return (
        <div className={Style.bigNFTSlider}>
            <div className={Style.bigNFTSlider_box}>
                <div className={Style.bigNFTSlider_box_left}>
                    <h2>{sliderData[idNumber].title}</h2>
                    <div className={Style.bigNFTSlider_box_left_creator}>
                        <div className={Style.bigNFTSlider_box_left_creator_profile}>
                            <Image src={sliderData[idNumber].ava} alt="avatar" width={50} height={50} className={Style.bigNFTSlider_box_left_creator_profile_ava} />
                            <div className={Style.bigNFTSlider_box_left_creator_profile_info}>
                                <p>Creator</p>
                                <h3>{sliderData[idNumber].name} <span><MdVerified color='green'/></span></h3>
                            </div>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_creator_collection}>
                            <AiFillFire className={Style.bigNFTSlider_box_left_creator_collection_icon} />
                            <div className={Style.bigNFTSlider_box_left_creator_collection_info}>
                                <p>Collection</p>
                                <h3>{sliderData[idNumber].collection}</h3>
                            </div>
                        </div>
                    </div>
                    <div className={Style.bigNFTSlider_box_left_bidding}>
                        <div className={Style.bigNFTSlider_box_left_bidding_box}>
                            <small>Current Bid</small>
                            <p><FaEthereum size={20}/> <span>{sliderData[idNumber].price} <b>ETH</b></span></p>
                        </div>
                        <p className={Style.bigNFTSlider_box_left_bidding_auction}>
                            <MdTimer className={Style.bigNFTSlider_box_left_bidding_auction_icon} />
                            <span>Auction ending in</span>
                        </p>
                        <div className={Style.bigNFTSlider_box_left_bidding_timer}>
                            <div className={Style.bigNFTSlider_box_left_bidding_timer_item}>
                                <p>{sliderData[idNumber].time.days}</p>
                                <p>Days</p>
                            </div>
                            <div className={Style.bigNFTSlider_box_left_bidding_timer_item}>
                                <p>{sliderData[idNumber].time.hours}</p>
                                <p>Hours</p>
                            </div>
                            <div className={Style.bigNFTSlider_box_left_bidding_timer_item}>
                                <p>{sliderData[idNumber].time.minutes}</p>
                                <p>Mins</p>
                            </div>
                            <div className={Style.bigNFTSlider_box_left_bidding_timer_item}>
                                <p>{sliderData[idNumber].time.seconds}</p>
                                <p>Secs</p>
                            </div>
                        </div>
                        <div className={Style.bigNFTSlider_box_left_button}>
                            <Button btnName="Place" handleClick={() => { }} />
                            <Button btnName="View" handleClick={() => { }} />
                        </div>
                    </div>
                    <div className={Style.bigNFTSlider_box_left_sliderBtn}>
                        <TbArrowBigLeftLine className={Style.bigNFTSlider_box_left_sliderBtn_icon} onClick={() => handleSlide(-1)} />
                        <TbArrowBigRightLine className={Style.bigNFTSlider_box_left_sliderBtn_icon} onClick={() => handleSlide(1)} />
                    </div>
                </div>
                <div className={Style.bigNFTSlider_box_right}>
                    <div className={Style.bigNFTSlider_box_right_box}>
                        <Image src={sliderData[idNumber].image} alt="NFT image" className={Style.bigNFTSlider_box_right_box_img}/>
                        <div className={Style.bigNFTSlider_box_right_box_like}>
                            <FcLike />
                            <span>{sliderData[idNumber].like}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BigNFTSlider