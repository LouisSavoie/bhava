import dedent from 'dedent'

export const help = {
  name: 'help',
  description: 'Displays useful information to get you started using Bhava'
}

export const helpRes = {
  async execute (interaction) {
    await interaction.reply({
      ephemeral: true,
      content: dedent(`
      Hello, I'm Bhava!
      I can do all sorts of things, but here are a few commands to get you started with my most popular features:

      \`/spawn\` Starts you out on a roleplaying adventure! (RPG)
      More coming soon...

      \`/feedback\` Tell me how I'm doing! Thanks, I appreciate it!
      <https://formsubmit.co/el/dekivo/?subject=Bhava+Feedback>

      To see all of my commands, just type \`/\` in chat then click on my icon on the left side of the popup menu.
      Or you can refer to my README on GitHub:
      <https://github.com/LouisSavoie/bhava/blob/main/README.md>
      `)
    })
  }
}
