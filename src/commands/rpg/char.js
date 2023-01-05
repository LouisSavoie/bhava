import { map, zones } from '../../modules/rpg/map.js'
import { userChecks } from '../../modules/userChecks.js'
import dedent from 'dedent'

export const char = {
  name: 'char',
  description: '(RPG) Displays character info',
  options: [
    {
      name: 'user',
      description: '@name of the characters User',
      type: 9,
      required: true
    }
  ]
}

export const charRes = {
  async execute (interaction) {
    const user = await userChecks.spawnCheck(interaction)
    if (!user) { return }

    const mentionedUser = await userChecks.mentionedUserCheck(interaction)
    if (!mentionedUser) { return }

    if (mentionedUser.id === user.id) {
      await interaction.reply({
        ephemeral: true,
        content: dedent(`
        Name: ${mentionedUser.char.name}
        Zone: ${zones[map[mentionedUser.char.zone]].displayName}
        `)
      })
      return
    }

    await interaction.reply({
      ephemeral: true,
      content: `${mentionedUser.char.name} is stronk and stuff (Placeholder vague description)`
    })
  }
}
