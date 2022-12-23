import { REST, Routes } from 'discord.js'
import { globalCommands, testServerCommands } from './index.js'
import * as dotenv from 'dotenv'
dotenv.config()

const rest = new REST({ version: '10' }).setToken(process.env.BHAVA_TOKEN)

export async function registerCommands () {
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
