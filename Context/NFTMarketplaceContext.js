import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import { toast } from 'react-toastify'
// INTERNAL IMPORT
import { NFTMarketplaceABI } from './constants'
import { ipfsToHTTPS } from '../helpers'
import axios from 'axios'

// FETCH SMART CONTRACT
const fetchContract = (signerOrProvider) => new ethers.Contract(process.env.NEXT_PUBLIC_NFT_MARKET_ADDRESS, NFTMarketplaceABI, signerOrProvider)

export const NFTMarketplaceContext = React.createContext()
export const NFTMarketplaceProvider = (({ children }) => {
    const [currentAccount, setCurrentAccount] = useState(null)
    const [signer, setSigner] = useState(null)
    const [loading, setLoading] = useState(false)
    const [nfts, setNfts] = useState([])
    const { theme, setTheme } = useTheme()
    const provider = new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_GOERLI_URL);

    // handle account change
    const handleAccountChange = async (accounts) => {
        if (accounts.length) {
            await createUser(accounts[0])
            const web3Modal = new Web3Modal()
            const connection = await web3Modal.connect()
            const provider = new ethers.providers.Web3Provider(connection)
            const signer = provider.getSigner()
            setSigner(signer)
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
                const tokenURI = ipfsToHTTPS(json.uri)
                console.log("tokenURI: ", tokenURI)
                return tokenURI
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
            const tokenURI = await storeNFT(nftData)
            const contract = fetchContract(signer)
            const transaction = await contract.mintToken(tokenURI)
            const receipt = await transaction.wait()
            const tokenID = Number(receipt.events[1].args[0])
            setLoading(false)
            if (tokenID) {
                toast.success(`😁 A NFT was minted with a token ID of ${tokenID} 😁`)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
            toast.error(`😭 Something wrong when mint NFT 😭`)
        }
    }
    // list NFT
    const listNFT = async (tokenID, price) => {
        try {
            setLoading(true)
            const wei = ethers.utils.parseEther(price);
            const contract = fetchContract(signer)
            const transaction = await contract.listNftItem(tokenID, wei, { value: ethers.utils.parseEther("0.0015") })
            await transaction.wait()
            setLoading(false)
            toast(`😁 A NFT with the token ID ${tokenID} was listed at a price of ${price} ETH 😁`)
        } catch (e) {
            console.log(e)
            setLoading(false)
            toast.error(`😭 Something wrong when list NFT 😭`)
        }
    }
    // unlist NFT
    const unlistNFT = async (tokenID) => {
        try {
            setLoading(true)
            const contract = fetchContract(signer)
            const transaction = await contract.unlistNftItem(tokenID)
            await transaction.wait()
            setLoading(false)
            toast(`😁 A NFT with the token ID ${tokenID} was unlisted 😁`)
        } catch (e) {
            console.log(e)
            setLoading(false)
            toast.error(`😭 Something wrong when unlist NFT 😭`)
        }

    }
    // update price NFT
    const updatePriceNFT = async (tokenID, price) => {
        try {
            setLoading(true)
            const contract = fetchContract(signer)
            const wei = ethers.utils.parseEther(price);
            const transaction = await contract.updateItemPrice(tokenID, wei)
            await transaction.wait()
            toast(`😁 A NFT with the token ID ${tokenID} was updated price to ${price} ETH 😁`)
            setLoading(false)
        } catch (e) {
            console.log(e)
            setLoading(false)
            toast.error(`😭 Something wrong when update price NFT 😭`)
        }

    }
    // buy NFT
    const buyNFT = async (tokenID, price) => {
        try {
            setLoading(true)
            const contract = fetchContract(signer)
            const transaction = await contract.buyNftItem(tokenID, { value: ethers.utils.parseEther(price) })
            await transaction.wait()
            setLoading(false)
            toast(`😁 A NFT with the token ID ${tokenID} was sold at price of ${price} ETH 😁`)
        } catch (e) {
            console.log(e)
            setLoading(false)
            toast.error(`😭 Something wrong when sell NFT 😭`)
        }
    }

    // FECTH DATA FROM CONTRACT
    // get total NFT was minted
    const getTotalSupply = async () => {
        try {
            const contract = fetchContract(provider);
            const total = await contract.getTotalSupply()
            console.log(Number(total))
            return total
        } catch (e) {
            console.log(e)
        }
    }
    // get NFT by tokenID
    const getNFTItem = async (_tokenID) => {
        try {
            const contract = fetchContract(provider);
            const nft = await contract.getNFTItem(_tokenID)
            const res = await formatData(contract, nft)
            console.log(res)
            return nft
        } catch (e) {
            console.log(e)
        }
    }
    // get all NFT was listed
    const getAllNFTItem = async () => {
        try {
            const contract = fetchContract(provider);
            const allNFT = await contract.getAllNFTItem()
            const res = await formatData(contract, allNFT)
            console.log(res)
            return allNFT
        } catch (e) {
            console.log(e)
        }
    }
    // get all user NFT 
    const getMyNFT = async () => {
        try {
            const contract = fetchContract(signer);
            const userNFT = await contract.getMyNFT()
            const res = await Promise.all(userNFT.map(async (nft) => await formatData(contract, nft)))
            console.log(res)
            return userNFT
        } catch (e) {
            console.log(e)
        }
    }
    // format data & get in4 from ipfs
    const formatData = async (contract, data) => {
        const { tokenId, seller, owner, price } = data
        let tokenURI = await contract.tokenURI(tokenId)
        if (tokenURI.startsWith("ipfs://")) {
            tokenURI = ipfsToHTTPS(tokenURI)
        }
        const { data: { name, description, image } } = await axios.get(tokenURI)
        const newImage = ipfsToHTTPS(image)
        const newPrice = ethers.utils.formatUnits(price.toString(), "ether")
        return { name, description, newImage, seller, owner, newPrice, tokenURI }
    }

    // get all nft
    const getALLNFT = async () => {
        try {
            const response = await axios.get("/api/nft");
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
            const data = {
                name: wallet,
                wallet: wallet
            }
            const res = await axios.post('/api/user', data)
            if (res.status <= 201) {
                const data = res.data.data
                console.log(data)
                setCurrentAccount(data)
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
                setLoading,
                setTheme,
                connectWallet,
                mintNFT,
                listNFT,
                unlistNFT,
                updatePriceNFT,
                buyNFT,
                getTotalSupply,
                getNFTItem,
                getAllNFTItem,
                getMyNFT
            }}>
            {children}
        </NFTMarketplaceContext.Provider>
    )
})