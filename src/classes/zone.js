export class Zone {
  constructor (displayName, resources) {
    this.displayName = displayName
    this.name = displayName.toLowerCase()
    this.resources = resources
    this.inventory = []
    this.monsters = []
  }
}
