import * as mongoose from 'mongoose'

const serverSchema = new mongoose.Schema({
  serverID: String,
  name: String,
  combats: {}
})

// COMBAT TEMPLATE
/*
Date: {
  owner: User,
  invited: [userID],
  combatants: {
    userID: User Obj
  },
  turnOrder: [
    userID
  ]
}
*/
export const Server = mongoose.model('Server', serverSchema)