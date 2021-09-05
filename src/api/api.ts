import { Router } from 'express'

import userRouter from '../routes/user.routes'

const apiRouter = Router()

apiRouter.get('/', (req, res) => {
  res.status(200).send('Api working')
})

apiRouter.use('/users', userRouter)

export default apiRouter
