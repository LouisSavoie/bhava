import { Mongoose } from 'mongoose'

const thingSchema = new Mongoose.Schema({
  serverID: String,
  name: String
})

export const Thing = Mongoose.model('Thing', thingSchema)