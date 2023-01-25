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
  zone: String zoneName,
  invited: [userID],
  combatants: {
    users: {
    userID: User Obj
    },
    monsters: {
      ???
    }
  },
  turnOrder: [
    userID
  ],
  started: Boolean
}
*/
export const Server = mongoose.model('Server', serverSchema)