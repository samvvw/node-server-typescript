import { Router } from 'express'

import { userSignIn, userSignUp } from '../controllers/user.controllers'

const userRouter = Router()

// POST - /api/user/sign-up
userRouter.post('/sign-up', userSignUp)

// POST - /api/user/sign-in
userRouter.post('/sign-in', userSignIn)

export default userRouter
