import React, { useState } from 'react'
import { MdTimer, MdVerified } from 'react-icons/md'
import { AiFillHeart, AiFillCloseCircle } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import { BsImage } from 'react-icons/bs'
import { FaFilter, FaAngleDown, FaAngleUp, FaWallet, FaMusic, FaVideo, FaImages, FaUserAlt } from 'react-icons/fa'
//INTERNAL IMPORT
import Style from './NFTCardTwo.module.css'
import { LikeProfile } from '../../components'
const NFTCardTwo = ({ nfts }) => {
    const [openTab, setOpenTab] = useState(true)
    const [field, setField] = useState("")
    let nftFilter = nfts
    if (field !== "") {
        nftFilter = nfts.filter(nft => nft.collections === field)
    }
    return (
        <div>
            <div className={Style.card_filter}>
                <div className={Style.card_filter_box}>
                    <div className={Style.card_filter_box_left}>
                        <button onClick={() => setField("")} className={field === "" ? Style.active : ""}>NFTs</button>
                        <button onClick={() => setField("Art")} className={field === "Art" ? Style.active : ""}>Art</button>
                        <button onClick={() => setField("Cinematic")} className={field === "Cinematic" ? Style.active : ""}>Cinematic</button>
                        <button onClick={() => setField("Digital")} className={field === "Digital" ? Style.active : ""}>Digital</button>
                        <button onClick={() => setField("Music")} className={field === "Music" ? Style.active : ""}>Music</button>
                        <button onClick={() => setField("Sport")} className={field === "Sport" ? Style.active : ""}>Sport</button>
                    </div>
                    <div className={Style.card_filter_box_right}>
                        <div className={Style.card_filter_box_right_box} onClick={() => setOpenTab(!openTab)}>
                            <FaFilter />
                            <span>Filter</span> {openTab ? <FaAngleDown /> : <FaAngleUp />}
                        </div>
                    </div>
                </div>
                {
                    openTab && (
                        <div className={Style.card_filter_box_items}>
                            <div className={Style.card_filter_box_items_box}>
                                <div className={Style.card_filter_box_items_box_item}>
                                    <FaWallet /> <span>10ETH</span>
                                    <AiFillCloseCircle />
                                </div>
                            </div>
                            <div className={Style.card_filter_box_items_box}>
                                <div className={Style.card_filter_box_items_box_item_trans} onClick={() => setImage(!image)}>
                                    <FaImages /> <small>Images</small>
                                    <TiTick />
                                </div>
                            </div>
                            <div className={Style.card_filter_box_items_box}>
                                <div className={Style.card_filter_box_items_box_item_trans} onClick={() => setVideo(!video)}>
                                    <FaVideo /> <small>Videos</small>
                                    <TiTick />
                                </div>
                            </div>
                            <div className={Style.card_filter_box_items_box}>
                                <div className={Style.card_filter_box_items_box_item_trans} onClick={() => setMusic(!music)}>
                                    <FaMusic /> <small>Music</small>
                                    <TiTick />
                                </div>
                            </div>
                            <div className={Style.card_filter_box_items_box}>
                                <div className={Style.card_filter_box_items_box_item}>
                                    <FaUserAlt /> <span>Verified</span>
                                    <MdVerified />
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className={Style.NFTCardTwo}>
                {nftFilter.map((el, i) => (
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
        </div>
    )
}

export default NFTCardTwo