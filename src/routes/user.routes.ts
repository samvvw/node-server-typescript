import { Router } from 'express'

import { userSignIn, userSignUp } from '../controllers/user.controllers'

const userRouter = Router()

userRouter.post('/sign-up', userSignUp)
userRouter.post('/sign-in', userSignIn)

export default userRouter
