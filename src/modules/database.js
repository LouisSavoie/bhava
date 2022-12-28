import { Thing } from '../models/thing.js'
import { log } from './log.js'

export const db = {}

db.newThing = async (interaction) => {
  try {
    const newThing = await Thing.create({
      serverID: interaction.member.guild.id,
      name: interaction.options.get('name').value
    })
    log.newThing(newThing)
    return newThing
  } catch (error) {
    console.log(error)
    return null
  }
}

db.findOneThing = async (interaction) => {
  try {
    const foundThing = await Thing.findOne({
      serverID: interaction.member.guild.id,
      name: interaction.options.get('name').value
    })
    log.foundThing(foundThing)
    return foundThing
  } catch (error) {
    console.log(error)
    return 'error'
  }
}
