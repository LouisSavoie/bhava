export const ping = {
  async execute (interaction) {
    const username = interaction.member.user.username
    const guildname = interaction.member.guild.name
    const guildid = interaction.member.guild.id

    console.log(`${username} on ${guildname} (${guildid}) used (/) command ping`)

    await interaction.reply('Pong!')
  }
}