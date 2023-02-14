import React, { useState } from 'react'
import { AiFillHeart, AiFillCloseCircle } from 'react-icons/ai'
import { MdVerified } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'
import { FaEthereum } from 'react-icons/fa'
import { BsImages } from 'react-icons/bs'
import { FaFilter, FaAngleDown, FaAngleUp, FaWallet, FaMusic, FaVideo, FaImages, FaUserAlt } from 'react-icons/fa'
import Link from 'next/link'
//INTERNAL IMPORT
import Style from './Card.module.css'

const Card = ({ nfts }) => {
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
            <div className={Style.card}>
                {nftFilter.map((el, i) => (
                    <Link href={`nftDetail/${el._id}`} key={i}>
                        <div className={Style.card_box} >
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
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Card