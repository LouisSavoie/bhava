export const bloodmoon = {
  name: 'bloodmoon',
  description: 'Calculates when the next blood moon will rise in 7 Days to Die',
  options: [
    {
      name: 'day',
      description: 'The day number on your server',
      type: 4,
      required: true
    }
  ]
}

export const bloodmoonRes = {
  async execute (interaction) {
    const day = interaction.options.get('day').value

    if (day < 1) {
      await interaction.reply(`Why is your server on day ${day}?`)
      return
    }

    const nextBloodmoon = Math.ceil(day / 7) * 7
    const daysRemaining = nextBloodmoon - day
    const bloodmoonNumber = Math.ceil(day / 7)

    if (!daysRemaining) {
      await interaction.reply(`Blood moon number ${bloodmoonNumber} tonight, HOLD ON TO YOUR BUTTS!`)
      return
    }
    const s = daysRemaining === 1 ? '' : 's'
    await interaction.reply(`Blood moon number ${bloodmoonNumber} in ${daysRemaining} day${s}, on day ${nextBloodmoon}`)
  }
}
