import React, { useContext, useEffect, useState } from 'react'
import Image from 'next/image'
import { MdVerified, MdCloudUpload, MdTimer } from 'react-icons/md'
import { BsThreeDots } from 'react-icons/bs'
import { FaWallet } from 'react-icons/fa'
import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram } from 'react-icons/ti'
import Blockies from 'react-blockies'
// INTERNAL IMPORT
import Style from './NftDescription.module.css'
import images from '@/img'
import { Button } from '@/components/Home'
import { NftTabs } from '../index'
import { NFTMarketplaceContext } from '@/Context/NFTMarketplaceContext'
import { minifyAddress, eth2usd } from '@/helpers'
const NftDescription = () => {
  const [social, setSocial] = useState(false)
  const [tab, setTab] = useState('history')
  const [usd, setUsd] = useState(0)
  const historyArray = [1, 2, 3, 4, 5]
  const provananceArray = [6, 7, 8, 9, 10]
  const owners = [1, 3, 5, 7, 9]
  const { nftDetail, buyNFT, currentAccount } = useContext(NFTMarketplaceContext)

  useEffect(() => {
    nftDetail && eth2usd(nftDetail.price).then((res) => setUsd(res))
  }, [nftDetail])
  return (
    <div className={Style.nftDescription}>
      <div className={Style.nftDescription_box}>
        <div className={Style.nftDescription_box_share}>
          <p>Virtual Worlds</p>
          <div className={Style.nftDescription_box_share_box}>
            <MdCloudUpload className={Style.nftDescription_box_share_box_icon} onClick={() => setSocial(!social)} />
            {social && (
              <div className={Style.nftDescription_box_share_box_social}>
                <a href="#">
                  <TiSocialFacebook /> Facebook
                </a>
                <a href="#">
                  <TiSocialTwitter /> Twitter
                </a>
                <a href="#">
                  <TiSocialYoutube /> Youtube
                </a>
                <a href="#">
                  <TiSocialInstagram /> Instagram
                </a>
              </div>
            )}
            <BsThreeDots className={Style.nftDescription_box_share_box_icon} />
          </div>
        </div>
        <div className={Style.nftDescription_box_profile}>
          <h1>{nftDetail?.name} #{nftDetail?.tokenId}</h1>
          <div className={Style.nftDescription_box_profile_box}>
            <div className={Style.nftDescription_box_profile_box_left}>
              <Blockies seed={nftDetail?.owner.toLowerCase()} className={Style.nftDescription_box_profile_box_left_img} />
              <div className={Style.nftDescription_box_profile_box_left_info}>
                <small>Owner</small> <br />
                <span title={nftDetail?.owner}>{nftDetail?.owner && minifyAddress(nftDetail?.owner)} <MdVerified color='green' /></span>
              </div>
            </div>
            <div className={Style.nftDescription_box_profile_box_right}>
              <Image src={images.collection} alt='ava' width={40} height={40} className={Style.nftDescription_box_profile_box_right_img} />
              <div className={Style.nftDescription_box_profile_box_right_info}>
                <small>Collection</small> <br />
                <span>{nftDetail?.collections}</span>
              </div>
            </div>
          </div>
          <div className={Style.nftDescription_box_profile_bidding}>
            <p><MdTimer /> <span>Auction ending in (coming soon): </span></p>
            <div className={Style.nftDescription_box_profile_bidding_timer}>
              <div className={Style.nftDescription_box_profile_bidding_timer_item}>
                <p>22</p>
                <span>Days</span>
              </div>
              <div className={Style.nftDescription_box_profile_bidding_timer_item}>
                <p>12</p>
                <span>Hours</span>
              </div>
              <div className={Style.nftDescription_box_profile_bidding_timer_item}>
                <p>25</p>
                <span>Mins</span>
              </div>
              <div className={Style.nftDescription_box_profile_bidding_timer_item}>
                <p>3</p>
                <span>Secs</span>
              </div>
            </div>
            <div className={Style.nftDescription_box_profile_bidding_price}>
              <div className={Style.nftDescription_box_profile_bidding_price_bid}>
                <small>Price </small>
                <p><span style={{ color: "green" }}>{nftDetail?.price}</span>ETH <span>(≈ {usd !== 0 ? usd : ''}  usd)</span></p>
              </div>
            </div>
            <div className={Style.nftDescription_box_profile_bidding_btn}>
              {nftDetail && nftDetail.owner !== currentAccount.wallet && nftDetail.listing && <Button btnName="Buy NFT" icon={<FaWallet />} handleClick={() => buyNFT(nftDetail)} classStyle={Style.button} />}
              {nftDetail && !nftDetail.listing && <Button btnName="Not for sell" icon={<FaWallet />} handleClick={() => { }} classStyle={Style.button} />}
              {/* <Button btnName="Make offer" icon={<FaPercentage />} handleClick={() => { }} classStyle={Style.button} /> */}
            </div>
            <div className={Style.nftDescription_box_profile_bidding_tabs}>
              <button onClick={() => setTab('history')}>Bid History</button>
              <button onClick={() => setTab('provanance')}>Provanance</button>
              <button onClick={() => setTab('owner')}>Owner</button>
            </div>
            {tab === 'history' && (
              <div className={Style.nftDescription_box_profile_bidding_card}>
                <NftTabs dataTab={historyArray} />
              </div>
            )}
            {tab === 'provanance' && (
              <div className={Style.nftDescription_box_profile_bidding_card}>
                <NftTabs dataTab={provananceArray} />
              </div>
            )}
            {tab === 'owner' && (
              <div className={Style.nftDescription_box_profile_bidding_card}>
                <NftTabs dataTab={owners} icon={<MdVerified color='green' />} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NftDescription