import { Client } from 'discord.js'
import * as mongoose from 'mongoose'
import { registerCommands } from './modules/commandRegister.js'
import { responses } from './modules/commandIndex.js'
import { log } from './modules/log.js'
import { variables } from './modules/variables.js'

const { MONGODBURI, TOKEN } = variables()

const client = new Client({ intents: ['Guilds', 'GuildMessages'] })

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return
  // console.log(interaction)
  log.interaction(interaction)
  await responses[interaction.commandName].execute(interaction)
  log.interactionComplete()
})

function login () {
  client.login(TOKEN)
  client.on('ready', () => {
    log.loggedIn(client.user.tag)
    client.user.setActivity('for /help', { type: 3 })
  })
}

function connectDB () {
  try {
    mongoose.connect(MONGODBURI)
    mongoose.set('strictQuery', true)
    log.mongooseConnected()
  } catch (error) {
    console.log(error)
  }
}

connectDB()
await registerCommands()
login()

// testing
// import { map, zones } from "./modules/rpg/map.js";
// import { db } from "./modules/database.js";
// const fakeInteraction = {
//   member: {
//     guild: {
//       id: '170320958589108224'
//     }
//   }
// }
// function runTest () {
// // console.log(zones[map[405]].resources.includes('wood'))
// db.newZone(fakeInteraction, 'forest')
// // db.findOneZone(fakeInteraction, 'forest')
// }
// runTest()
