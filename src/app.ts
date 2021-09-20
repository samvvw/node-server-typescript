import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import apiRouter from './api/api'
import testRouter from './routes/test.routes'
import connectDB from './config/db'
dotenv.config()

const app = express()

const PORT: string = process.env.PORT as string

app.use(express.json())

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

if (process.env.NODE_ENV === 'test') {
  app.use('/test', testRouter)
}

connectDB()

app.get('/', (req, res) => {
  res.status(200).send('It is working')
})

app.use('/api', apiRouter)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})

export default app
