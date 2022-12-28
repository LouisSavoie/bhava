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

// INTERATIONS

log.interaction = (interaction) => {
  console.log(`${timestamp()} "${interaction.member.nickname}"(${interaction.member.user.tag}) on ${interaction.member.guild.name} (${interaction.member.guild.id}) used /${interaction.commandName} ${interaction.options._hoistedOptions.map(o => `${o.name}:${o.value}`)}`)
}

log.interactionComplete = () => {
  console.log(`${timestamp()} Interaction complete`)
}

// DATABASE

log.newThing = (newThing) => {
  console.log(`${timestamp()} New Thing created:\n${newThing}`)
}
