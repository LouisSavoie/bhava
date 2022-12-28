import { Thing } from '../models/thing.js'
import { log } from './modules/log.js'

export const db = {}

db.newThing = async (interaction) => {
  try {
    const newThing = await Thing.create({
      serverID: interaction.member.guild.id,
      name: interaction.options.get('name').value
    })
    log.newThing(newThing)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}
