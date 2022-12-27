import { REST, Routes } from 'discord.js'
import { globalCommands, testServerCommands } from './index.js'
import { log } from './modules/log.js'
import * as dotenv from 'dotenv'
dotenv.config()

const rest = new REST({ version: '10' }).setToken(process.env.BHAVA_TOKEN)

export async function registerCommands () {
  // register test server commands
  try {
    log.registerCommands('Registering', 'test server')
    await rest.put(Routes.applicationGuildCommands(process.env.BHAVA_APPID, process.env.BHAVA_TESTSERVERID), { body: testServerCommands })
    log.registerCommands('Successfully registered', 'test server')
  } catch (error) {
    console.error(error)
  }
  // register global commands
  try {
    log.registerCommands('Registering', 'global')
    await rest.put(Routes.applicationCommands(process.env.BHAVA_APPID), { body: globalCommands })
    log.registerCommands('Successfully registered', 'global')
  } catch (error) {
    console.error(error)
  }
}
