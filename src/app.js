import { Client } from 'discord.js'
import { registerCommands } from './commandRegister.js'
import { routeInteractions } from './interactionRouter.js'
import * as dotenv from 'dotenv'
dotenv.config()

const client = new Client({ intents: ['Guilds', 'GuildMessages'] })

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return
  routeInteractions(interaction)
  console.log('Interaction complete')
})

function login () {
  client.login(process.env.BHAVA_TOKEN)
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
  })
}

registerCommands()
login()
