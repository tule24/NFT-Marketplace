import User from "@backend/models/User"
import { StatusCodes } from 'http-status-codes'
import { NotFoundError } from '@backend/errors'

const createUser = async (req, res) => {
    const { wallet } = req.body
    if (!wallet) {
        res.status(StatusCodes.BAD_REQUEST).send("Please provide wallet address")
    }

    const newUser = await User.create(req.body)
    res.status(StatusCodes.CREATED).json({ user: newUser })
}

const updateUser = async (req, res) => {
    const { userID } = req.query
    const user = await User.findByIdAndUpdate(userID, req.body, { new: true, runValidators: true })
    if (!user) {
        throw new NotFoundError(`Not found user with id ${userID}`)
    }

    res.status(StatusCodes.OK).json({ user })
}

const deleteUser = async (req, res) => {
    const { userID } = req.query
    const user = await User.findByIdAndDelete(userID)
    if (!user) {
        throw new NotFoundError(`Not found user with id ${userID}`)
    }
    res.status(StatusCodes.OK).json({ user })
}

const getAllUser = async (req, res) => {
    const users = await User.find()
    res.status(StatusCodes.OK).json({
        total: users.length,
        users
    })
}

const getUser = async (req, res) => {
    const { userID } = req.query
    const user = await User.findById(userID)
    if (!user) {
        throw new NotFoundError(`Not found user with id ${userID}`)
    }
    res.status(StatusCodes.OK).json({ user })
}

export { createUser, updateUser, deleteUser, getAllUser, getUser }