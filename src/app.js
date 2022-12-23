import { Client } from 'discord.js'
import { registerCommands } from './commandRegister.js'
import { responses } from './index.js'
import * as dotenv from 'dotenv'
dotenv.config()

const client = new Client({ intents: ['Guilds', 'GuildMessages'] })

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return
  console.log(`${interaction.member.user.username} on ${interaction.member.guild.name} (${interaction.member.guild.id}) used /${interaction.commandName} ${interaction.options._hoistedOptions.map(o => `${o.name}:${o.value}`)}`)
  responses[interaction.commandName].execute(interaction)
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
