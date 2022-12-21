// IMPORTS
import * as dotenv from 'dotenv'
import { Client, REST, Routes } from 'discord.js'

// CONFIG ENV VARS
dotenv.config()

const client = new Client({ intents: ['Guilds', 'GuildMessages'] })
const rest = new REST({ version: '10' }).setToken(process.env.BHAVA_TOKEN)

// COMMANDS
const testServerCommands = [
  {
    name: 'ping',
    description: 'Replies with Pong!'
  }
]
const globalCommands = [
  {
    name: 'ping',
    description: 'Replies with Pong!'
  }
]

// REGISTER COMMANDS
async function registerCommands () {
  // register test server commands
  try {
    console.log('Started refreshing test server (/) commands.')

    await rest.put(Routes.applicationGuildCommands(process.env.BHAVA_APPID, process.env.BHAVA_TESTSERVERID), { body: testServerCommands })

    console.log('Successfully reloaded test server (/) commands.')
  } catch (error) {
    console.error(error)
  }
  // register global commands
  try {
    console.log('Started refreshing global (/) commands.')

    await rest.put(Routes.applicationCommands(process.env.BHAVA_APPID), { body: globalCommands })

    console.log('Successfully reloaded global (/) commands.')
  } catch (error) {
    console.error(error)
  }
}

// LOGIN
function login () {
  client.login(process.env.BHAVA_TOKEN)
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
  })
}

// RUN
registerCommands()
login()
