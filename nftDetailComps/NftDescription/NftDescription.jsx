import React, { useState } from 'react'
import Image from 'next/image'
import { MdVerified, MdCloudUpload, MdTimer, MdReportProblem, MdOutlineDeleteSweep } from 'react-icons/md'
import { BsThreeDots } from 'react-icons/bs'
import { FaWallet, FaPercentage } from 'react-icons/fa'
import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { BiTransferAlt, BiDollar } from 'react-icons/bi'
// INTERNAL IMPORT
import Style from './NftDescription.module.css'
import images from '../../img'
import { Button } from '../../components'
import { NftTabs } from '../index'
const NftDescription = () => {
  const [social, setSocial] = useState(false)
  const [nftMenu, setNftMenu] = useState(false)
  const [tab, setTab] = useState('history')
  const historyArray = [1, 2, 3, 4, 5]
  const provananceArray = [6, 7, 8, 9, 10]
  const owner = [1, 3, 5, 7, 9]
  const openSocial = () => {
    if(!social) {
      setSocial(true)
      setNftMenu(false)
    } else {
      setSocial(false)
    }
  }
  const openNftMenu = () => {
    if(!nftMenu) {
      setNftMenu(true)
      setSocial(false)
    } else {
      setNftMenu(false)
    }
  }
  return (
    <div className={Style.nftDescription}>
      <div className={Style.nftDescription_box}>
        <div className={Style.nftDescription_box_share}>
          <p>Virtual Worlds</p>
          <div className={Style.nftDescription_box_share_box}>
            <MdCloudUpload className={Style.nftDescription_box_share_box_icon} onClick={() => openSocial()} />
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
            <BsThreeDots className={Style.nftDescription_box_share_box_icon} onClick={() => openNftMenu()} />
            {nftMenu && (
              <div className={Style.nftDescription_box_share_box_social}>
                <a href="#"><BiDollar />Change Price</a>
                <a href="#"><BiTransferAlt />Transfer</a>
                <a href="#"><MdReportProblem />Report abouse</a>
                <a href="#"><MdOutlineDeleteSweep />Delete item</a>
              </div>
            )}
          </div>
        </div>
        <div className={Style.nftDescription_box_profile}>
          <h1>BearX #23453</h1>
          <div className={Style.nftDescription_box_profile_box}>
            <div className={Style.nftDescription_box_profile_box_left}>
              <Image src={images.user1} alt='ava' width={40} height={40} className={Style.nftDescription_box_profile_box_left_img} />
              <div className={Style.nftDescription_box_profile_box_left_info}>
                <small>Creator</small> <br />
                <span>Karli Costa <MdVerified color='green'/></span>
              </div>
            </div>
            <div className={Style.nftDescription_box_profile_box_right}>
              <Image src={images.user2} alt='ava' width={40} height={40} className={Style.nftDescription_box_profile_box_right_img} />
              <div className={Style.nftDescription_box_profile_box_right_info}>
                <small>Creator</small> <br />
                <span>Karli Costa <MdVerified color='green'/></span>
              </div>
            </div>
          </div>
          <div className={Style.nftDescription_box_profile_bidding}>
            <p><MdTimer /> <span>Auction ending in: </span></p>
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
                <small>Current Bid</small>
                <p>1.000 ETH <span>(≈ $3,221.22)</span></p>
              </div>
              <span>[96 in stock]</span>
            </div>
            <div className={Style.nftDescription_box_profile_bidding_btn}>
              <Button btnName="Place a bid" icon={<FaWallet />} handleClick={() => { }} classStyle={Style.button} />
              <Button btnName="Make offer" icon={<FaPercentage />} handleClick={() => { }} classStyle={Style.button} />
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
                <NftTabs dataTab={owner} icon={<MdVerified color='green'/>}/>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NftDescription