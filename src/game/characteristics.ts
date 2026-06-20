import type { Species } from '../components/SpeciesSelector'
import { getSpeciesModifier } from './speciesData'

export const CHARACTERISTIC_NAMES = [
  'WS', 'BS', 'S', 'T', 'I', 'Agi', 'Dex', 'Int', 'WP', 'Fel'
] as const

export type CharacteristicName = typeof CHARACTERISTIC_NAMES[number]

export const CHARACTERISTIC_LABELS: Record<CharacteristicName, string> = {
  WS:  'Weapon Skill',
  BS:  'Ballistic Skill',
  S:   'Strength',
  T:   'Toughness',
  I:   'Initiative',
  Agi: 'Agility',
  Dex: 'Dexterity',
  Int: 'Intelligence',
  WP:  'Willpower',
  Fel: 'Fellowship',
}

export type Characteristics = Record<CharacteristicName, number>

function rollD10(): number {
  return Math.floor(Math.random() * 10) + 1
}

export function rollCharacteristics(species: Species): Characteristics {
  const result = {} as Characteristics
  for (const name of CHARACTERISTIC_NAMES) {
    const modifier = getSpeciesModifier(species, name)
    result[name] = rollD10() + rollD10() + modifier
  }
  return result
}