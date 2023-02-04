import React, { useState } from 'react'
import Image from 'next/image'
import { MdVerified, MdCloudUpload, MdOutlineReportProblem } from 'react-icons/md'
import { FiCopy } from 'react-icons/fi'
import { BsThreeDots } from 'react-icons/bs'
import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram } from 'react-icons/ti'
// INTERNAL IMPORT
import Style from './AuthorProfileCard.module.css'
import images from '../../img'
import { Button } from '../../components'
const AuthorProfileCard = () => {
    const [report, setReport] = useState(false)
    const [share, setShare] = useState(false)

    const copyAddress = () => {
        const copyText = document.getElementById("myAddress")
        copyText.select();
        navigator.clipboard.writeText(copyText.value)
    }

    const openShare = () => {
        if(!share) {
            setShare(true)
            setReport(false)
        } else {
            setShare(false)
        }
    }

    const openReport = () => {
        if(!report) {
            setReport(true)
            setShare(false)
        } else {
            setReport(false)
        }
    }

    return (
        <div className={Style.authorProfileCard}>
            <div className={Style.authorProfileCard_box}>
                <div className={Style.authorProfileCard_box_img}>
                    <Image src={images.nft_image_1} className={Style.authorProfileCard_box_img_img} alt="NFT Images" width={220} height={220} />
                </div>
                <div className={Style.authorProfileCard_box_info}>
                    <h2>Dony Herrera{""}<span><MdVerified color='green'/></span>{""}</h2>
                    <div className={Style.authorProfileCard_box_info_address}>
                        <input type="text" value="0x829DASD9WEW12F5656ASF6...A45" id='myAddress' readOnly={true} />
                        <FiCopy onClick={() => copyAddress()} className={Style.authorProfileCard_box_info_address_icon} />
                    </div>
                    <p>Punk #4768 / An OG Cryptopunk Collector, header of NFTs. Contributin to @ether_Cards, an NFT Monetization Platform</p>
                    <div className={Style.authorProfileCard_box_info_social}>
                        <a href="#">
                            <TiSocialFacebook />
                        </a>
                        <a href="#">
                            <TiSocialTwitter />
                        </a>
                        <a href="#">
                            <TiSocialYoutube />
                        </a>
                        <a href="#">
                            <TiSocialInstagram />
                        </a>
                    </div>
                </div>
                <div className={Style.authorProfileCard_box_share}>
                    <Button btnName="Follow" handleClick={() => {}} />
                    <MdCloudUpload onClick={() => openShare()} className={Style.authorProfileCard_box_share_icon}/>
                    {share && (
                        <div className={Style.authorProfileCard_box_share_upload}>
                            <p>
                                <span><TiSocialFacebook /></span>{""} Facebook
                            </p>
                            <p>
                                <span><TiSocialTwitter /></span>{""} Twitter
                            </p>
                            <p>
                                <span><TiSocialYoutube /></span>{""} Youtube
                            </p>
                            <p>
                                <span><TiSocialInstagram /></span>{""} Instagram
                            </p>
                        </div>
                    )}
                    <BsThreeDots onClick={() => openReport()} className={Style.authorProfileCard_box_share_icon}/>
                    {report && (
                            <p className={Style.authorProfileCard_box_share_report}>
                                <span>
                                    <MdOutlineReportProblem />{""}Report about
                                </span>
                            </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AuthorProfileCard