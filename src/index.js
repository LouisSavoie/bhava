import { ping, pingRes } from './commands/ping.js'
import { bloodmoon, bloodmoonRes } from './commands/bloodmoon.js'
import { newThing, newThingRes } from './commands/newThing.js'
import { newUser, newUserRes } from './commands/newUser.js'
import { char, charRes } from './commands/char.js'

export const testServerCommands = [
  newUser,
  char
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
  char: charRes
}
