import dedent from 'dedent'
import { db } from '../../modules/database.js'
import { map } from '../../modules/rpg/map.js'
import { userChecks } from '../../modules/userChecks.js'

export const look = {
  name: 'look',
  description: '(RPG) Describes what you see around you'
}

export const lookRes = {
  async execute (interaction) {
    const user = await userChecks.spawnCheck(interaction)
    if (!user) { return }

    const foundZone = await db.findOneZone(interaction, map[user.char.zone])

    if (foundZone === 'error') {
      await interaction.reply({
        ephemeral: true,
        content: 'A database error occured, please try again later'
      })
      return
    }

    await interaction.reply({
      ephemeral: true,
      content: dedent(`
      The ${foundZone.displayName} ${!foundZone.resources.length ? 'is void of resources' : 'contains sources of ' + foundZone.resources}
      It ${!foundZone.monsters.length ? 'is under no threat from monsters' : 'is overrun with ' + foundZone.monsters}
      ${!foundZone.inventory.length ? 'There is nothing' : 'There is ' + foundZone.inventory} on the ground here
      `)
    })
  }
}
