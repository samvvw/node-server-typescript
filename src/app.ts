import express from 'express'
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })
import morgan from 'morgan'

import apiRouter from './api/api'

const app = express()

const PORT = process.env.PORT

app.use(express.json())
if (process.env.NODE_ENV !== 'test') {
  app.use(morgan('dev'))
}

app.get('/', (req, res) => {
  res.status(200).send('It is working')
})

app.use('/api', apiRouter)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

export default app
