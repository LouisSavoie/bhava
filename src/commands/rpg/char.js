import { map, zones } from '../../modules/rpg/map.js'
import { checks } from '../../modules/checks.js'
import dedent from 'dedent'
import { responses } from '../../modules/responses.js'

export const char = {
  name: 'char',
  description: '(RPG) Displays character info',
  options: [
    {
      name: 'user',
      description: '@name of the characters User',
      type: 9,
      required: true
    }
  ]
}

export const charRes = {
  async execute (interaction) {
    const user = await checks.spawnCheck(interaction)
    if (!user) { return }

    const mentionedUser = await checks.mentionedUserCheck(interaction)
    if (!mentionedUser) { return }

    if (mentionedUser.id === user.id) { responses.charInfo(interaction, mentionedUser); return }

    responses.charInfoVague(interaction, mentionedUser)
  }
}
