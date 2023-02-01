import dedent from 'dedent'
import { stringify } from './stringify.js'

export const responses = {}

async function respond(interaction, response) {
  try {
    await interaction.reply(response)
  } catch (error) {
    console.log(error)
  }
}

/* ====================
   ======= RPG ========
   ==================== */

// spawn
responses.alreadySpawned = (interaction) => {
  respond(interaction, {
    ephemeral: true,
    content: 'You have already spawned. Trying to get a free teleport? Cheeky bugger...'
  })
}

responses.spawnInfo = (interaction, user) => {
  respond(interaction, {
    ephemeral: true,
    content: dedent(`
    Welcome to the Bhava RPG, ${user.char.name}!
    Use \`/charname\` to rename yourself.
    If you need to know what else you can do,
    Type \`/\` then click on Bhava's icon on the left menu to see all the commands,
    RPG commands will be tagged as (RPG) in the command description.
    or you can refer to the README on GitHub:
    <https://github.com/LouisSavoie/bhava/blob/main/README.md>

    Teleporting you to the realm... Good luck and have fun!
    `)
  })
}

// character
responses.charRenamed = (interaction, user) => {
  respond(interaction, {
    ephemeral: true,
    content: `Name changed to ${user.char.name}`
  })
}

responses.charInfo = (interaction, mentionedUser) => {
  respond(interaction, {
    ephemeral: true,
    content: dedent(`
    Name: ${mentionedUser.char.name}
    Zone: ${zones[map[mentionedUser.char.zone]].displayName}
    `)
  })
}

responses.charInfoVague = (interaction, mentionedUser) => {
  respond(interaction, {
    ephemeral: true,
    content: `${mentionedUser.char.name} is stronk and stuff (Placeholder vague description)`
  })
}

// zone
responses.zoneInfo = (interaction, zone, lookFlag = false) => {
  const lookContent = dedent(`
  ${!zone.inventory.length ? 'There is nothing' : 'There is ' + stringify.arrayAsList(zone.inventory)} on the ground here
  `)
  respond(interaction, {
    ephemeral: true,
    content: dedent(`
    The ${zone.displayName} ${!zone.resources.length ? 'is void of resources' : 'contains sources of ' + stringify.arrayAsList(zone.resources)}
    It ${!zone.monsters.length ? 'is under no threat from monsters' : 'is overrun with ' + stringify.arrayAsList(zone.monsters)}
    ${lookFlag ? lookContent : ''}
    `)
  })
}

responses.zoneUnexplored = (interaction) => {
  respond(interaction, {
    ephemeral: true,
    content: 'That zone is unexplored'
  })
}

responses.zoneDoesNotExist = (interaction) => {
  respond(interaction, {
    ephemeral: true,
    content: 'That zone does not exist or it is spelled wrong'
  })
}

// movement
responses.moveDoesNotExist = (interaction) => {
  respond(interaction, {
    ephemeral: true,
    content: 'There is nothing of interest in that direction'
  })
}

responses.moved = (interaction, direction, zone) => {
  respond(interaction, {
    ephemeral: true,
    content: `You went ${direction} to the ${zone.displayName}`
  })
}
