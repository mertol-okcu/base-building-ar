import { CoalMine } from "../environment/mines/coal_mine";
import { IronMine } from "../environment/mines/iron_mine";
import { StoneMine } from "../environment/mines/stone_mine";
import { WoodMine } from "../environment/mines/wood_mine";
import { BanditGang } from "../environment/bandit_gang";
import { createId } from "../functions/id_generator";
import { Location } from "../../location/location_model";
import { EnemyBase } from "../environment/enemy_base";
import { ResourceGroup } from "../resources/resource_group";
import { createDefaultBase } from "./default_base";

export class EnvironmentState {
  mines;
  enemies;
  banditGangs;

  constructor() {}

  loadRandom(centerLocation) {
    this.banditGangs = this.#loadRandomBanditGangs(centerLocation);
    this.enemies = this.#loadRandomEnemies(centerLocation);
    this.mines = this.#loadRandomMines(centerLocation);
  }

  #loadRandomMines(centerLocation) {
    const mines = {};
    const coalMine = new CoalMine(
      createId(),
      this.#randomLocation(centerLocation),
      50
    );
    const ironMine = new IronMine(
      createId(),
      this.#randomLocation(centerLocation),
      50
    );
    const stoneMine = new StoneMine(
      createId(),
      this.#randomLocation(centerLocation),
      50
    );
    const woodMine = new WoodMine(
      createId(),
      this.#randomLocation(centerLocation),
      50
    );

    mines[coalMine.id] = coalMine;
    mines[ironMine.id] = ironMine;
    mines[stoneMine.id] = stoneMine;
    mines[woodMine.id] = woodMine;

    this.mines = mines;
  }

  #loadRandomEnemies(centerLocation) {
    const enemies = {};
    const enemy1 = new EnemyBase(
      createId(),
      this.#randomLocation(centerLocation),
      createDefaultBase(centerLocation)
    );
    enemies[enemy1.id] = enemy1;
    this.enemies = enemies;
  }

  #loadRandomBanditGangs(centerLocation) {
    const banditGangs = {};

    const loot = {};
    loot["resources"] = new ResourceGroup({
      coalAmount: 3,
      stoneAmount: 5,
      woodAmount: 7,
      ironAmount: 2,
      rareItems: [],
      steelAmount: 8,
      foodAmount: 7,
    });

    // const cannon = new Cannon(createId());
    // const ladder = new Ladder(createId());
    // const tools = {};

    // tools[cannon.id] = cannon;
    // tools[ladder.id] = ladder;

    // loot["tools"] = tools;

    const banditGang1 = new BanditGang(
      createId(),
      this.#randomLocation(centerLocation),
      25,
      loot
    );

    const banditGang2 = new BanditGang(
      createId(),
      this.#randomLocation(centerLocation),
      10,
      loot
    );

    banditGangs[banditGang1.id] = banditGang1;
    banditGangs[banditGang2.id] = banditGang2;

    this.banditGangs = banditGangs;
  }

  #randomLocation(centerLocation) {
    const maxRadius = 0.01;
    const a = Math.random() * 2 * Math.PI;
    const r = Math.random() * maxRadius;

    const long = centerLocation.long + Math.cos(a) * r;
    const lat = centerLocation.lat + Math.sin(a) * r;
    return new Location(lat, long);
  }
}
