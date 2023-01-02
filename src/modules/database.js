import { Thing } from '../models/thing.js'
import { User } from '../models/user.js'
import { Zone } from '../models/rpg/zone.js'
import { log } from './log.js'
import { zones } from './rpg/map.js'

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

db.findOneUser = async (userID) => {
  try {
    const foundUser = await User.findOne({
      id: userID
    })
    log.foundUser(foundUser)
    return foundUser
  } catch (error) {
    console.log(error)
    return 'error'
  }
}

// RPG
db.newZone = async (interaction, zoneName) => {
  const zone = zones.getZone(zoneName)
  try {
    const newZone = await Zone.create({
      serverID: interaction.member.guild.id,
      displayName: zone.displayName,
      name: zone.name,
      resources: zone.resources,
      inventory: zone.inventory,
      monsters: zone.monsters
    })
    log.newZone(newZone)
    return newZone
  } catch (error) {
    console.log(error)
    return null
  }
}

db.findOneZone = async (interaction, zoneName) => {
  try {
    const foundZone = await Zone.findOne({
      serverID: interaction.member.guild.id,
      name: zoneName
    })
    log.foundZone(foundZone)
    return foundZone
  } catch (error) {
    console.log(error)
    return 'error'
  }
}
