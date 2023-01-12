import { db } from '../../modules/database.js'
import { map, zones } from '../../modules/rpg/map.js'
import { checks } from '../../modules/checks.js'

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

    const zone = zones[map[user.char.zone]]

    if (!zone) {
      await interaction.reply({
        ephemeral: true,
        content: 'There is nothing of interest in that direction'
      })
      return
    }

    user.save()

    const foundZone = await db.findOneZone(interaction, map[user.char.zone])

    if (!foundZone) {
      await db.newZone(interaction, map[user.char.zone])
    }

    await interaction.reply({
      ephemeral: true,
      content: `${user.char.name} went ${direction} to the ${zone.displayName}`
    })
  }
}
