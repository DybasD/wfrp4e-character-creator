import { describe, it, expect } from 'vitest'
import { getCareersForSpecies, SAMPLE_CAREERS } from './careers'

describe('getCareersForSpecies', () => {
  it('returns only careers available to the given species', () => {
    const dwarfCareers = getCareersForSpecies('Dwarf')

    for (const career of dwarfCareers) {
      expect(career.species).toContain('Dwarf')
    }
  })

  it('includes Troll Slayer for Dwarf but not Human', () => {
    const dwarfCareers = getCareersForSpecies('Dwarf')
    const humanCareers = getCareersForSpecies('Human')

    const dwarfNames = dwarfCareers.map((c) => c.name)
    const humanNames = humanCareers.map((c) => c.name)

    expect(dwarfNames).toContain('Troll Slayer')
    expect(humanNames).not.toContain('Troll Slayer')
  })

  it('returns fewer careers for Dwarf than for Human', () => {
    const dwarfCareers = getCareersForSpecies('Dwarf')
    const humanCareers = getCareersForSpecies('Human')

    expect(humanCareers.length).toBeGreaterThan(dwarfCareers.length)
  })

  it('every career has a name, class, and species list', () => {
    for (const career of SAMPLE_CAREERS) {
      expect(career.name).toBeTruthy()
      expect(career.class).toBeTruthy()
      expect(career.species.length).toBeGreaterThan(0)
    }
  })
})