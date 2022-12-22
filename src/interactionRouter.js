// IMPORT RESPONSES
import { pingRes } from './commands/ping.js'
import { bloodmoonRes } from './commands/bloodmoon.js'

export async function routeInteractions (interaction) {
  switch (interaction.commandName) {
    case 'ping':
      pingRes.execute(interaction); break
    case 'bloodmoon':
      bloodmoonRes.execute(interaction); break
  }
}
