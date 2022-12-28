import * as mongoose from 'mongoose'

const thingSchema = new mongoose.Schema({
  serverID: String,
  name: String
})

export const Thing = mongoose.model('Thing', thingSchema)
