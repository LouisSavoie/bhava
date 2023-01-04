import * as mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
  id: String,
  tag: String,
  char: {
    name: String,
    zone: Number
  }
})

export const User = mongoose.model('User', userSchema)
