import React, { useCallback, useState } from 'react'
import Image from 'next/image'
import { useDropzone } from 'react-dropzone'
// INTERNAL IMPORT
import Style from '../styles/Account.module.css'
import images from '../img'
import { AccountForm } from '../accountComps'
const account = () => {
  return (
    <div className={Style.account}>
      <div className={Style.account_info}>
        <h1>Profile settings</h1>
        <p>You can set preferred display name, create your profile URL and manage other personal settings.</p>
      </div>
      <div className={Style.account_box}>
        <div className={Style.account_box_from}>
          <AccountForm />
        </div>
      </div>
    </div>
  )
}

export default account