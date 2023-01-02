import { Zone } from '../../classes/zone.js'

export const map = {
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
    return new Zone(zones[zoneName].displayName, zones[zoneName].resources)
  },
  forest: { displayName: 'Forest', resources: ['wood'] },
  swamp: { displayName: 'Swamp', resources: ['reeds'] },
  field: { displayName: 'Field', resources: [] },
  mountain: { displayName: 'Mountain', resources: ['stone'] },
  lake: { displayName: 'Lake', resources: [] }
}
