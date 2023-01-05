import { db } from '../../modules/database.js'
import { userChecks } from '../../modules/userChecks.js'
import { map } from '../../modules/rpg/map.js'
import dedent from 'dedent'

export const spawn = {
  name: 'spawn',
  description: '(RPG) Displays useful info and teleports your character to the realm'
}

export const spawnRes = {
  async execute (interaction) {
    const user = await userChecks.userCheck(interaction)
    if (!user) { return }

    if (user.char.zone !== 101) {
      await interaction.reply({
        ephemeral: true,
        content: 'You have already spawned. Trying to get a free teleport? Cheeky bugger...'
      })
      return
    }

    await interaction.reply({
      ephemeral: true,
      content: dedent(`
      Welcome to the Bhava RPG, ${user.char.name}!
      Use \`/charname\` to rename yourself.
      If you need to know what else you can do,
      Type \`/\` then click on Bhava's icon on the left menu to see all the commands,
      RPG commands will be tagged as (RPG) in the command description.
      or you can refer to the README on GitHub:
      <https://github.com/LouisSavoie/bhava/blob/main/README.md>

      Teleporting you to the realm... Good luck and have fun!
      `)
    })

    user.char.zone = 505
    user.save()

    // check if starting zone exists (first first player per server)
    const foundZone = await db.findOneZone(interaction, map[user.char.zone])

    if (!foundZone) {
      await db.newZone(interaction, map[user.char.zone])
    }
  }
}
