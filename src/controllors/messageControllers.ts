import { RequestHandler } from "express"

export const getAllMessages: RequestHandler = (req, res) => {
    res.json({
      status: 'success',
      message: 'You successfully got all messages'
    })
  }

export const postMessage: RequestHandler = (req, res) => {
    res.json({
      status: 'success',
      message: 'You posted a new Message'
    })
  }

export const updateMessage: RequestHandler = (req, res) => {
    res.json({
      status: 'success',
      message: 'You updated the Message'
    })
  }

export const deleteMessage: RequestHandler = (req, res) => {
    res.json({
      status: 'success',
      message: 'You sucessfully deleted the Message'
    })
  }

export const getMessageById: RequestHandler = (req, res) => {
    res.send(
      'you sucessfully got the Message'
    );
  }