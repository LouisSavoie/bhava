import { Thing } from '../models/thing.js'
import { User } from '../models/user.js'
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

db.newUser = async (interaction) => {
  try {
    const newUser = await User.create({
      id: interaction.options.get('user').value,
      tag: interaction.options.get('user').user.username + '#' + interaction.options.get('user').user.discriminator,
      char: {
        name: interaction.options.get('user').member.nickname
      }
    })
    log.newUser(newUser)
    return newUser
  } catch (error) {
    console.log(error)
    return null
  }
}

db.findOneUser = async (interaction) => {
  try {
    const foundUser = await User.findOne({
      id: interaction.options.get('user').value
    })
    log.foundUser(foundUser)
    return foundUser
  } catch (error) {
    console.log(error)
    return 'error'
  }
}
