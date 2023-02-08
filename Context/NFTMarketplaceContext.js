import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import { toast } from 'react-toastify'
// INTERNAL IMPORT
import { NFTMarketplaceABI } from './constants'

// FETCH SMART CONTRACT
const fetchContract = (signerOrProvider) => new ethers.Contract(process.env.NEXT_PUBLIC_NFT_MARKET_ADDRESS, NFTMarketplaceABI, signerOrProvider)

const useContract = async () => {
    try {
        const web3Modal = new Web3Modal()
        const connection = await web3Modal.connect()
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner()
        const contract = fetchContract(signer)
        return contract
    } catch (error) {
        console.log("Something went wrong while connecting with contract")
    }
}

export const NFTMarketplaceContext = React.createContext()
export const NFTMarketplaceProvider = (({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("")
    const { theme, setTheme } = useTheme()
    const provider = new ethers.providers.JsonRpcProvider();

    // handle account change
    const handleAccountChange = (accounts) => {
        if (accounts.length) {
            setCurrentAccount(accounts[0])
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
            handleAccountChange(accounts)
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
            handleAccountChange(accounts)
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
                console.log("tokenURI: ", json)
                return json.uri
            }
        } catch (e) {
            console.log(e)
        }
    }

    // NFT MARKET FUNC
    // mint NFT
    const mintNFT = async (nftData) => {
        try {
            const tokenURI = await storeNFT(nftData)
            const contract = await useContract()
            const transaction = await contract.mintToken(tokenURI)
            const receipt = await transaction.wait()
            const tokenID = Number(receipt.events[1].args[0])
            if (tokenID) {
                toast.success(`😁 A NFT was minted with a token ID of ${tokenID} 😁`)
            }
        } catch (error) {
            console.log("Error while mint NFT: " + error)
            toast.error(`😭 Something wrong when mint NFT 😭`)
        }
    }
    // list NFT
    const listNFT = async (tokenID, price) => {
        try {
            const wei = ethers.utils.parseEther(price);
            const contract = await useContract()
            const transaction = await contract.listNftItem(tokenID, wei, { value: ethers.utils.parseEther("0.0015") })
            await transaction.wait()
            toast(`😁 A NFT with the token ID ${tokenID} was listed at a price of ${price} ETH 😁`)
        } catch (e) {
            console.log(e)
            toast.error(`😭 Something wrong when list NFT 😭`)
        }
    }
    // unlist NFT
    const unlistNFT = async (tokenID) => {
        try {
            const contract = await useContract()
            const transaction = await contract.unlistNftItem(tokenID)
            await transaction.wait()
            toast(`😁 A NFT with the token ID ${tokenID} was unlisted 😁`)
        } catch (e) {
            console.log(e)
            toast.error(`😭 Something wrong when unlist NFT 😭`)
        }

    }
    // update price NFT
    const updatePriceNFT = async (tokenID, price) => {
        try {
            const contract = await useContract()
            const wei = ethers.utils.parseEther(price);
            const transaction = await contract.updateItemPrice(tokenID, wei)
            await transaction.wait()
            toast(`😁 A NFT with the token ID ${tokenID} was updated price to ${price} ETH 😁`)
        } catch (e) {
            console.log(e)
            toast.error(`😭 Something wrong when update price NFT 😭`)
        }

    }
    // buy NFT
    const buyNFT = async (tokenID, price) => {
        try {
            const contract = await useContract()
            const transaction = await contract.buyNftItem(tokenID, { value: ethers.utils.parseEther(price) })
            await transaction.wait()
            toast(`😁 A NFT with the token ID ${tokenID} was sold at price of ${price} ETH 😁`)
        } catch (e) {
            console.log(e)
            toast.error(`😭 Something wrong when sell NFT 😭`)
        }

    }

    // FECTH DATA FROM CONTRACT
    // get total NFT was minted
    const getTotalSupply = async () => {
        try {
            const contract = fetchContract(provider);
            const total = await contract.getTotalSupply()
            return total
        } catch (e) {
            console.log(e)
        }
    }
    // get NFT by tokenID
    const getNFTItem = async (tokenID) => {
        try {
            const contract = fetchContract(provider);
            const nft = await contract.getNFTItem(tokenID)
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
            return allNFT
        } catch (e) {
            console.log(e)
        }
    }
    // get all user NFT 
    const getUserNFT = async () => {
        try {
            const contract = fetchContract(provider);
            const userNFT = await contract.getUserNFT(currentAccount)
            return userNFT
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        checkWalletConnected()
        window.ethereum.on('accountsChanged', handleAccountChange)
    }, [])

    return (
        <NFTMarketplaceContext.Provider
            value={{
                currentAccount,
                theme,
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
                getUserNFT
            }}>
            {children}
        </NFTMarketplaceContext.Provider>
    )
})