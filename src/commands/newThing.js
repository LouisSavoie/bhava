import { db } from '../modules/database.js'

export const newThing = {
  name: 'newthing',
  description: 'Creates a new Thing',
  options: [
    {
      name: 'name',
      description: 'The name of the new Thing',
      type: 3,
      required: true
    }
  ]
}

export const newThingRes = {
  async execute (interaction) {
    const alreadyExists = await db.findOneThing(interaction)
    
    if (alreadyExists) {
      await interaction.reply(`${alreadyExists.name} already exists`)
      return
    }

    if (alreadyExists === 'error') {
      await interaction.reply(`An error occured and ${interaction.options.get('name').value} was not created`)
      return
    }

    const res = await db.newThing(interaction)

    if (!res) {
      await interaction.reply(`An error occured and ${interaction.options.get('name').value} was not created`)
      return
    }

    await interaction.reply(`${res.name} created`)
  }
}