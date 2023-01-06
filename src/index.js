import { ping, pingRes } from './commands/ping.js'
import { bloodmoon, bloodmoonRes } from './commands/bloodmoon.js'
import { newThingRes } from './commands/newThing.js'
import { newUser, newUserRes } from './commands/newUser.js'
import { char, charRes } from './commands/rpg/char.js'
import { charName, charNameRes } from './commands/rpg/charName.js'
import { move, moveRes } from './commands/rpg/move.js'
import { zone, zoneRes } from './commands/rpg/zone.js'
import { spawn, spawnRes } from './commands/rpg/spawn.js'
import { look, lookRes } from './commands/rpg/look.js'
import { feedback, feedbackRes } from './commands/feedback.js'

export const devServerCommands = [
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
  look
]

export const globalCommands = [
  ping,
  feedback,
  bloodmoon
]

export const responses = {
  ping: pingRes,
  feedback: feedbackRes,
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
