import mongoose from 'mongoose'

export default function connectDB(): void {
  try {
    console.log(process.env.DB_URI_TEST)
    if (process.env.NODE_ENV === 'test') {
      mongoose.connect(process.env.DB_URI_TEST as string, () => {
        console.log(`DB connected: ${process.env.DB_URI_TEST}`)
      })
    } else {
      mongoose.connect(process.env.DB_URI as string, () => {
        console.log(`DB connected: ${process.env.DB_URI}`)
      })
    }
  } catch (error) {
    console.log(error)
  }
}
