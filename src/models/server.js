import * as mongoose from 'mongoose'

const serverSchema = new mongoose.Schema({
  serverID: String,
  name: String,
  combats: {}
})

// COMBAT TEMPLATE
/*
Date: {
  combatants: {
    userID: User Obj
  },
  turnOrder: [
    userID
  ]
}
*/
export const Server = mongoose.model('Server', serverSchema)