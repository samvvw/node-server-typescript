import { Schema, model, models, Document } from 'mongoose'

interface User extends Document {
  userName: string
  email: string
  password: string
  createdAt: () => number | number
}

const userSchema = new Schema<User>({
  userName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: {
      validator: async function (email: string) {
        const exists = await models.User.countDocuments({ email })
        return !exists
      },
      message: (props) => `${props.value} already exists`,
    },
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    immutable: true,
  },
})

const User = model<User>('User', userSchema)

export default User
