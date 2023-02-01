export const log = {}

function timestamp () {
  const now = new Date()
  return `${now.toLocaleDateString()} ${now.toLocaleTimeString()}:`
}

// APP

log.registerCommands = (register, commands) => {
  console.log(`${timestamp()} ${register} ${commands} /commands`)
}

log.loggedIn = (tag) => {
  console.log(`${timestamp()} Logged in as ${tag}`)
}

log.mongooseConnected = () => {
  console.log(`${timestamp()} Mongoose connected to MongoDB`)
}

// INTERACTIONS

log.interaction = (interaction) => {
  console.log(`${timestamp()} "${interaction.member.nickname ? interaction.member.nickname : interaction.user.username}"(${interaction.member.user.tag}) on ${interaction.member.guild.name} (${interaction.member.guild.id}) used /${interaction.commandName} ${interaction.options._hoistedOptions.map(o => `${o.name}:${o.value}`)}`)
}

log.interactionComplete = () => {
  console.log(`${timestamp()} Interaction complete`)
}

// DATABASE

log.newThing = (newThing) => {
  console.log(`${timestamp()} New Thing created: ${newThing.name}, server: ${newThing.serverID}`)
}

log.foundThing = (foundThing) => {
  console.log(`${timestamp()} Found Thing: ${foundThing.name}, server: ${foundThing.serverID}`)
}

log.newUser = (newUser) => {
  console.log(`${timestamp()} New User created: ${newUser.tag}`)
}

log.foundUser = (foundUser) => {
  console.log(`${timestamp()} Found User: ${foundUser.tag}`)
}

log.newZone = (newZone) => {
  console.log(`${timestamp()} New Zone created: ${newZone.name}, server: ${newZone.serverID}`)
}

log.foundZone = (foundZone) => {
  console.log(`${timestamp()} Found Zone: ${foundZone.name},  server: ${foundZone.serverID}`)
}

// RESPONSES
log.responseSent = (content) => {
  console.log(`${timestamp()} Response Sent:\n${content}`)
}
