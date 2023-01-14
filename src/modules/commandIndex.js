import { ping, pingRes } from '../commands/ping.js'
import { bloodmoon, bloodmoonRes } from '../commands/bloodmoon.js'
import { newThingRes } from '../commands/newThing.js'
import { newUser, newUserRes } from '../commands/newUser.js'
import { char, charRes } from '../commands/rpg/char.js'
import { charName, charNameRes } from '../commands/rpg/charName.js'
import { move, moveRes } from '../commands/rpg/move.js'
import { zone, zoneRes } from '../commands/rpg/zone.js'
import { spawn, spawnRes } from '../commands/rpg/spawn.js'
import { look, lookRes } from '../commands/rpg/look.js'
import { feedback, feedbackRes } from '../commands/feedback.js'
import { testMessage, testMessageRes } from '../commands/testMessage.js'
import { help, helpRes } from '../commands/help.js'

export const devServerCommands = [
  help,
  ping,
  feedback,
  testMessage,
  bloodmoon,
  newUser,
  char,
  charName,
  move,
  zone,
  spawn,
  look
]

export const testServerCommands = [
  newUser,
  char,
  charName,
  move,
  zone,
  spawn,
  look,
  testMessage
]

export const globalCommands = [
  help,
  ping,
  feedback,
  bloodmoon,
  newUser,
  char,
  charName,
  move,
  zone,
  spawn,
  look
]

export const responses = {
  help: helpRes,
  ping: pingRes,
  feedback: feedbackRes,
  testmessage: testMessageRes,
  bloodmoon: bloodmoonRes,
  newthing: newThingRes,
  newuser: newUserRes,
  char: charRes,
  charname: charNameRes,
  move: moveRes,
  zone: zoneRes,
  spawn: spawnRes,
  look: lookRes
}
