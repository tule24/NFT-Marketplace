import React from 'react'
import Image from 'next/image'
// INTERNAL IMPORT
import Style from './Brand.module.css'
import images from '../../img'
import { Button } from '../index'
const Brand = () => {
    return (
        <div className={Style.brand}>
            <div className={Style.brand_box}>
                <div className={Style.brand_box_left}>
                    <h1>Earn free crypto with Ciscrypt</h1>
                    <p>A creative agency that lead and insprire.</p>
                    <div className={Style.brand_box_left_btn}>
                        <Button btnName="Creative" handleClick={() => {}}/>
                        <Button btnName="Discover" handleClick={() => {}}/>
                    </div>
                </div>
                <div className={Style.brand_box_right}>
                    <Image src={images.earn} alt="brand logo" className={Style.brand_box_right_img}/>
                </div>
            </div>
        </div>
    )
}

export default Brand