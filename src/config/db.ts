import mongoose from 'mongoose'

export default function connectDB(): void {
  try {
    mongoose.connect(process.env.DB_URI as string)
  } catch (error) {
    console.log(error)
  }
}
