import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import { toast } from 'react-toastify'
// INTERNAL IMPORT
import { NFTMarketplaceABI } from './constants'
import { ipfsToHTTPS } from '../helpers'
import axios from 'axios'
import { useRouter } from 'next/router'

// FETCH SMART CONTRACT
const fetchContract = (signerOrProvider) => new ethers.Contract(process.env.NEXT_PUBLIC_NFT_MARKET_ADDRESS, NFTMarketplaceABI, signerOrProvider)
// const BASE_URL = "https://nft-marketplace-tule.vercel.app"
export const NFTMarketplaceContext = React.createContext()
export const NFTMarketplaceProvider = (({ children }) => {
    const route = useRouter()
    const [currentAccount, setCurrentAccount] = useState(null)
    const [signer, setSigner] = useState(null)
    const [loading, setLoading] = useState(false)
    const [nfts, setNfts] = useState([])
    const [nftDetail, setNftDetail] = useState(null)
    const { theme, setTheme } = useTheme()
    // const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_GOERLI_URL);

    // handle account change
    const handleAccountChange = async (accounts) => {
        if (accounts.length) {
            await createUser(accounts[0])
            const web3Modal = new Web3Modal()
            const connection = await web3Modal.connect()
            const provider = new ethers.providers.Web3Provider(connection)
            const signer = provider.getSigner()
            setSigner(signer)
            await getALLNFT()
        } else {
            console.log("No account found")
        }
    }
    // check if wallet connected
    const checkWalletConnected = async () => {
        try {
            if (!window.ethereum) return console.log("Please install MetaMask")
            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            })
            await handleAccountChange(accounts)
        } catch (error) {
            console.log("Something wrong while connecting to wallet", error)
        }
    };
    // connect wallet
    const connectWallet = async () => {
        try {
            if (!window.ethereum) return console.log("Please install MetaMask")
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            })
            await handleAccountChange(accounts)
        } catch (error) {
            console.log("Something wrong while connecting to wallet", error)
        }
    }
    // upload NFT Storage
    const storeNFT = async (nftData) => {
        try {
            const { name, description, image } = nftData
            const data = new FormData();
            data.append("name", name);
            data.append("description", description);
            data.append("image", image);
            const response = await fetch("/api/nft-storage", {
                method: "POST",
                body: data,
            });
            if (response.status === 201) {
                const json = await response.json()
                const uri = ipfsToHTTPS(json.uri)
                console.log("tokenURI: ", uri)
                return uri
            }
        } catch (e) {
            console.log(e)
        }
    }

    // NFT MARKET FUNC
    // mint NFT
    const mintNFT = async (nftData) => {
        try {
            setLoading(true)
            const uri = await storeNFT(nftData)
            const contract = fetchContract(signer)
            const transaction = await contract.mintToken(uri)
            const receipt = await transaction.wait()
            const tokenId = Number(receipt.events[1].args[0])
            if (tokenId) {
                setLoading(false)
                let { data: { image } } = await axios.get(uri)
                image = ipfsToHTTPS(image)
                const { name, description, collections } = nftData
                await axios.post(`/api/nft`, { tokenId, name, description, image, owner: currentAccount.wallet, collections, uri })
                await getALLNFT()
                toast.success(`😁 A NFT was minted with a token ID of ${tokenId} 😁`)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
            toast.error(`😭 Something wrong when mint NFT 😭`)
        }
    }
    // list NFT
    const listNFT = async (id, tokenID, price) => {
        try {
            setLoading(true)
            const wei = ethers.utils.parseEther(price);
            const contract = fetchContract(signer)
            const transaction = await contract.listNftItem(tokenID, wei, { value: ethers.utils.parseEther("0.0015") })
            await transaction.wait()
            const res = await axios.patch(`/api/nft/${id}`, { listing: true, price })
            if (res.status === 200) {
                setNfts(res.data.data)
            }
            setLoading(false)
            toast(`😁 A NFT with the token ID ${tokenID} was listed at a price of ${price} ETH 😁`)
        } catch (e) {
            console.log(e)
            setLoading(false)
            toast.error(`😭 Something wrong when list NFT 😭`)
        }
    }
    // unlist NFT
    const unlistNFT = async (id, tokenID) => {
        try {
            setLoading(true)
            const contract = fetchContract(signer)
            const transaction = await contract.unlistNftItem(tokenID)
            await transaction.wait()
            const res = await axios.patch(`/api/nft/${id}`, { listing: false })
            if (res.status === 200) {
                setNfts(res.data.data)
            }
            setLoading(false)
            toast(`😁 A NFT with the token ID ${tokenID} was unlisted 😁`)
        } catch (e) {
            console.log(e)
            setLoading(false)
            toast.error(`😭 Something wrong when unlist NFT 😭`)
        }

    }
    // update price NFT
    const updatePriceNFT = async (id, tokenID, price) => {
        try {
            setLoading(true)
            const contract = fetchContract(signer)
            const wei = ethers.utils.parseEther(price);
            const transaction = await contract.updateItemPrice(tokenID, wei)
            await transaction.wait()
            const res = await axios.patch(`/api/nft/${id}`, { price: price })
            if (res.status === 200) {
                setNfts(res.data.data)
            }
            setLoading(false)
            toast(`😁 A NFT with the token ID ${tokenID} was updated price to ${price} ETH 😁`)
        } catch (e) {
            console.log(e)
            setLoading(false)
            toast.error(`😭 Something wrong when update price NFT 😭`)
        }

    }
    // buy NFT
    const buyNFT = async (nft) => {
        try {
            const { _id, tokenId, price } = nft
            setLoading(true)
            const contract = fetchContract(signer)
            const transaction = await contract.buyNftItem(tokenId, { value: ethers.utils.parseEther(String(price)) })
            await transaction.wait()
            const res = await axios.patch(`/api/nft/${_id}`, { owner: currentAccount.wallet, listing: false })
            if (res.status === 200) {
                setNfts(res.data.data)
            }
            setLoading(false)
            route.push('/author')
            toast(`😁 A NFT with the token ID ${tokenId} was sold at price of ${price} ETH 😁`)
        } catch (e) {
            console.log(e)
            setLoading(false)
            toast.error(`😭 Something wrong when sell NFT 😭`)
        }
    }

    // FECTH DATA FROM CONTRACT
    // get total NFT was minted
    // const getTotalSupply = async () => {
    //     try {
    //         const contract = fetchContract(provider);
    //         const total = await contract.getTotalSupply()
    //         console.log(Number(total))
    //         return total
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    // get NFT by tokenID
    // const getNFTItem = async (_tokenID) => {
    //     try {
    //         const contract = fetchContract(provider);
    //         const nft = await contract.getNFTItem(_tokenID)
    //         // const res = await formatData(contract, nft)
    //         console.log(nft)
    //         // return nft
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    // const uriItem = async (_tokenID) => {
    //     try {
    //         const contract = fetchContract(provider);
    //         const nft = await contract.tokenURI(_tokenID)
    //         // const res = await formatData(contract, nft)
    //         console.log(nft)
    //         // return nft
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    // // get all NFT was listed
    // const getAllNFTItem = async () => {
    //     try {
    //         const contract = fetchContract(provider);
    //         const allNFT = await contract.getAllNFTItem()
    //         const res = await formatData(contract, allNFT)
    //         console.log(res)
    //         return allNFT
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    // get all user NFT 
    // const getMyNFT = async () => {
    //     try {
    //         const contract = fetchContract(signer);
    //         const userNFT = await contract.getMyNFT()
    //         const res = await Promise.all(userNFT.map(async (nft) => await formatData(contract, nft)))
    //         console.log(res)
    //         return userNFT
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }
    // format data & get in4 from ipfs
    // const formatData = async (contract, data) => {
    //     const { tokenId, seller, owner, price } = data
    //     let tokenURI = await contract.tokenURI(tokenId)
    //     if (tokenURI.startsWith("ipfs://")) {
    //         tokenURI = ipfsToHTTPS(tokenURI)
    //     }
    //     const { data: { name, description, image } } = await axios.get(tokenURI)
    //     const newImage = ipfsToHTTPS(image)
    //     const newPrice = ethers.utils.formatUnits(price.toString(), "ether")
    //     return { name, description, newImage, seller, owner, newPrice, tokenURI }
    // }

    // FECTH DATA FROM BACKEND
    // get all nft
    const getALLNFT = async () => {
        try {
            const response = await axios.get(`/api/nft`);
            if (response.status === 200) {
                setNfts(response.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // create user
    const createUser = async (wallet) => {
        try {
            const name = `User ${wallet.substring(wallet.length - 4)}`
            const data = {
                name,
                wallet
            }
            const res = await axios.post(`/api/user`, data)
            if (res.status <= 201) {
                const data = res.data.data
                setCurrentAccount(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // update user
    const updateUser = async (userUpdate) => {
        try {
            const res = await axios.patch(`/api/user/${currentAccount._id}`, userUpdate)
            if (res.status <= 200) {
                const data = res.data.data
                setCurrentAccount(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // get a NFT
    const getNFTDetail = async (nftID) => {
        try {
            const res = await axios.get(`/api/nft/${nftID}`)
            if (res.status === 200) {
                const data = res.data.data[0]
                setNftDetail(data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        checkWalletConnected()
        window.ethereum.on('accountsChanged', handleAccountChange)
        getALLNFT()
    }, [])

    return (
        <NFTMarketplaceContext.Provider
            value={{
                currentAccount,
                theme,
                loading,
                nfts,
                nftDetail,
                updateUser,
                setLoading,
                setTheme,
                connectWallet,
                mintNFT,
                listNFT,
                unlistNFT,
                updatePriceNFT,
                buyNFT,
                getNFTDetail,
            }}>
            {children}
        </NFTMarketplaceContext.Provider>
    )
})