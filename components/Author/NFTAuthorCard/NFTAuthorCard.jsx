import React, { useContext, useState } from 'react'
import { BsImage } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'
import { MdTimer } from 'react-icons/md'
//INTERNAL IMPORT
import Style from './NFTAuthorCard.module.css'
import { NFTMarketplaceContext } from '@/Context/NFTMarketplaceContext'
import { ModalPrice } from '@/components/Author'
const NFTAuthorCard = ({ nfts }) => {
    const { listNFT, unlistNFT, updatePriceNFT } = useContext(NFTMarketplaceContext)
    const [openModal, setOpenModal] = useState(false)
    const [option, setOption] = useState("")
    const [nft, setNft] = useState(null)
    return (
        <div className={Style.NFTAuthorCard}>
            {
                nfts.map((el, i) => (
                    <div className={Style.NFTAuthorCard_box} key={i}>
                        <div className={Style.NFTAuthorCard_box_img}>
                            <img src={el?.image} alt="NFT" className={Style.NFTAuthorCard_box_img_img} />
                        </div>
                        <div className={Style.NFTAuthorCard_box_info}>
                            <div className={Style.NFTAuthorCard_box_info_left}>
                                <p>{el?.name}</p>
                            </div>
                        </div>
                        <div className={Style.NFTAuthorCard_box_price}>
                            <div className={Style.NFTAuthorCard_box_price_box}>
                                <small>Current Bid</small>
                                <p>{el?.price} ETH</p>
                            </div>
                            <p className={Style.NFTAuthorCard_box_price_stock}>
                                <MdTimer /> <span>{new Date(el?.createdAt).toLocaleDateString()}</span>
                            </p>
                        </div>
                        <div className={Style.NFTAuthorCard_box_button}>
                            {el?.listing ? (
                                <div className={Style.NFTAuthorCard_box_button_listing}>
                                    <button className={Style.NFTAuthorCard_box_btn} onClick={() => { setOption("unlist"); setNft(el); setOpenModal(true) }}>Unlist NFT</button>
                                    <button className={Style.NFTAuthorCard_box_btn} onClick={() => { setOption("price"); setNft(el); setOpenModal(true) }}>Update Price</button>
                                </div>
                            ) : (
                                <button className={Style.NFTAuthorCard_box_btn} onClick={() => { setOption("list"); setNft(el); setOpenModal(true) }}>List NFT</button>
                            )}
                        </div>
                        {openModal && <ModalPrice nft={nft} setOpenModal={setOpenModal} option={option} listNFT={listNFT} unlistNFT={unlistNFT} updatePriceNFT={updatePriceNFT} />}
                    </div>
                ))
            }
        </div>
    )
}

export default NFTAuthorCard