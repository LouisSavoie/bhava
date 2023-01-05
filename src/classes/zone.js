export class Zone {
  constructor (displayName, resources = [], monsters = []) {
    this.displayName = displayName
    this.name = displayName.toLowerCase()
    this.resources = resources
    this.monsters = monsters
    this.inventory = [] 
  }
}
