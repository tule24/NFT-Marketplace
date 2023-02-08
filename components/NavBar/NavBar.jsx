import React, { useContext, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import 'react-toastify/dist/ReactToastify.css';
// IMPORT ICON
import { MdNotifications } from 'react-icons/md'
import { BsSearch } from 'react-icons/bs'
import { CgMenuRight } from 'react-icons/cg'
import { CiLight, CiDark } from 'react-icons/ci'
// INTERNAL IMPORT
import Style from './NavBar.module.css'
import { Discover, HelpCenter, Notification, Profile, SideBar } from './index'
import { Button } from '../index'
import images from '../../img'
import { NFTMarketplaceContext } from '../../Context/NFTMarketplaceContext'
import { ToastContainer } from 'react-toastify'

const NavBar = () => {
  const [discover, setDiscover] = useState(false)
  const [help, setHelp] = useState(false)
  const [notification, setNotification] = useState(false)
  const [profile, setProfile] = useState(false)
  const [openSideMenu, setOpenSideMenu] = useState(false)
  const { connectWallet, currentAccount, setTheme, theme } = useContext(NFTMarketplaceContext)

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText === "Discover") {
      discover ? setDiscover(false) : setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Help Center") {
      help ? setHelp(false) : setHelp(true);
      setDiscover(false);
      setNotification(false);
      setProfile(false);
    } else {
      setHelp(false);
      setDiscover(false);
      setNotification(false);
      setProfile(false);
    }
  }

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  }

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setHelp(false);
      setNotification(false);
      setDiscover(false);
    } else {
      setProfile(false);
    }
  }

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
            <Image src={images.logo} alt="NFT MARKET PLACE" width={100} height={100} />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder='Search NFT' />
              <BsSearch onClick={() => { }} className={Style.search_icon} />
            </div>
          </div>
        </div>
        <div className={Style.navbar_container_right}>
          {/* DISCOVER MENU */}
          <div className={Style.navbar_container_right_discover}>
            <p onClick={(e) => { openMenu(e) }}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>
          {/* HELP CENTER MENU */}
          <div className={Style.navbar_container_right_help}>
            <p onClick={(e) => { openMenu(e) }}>Help Center</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>
          {/* NOTIFICATION */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications className={Style.notify} onClick={() => openNotification()} />
            {notification && <Notification />}
          </div>
          {/* CREATE BUTTON SECTION */}
          <div className={Style.navbar_container_right_button}>
            {currentAccount ? (
              <Link href={{ pathname: 'uploadNFT' }}>
                <Button btnName="Create" handleClick={() => { }} /></Link>
            ) : <Button btnName="Connect" handleClick={connectWallet} />}
          </div>
          {/* BUTTON CHANGE THEME */}
          <div className={Style.navbar_container_theme_button}>
            <input type="checkbox" id="theme" className={Style.navbar_container_theme_button_checkbox} onChange={() => changeTheme()} />
            <label htmlFor="theme" className={Style.navbar_container_theme_button_label}>
              <CiLight className={Style.navbar_container_theme_button_light} />
              <CiDark className={Style.navbar_container_theme_button_dark} />
            </label>
          </div>
          {/* USER PROFILE */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image src={images.user1} alt="Profile" width={40} height="40" className={Style.navbar_container_right_profile} onClick={() => openProfile()} />
              {profile && <Profile />}
            </div>
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
      <ToastContainer closeButton={true} theme={theme} />
    </div>
  )
}

export default NavBar