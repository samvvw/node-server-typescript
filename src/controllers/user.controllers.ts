import { Request, Response } from 'express'
import User from '../models/user'

export const userSignUp = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const dbResponse = await User.create(req.body)

    res.status(201).json({ dbResponse })
  } catch (error) {
    res.status(400).send(error)
  }
}

export const userSignIn = (req: Request, res: Response): void => {
  res.status(200).send('userSignin')
}
