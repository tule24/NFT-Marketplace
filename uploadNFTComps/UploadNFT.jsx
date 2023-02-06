import React, { useState } from 'react'
import { MdOutlineHttp, MdOutlineAttachFile } from 'react-icons/md'
import { FaPercent } from 'react-icons/fa'
import { AiTwotonePropertySafety } from 'react-icons/ai'
import { TiTick } from 'react-icons/ti'
import Image from 'next/image'
// INTERNAL IMPORT
import Style from './UploadNFT.module.css'
import formStyle from '../accountComps/AccountForm/AccountForm.module.css'
import { Button } from '../components'
import { DropZone } from './index'
import { categoryArr } from './UploadNFTData'
import images from '../img'


const UploadNFT = () => {
  const [active, setActive] = useState(null)
  const [nftData, setNftData] = useState({
    itemName: "",
    website: "",
    description: "",
    royalties: "",
    fileSize: "",
    properties: "",
    category: ""
  })

  return (
    <div className={Style.uploadNFT}>
      <DropZone title="JPG, PNG, WEBM, MAX 100MB" heading="Drag & drop file" subHeading="or Browse media on your device" nftData={nftData} image={images.upload}/>
      <div className={Style.upload_box}>
        <div className={formStyle.accountForm_box_input}>
          <label htmlFor="itemName">Item Name</label>
          <input type="text" placeholder='ex: zenitsu' className={formStyle.accountForm_box_input_username} required onChange={(e) => setNftData({ ...nftData, itemName: e.target.value })} />
        </div>
        <div className={formStyle.accountForm_box_input}>
          <label htmlFor="website">Website</label>
          <div className={formStyle.accountForm_box_input_box}>
            <div className={formStyle.accountForm_box_input_box_icon}>
              <MdOutlineHttp />
            </div>
            <input type="text" placeholder='ex: https://zenitsu' required onChange={(e) => setNftData({ ...nftData, website: e.target.value })} />
          </div>
          <p className={Style.upload_box_input_para}>
            Ciscrypt will include a link to this URL on this item's detail page, so that users can click to learn more about it. You are welcome to link to your own webpage with more details.
          </p>
        </div>
        <div className={formStyle.accountForm_box_input}>
          <label htmlFor="description">Description</label>
          <textarea id="" cols="30" rows="10" placeholder='Something about yourself in few words' onChange={(e) => setNftData({ ...nftData, description: e.target.value })}></textarea>
        </div>
        <div className={formStyle.accountForm_box_input}>
          <label htmlFor="name">
            Choose collection
          </label>
          <p className={Style.upload_box_input_para}>
            Choose an exciting collection or create a new one
          </p>
          <div className={Style.upload_box_slider_div}>
            {categoryArr.map((el, i) => (
              <div className={`${Style.upload_box_slider} ${active === i ? Style.active : ""}`} key={i} onClick={() => { setActive(i); setNftData({ ...nftData, category: i }); }}>
                <div className={Style.upload_box_slider_box}>
                  <div className={Style.upload_box_slider_box_img}>
                    <Image src={el.image} alt="background image" width={70} height={70} className={Style.upload_box_slider_box_img_img} />
                  </div>
                  <div className={Style.upload_box_slider_box_img_icon}>
                    <TiTick />
                  </div>
                </div>
                <p>{el.category}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={formStyle.accountForm_box_input_social}>
          <div className={formStyle.accountForm_box_input}>
            <label htmlFor="Royalties">Royalties</label>
            <div className={formStyle.accountForm_box_input_box}>
              <div className={formStyle.accountForm_box_input_box_icon}>
                <FaPercent />
              </div>
              <input type="text" placeholder='ex: 20%' onChange={(e) => setNftData({ ...nftData, royalties: e.target.value })} />
            </div>
          </div>
          <div className={formStyle.accountForm_box_input}>
            <label htmlFor="Size">Size</label>
            <div className={formStyle.accountForm_box_input_box}>
              <div className={formStyle.accountForm_box_input_box_icon}>
                <MdOutlineAttachFile />
              </div>
              <input type="text" placeholder='ex: 180 MB' onChange={(e) => setNftData({ ...nftData, fileSize: e.target.value })}/>
            </div>
          </div>
          <div className={formStyle.accountForm_box_input}>
            <label htmlFor="Properties">Properties</label>
            <div className={formStyle.accountForm_box_input_box}>
              <div className={formStyle.accountForm_box_input_box_icon}>
                <AiTwotonePropertySafety />
              </div>
              <input type="text" placeholder='ex: properties' onChange={(e) => setNftData({ ...nftData, properties: e.target.value })}/>
            </div>
          </div>
        </div>
        <div className={Style.upload_box_btn}>
          <Button btnName="Upload" handleClick={() => {}} classStyle={Style.upload_box_btn_style}/>
          <Button btnName="Preview" handleClick={() => {}} classStyle={Style.upload_box_btn_style}/>
        </div>
      </div>
    </div>
  )
}

export default UploadNFT