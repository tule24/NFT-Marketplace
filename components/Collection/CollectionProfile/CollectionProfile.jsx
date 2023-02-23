import React, { useState } from 'react'
import Image from 'next/image'
import { TiSocialFacebook, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram } from 'react-icons/ti'

// INTERNAL IMPORT
import Style from './CollectionProfile.module.css'
import { collectionData } from '../collections'
const CollectionProfile = () => {
  const [curCollection, setCurCollection] = useState(0)
  return (
    <div className={Style.collectionProfile}>
      <div className={Style.collectionProfile_box}>
        <div className={Style.collectionProfile_box_left}>
          <Image src={collectionData[curCollection].image} alt="nft image" className={Style.collectionProfile_box_left_img} />
          <div className={Style.collectionProfile_box_left_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>
        <div className={Style.collectionProfile_box_middle}>
          <h1>{collectionData[curCollection].name} Collection</h1>
          <p>{collectionData[curCollection].description}</p>
          <div className={Style.collectionProfile_box_middle_box}>
            {collectionData.filter(e => e.id !== curCollection).map((el, i) => (
              <div className={Style.collectionProfile_box_middle_box_item} onClick={() => setCurCollection(el.id)} key={i} >
                <Image src={el.image} alt="colection" />
                <h3>{el.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CollectionProfile