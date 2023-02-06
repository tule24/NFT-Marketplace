import React, { useState } from 'react'
import Image from 'next/image'
//INTERNAL IMPORT
import Style from '../styles/ConnectWallet.module.css'
import images from '../img'
const connectWallet = () => {
    const [activeBtn, setActiveBtn] = useState(0)
    const providerArray = [
        {
            image: images.provider1,
            name: "Metamask" 
        },
        {
            image: images.provider2,
            name: "Wallet Connect" 
        },
        {
            image: images.provider3,
            name: "Wallet Link" 
        },
        {
            image: images.provider4,
            name: "Formatic" 
        },
    ]
  return (
    <div className={Style.connectWallet}>
        <div className={Style.connectWallet_box}>
            <h1>Connect your wallet</h1>
            <p className={Style.connectWallet_box_para}>
                Connect with one of our available wallet provider or create a new one
            </p>
            <div className={Style.connectWallet_box_provider}>
                {providerArray.map((el, i) => (
                    <div className={`${Style.connectWallet_box_provider_item} ${activeBtn === i ? Style.activeBtn : ""}`} key={i} onClick={() => setActiveBtn(i)}>
                        <Image src={el.image} alt={el.name} width={50} height={50} className={Style.connectWallet_box_provider_item_img}/>
                        <p>{el.name}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default connectWallet