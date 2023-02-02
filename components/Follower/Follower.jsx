import React, { useState } from 'react'
import { RiUserFollowFill, RiCreativeCommonsByFill, RiAwardLine } from 'react-icons/ri'
//INTERNAL IMPORT
import Style from './Follower.module.css'
import FollowerCard from './FollowerCard/FollowerCard'
const Follower = () => {
    const [tabFollower, setTabCollection] = useState('popular')

    const cardArray = [1, 2, 3, 4, 5, 6, 7, 8]
    const followingArray = [1, 2, 3, 4]
    const newsArray = [1, 2, 3, 4, 5, 6]
    return (
        <div className={Style.follower}>
            <div className={Style.follower_title}>
                <h2>Top Creators List..</h2>
                <div className={Style.follower_tabs}>
                    <div className={Style.follower_tabs_btn}>
                        <button onClick={() => setTabCollection('popular')}>
                            <RiCreativeCommonsByFill/> <span>Popular</span> 
                        </button>
                    </div>
                    <div className={Style.follower_tabs_btn}>
                        <button onClick={() => setTabCollection('following')}>
                            <RiUserFollowFill/>{" "} <span>Following</span>
                        </button>
                    </div>
                    <div className={Style.follower_tabs_btn}>
                        <button onClick={() => setTabCollection('news')}>
                            <RiAwardLine/>{" "} <span>NoteWorthy</span>
                        </button>
                    </div>
                </div>
            </div>
            {
                tabFollower === 'popular' && (
                    <div className={Style.follower_box}>
                        {cardArray.map((ele, i) => (
                            <FollowerCard key={i} i={i} el={ele} />
                        ))}
                    </div>
                )
            }
            {
                tabFollower === 'following' && (
                    <div className={Style.follower_box}>
                        {followingArray.map((ele, i) => (
                            <FollowerCard key={i} i={i} el={ele} />
                        ))}
                    </div>
                )
            }
            {
                tabFollower === 'news' && (
                    <div className={Style.follower_box}>
                        {newsArray.map((ele, i) => (
                            <FollowerCard key={i} i={i} el={ele} />
                        ))}
                    </div>
                )
            }
            <div className={Style.follower_member}>
                <div className={Style.follower_member_box}>
                    <a href="#">Show me more</a>
                    <a href="#">Become author</a>
                </div>
            </div>
        </div>
    )
}

export default Follower