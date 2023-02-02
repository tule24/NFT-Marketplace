import React, { useState } from 'react'
import { BsFillAlarmFill, BsFillCalendarDateFill, BsCalendar3 } from 'react-icons/bs'
//INTERNAL IMPORT
import Style from './Collection.module.css'
import DaysComponent from './DaysComponent/DaysComponent'

const Collection = () => {
    const [tabCollection, setTabCollection] = useState('popular')

    const cardArray = [1, 2, 3, 4, 5, 6, 7, 8]
    const followingArray = [1, 2, 3, 4]
    const newsArray = [1, 2, 3, 4, 5, 6]


    return (
        <div className={Style.collection}>
            <div className={Style.collection_title}>
                <h2>Top List Creators</h2>
                <div className={Style.collection_collections}>
                    <div className={Style.collection_collections_btn}>
                        <button onClick={() => setTabCollection('popular')}>
                            <BsFillAlarmFill /> 24 hours
                        </button>
                        <button onClick={() => setTabCollection('following')}>
                            <BsCalendar3 /> 7 days
                        </button>
                        <button onClick={() => setTabCollection('news')}>
                            <BsFillCalendarDateFill /> 30 days
                        </button>
                    </div>
                </div>
            </div>
            {
                tabCollection === 'popular' && (
                    <div className={Style.collection_box}>
                        {cardArray.map((ele, i) => (
                            <DaysComponent key={i} />
                        ))}
                    </div>
                )
            }
            {
                tabCollection === 'following' && (
                    <div className={Style.collection_box}>
                        {followingArray.map((ele, i) => (
                            <DaysComponent key={i} />
                        ))}
                    </div>
                )
            }
            {
                tabCollection === 'news' && (
                    <div className={Style.collection_box}>
                        {newsArray.map((ele, i) => (
                            <DaysComponent key={i} />
                        ))}
                    </div>
                )
            }
        </div>
    )
}

export default Collection