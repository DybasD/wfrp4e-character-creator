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

function roll2d10Plus20(): number {
  return rollD10() + rollD10() + 20
}

export function rollCharacteristics(): Characteristics {
  const result = {} as Characteristics
  for (const name of CHARACTERISTIC_NAMES) {
    result[name] = roll2d10Plus20()
  }
  return result
}