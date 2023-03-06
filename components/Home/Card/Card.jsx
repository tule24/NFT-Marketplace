import React, { useState } from 'react'
import { AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { FaEthereum } from 'react-icons/fa'
import { BsImages, BsFillCalendar2DateFill } from 'react-icons/bs'
import { FaFilter, FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { GoVerified, GoUnverified } from 'react-icons/go'
import { IoLogoUsd } from 'react-icons/io'
import Link from 'next/link'
//INTERNAL IMPORT
import Style from './Card.module.css'

const Card = ({ nfts }) => {
    const [openTab, setOpenTab] = useState(true)
    const [field, setField] = useState("")
    const [sort, setSort] = useState("")
    let nftFilter = nfts
    if (field !== "") {
        nftFilter = nfts.filter(nft => nft.collections === field)
    }
    if (sort !== "") {
        if (sort === "priceUp") nftFilter = nftFilter.sort((a, b) => Number(a.price) - Number(b.price))
        else if (sort === "priceDown") nftFilter = nftFilter.sort((a, b) => Number(b.price) - Number(a.price))
        else if (sort === "date") nftFilter = nftFilter.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
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
                                <div className={`${Style.card_filter_box_items_box_item_trans} ${sort === "priceUp" ? Style.filter_btn_active : ""}`} onClick={() => setSort("priceUp")}>
                                    <IoLogoUsd /> <small>Price asc</small> <AiOutlineArrowUp />
                                </div>
                            </div>
                            <div className={Style.card_filter_box_items_box}>
                                <div className={`${Style.card_filter_box_items_box_item_trans} ${sort === "priceDown" ? Style.filter_btn_active : ""}`} onClick={() => setSort("priceDown")}>
                                    <IoLogoUsd /> <small>Price desc</small> <AiOutlineArrowDown />
                                </div>
                            </div>
                            <div className={Style.card_filter_box_items_box}>
                                <div className={`${Style.card_filter_box_items_box_item_trans} ${sort === "date" ? Style.filter_btn_active : ""}`} onClick={() => setSort("date")}>
                                    <BsFillCalendar2DateFill /> <small>Most recent</small>
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
                                    {el.listing ? <div className={Style.card_box_update_left_like}>
                                        <GoVerified color='green' /> {""} Listing
                                    </div>
                                        : <div className={Style.card_box_update_left_like}>
                                            <GoUnverified color='orange' /> {""} Unlisting
                                        </div>}
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
                                                <small>#{el.tokenId}</small>
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