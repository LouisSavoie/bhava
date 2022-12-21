// IMPORTS
import * as dotenv from 'dotenv'
import { Client } from 'discord.js'

// CONFIG ENV VARS
dotenv.config()

const client = new Client({ intents: ['Guilds', "GuildMessages"] })

//  LOGIN
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

// LOGIN
client.login(process.env.BHAVA_TOKEN)
