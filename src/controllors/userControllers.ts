import { RequestHandler } from "express"

export const getAllUsers: RequestHandler = (req, res) => {
    res.json({
      status: 'success',
      message: 'You successfully got all users'
    })
  }

export const postUser: RequestHandler = (req, res) => {
    res.json({
      status: 'success',
      message: 'You posted a new user'
    })
  }

export const updateUser: RequestHandler = (req, res) => {
    res.json({
      status: 'success',
      message: 'You updated the user'
    })
  }

export const deleteUser: RequestHandler = (req, res) => {
    res.json({
      status: 'success',
      message: 'You sucessfully deleted the user'
    })
  }

export const getUserById: RequestHandler = (req, res) => {
    res.send(
      'you sucessfully got the user'
    );
  }