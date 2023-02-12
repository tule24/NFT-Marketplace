import { Schema, model, models } from "mongoose"

const testSchema = new Schema({
    name: String,
    price: Number
})

export default models.Test || model('Test', testSchema)