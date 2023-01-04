import { db } from '../modules/database.js'

export const newUser = {
  name: 'newuser',
  description: 'Creates a new User',
  options: [
    {
      name: 'user',
      description: '@name of the User',
      type: 9,
      required: true
    }
  ]
}

export const newUserRes = {
  async execute (interaction) {
    const alreadyExists = await db.findOneUser(interaction.options.get('user').value)
    const nickname = interaction.options.get('user').member.nickname ? interaction.options.get('user').member.nickname : interaction.options.get('user').user.username

    if (alreadyExists) {
      await interaction.reply({
        ephemeral: true,
        content: `@${nickname} already exists`
      })
      return
    }

    if (alreadyExists === 'error') {
      await interaction.reply({
        ephemeral: true,
        content: `An error occured and @${nickname} was not created`
      })
      return
    }

    const res = await db.newUser(interaction)

    if (!res) {
      await interaction.reply({
        ephemeral: true,
        content: `An error occured and @${nickname} was not created`
      })
      return
    }

    await interaction.reply(`@${nickname} created`)
  }
}
