import { userChecks } from '../modules/userChecks.js'

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
    const user = await userChecks.createMentionedUserCheck(interaction)
    if (!user) { return }

    await interaction.reply(`@${nickname} created`)
  }
}
