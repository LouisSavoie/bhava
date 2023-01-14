export const ping = {
  name: 'ping',
  description: 'Responds with pong if the bot is healthy'
}

export const pingRes = {
  async execute (interaction) {
    await interaction.reply({
      ephemeral: true,
      content: 'Pong!'
    })
  }
}
