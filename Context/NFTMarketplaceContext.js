import React, { useEffect, useState, useContext } from 'react'
import { ethers } from 'ethers'
import Router from 'next/router'
import axios from 'axios'
import { create as ipfsHttpClient } from 'ipfs-http-client'
// INTERNAL IMPORT
import { NFTMarketplaceABI, NFTMarketplaceAddress } from './constants'

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0")
// FETCH SMART CONTRACT
const fetchContract = (signerOrProvider) => new ethers.Contract(NFTMarketplaceAddress, NFTMarketplaceABI, signerOrProvider)

// CONNECT WITH SMART CONTRACT
const useConnect = async () => {
    try {
        if (!window.ethereum) return console.log("Please install Metamark")
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const contract = fetchContract(provider)
        console.log(contract)
        return contract
    } catch (error) {
        console.log("Something wrong when connect wallet")
    }
}

export const NFTMarketplaceContext = React.createContext()
export const NFTMarketplaceProvider = (({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("")
    const [contract, setContract] = useState(null)

    // handle account change
    const handleAccountChange = (accounts) => {
        if (accounts.length === 0) {
            console.log("No account found. Please connect to MetaMask")
        } else {
            console.log(accounts)
            setCurrentAccount(accounts[0])
        }
    }
    // check if wallet was connected
    const checkWalletConnected = async () => {
        try {
            if (!window.ethereum) return console.log("Please install Metamark")
            const accounts = await window.ethereum.request({ method: "eth_accounts" })
            handleAccountChange(accounts)
        } catch (error) {
            console.log("Something wrong when connect to wallet")
        }
    }
    // connect wallet
    const connectWallet = async () => {
        try {
            if (!window.ethereum) return console.log("Please install Metamark")
            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
            handleAccountChange(accounts)
        } catch (error) {
            if (error.code === 4001) {
                console.log('Please connect to MetaMask.')
            } else {
                console.log("Error while connecting to wallet")
            }
        }
    }
    // upload to IPFS 
    const uploadToIPFS = async (file) => {
        try {
            const added = await client.add({ content: file })
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            return url
        } catch (error) {
            console.log("Error when uploading to IPFS: " + error)
        }
    }
    // mint NFT
    const mintNFT = async (formInput, fileURL) => {
        const { name, description, price } = formInput
        if (!name || !description || !price || !fileURL) return console.log("Data is missing")
        const data = JSON.stringify({ name, description, image: fileURL })
        try {
            const added = await client.add(data);
            const url = `https://ipfs.infura.io/ipfs/${added.path}`
            const tokenId = await contract.mintToken(url)
            return tokenId
        } catch (error) {
            console.log("Error while mint NFT: " + error)
        }
    }

    useEffect(() => {
        const init = async () => {
            await checkWalletConnected()
            const _contract = await useConnect()
            setContract(_contract)
        }
        window.ethereum.on('accountsChanged', handleAccountChange)
        init()
    }, [])
    return (
        <NFTMarketplaceContext.Provider value={{ connectWallet, currentAccount, uploadToIPFS, mintNFT }}>
            {children}
        </NFTMarketplaceContext.Provider>
    )
})