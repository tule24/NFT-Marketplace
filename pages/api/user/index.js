import { createUser, getAllUser } from '@backend/controllers/users'
import connectDB from '@backend/db/connect'
import catchAsync from '@backend/middlewares/CatchAsync'
import { ForbiddenError } from '@backend/errors'

connectDB()
const handler = async (req, res, next) => {
    switch (req.method) {
        case "POST": {
            await createUser(req, res)
            break
        }
        case "GET": {
            await getAllUser(req, res)
            break
        }
        default: {
            throw new ForbiddenError(`Unsupport method ${req.method}`)
        }
    }
}

export default catchAsync(handler)