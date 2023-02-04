import React from 'react'
import Image from 'next/image'
// INTERNAL IMPORT
import Style from './LikeProfile.module.css'
import images from '../../img'
const LikeProfile = () => {
    const imgArray = [1, 2, 3, 4]
    return (
        <div className={Style.like}>
            {imgArray.map((el, i) => (
                <div className={Style.like_box} key={i}>
                    <Image src={images[`user${i+1}`]} alt='ava' width={15} height={15} className={Style.like_box_img}/>
                </div>
            ))}
        </div>
    )
}

export default LikeProfile