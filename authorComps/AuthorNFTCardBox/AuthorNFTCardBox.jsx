import React, { useMemo } from 'react'
// INTERNAL IMPORT 
import Style from './AuthorNFTCardBox.module.css'
import FollowerCard from '../../components/Follower/FollowerCard/FollowerCard'
import { NFTAuthorCard } from 'authorComps'
const AuthorNFTCardBox = ({ authorTab, nfts, currentAccount }) => {
    const follower = [1, 2, 3, 4, 5, 6, 7, 8]
    const following = [2, 5, 4, 3, 6, 8]
    const allNft = useMemo(() => nfts.filter(ele => ele.owner === currentAccount.wallet), [nfts])
    const listedNFT = useMemo(() => allNft.filter(ele => ele.listing), [nfts])
    const unlistedNFT = useMemo(() => allNft.filter(ele => !ele.listing), [nfts])
    return (
        <div className={Style.authorNFTCardBox}>
            {authorTab === "All NFTs" && <NFTAuthorCard nfts={allNft} />}
            {authorTab === "Listed NFTs" && <NFTAuthorCard nfts={listedNFT} />}
            {authorTab === "Unlisted NFTs" && <NFTAuthorCard nfts={unlistedNFT} />}
            {authorTab === "Followers" && <FollowerCard cardData={follower} />}
            {authorTab === "Following" && <FollowerCard cardData={following} />}
        </div>
    )
}

export default AuthorNFTCardBox