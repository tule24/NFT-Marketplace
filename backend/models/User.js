import { Schema, model, models } from "mongoose"
import WAValidator from "wallet-address-validator"
const userSchema = new Schema({
    name: String,
    wallet: {
        type: String,
        require: [true, "Please provide wallet address"],
        unique: true,
        validate: {
            validator: function (val) {
                return WAValidator.validate(val, 'ETH', 'testnet')
            },
            message: "Only accept eth wallet"
        }
    },
    email: String,
    ava: {
        type: String,
        default: "ava.jpg"
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"]
    }
}, { timestamps: true })

export default models.User || model('User', userSchema)