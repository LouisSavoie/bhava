import { db } from '../../modules/database.js'
import { map, zones } from '../../modules/rpg/map.js'
import dedent from 'dedent'

export const char = {
  name: 'char',
  description: 'Displays character info',
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
    const foundUser = await db.findOneUser(interaction.options.get('user').value)
    const nickname = interaction.options.get('user').member.nickname ? interaction.options.get('user').member.nickname : interaction.options.get('user').user.username

    if (!foundUser) {
      await interaction.reply({
        ephemeral: true,
        content: `@${nickname} does not exist, use \`/newuser @${nickname}\` to add them to the database`
      })
      return
    }

    if (foundUser === 'error') {
      await interaction.reply({
        ephemeral: true,
        content: `An error occured and @${nickname} was not found`
      })
      return
    }

    if (foundUser.id === interaction.member.id) {
      await interaction.reply({
        ephemeral: true,
        content: dedent(`
        Name: ${foundUser.char.name}
        Zone: ${zones[map[foundUser.char.location]].displayName}
        `)
      })
      return
    }

    await interaction.reply({
      ephemeral: true,
      content: `${foundUser.char.name} is stronk and stuff (Placeholder vague description)`
    })
  }
}
