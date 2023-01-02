import { db } from '../modules/database.js'

export const charName = {
  name: 'charname',
  description: 'Changes your character\'s name',
  options: [
    {
      name: 'name',
      description: 'New character name',
      type: 3,
      required: true
    }
  ]
}

export const charNameRes = {
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

    foundUser.char.name = interaction.options.get('name').value
    foundUser.save()

    await interaction.reply(`Name changed to ${foundUser.char.name}`)
  }
}
