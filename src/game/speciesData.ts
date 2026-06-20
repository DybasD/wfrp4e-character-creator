import type { Species } from '../components/SpeciesSelector'
import type { Characteristics, CharacteristicName } from './characteristics'

type SpeciesModifiers = Record<Species, Characteristics>

const ALL_20: Characteristics = {
  WS: 20, BS: 20, S: 20, T: 20, I: 20,
  Agi: 20, Dex: 20, Int: 20, WP: 20, Fel: 20,
}

const DEFAULT_MODIFIERS: SpeciesModifiers = {
  Human:    { ...ALL_20 },
  Dwarf:    { ...ALL_20 },
  Elf:      { ...ALL_20 },
  Halfling: { ...ALL_20 },
}

let speciesModifiers: SpeciesModifiers = DEFAULT_MODIFIERS

try {
  const localData = await import('@data/species.json')
  speciesModifiers = localData.default as SpeciesModifiers
} catch {
  // No local data file — using defaults
}

export function getSpeciesModifier(species: Species, characteristic: CharacteristicName): number {
  return speciesModifiers[species][characteristic]
}
