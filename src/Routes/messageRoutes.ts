import express from 'express'
import { getAllMessages, postMessage, updateMessage, deleteMessage, getMessageById } from '../controllors/messageControllers'


export const messageRouter = express.Router()

messageRouter
    .route('/')
    .get(getAllMessages)
    .post(postMessage)

messageRouter
    .route('/:id')
    .get(getMessageById)
    .patch(updateMessage)
    .delete(deleteMessage)