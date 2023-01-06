import { REST, Routes } from 'discord.js'
import { globalCommands, testServerCommands, devServerCommands } from './index.js'
import { log } from './modules/log.js'
import * as dotenv from 'dotenv'
dotenv.config()


const TOKEN = process.argv[2] === 'test' ? process.env.BHAVATESTER_TOKEN : process.env.BHAVA_TOKEN
const APPID = process.argv[2] === 'test' ? process.env.BHAVATESTER_APPID : process.env.BHAVA_APPID
const DEVSERVERID = process.argv[2] === 'test' ? process.env.BHAVATESTER_DEVSERVERID : process.env.BHAVA_DEVSERVERID
const TESTSERVERID = process.argv[2] === 'test' ? process.env.BHAVATESTER_TESTSERVERID : process.env.BHAVA_TESTSERVERID

const rest = new REST({ version: '10' }).setToken(TOKEN)

export async function registerCommands () {
// register dev server commands
  try {
    log.registerCommands('Registering', 'dev server')
    await rest.put(Routes.applicationGuildCommands(APPID, DEVSERVERID), { body: devServerCommands })
    log.registerCommands('Successfully registered', 'dev server')
  } catch (error) {
    console.error(error)
  }
  // register test server commands
  try {
    log.registerCommands('Registering', 'test server')
    await rest.put(Routes.applicationGuildCommands(APPID, TESTSERVERID), { body: testServerCommands })
    log.registerCommands('Successfully registered', 'test server')
  } catch (error) {
    console.error(error)
  }
  // register global commands
  try {
    log.registerCommands('Registering', 'global')
    await rest.put(Routes.applicationCommands(APPID), { body: globalCommands })
    log.registerCommands('Successfully registered', 'global')
  } catch (error) {
    console.error(error)
  }
}
