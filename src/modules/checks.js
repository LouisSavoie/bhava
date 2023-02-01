import { db } from './database.js'
import { responses } from './responses.js'

export const
  checks = {}

checks.spawnCheck = async (interaction) => {
  // check if user exists
  let user = await db.findOneUser(interaction.user.id)

  // if not create it
  if (!user) {
    user = await db.newUser(interaction.user)
  }

  // check for DB errors
  if (user === 'error') { responses.dbError(interaction); return false }

  // check if char is at spawn
  if (user.char.zone === 101) { responses.notSpawned(interaction); return false }

  return user
}

checks.userCheck = async (interaction) => {
  // check if user exists
  let user = await db.findOneUser(interaction.user.id)

  // if not create it
  if (!user) {
    user = await db.newUser(interaction.user)
  }

  // check for DB errors
  if (user === 'error') { responses.dbError(interaction); return false }

  return user
}

checks.mentionedUserCheck = async (interaction) => {
  // check if user exists
  let user = await db.findOneUser(interaction.options.get('user').value)

  // if not create it
  if (!user) {
    user = await db.newUser(interaction.options.get('user').user)
  }

  // check for DB errors
  if (user === 'error') { responses.dbError(interaction); return false }

  return user
}

checks.createMentionedUserCheck = async (interaction) => {
  // check if user exists
  let user = await db.findOneUser(interaction.options.get('user').value)

  // check for DB errors
  if (user === 'error') { responses.dbError(interaction); return false }

  if (user) { responses.userAlreadyExists(interaction); return false }

  // if not create it
  if (!user) {
    user = await db.newUser(interaction.options.get('user').user)
  }

  return user
}

checks.createZoneCheck = async (interaction, zoneName) => {
  // check if zone exists
  let zone = await db.findOneZone(interaction, zoneName)

  // if not create it
  if (!zone) {
    zone = await db.newZone(interaction, zoneName)
  }

  // check for DB errors
  if (zone === 'error') { responses.dbError(interaction); return false }

  return zone
}

checks.zoneCheck = async (interaction, zoneName) => {
  // check if zone exists
  const zone = await db.findOneZone(interaction, zoneName)

  // check for DB errors
  if (zone === 'error') { responses.dbError(interaction); return false }

  return zone
}
