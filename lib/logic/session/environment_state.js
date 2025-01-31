import { CoalMine } from '../environment/mines/coal_mine'
import { IronMine } from '../environment/mines/iron_mine'
import { StoneMine } from '../environment/mines/stone_mine'
import { WoodMine } from '../environment/mines/wood_mine'
import { BanditGang } from '../environment/bandit_gang'
import { LocationModel } from '../../location/location_model'
import { EnemyBase } from '../environment/enemy_base'
import { ResourceGroup } from '../resources/resource_group'
import { createDefaultBase } from './default_base'
import { createId } from '../../functions/id_generator'
import { randomFloat } from '../../functions/random'
import { objectMap } from '../../functions/object_functions'

export class EnvironmentState {
  mines
  enemies
  banditGangs

  constructor() {}

  toObject() {
    return {
      mines: objectMap(this.mines, (m) => m.toObject()),
      enemies: objectMap(this.enemies, (m) => m.toObject()),
      banditGangs: objectMap(this.banditGangs, (m) => m.toObject()),
    }
  }

  loadRandom(centerLocation) {
    this.mines = this.#loadRandomMines(centerLocation)
    this.enemies = this.#loadRandomEnemies(centerLocation)
    this.banditGangs = this.#loadRandomBanditGangs(centerLocation)
  }

  #loadRandomMines(centerLocation) {
    const mines = {}
    const coalMine = new CoalMine(
      createId(),
      this.#randomLocation(centerLocation),
      50
    )
    const ironMine = new IronMine(
      createId(),
      this.#randomLocation(centerLocation),
      50
    )
    const stoneMine = new StoneMine(
      createId(),
      this.#randomLocation(centerLocation),
      50
    )
    const woodMine = new WoodMine(
      createId(),
      this.#randomLocation(centerLocation),
      50
    )

    mines[coalMine.id] = coalMine
    mines[ironMine.id] = ironMine
    mines[stoneMine.id] = stoneMine
    mines[woodMine.id] = woodMine

    return mines
  }

  #loadRandomEnemies(centerLocation) {
    const enemies = {}
    const id = createId()
    const enemy1 = new EnemyBase(
      id,
      this.#randomLocation(centerLocation),
      createDefaultBase,
      (id, centerLocation)
    )
    enemies[enemy1.id] = enemy1
    return enemies
  }

  #loadRandomBanditGangs(centerLocation) {
    const banditGangs = {}

    const loot = {}
    loot['resourceGroup'] = new ResourceGroup({
      coalAmount: 3,
      stoneAmount: 5,
      woodAmount: 7,
      ironAmount: 2,
      rareItems: [],
      steelAmount: 8,
      foodAmount: 7,
    })

    const banditGang1 = new BanditGang(
      createId(),
      this.#randomLocation(centerLocation),
      25,
      loot
    )

    const banditGang2 = new BanditGang(
      createId(),
      this.#randomLocation(centerLocation),
      10,
      loot
    )

    banditGangs[banditGang1.id] = banditGang1
    banditGangs[banditGang2.id] = banditGang2

    return banditGangs
  }

  #randomLocation(centerLocation) {
    const maxKm = 0.7
    const maxRadius = maxKm / 111 // Distance of 1 latitude is 111km
    const a = randomFloat(0, 2 * Math.PI)
    const r = randomFloat(maxRadius * 0.4, maxRadius)

    const long = centerLocation.long + Math.cos(a) * r
    const lat = centerLocation.lat + Math.sin(a) * r
    return new LocationModel(lat, long)
  }
}
