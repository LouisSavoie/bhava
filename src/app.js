// IMPORTS
import * as dotenv from 'dotenv'
import { Client, REST, Routes } from 'discord.js'

// IMPORT COMMANDS
import { ping } from './commands/ping.js'

// CONFIG ENV VARS
dotenv.config()

// CONSTRUCT CLIENT AND REST
const client = new Client({ intents: ['Guilds', 'GuildMessages'] })
const rest = new REST({ version: '10' }).setToken(process.env.BHAVA_TOKEN)

// COMMANDS
const testServerCommands = [

]

const globalCommands = [
  ping
]

// INTERACTIONS
client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return

  if (interaction.commandName === 'ping') {
    const username = interaction.member.user.username
    const guildname = interaction.member.guild.name
    const guildid = interaction.member.guild.id
    console.log(`${username} on ${guildname} (${guildid}) used (/) command ping`)
    await interaction.reply('Pong!')
  }
})

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
