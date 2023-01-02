import { db } from '../modules/database.js'

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
    const nickname = interaction.options.get('user').member.nickname

    if (!foundUser) {
      await interaction.reply(`@${nickname} does not exist, use \`/newuser @${nickname}\` to add them to the database`)
      return
    }

    if (foundUser === 'error') {
      await interaction.reply(`An error occured and @${nickname} was not found`)
      return
    }

    await interaction.reply(`${foundUser.char}`)
  }
}