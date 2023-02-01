import { map } from '../../modules/rpg/map.js'
import { checks } from '../../modules/checks.js'
import { responses } from '../../modules/responses.js'

export const look = {
  name: 'look',
  description: '(RPG) Describes what you see around you'
}

export const lookRes = {
  async execute (interaction) {
    const user = await checks.spawnCheck(interaction)
    if (!user) { return }

    const zone = await checks.createZoneCheck(interaction, map[user.char.zone])
    if (!zone) { return }

    responses.zoneInfo(interaction, zone, true)
  }
}
