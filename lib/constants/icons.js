import { CoalMine } from '../logic/environment/mines/coal_mine'
import { WoodMine } from '../logic/environment/mines/wood_mine'
import { StoneMine } from '../logic/environment/mines/stone_mine'
import { IronMine } from '../logic/environment/mines/iron_mine'
import { BaseState } from '../logic/session/base_state'
import { EnemyBase } from '../logic/environment/enemy_base'
import { BanditGang } from '../logic/environment/bandit_gang'

export const iconPaths = (name) => {
  switch (name) {
    case CoalMine.name:
      return 'https://firebasestorage.googleapis.com/v0/b/base-building-ar.appspot.com/o/map_icons%2Fcoal.png?alt=media&token=a7359b25-22eb-4a3f-9c3b-4d525dc297df'
    case WoodMine.name:
      return 'https://firebasestorage.googleapis.com/v0/b/base-building-ar.appspot.com/o/map_icons%2Fwood.png?alt=media&token=93451352-2baf-44b1-8979-4f557b00b14c'
    case StoneMine.name:
      return 'https://firebasestorage.googleapis.com/v0/b/base-building-ar.appspot.com/o/map_icons%2Fstone.png?alt=media&token=88f02b05-fc78-457e-994c-6fba87036989'
    case IronMine.name:
      return 'https://firebasestorage.googleapis.com/v0/b/base-building-ar.appspot.com/o/map_icons%2Firon.png?alt=media&token=2b2b3588-b9af-4b02-be0f-74572050e23e'
    case BaseState.name:
      return 'https://firebasestorage.googleapis.com/v0/b/base-building-ar.appspot.com/o/map_icons%2Fcastle.png?alt=media&token=b59a6ebb-84de-488f-8137-2e3298e90f2f'
    case EnemyBase.name:
      return 'https://firebasestorage.googleapis.com/v0/b/base-building-ar.appspot.com/o/map_icons%2Fother_base.png?alt=media&token=1a9b2df0-8108-4063-b4aa-68cf00baa088'
    case BanditGang.name:
      return 'https://firebasestorage.googleapis.com/v0/b/base-building-ar.appspot.com/o/map_icons%2Fbandit.png?alt=media&token=0fd5e252-c970-42da-b2c2-af3a1ea9950a'
    default:
      return 'https://firebasestorage.googleapis.com/v0/b/base-building-ar.appspot.com/o/map_icons%2Fbandit.png?alt=media&token=0fd5e252-c970-42da-b2c2-af3a1ea9950a'
  }

}

export const iconAttributions = {
  'Icons made by Freepik from www.flaticon.com': [
    'caravan',
    'castle',
    'coal',
    'wood',
  ],
  'Icons made by max.icons from www.flaticon.com': [
    'blacksmith',
    'wizard',
    'villager',
    'bandit',
    'money-bag',
  ],
  'Icons made by Smashicons from www.flaticon.com': ['crucible'],
}
