import { checks } from '../../modules/checks.js'
import { map } from '../../modules/rpg/map.js'
import { responses } from '../../modules/responses.js'

export const spawn = {
  name: 'spawn',
  description: '(RPG) Displays useful info and teleports your character to the realm'
}

export const spawnRes = {
  async execute (interaction) {
    const user = await checks.userCheck(interaction)
    if (!user) { return }

    if (user.char.zone !== 101) { responses.alreadySpawned(interaction); return }

    responses.spawnInfo(interaction, user)

    user.char.zone = 505

    const zone = await checks.createZoneCheck(interaction, map[user.char.zone])
    if (!zone) { return }

    user.save()
  }
}
