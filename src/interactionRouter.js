// IMPORT RESPONSES
import { pingRes } from './commands/ping.js'
import { bloodmoonRes } from './commands/bloodmoon.js'

export async function routeInteractions (interaction) {
  console.log(`${interaction.member.user.username} on ${interaction.member.guild.name} (${interaction.member.guild.id}) used /${interaction.commandName} ${interaction.options._hoistedOptions.map(o => `${o.name}:${o.value}`)}`)
  switch (interaction.commandName) {
    case 'ping':
      pingRes.execute(interaction); break
    case 'bloodmoon':
      bloodmoonRes.execute(interaction); break
  }
}
