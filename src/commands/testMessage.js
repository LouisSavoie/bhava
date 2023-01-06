import dedent from 'dedent'

export const testMessage = {
  name: 'testmessage',
  description: 'Displays a link to the feedback form'
}

export const testMessageRes = {
  async execute (interaction) {
    await interaction.reply({
      content: dedent(`
      Hello, and welcome to the test!
      (view this again with /testmessage)

      We are testing the first few commands for the new RPG feature.
      Testing points include robustness of commands and database interaction, logging, ease of use and other parts of user experience.
      No formal 'getting started' instructions will be given, as seeing how you get on with it is part of the test.
      Please take note of any behavior you think is unintentional, awkward/feels bad, or that you just don't like, but also the things that you do like.

      Go ahead and try to break as much shit as possible :D

      Feedback form (view again with /feedback):
      <https://formsubmit.co/el/dekivo/?subject=Bhava+Feedback>

      Thanks! I appreciate it!
      `)
    })
  }
}
