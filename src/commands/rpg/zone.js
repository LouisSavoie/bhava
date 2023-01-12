import { db } from '../../modules/database.js'
import { zones } from '../../modules/rpg/map.js'
import { checks } from '../../modules/checks.js'

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

    const foundZone = await db.findOneZone(interaction, interaction.options.get('zone').value.toLowerCase())

    if (foundZone === 'error') {
      await interaction.reply({
        ephemeral: true,
        content: 'A database error occured, please try again later'
      })
      return
    }

    if (foundZone) {
      await interaction.reply({
        ephemeral: true,
        content: `${foundZone.displayName} ${!foundZone.resources.length ? 'is void of resources' : 'contains sources of ' + foundZone.resources} and ${!foundZone.monsters.length ? 'is under no threat from monsters' : 'is overrun with ' + foundZone.monsters}`
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
