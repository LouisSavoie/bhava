import { Zone } from '../../classes/zone.js'

export const map = {
  101: 'spawn',
  405: 'forest',
  504: 'swamp',
  505: 'field',
  506: 'mountain',
  605: 'lake'
}

/*
            N = +1(Y)
W = -100(X)           E = +100(X)
            S = -1(Y)
*/

export const zones = {
  getZone: function (zoneName) {
    return new Zone(zones[zoneName].displayName, zones[zoneName].resources, zones[zoneName].monsters)
  },
  spawn: { displayName: 'Spawn Island' },
  forest: { displayName: 'Forest', resources: ['wood', 'branch'], monsters: ['troll'] },
  swamp: { displayName: 'Swamp', resources: ['reeds', 'mud'], monsters: ['ooze'] },
  field: { displayName: 'Field', resources: [], monsters: ['rat', 'rabbit'] },
  mountain: { displayName: 'Mountain', resources: ['stone'], monsters: ['giant'] },
  lake: { displayName: 'Lake', resources: ['water'], monsters: ['serpents'] }
}
