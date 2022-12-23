import { ping, pingRes } from './commands/ping.js'
import { bloodmoon, bloodmoonRes } from './commands/bloodmoon.js'

export const testServerCommands = [

]

export const globalCommands = [
  ping,
  bloodmoon
]

export const responses = {
  ping: pingRes,
  bloodmoon: bloodmoonRes
}
