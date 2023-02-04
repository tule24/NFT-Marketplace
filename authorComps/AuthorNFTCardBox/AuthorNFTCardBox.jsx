import React from 'react'
import Image from 'next/image'
// INTERNAL IMPORT 
import Style from './AuthorNFTCardBox.module.css'
import images from '../../img'
import { NFTCardTwo } from '../../collectionComps'
import FollowerCard from '../../components/Follower/FollowerCard/FollowerCard'
const AuthorNFTCardBox = ({authorTab}) => {
    const collectiables = [1,2,3,3,2,1,3,1,2]
    const created = [3,2,1,3,1]
    const liked = [1,2,3,3,2,1]
    const follower = [1,2,3,4,5,6,7,8]
    const following = [2,5,4,3,6,8]
    return (
        <div className={Style.authorNFTCardBox}>
            {authorTab === "Collectiables" && <NFTCardTwo NFTData={collectiables}/>}
            {authorTab === "Created" && <NFTCardTwo NFTData={created}/>}
            {authorTab === "Liked" && <NFTCardTwo NFTData={liked}/>}
            {authorTab === "Followers" && <FollowerCard cardData={follower}/>}
            {authorTab === "Following" && <FollowerCard cardData={following}/>}
        </div>
    )
}

export default AuthorNFTCardBox