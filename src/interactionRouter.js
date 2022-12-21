// IMPORT RESPONSES
import { ping } from './responses/ping.js'

export async function routeInteractions (interaction) {
  switch (interaction.commandName) {
    case 'ping':
      ping.execute(interaction); break
  }
}
