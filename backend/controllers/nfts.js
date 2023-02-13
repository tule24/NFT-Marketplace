import NFT from "@backend/models/Nft"
import { StatusCodes } from 'http-status-codes'
import { NotFoundError } from '@backend/errors'

const createNFT = async (req, res) => {
    const newNFT = await NFT.create(req.body)
    res.status(StatusCodes.CREATED).json({
        status: "success",
        data: newNFT
    })
}

const updateNFT = async (req, res) => {
    const { nftID } = req.query
    const nft = await NFT.findByIdAndUpdate(nftID, req.body, { new: true, runValidators: true })
    if (!nft) {
        throw new NotFoundError(`Not found NFT with id ${nftID}`)
    }

    res.status(StatusCodes.OK).json({
        status: "success",
        data: nft
    })
}

const deleteNFT = async (req, res) => {
    const { nftID } = req.query
    const nft = await NFT.findByIdAndDelete(nftID)
    if (!nft) {
        throw new NotFoundError(`Not found NFT with id ${nftID}`)
    }
    res.status(StatusCodes.OK).json({
        status: "success",
        data: nft
    })
}

const getAllNFT = async (req, res) => {
    const nfts = await NFT.find()
    res.status(StatusCodes.OK).json({
        status: "success",
        total: nfts.length,
        data: nfts
    })
}

const getNFT = async (req, res) => {
    const { nftID } = req.query
    const nft = await NFT.findById(nftID)
    if (!nft) {
        throw new NotFoundError(`Not found NFT with id ${nftID}`)
    }
    res.status(StatusCodes.OK).json({
        status: "success",
        data: nft
    })
}

export { createNFT, updateNFT, deleteNFT, getAllNFT, getNFT }