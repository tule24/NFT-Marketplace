import React, { useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'react-toastify/dist/ReactToastify.css'
import Blockies from 'react-blockies'
// IMPORT ICON
import { BsSearch } from 'react-icons/bs'
import { CgMenuRight } from 'react-icons/cg'
import { CiLight, CiDark } from 'react-icons/ci'
// INTERNAL IMPORT
import Style from './NavBar.module.css'
import { Discover, HelpCenter, Profile, SideBar } from './index'
import { Button } from '../index'
import images from '../../img'
import { NFTMarketplaceContext } from '../../Context/NFTMarketplaceContext'
import { ToastContainer } from 'react-toastify'
import { BiUser } from 'react-icons/bi'

const NavBar = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false)
  const { connectWallet, currentAccount, setTheme, theme } = useContext(NFTMarketplaceContext)

  const openSideBar = () => {
    if (!openSideMenu) {
      setOpenSideMenu(true)
    } else {
      setOpenSideMenu(false)
    }
  }

  const changeTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }


  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Link href={{ pathname: '/' }}>
              <Image src={images.logo} alt="NFT MARKET PLACE" width={100} height={100} />
            </Link>
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder='Search NFT' onChange={(e) => setTokenId(Number(e.target.value))} />
              <BsSearch className={Style.search_icon} />
            </div>
          </div>
        </div>
        <div className={Style.navbar_container_right}>
          {/* DISCOVER MENU */}
          <div className={Style.navbar_container_right_discover}>
            <p>Discover</p>
            <div className={Style.navbar_container_right_discover_box}>
              <Discover />
            </div>
          </div>
          {/* HELP CENTER MENU */}
          <div className={Style.navbar_container_right_help}>
            <p>Help Center</p>
            <div className={Style.navbar_container_right_help_box}>
              <HelpCenter />
            </div>
          </div>
          {/* CREATE BUTTON SECTION */}
          <div className={Style.navbar_container_right_button}>
            {currentAccount ? (
              <Link href={{ pathname: 'createNFT' }}>
                <Button btnName="Create" /></Link>
            ) : <Button btnName="Connect" handleClick={connectWallet} />}
          </div>
          {/* BUTTON CHANGE THEME */}
          <div className={Style.navbar_container_theme_button}>
            <input type="checkbox" id="theme" className={Style.navbar_container_theme_button_checkbox} onChange={() => changeTheme()} />
            <label htmlFor="theme" className={Style.navbar_container_theme_button_label}>
              <CiDark className={Style.navbar_container_theme_button_dark} />
              <CiLight className={Style.navbar_container_theme_button_light} />
            </label>
          </div>
          {/* USER PROFILE */}
          <div className={Style.navbar_container_right_profile}>
            <p>{currentAccount ? (
              <Blockies seed={currentAccount?.wallet.toLowerCase()} className={Style.navbar_container_right_profile_ava} />
            ) : (
              <BiUser size={30} />
            )
            }</p>
            <div className={Style.navbar_container_right_profile_box}><Profile /></div>
          </div>
          {/* MENU BUTTON */}
          <div className={Style.navbar_container_right_menuBtn}>
            <CgMenuRight className={Style.menuIcon} onClick={() => openSideBar()} />
          </div>
        </div>
      </div>
      {/* SIDEBAR COMPONENT */}
      {
        openSideMenu && (
          <div className={Style.sideBar}>
            <SideBar setOpenSideMenu={setOpenSideMenu} connectWallet={connectWallet} currentAccount={currentAccount} />
            <div className={Style.navbar_container_theme_button_sideBar}>
              <input type="checkbox" id="themeSidebar" className={Style.navbar_container_theme_button_sideBar_checkbox} onChange={() => changeTheme()} />
              <label htmlFor="themeSidebar" className={Style.navbar_container_theme_button_sideBar_label}>
                <CiLight className={Style.navbar_container_theme_button_sideBar_light} />
                <CiDark className={Style.navbar_container_theme_button_sideBar_dark} />
              </label>
            </div>
          </div>
        )
      }
      <ToastContainer closeButton={true} theme={theme} position='top-center' style={{ width: "max-content" }} />
    </div>
  )
}

export default NavBar