import { zones } from '../../modules/rpg/map.js'
import { checks } from '../../modules/checks.js'
import { responses } from '../../modules/responses.js'

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

    if (zone) { responses.zoneInfo(interaction, zone); return }

    const zoneExists = zones[interaction.options.get('zone').value.toLowerCase()]

    if (zoneExists) { responses.zoneUnexplored(interaction); return }

    responses.zoneDoesNotExist(interaction)
  }
}
