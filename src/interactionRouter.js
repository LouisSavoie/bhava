// IMPORT RESPONSES
import { ping } from './responses/ping.js'
import { bloodmoonRes } from './commands/bloodmoon.js'

export async function routeInteractions (interaction) {
  switch (interaction.commandName) {
    case 'ping':
      ping.execute(interaction); break
    case 'bloodmoon':
      bloodmoonRes.execute(interaction); break
  }
}
