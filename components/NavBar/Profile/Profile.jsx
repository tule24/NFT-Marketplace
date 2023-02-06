import React, { useContext } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaUserAlt, FaRegImage, FaUserEdit } from 'react-icons/fa'
import { MdHelpCenter } from 'react-icons/md'
import { TbDownload } from 'react-icons/tb'
import { BiUser } from 'react-icons/bi'
// INTERNAL IMPORT 
import Style from './Profile.module.css'
import images from '../../../img'
import { NFTMarketplaceContext } from '../../../Context/NFTMarketplaceContext'

const Profile = () => {
  const { currentAccount } = useContext(NFTMarketplaceContext)
  return (
    <div className={Style.profile}>
      {currentAccount ? (
        <div className={Style.profile_account}>
          <Image src={images.user1} alt="user profile" width={50} height={50} className={Style.profile_account_img} />
          <div className={Style.profile_account_info}>
            <p>User</p>
            <small>{currentAccount.slice(0, 5) + '...' + currentAccount.slice(currentAccount.length - 3, currentAccount.length)}</small>
          </div>
        </div>
      ) : (
        <div className={Style.profile_account}>
          <BiUser size={50} className={Style.profile_account_img} />
          <div className={Style.profile_account_info}>
            <p>No User</p>
            <small>0x000.</small>
          </div>
        </div>
      )}

      <div className={Style.profile_menu}>
        <div className={Style.profile_menu_one}>
          <div className={Style.profile_menu_one_item}>
            <FaUserAlt />
            <p>
              <Link href={{ pathname: '/my-profile' }}>My Profile</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaRegImage />
            <p>
              <Link href={{ pathname: '/my-items' }}>My Items</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaUserEdit />
            <p>
              <Link href={{ pathname: '/edit-profile' }}>Edit</Link>
            </p>
          </div>
        </div>
        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              <Link href={{ pathname: '/help' }}>Help</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbDownload />
            <p>
              <Link href={{ pathname: '/disconnect' }}>Disconnect</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile