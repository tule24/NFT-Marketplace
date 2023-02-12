import mongoose from "mongoose"

const connectDB = async () => {
    mongoose.set('strictQuery', false)
    return mongoose.connect(process.env.MONGO_URI).then(() => console.log("CONNECT TO THE DB...")).catch((err) => console.log(err))
}

export default connectDB