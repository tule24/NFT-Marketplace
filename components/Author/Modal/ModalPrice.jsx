import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
// INTERNAL IMPORT
import Style from './ModalPrice.module.css'
const ModalPrice = ({ nft, setOpenModal, option, listNFT, unlistNFT, updatePriceNFT }) => {
    const [price, setPrice] = useState("0.01")
    return (
        <div className={Style.modalPrice}>
            <div className={Style.modalPrice_box}>
                <div className={Style.modalPrice_header}>
                    <h3>{option === "list" ? "Set NFT Price" : (option === "unlist" ? "Unlist NFT" : "Update NFT Price")}</h3>
                    <button className={Style.modalPrice_close} onClick={() => setOpenModal(false)}><AiOutlineClose size={20} /></button>
                </div>
                <div className={Style.modalPrice_content}>
                    {option === "unlist" && <h2>⚠️ Verify that you truly want to unlist this NFT ⚠️<br /> People won't be able to purchase this NFT </h2>}
                    {option !== "unlist" && <h2>Please enter price you want to list for this NFT</h2>}
                    {option === "list" && <p>*Note: The listing fee is 0.0015 ETH, make sure you have adequate ETH to list NFT</p>}
                    {option !== "unlist" && <div className={Style.modalPrice_input} ><input type="number" defaultValue={0.01} step={0.01} min={0.01} onChange={(e) => setPrice(e.target.value)} /><span style={{fontWeight:"bold"}}>&nbsp; ETH</span></div>}

                    {option === "list" && <button onClick={() => { console.log(nft); listNFT(nft._id, nft.tokenId, price); setOpenModal(false); }} className={Style.modalPrice_btn} >List NFT</button>}
                    {option === "unlist" && <button onClick={() => { unlistNFT(nft._id, nft.tokenId); setOpenModal(false); }} className={Style.modalPrice_btn} >Unlist NFT</button>}
                    {option === "price" && <button onClick={() => { updatePriceNFT(nft._id, nft.tokenId, price); setOpenModal(false); }} className={Style.modalPrice_btn} >Update Price NFT</button>}
                </div>
            </div>
        </div>
    )
}

export default ModalPrice