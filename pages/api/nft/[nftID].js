import { getNFT, updateNFT, deleteNFT } from '@backend/controllers/nfts'
import connectDB from '@backend/db/connect'
import catchAsync from '@backend/middlewares/CatchAsync'
import { ForbiddenError } from '@backend/errors'

connectDB()
const handler = async (req, res, next) => {
    switch (req.method) {
        case "GET": {
            await getNFT(req, res)
            break
        }
        case "PATCH": {
            await updateNFT(req, res)
            break
        }
        case "DELETE": {
            await deleteNFT(req, res)
            break
        }
        default: {
            throw new ForbiddenError(`Unsupport method ${req.method}`)
        }
    }
}

export default catchAsync(handler)