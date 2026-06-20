import type { Species } from '../components/SpeciesSelector'

export interface Career {
  name: string
  class: string
  species: readonly Species[]
}

export const SAMPLE_CAREERS: Career[] = [
  { name: 'Soldier',       class: 'Warrior',  species: ['Human', 'Dwarf'] },
  { name: 'Rat Catcher',   class: 'Ranger',   species: ['Human', 'Halfling'] },
  { name: 'Wizard',        class: 'Academic',  species: ['Human', 'Elf'] },
  { name: 'Thief',         class: 'Rogue',     species: ['Human', 'Halfling', 'Elf'] },
  { name: 'Troll Slayer',  class: 'Warrior',   species: ['Dwarf'] },
  { name: 'Apothecary',    class: 'Academic',  species: ['Human', 'Dwarf', 'Halfling'] },
  { name: 'Scout',         class: 'Ranger',    species: ['Human', 'Elf', 'Dwarf'] },
  { name: 'Entertainer',   class: 'Rogue',     species: ['Human', 'Halfling', 'Elf', 'Dwarf'] },
  { name: 'Bounty Hunter', class: 'Ranger',    species: ['Human', 'Dwarf', 'Elf'] },
  { name: 'Herbalist',     class: 'Academic',  species: ['Human', 'Halfling', 'Elf'] },
  { name: 'Pit Fighter',   class: 'Warrior',   species: ['Human', 'Dwarf', 'Halfling'] },
  { name: 'Charlatan',     class: 'Rogue',     species: ['Human', 'Halfling'] },
]

export function getCareersForSpecies(species: Species): Career[] {
  return SAMPLE_CAREERS.filter((career) => career.species.includes(species))
}