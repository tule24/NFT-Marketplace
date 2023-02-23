import React, { useState } from 'react'
import { FaFilter, FaAngleDown, FaAngleUp, FaWallet, FaMusic, FaVideo, FaImages, FaUserAlt } from 'react-icons/fa'
import { AiFillCloseCircle } from 'react-icons/ai'
import { MdVerified } from 'react-icons/md'
import { TiTick } from 'react-icons/ti'
// INTERNAL IMPORT
import Style from './Filter.module.css'

const Filter = () => {
    const [filter, setFilter] = useState(true)
    return (
        <div className={Style.filter}>
            <div className={Style.filter_box}>
                <div className={Style.filter_box_left}>
                    <button onClick={() => { }}>NFTs</button>
                    <button onClick={() => { }}>Art</button>
                    <button onClick={() => { }}>Cinematic</button>
                    <button onClick={() => { }}>Digital</button>
                    <button onClick={() => { }}>Music</button>
                    <button onClick={() => { }}>Sport</button>
                </div>
                <div className={Style.filter_box_right}>
                    <div className={Style.filter_box_right_box} onClick={() => setFilter(!filter)}>
                        <FaFilter />
                        <span>Filter</span> {filter ? <FaAngleDown /> : <FaAngleUp />}
                    </div>
                </div>
            </div>
            {/* {
                filter && (
                    <div className={Style.filter_box_items}>
                        <div className={Style.filter_box_items_box}>
                            <div className={Style.filter_box_items_box_item}>
                                <FaWallet /> <span>10ETH</span>
                                <AiFillCloseCircle />
                            </div>
                        </div>
                        <div className={Style.filter_box_items_box}>
                            <div className={Style.filter_box_items_box_item_trans} onClick={() => setImage(!image)}>
                                <FaImages /> <small>Images</small>
                                <TiTick />
                            </div>
                        </div>
                        <div className={Style.filter_box_items_box}>
                            <div className={Style.filter_box_items_box_item_trans} onClick={() => setVideo(!video)}>
                                <FaVideo /> <small>Videos</small>
                                <TiTick />
                            </div>
                        </div>
                        <div className={Style.filter_box_items_box}>
                            <div className={Style.filter_box_items_box_item_trans} onClick={() => setMusic(!music)}>
                                <FaMusic /> <small>Music</small>
                                <TiTick />
                            </div>
                        </div>
                        <div className={Style.filter_box_items_box}>
                            <div className={Style.filter_box_items_box_item}>
                                <FaUserAlt /> <span>Verified</span>
                                <MdVerified />
                            </div>
                        </div>
                    </div>
                )
            } */}
        </div>
    )
}

export default Filter
