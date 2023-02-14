import { Schema, model, models, Types } from "mongoose"
const nftsSchema = new Schema({
    tokenId: {
        type: Number,
        require: [true, "Provide NFT Token ID"],
        unique: true
    },
    name: {
        type: String,
        require: [true, "Provide nft name"]
    },
    description: {
        type: String,
        default: ""
    },
    image: {
        type: String,
        require: [true, "Provide nft image ipfs link"],
        unique: true
    },
    price: {
        type: Number,
        default: 0
    },
    owner: {
        type: String,
        require: [true, "Provide nft owner wallet"]
    },
    like: {
        type: Number,
        default: 0
    },
    collections: {
        type: String,
        default: "Art",
        enum: ["Art", "Sport", "Music", "Cinematic", "Digital"]
    },
    listing: {
        type: Boolean,
        default: false
    },
    uri: {
        type: String,
        require: [true, "Provide NFT URI"]
    }
}, { timestamps: true })

export default models.NFT || model('NFT', nftsSchema)