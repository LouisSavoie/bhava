import { db } from '../../modules/database.js'
import { map, zones } from '../../modules/rpg/map.js'

export const move = {
  name: 'move',
  description: 'Moves your character',
  options: [
    {
      name: 'direction',
      description: 'The direction to move',
      type: 3,
      required: true,
      choices: [
        { name: 'North', value: 'north' },
        { name: 'East', value: 'east' },
        { name: 'South', value: 'south' },
        { name: 'West', value: 'west' }
      ]
    }
  ]
}

export const moveRes = {
  async execute (interaction) {
    const foundUser = await db.findOneUser(interaction.user.id)
    const nickname = interaction.member.nickname

    if (!foundUser) {
      await interaction.reply(`@${nickname} does not exist, use \`/newuser @${nickname}\` to add them to the database`)
      return
    }

    if (foundUser === 'error') {
      await interaction.reply(`An error occured and @${nickname} was not found`)
      return
    }

    const direction = interaction.options.get('direction').value
    switch (direction) {
      case 'north':
        foundUser.char.location += 1
        break;
      case 'east':
        foundUser.char.location += 100
        break;
      case 'south':
        foundUser.char.location -= 1
        break;
      case 'west':
        foundUser.char.location -= 100
        break;
    }

    const zone = zones[map[foundUser.char.location]]
    
    if (!zone) {
      await interaction.reply('There is nothing of interest in that direction')
      return
    }

    foundUser.save()

    const foundZone = await db.findOneZone(interaction, map[foundUser.char.location])

    if (!foundZone) {
      await db.newZone(interaction, map[foundUser.char.location])
    }

    await interaction.reply(`${foundUser.char.name} went ${direction} to the ${zone.displayName}`)
  }
}