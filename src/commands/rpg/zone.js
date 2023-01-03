import { db } from '../../modules/database.js'
import { zones } from "../../modules/rpg/map.js";

export const zone = {
  name: 'zone',
  description: 'Displays zone info',
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
    const foundZone = await db.findOneZone(interaction, interaction.options.get('zone').value.toLowerCase())

    if (foundZone) {
      await interaction.reply(`${foundZone.displayName} ${!foundZone.resources.length ? 'is void of resources' : 'contains sources of ' + foundZone.resources} and ${!foundZone.monsters.length ? 'is under no threat from monsters' : 'is overrun with ' + foundZone.monsters}`)
      return
    }

    if (foundZone === 'error') {
      await interaction.reply(`An error occured and ${interaction.options.get('zone').value} was not found`)
      return
    }

    const zoneExists = zones[interaction.options.get('zone').value.toLowerCase()]

    if (zoneExists) {
      await interaction.reply(`That zone is unexplored`)
      return
    }

    await interaction.reply(`That zone does not exist or it is spelled wrong`)
  }
}