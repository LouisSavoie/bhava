import dedent from 'dedent'
import { map } from '../../modules/rpg/map.js'
import { checks } from '../../modules/checks.js'
import { stringify } from '../../modules/stringify.js'

export const look = {
  name: 'look',
  description: '(RPG) Describes what you see around you'
}

export const lookRes = {
  async execute (interaction) {
    const user = await checks.spawnCheck(interaction)
    if (!user) { return }

    const zone = await checks.createZoneCheck(interaction, map[user.char.zone])
    if (!zone) { return }

    await interaction.reply({
      ephemeral: true,
      content: dedent(`
      The ${zone.displayName} ${!zone.resources.length ? 'is void of resources' : 'contains sources of ' + stringify.arrayAsList(zone.resources)}
      It ${!zone.monsters.length ? 'is under no threat from monsters' : 'is overrun with ' + stringify.arrayAsList(zone.monsters)}
      ${!zone.inventory.length ? 'There is nothing' : 'There is ' + stringify.arrayAsList(zone.inventory)} on the ground here
      `)
    })
  }
}
