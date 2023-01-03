import { ping, pingRes } from './commands/ping.js'
import { bloodmoon, bloodmoonRes } from './commands/bloodmoon.js'
import { newThing, newThingRes } from './commands/newThing.js'
import { newUser, newUserRes } from './commands/newUser.js'
import { char, charRes } from './commands/rpg/char.js'
import { charName, charNameRes } from './commands/rpg/charName.js'
import { move, moveRes } from './commands/rpg/move.js'

export const testServerCommands = [
  newUser,
  char,
  charName,
  move
]

export const globalCommands = [
  ping,
  bloodmoon,
  newThing
]

export const responses = {
  ping: pingRes,
  bloodmoon: bloodmoonRes,
  newthing: newThingRes,
  newuser: newUserRes,
  char: charRes,
  charname: charNameRes,
  move: moveRes
}
