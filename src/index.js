import { ping, pingRes } from './commands/ping.js'
import { bloodmoon, bloodmoonRes } from './commands/bloodmoon.js'
import { newThing, newThingRes } from './commands/newThing.js'

export const testServerCommands = [

]

export const globalCommands = [
  ping,
  bloodmoon,
  newThing
]

export const responses = {
  ping: pingRes,
  bloodmoon: bloodmoonRes,
  newthing: newThingRes
}
