import { zones } from '../../modules/rpg/map.js'
import { checks } from '../../modules/checks.js'
import { stringify } from '../../modules/stringify.js'

export const zone = {
  name: 'zone',
  description: '(RPG) Displays zone info',
  options: [
    {
      name: 'zone',
      description: 'Name of the zone',
      type: 3,
      required: true
    }
  ]
}

export const zoneRes = {
  async execute (interaction) {
    const user = await checks.spawnCheck(interaction)
    if (!user) { return }

    const zone = await checks.zoneCheck(interaction, interaction.options.get('zone').value.toLowerCase())
    if (zone === 'error') { return }

    if (zone) {
      await interaction.reply({
        ephemeral: true,
        content: `${zone.displayName} ${!zone.resources.length ? 'is void of resources' : 'contains sources of ' + stringify.arrayAsList(zone.resources)} and ${!zone.monsters.length ? 'is under no threat from monsters' : 'is overrun with ' + stringify.arrayAsList(zone.monsters)}`
      })
      return
    }

    const zoneExists = zones[interaction.options.get('zone').value.toLowerCase()]

    if (zoneExists) {
      await interaction.reply({
        ephemeral: true,
        content: 'That zone is unexplored'
      })
      return
    }

    await interaction.reply({
      ephemeral: true,
      content: 'That zone does not exist or it is spelled wrong'
    })
  }
}
