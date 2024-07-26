import { Barrack } from '../logic/buildings/barrack'
import { DefenceTower } from '../logic/buildings/defence_tower'
import { Field } from '../logic/buildings/field'
import { Hospital } from '../logic/buildings/hospital'
import { House } from '../logic/buildings/house'
import { Temple } from '../logic/buildings/temple'
import { Chief } from '../logic/citizens/chief'
import { Doctor } from '../logic/citizens/doctor'
import { Melee } from '../logic/citizens/melee'
import { Ranged } from '../logic/citizens/ranged'
import { Trainer } from '../logic/citizens/trainer'
import { Worker } from '../logic/citizens/worker'

export const buildingModelPaths = (name) => {
  switch (name) {
    case Temple.name:
      return 'https://firebasestorage.googleapis.com/v0/b/base-building-ar.appspot.com/o/models%2Fbuildings%2Ftemple.glb?alt=media&token=586164ec-6c2d-40f3-aa7c-351940cee05b'
    case House.name:
      return 'https://firebasestorage.googleapis.com/v0/b/base-building-ar.appspot.com/o/models%2Fbuildings%2Fhouse.glb?alt=media&token=c0cfaaf3-8085-4791-ada1-4b9a62d3bd5e'
    case Barrack.name:
      return 'https://firebasestorage.googleapis.com/v0/b/base-building-ar.appspot.com/o/models%2Fbuildings%2Fbarrack.glb?alt=media&token=607549a8-ec5f-4fc3-8659-7f6a0a52bb0e'
    case Field.name:
      return 'https://firebasestorage.googleapis.com/v0/b/base-building-ar.appspot.com/o/models%2Fbuildings%2Ffarm.glb?alt=media&token=b21bcb36-8f55-4f69-9676-14e18f2dbc5a'
    case Hospital.name:
      return 'https://firebasestorage.googleapis.com/v0/b/base-building-ar.appspot.com/o/models%2Fbuildings%2Fhospital.glb?alt=media&token=bdc8aac2-0860-4fab-9980-ca1b8d847c10'
    case DefenceTower.name:
      return 'https://firebasestorage.googleapis.com/v0/b/base-building-ar.appspot.com/o/models%2Fbuildings%2Ftower.glb?alt=media&token=99f1ec91-ce71-4b0a-9c48-63ab7ee2aad5'
    default:
      return 'https://firebasestorage.googleapis.com/v0/b/base-building-ar.appspot.com/o/models%2Fbuildings%2Ftemple.glb?alt=media&token=586164ec-6c2d-40f3-aa7c-351940cee05b'
  }
}

export const citizenModelPaths = (name) => {
  switch (name) {
    case Worker.name:
      return 'https://firebasestorage.googleapis.com/v0/b/base-building-ar.appspot.com/o/models%2Fcitizens%2Fadventurer.glb?alt=media&token=49203e2f-6cf2-4b63-9da2-de10d72820e6'
    case Chief.name:
      return 'https://firebasestorage.googleapis.com/v0/b/base-building-ar.appspot.com/o/models%2Fcitizens%2Fadventurer.glb?alt=media&token=49203e2f-6cf2-4b63-9da2-de10d72820e6'
    case Melee.name:
      return 'https://firebasestorage.googleapis.com/v0/b/base-building-ar.appspot.com/o/models%2Fcitizens%2Fadventurer.glb?alt=media&token=49203e2f-6cf2-4b63-9da2-de10d72820e6'
    case Ranged.name:
      return 'https://firebasestorage.googleapis.com/v0/b/base-building-ar.appspot.com/o/models%2Fcitizens%2Fadventurer.glb?alt=media&token=49203e2f-6cf2-4b63-9da2-de10d72820e6'
    case Doctor.name:
      return 'https://firebasestorage.googleapis.com/v0/b/base-building-ar.appspot.com/o/models%2Fcitizens%2Fadventurer.glb?alt=media&token=49203e2f-6cf2-4b63-9da2-de10d72820e6'
    case Trainer.name:
      return 'https://firebasestorage.googleapis.com/v0/b/base-building-ar.appspot.com/o/models%2Fcitizens%2Fadventurer.glb?alt=media&token=49203e2f-6cf2-4b63-9da2-de10d72820e6'
    default:
      return 'https://firebasestorage.googleapis.com/v0/b/base-building-ar.appspot.com/o/models%2Fcitizens%2Fadventurer.glb?alt=media&token=49203e2f-6cf2-4b63-9da2-de10d72820e6'
  }
}
