export const combat = {}

const BASEHIT = 50
const HITDIVIDER = 2
const CRITPERCENT = .25
const BASEINITIATIVE = 25
const INITIATIVEDIVIDER = 2

function calcToHit(weaponSkill) {
  const totalHit = 100 - (BASEHIT - Math.floor(weaponSkill / HITDIVIDER) * 100)
  const toCrit = Math.floor(totalHit * CRITPERCENT)
  const toHit = totalHit - toCrit

  return [toHit, toCrit]
}

function calcInitiative(armorSkill, maxArmorValue) {
  const initiative = BASEINITIATIVE + ((Math.floor(armorSkill/INITIATIVEDIVIDER) * 100) - maxArmorValue)
  return initiative
}

function rollHit() {
  return Math.floor(Math.random() * 100) + 1
}
