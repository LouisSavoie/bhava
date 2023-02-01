import { map, zones } from '../../modules/rpg/map.js'
import { checks } from '../../modules/checks.js'
import { responses } from '../../modules/responses.js'

export const move = {
  name: 'move',
  description: '(RPG) Moves your character',
  options: [
    {
      name: 'direction',
      description: 'The direction to move',
      type: 3,
      required: true,
      choices: [
        { name: 'north', value: 'north' },
        { name: 'east', value: 'east' },
        { name: 'south', value: 'south' },
        { name: 'west', value: 'west' }
      ]
    }
  ]
}

export const moveRes = {
  async execute (interaction) {
    const user = await checks.spawnCheck(interaction)
    if (!user) { return }

    const direction = interaction.options.get('direction').value
    switch (direction) {
      case 'north':
        user.char.zone += 1
        break
      case 'east':
        user.char.zone += 100
        break
      case 'south':
        user.char.zone -= 1
        break
      case 'west':
        user.char.zone -= 100
        break
    }

    const zoneExists = zones[map[user.char.zone]]

    if (!zoneExists) { responses.moveDoesNotExist(interaction); return }

    const zone = await checks.createZoneCheck(interaction, map[user.char.zone])
    if (!zone) { return }

    user.save()

    responses.moved(interaction, direction, zone)
  }
}
