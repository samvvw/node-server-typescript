import { Request, Response } from 'express'
import User from '../models/user'

export const dropUsersDB = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const requestDB = await User.deleteMany({})
    res.status(200).json({ requestDB })
  } catch (error) {
    res.status(400).send('Request failed')
  }
}
