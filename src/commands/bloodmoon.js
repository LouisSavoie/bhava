export const bloodmoon = {
  name: 'bloodmoon',
  description: 'Calculates when the next bloodmoon will rise in 7Days2Die',
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
    const username = interaction.member.user.username
    const guildname = interaction.member.guild.name
    const guildid = interaction.member.guild.id

    const day = interaction.options.get('day').value

    console.log(`${username} on ${guildname} (${guildid}) used /bloodmoon day:${day}`)

    if (day < 1) {
      await interaction.reply(`Why is your server on day ${day}?`)
      return
    }

    const til = 7 - (day - (Math.floor(day / 7) * 7))
    const onDay = day + til

    if (til === 7) {
      await interaction.reply('Bloodmoon tonight, hold on to your butts!')
    } else if (til === 1) {
      await interaction.reply(`Next bloodmoon in ${til} day, on day ${onDay}`)
    } else {
      await interaction.reply(`Next bloodmoon in ${til} days, on day ${onDay}`)
    }
  }
}
