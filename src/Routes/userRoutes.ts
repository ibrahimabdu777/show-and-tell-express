import express from 'express'
import { getAllUsers, postUser, updateUser, deleteUser, getUserById } from '../controllors/userControllers'


export const userRouter = express.Router()

userRouter
    .route('/')
    .get(getAllUsers)
    .post(postUser)

userRouter
    .route('/:id')
    .get(getUserById)
    .patch(updateUser)
    .delete(deleteUser)