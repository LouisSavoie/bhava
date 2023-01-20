export const combat = {}

function calcToHit(weaponSkill) {
  const BASEHIT = 50
  const HITDIVIDER = 2
  const CRITPERCENT = .25

  const totalHit = 100 - (BASEHIT - Math.floor((weaponSkill / HITDIVIDER) * 100))
  const toCrit = totalHit * CRITPERCENT
  const toHit = totalHit - toCrit

  return [toHit, toCrit]
}
