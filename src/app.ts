import express from 'express'
import dotenv from 'dotenv'
dotenv.config({ path: './.env' })
import morgan from 'morgan'

const app = express()

const PORT = process.env.PORT

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.status(200).send('It is working')
})

app.listen(PORT, () => {
  console.log(`Server running on PORT: ${PORT}`)
})

export default app
