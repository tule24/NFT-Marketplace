import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { TiArrowLeftThick, TiArrowRightThick } from 'react-icons/ti'
// INTERNAL IMPORT
import Style from './NFTSlider.module.css'
import NFTSliderCard from './NFTSliderCard/NFTSliderCard'
const NFTSlider = () => {
    const [width, setWidth] = useState(0)
    const dragSlider = useRef()
    const sliderArray = [
        "https://www.youtube.com/watch?v=Cq73XqUra7I",
        "https://www.youtube.com/watch?v=GgNNi1nTODw",
        "https://www.youtube.com/watch?v=fQMiIaO3RWM",
        "https://www.youtube.com/watch?v=ktZjf2CxFvE",
        "https://www.youtube.com/watch?v=4NfUfq2u1KE",
        "https://www.youtube.com/watch?v=NOjST7ny4oY"
    ]

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
                            <NFTSliderCard key={i} url={el} />
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default NFTSlider