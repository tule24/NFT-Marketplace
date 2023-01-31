import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GrClose } from 'react-icons/gr'
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
// INTERNAL IMPORT
import Style from './SideBar.module.css'
import images from '../../../img'
import Button from '../../Button/Button'
import { discover, helpCenter } from '../NavBarData'
const SideBar = ({ setOpenSideMenu }) => {
  const [openDiscover, setOpenDiscover] = useState(false)
  const [openHelp, setOpenHelp] = useState(false)

  const openDiscoverMenu = () => {
    if (!openDiscover) {
      setOpenDiscover(true)
    } else {
      setOpenDiscover(false)
    }
  }

  const openHelpMenu = () => {
    if (!openHelp) {
      setOpenHelp(true)
    } else {
      setOpenHelp(false)
    }
  }

  const closeSideBar = () => {
    setOpenSideMenu(false)
  }
  return (
    <div>
      <GrClose className={Style.sideBar_closeBtn} onClick={() => closeSideBar()} />
      <div className={Style.sideBar_box}>
        <Image src={images.logo} alt="logo" width={150} height={150} />
        <p>
          Discover the most outstanding articles on all topices of NFT & write your own stories and share them
        </p>
        <div className={Style.sideBar_social}>
          <a href="#" className='fb'>
            <TiSocialFacebook />
          </a>
          <a href="#" className='linked'>
            <TiSocialLinkedin />
          </a>
          <a href="#" className='twitter'>
            <TiSocialTwitter />
          </a>
          <a href="#" className='youtube'>
            <TiSocialYoutube />
          </a>
          <a href="#" className='instagram'>
            <TiSocialInstagram />
          </a>
        </div>
      </div>
      <div className={Style.sideBar_menu}>
        <div>
          <div className={Style.sideBar_menu_box} onClick={() => openDiscoverMenu()}>
            <p>Discover</p>
            <TiArrowSortedDown />
          </div>
          {
            openDiscover && (
              <div className={Style.sideBar_discover}>
                {discover.map((el, i) => (
                  <p key={i}>
                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )
          }
        </div>
        <div>
          <div className={Style.sideBar_menu_box} onClick={() => openHelpMenu()}>
            <p>Help Center</p>
            <TiArrowSortedDown />
          </div>
          {
            openHelp && (
              <div className={Style.sideBar_discover}>
                {helpCenter.map((el, i) => (
                  <p key={i}>
                    <Link href={{ pathname: `${el.link}` }}>{el.name}</Link>
                  </p>
                ))}
              </div>
            )
          }
        </div>
      </div>
      <div className={Style.sideBar_button}>
        <Button btnName="Create" handleClick={() => {}}/>
        <Button btnName="Connect Wallet" handleClick={() => {}}/>
      </div>
    </div>
  )
}

export default SideBar