import dedent from 'dedent'

export const feedback = {
  name: 'feedback',
  description: 'Displays a link to the feedback form'
}

export const feedbackRes = {
  async execute (interaction) {
    await interaction.reply({
      ephemeral: true,
      content: dedent(`
      Tell Bhava how he's doing here:
      <https://formsubmit.co/el/dekivo/?subject=Bhava+Feedback>
      Thanks! I appreciate it!
      `)
    })
  }
}
