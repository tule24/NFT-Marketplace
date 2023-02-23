import React, { useState } from 'react'
import { MdTimer } from 'react-icons/md'
import { AiFillHeart, AiOutlineArrowUp, AiOutlineArrowDown } from 'react-icons/ai'
import { BsImage, BsFillCalendar2DateFill } from 'react-icons/bs'
import { FaFilter, FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { IoLogoUsd } from 'react-icons/io'
//INTERNAL IMPORT
import Style from './NFTCardTwo.module.css'
import { LikeProfile } from '@/components/Home'
import Link from 'next/link'
const NFTCardTwo = ({ nfts }) => {
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
            <div className={Style.NFTCardTwo}>
                {nftFilter.map((el, i) => (
                    <Link href={`nftDetail/${el._id}`} key={i}>
                        <div className={Style.NFTCardTwo_box}>
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
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default NFTCardTwo