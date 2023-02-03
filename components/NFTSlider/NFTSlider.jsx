import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti'
// INTERNAL IMPORT
import Style from './NFTSlider.module.css'
import NFTSliderCard from './NFTSliderCard/NFTSliderCard'
const NFTSlider = () => {
    const sliderArray = [1, 2, 3, 4, 5, 6]
    const [width, setWidth] = useState(0)
    const dragSlider = useRef()

    useEffect(() => {
        setWidth(dragSlider.current.scrollWidth - dragSlider.current.offsetWidth)
    })

    const handleScroll = (dir) => {
        const { current } = dragSlider
        const scrollAmount = window.innerWidth > 1800 ? 270 : 210;

        if (dir === "left") {
            current.scrollLeft -= scrollAmount;
        } else {
            current.scrollLeft += scrollAmount;
        }
    }
    return (
        <div className={Style.slider}>
            <div className={Style.slider_box}>
                <h2>Explore NFTs Video</h2>
                <div className={Style.slider_box_button}>
                    <p>Click on play icon & enjoy NFTs Video</p>
                    <div className={Style.slider_box_button_btn}>
                        <div className={Style.slider_box_button_btn_icon}>
                            <TiArrowLeftThick onClick={() => handleScroll("left")} />
                        </div>
                        <div className={Style.slider_box_button_btn_icon}>
                            <TiArrowRightThick onClick={() => handleScroll("right")} />
                        </div>
                    </div>
                </div>
                <motion.div className={Style.slider_box_itmes} ref={dragSlider}>
                    <motion.div className={Style.slider_box_item} drag="x" dragConstraints={{ right: 0, left: -width }}>
                        {sliderArray.map((el, i) => (
                            <NFTSliderCard key={i} el={el} i={i} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default NFTSlider