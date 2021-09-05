import { Request, Response } from 'express'

export const userSignIn = (req: Request, res: Response): void => {
  res.status(200).send('userSignin')
}
export const userSignUp = (req: Request, res: Response): void => {
  res.status(200).send('userSignup')
}
