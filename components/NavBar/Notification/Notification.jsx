import React from 'react'
import Image from 'next/image'
import { BsClockHistory } from 'react-icons/bs'

// INTERNAL IMPORT 
import Style from './Notification.module.css'
import images from '../../../img'

const Notification = () => {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <div className={Style.notification_box_img}>
          <Image src={images.user1} alt="profile image"  width={60} height={60}/>
        </div>
        <div className={Style.notification_box_info}>
          <h4>Zenitsu</h4>
          <p>Everything about you...</p>
          <small><BsClockHistory className={Style.clockIcon}/> 3 minutes ago</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  )
}

export default Notification