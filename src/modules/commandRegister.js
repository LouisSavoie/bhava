import { REST, Routes } from 'discord.js'
import { globalCommands, testServerCommands, devServerCommands } from './commandIndex.js'
import { log } from './log.js'
import { variables } from './variables.js'

const { TOKEN, APPID, SERVERID } = variables()

const rest = new REST({ version: '10' }).setToken(TOKEN)

export async function registerCommands () {
  if (process.argv[2] === 'dev') {
    // register dev server commands
    try {
      log.registerCommands('Registering', 'dev server')
      await rest.put(Routes.applicationGuildCommands(APPID, SERVERID), { body: devServerCommands })
      log.registerCommands('Successfully registered', 'dev server')
    } catch (error) {
      console.error(error)
    }
    return
  }

  if (process.argv[2] === 'test') {
    // register test server commands
    try {
      log.registerCommands('Registering', 'test server')
      await rest.put(Routes.applicationGuildCommands(APPID, SERVERID), { body: testServerCommands })
      log.registerCommands('Successfully registered', 'test server')
    } catch (error) {
      console.error(error)
    }
    return
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
