import { checks } from '../../modules/checks.js'

export const charName = {
  name: 'charname',
  description: '(RPG) Changes your character\'s name',
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
    const user = await checks.userCheck(interaction)
    if (!user) { return }

    user.char.name = interaction.options.get('name').value
    user.save()

    await interaction.reply({
      ephemeral: true,
      content: `Name changed to ${user.char.name}`
    })
  }
}
