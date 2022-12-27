import { Client } from 'discord.js'
import { registerCommands } from './commandRegister.js'
import { responses } from './index.js'
import { log } from './modules/log.js'
import * as dotenv from 'dotenv'
dotenv.config()

const client = new Client({ intents: ['Guilds', 'GuildMessages'] })

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return
  log.interaction(interaction)
  await responses[interaction.commandName].execute(interaction)
  log.interactionComplete()
})

function login () {
  client.login(process.env.BHAVA_TOKEN)
  client.on('ready', () => {
    log.loggedIn(client.user.tag)
  })
}

registerCommands()
login()
