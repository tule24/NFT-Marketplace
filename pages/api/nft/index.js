import { createNFT, getAllNFT } from '@backend/controllers/nfts'
import connectDB from '@backend/db/connect'
import catchAsync from '@backend/middlewares/CatchAsync'
import { ForbiddenError } from '@backend/errors'

connectDB()
const handler = async (req, res, next) => {
    switch (req.method) {
        case "POST": {
            await createNFT(req, res)
            break
        }
        case "GET": {
            await getAllNFT(req, res)
            break
        }
        default: {
            throw new ForbiddenError(`Unsupport method ${req.method}`)
        }
    }
}

export default catchAsync(handler)