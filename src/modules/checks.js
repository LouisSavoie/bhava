import { db } from './database.js'

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
  if (user === 'error') {
    await interaction.reply({
      ephemeral: true,
      content: 'A database error occurred, please try again later'
    })
    return false
  }

  // check if char is at spawn
  if (user.char.zone === 101) {
    await interaction.reply({
      ephemeral: true,
      content: 'Please use `/spawn` before using RPG commands to get useful information and enter the realm'
    })
    return false
  }

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
  if (user === 'error') {
    await interaction.reply({
      ephemeral: true,
      content: 'A database error occurred, please try again later'
    })
    return false
  }

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
  if (user === 'error') {
    await interaction.reply({
      ephemeral: true,
      content: 'A database error occurred, please try again later'
    })
    return false
  }

  return user
}

checks.createMentionedUserCheck = async (interaction) => {
  // check if user exists
  let user = await db.findOneUser(interaction.options.get('user').value)

  // check for DB errors
  if (user === 'error') {
    await interaction.reply({
      ephemeral: true,
      content: 'A database error occurred, please try again later'
    })
    return false
  }

  if (user) {
    await interaction.reply({
      ephemeral: true,
      content: 'User already exists'
    })
    return false
  }

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
  if (zone === 'error') {
    await interaction.reply({
      ephemeral: true,
      content: 'A database error occurred, please try again later'
    })
    return false
  }

  return zone
}

checks.zoneCheck = async (interaction, zoneName) => {
  // check if zone exists
  const zone = await db.findOneZone(interaction, zoneName)

  // check for DB errors
  if (zone === 'error') {
    await interaction.reply({
      ephemeral: true,
      content: 'A database error occurred, please try again later'
    })
  }

  return zone
}
