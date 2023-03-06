import React, { useMemo } from 'react'
// INTERNAL IMPORT 
import Style from './AuthorNFTCardBox.module.css'
import { NFTAuthorCard } from '@/components/Author'
const AuthorNFTCardBox = ({ authorTab, nfts, currentAccount }) => {
    const allNft = useMemo(() => nfts.filter(ele => ele.owner === currentAccount.wallet), [nfts])
    const listedNFT = useMemo(() => allNft.filter(ele => ele.listing), [nfts])
    const unlistedNFT = useMemo(() => allNft.filter(ele => !ele.listing), [nfts])
    return (
        <div className={Style.authorNFTCardBox}>
            {authorTab === "All NFTs" && <NFTAuthorCard nfts={allNft} />}
            {authorTab === "Listed NFTs" && <NFTAuthorCard nfts={listedNFT} />}
            {authorTab === "Unlisted NFTs" && <NFTAuthorCard nfts={unlistedNFT} />}
        </div>
    )
}

export default AuthorNFTCardBox