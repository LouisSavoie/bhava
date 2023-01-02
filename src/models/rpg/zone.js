import * as mongoose from 'mongoose'

const zoneSchema = new mongoose.Schema({
  serverID: Number,
  displayName: String,
  name: String,
  resources: [],
  inventory: [],
  monsters: []
})

export const Zone = mongoose.model('Zone', zoneSchema)
