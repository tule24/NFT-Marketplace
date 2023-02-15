import React, { useContext } from 'react'
import Link from 'next/link'
import { FaUserAlt, FaUserEdit } from 'react-icons/fa'
import { MdHelpCenter } from 'react-icons/md'
import { TbDownload } from 'react-icons/tb'
import { BiUser } from 'react-icons/bi'
import Blockies from 'react-blockies'
// INTERNAL IMPORT 
import Style from './Profile.module.css'
import { NFTMarketplaceContext } from '../../../Context/NFTMarketplaceContext'
import { minifyAddress } from '../../../helpers'

const Profile = () => {
  const { currentAccount } = useContext(NFTMarketplaceContext)
  const miniAddress = minifyAddress(currentAccount.wallet)
  return (
    <div className={Style.profile}>
      {currentAccount ? (
        <div className={Style.profile_account}>
          <Blockies seed={currentAccount.wallet.toLowerCase()} className={Style.profile_account_img} />
          <div className={Style.profile_account_info}>
            <p>{currentAccount.name}</p>
            <small>{miniAddress}</small>
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
              <Link href={{ pathname: '/author' }}>My Profile</Link>
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <FaUserEdit />
            <p>
              <Link href={{ pathname: '/account' }}>Edit Profile</Link>
            </p>
          </div>
        </div>
        <div className={Style.profile_menu_two}>
          <div className={Style.profile_menu_one_item}>
            <MdHelpCenter />
            <p>
              Help
            </p>
          </div>
          <div className={Style.profile_menu_one_item}>
            <TbDownload />
            <p>
              Disconnect
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile