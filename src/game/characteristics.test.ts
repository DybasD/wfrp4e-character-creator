import { describe, it, expect } from 'vitest'
import { rollCharacteristics, CHARACTERISTIC_NAMES } from './characteristics'

describe('rollCharacteristics', () => {
  it('returns an object with all 10 characteristics', () => {
    const result = rollCharacteristics('Human')

    for (const name of CHARACTERISTIC_NAMES) {
      expect(result[name]).toBeDefined()
    }
  })

  it('produces values in the valid range for Humans (22-40)', () => {
    for (let i = 0; i < 100; i++) {
      const result = rollCharacteristics('Human')

      for (const name of CHARACTERISTIC_NAMES) {
        expect(result[name]).toBeGreaterThanOrEqual(22)
        expect(result[name]).toBeLessThanOrEqual(40)
      }
    }
  })

  it('produces different results on subsequent rolls', () => {
    const roll1 = rollCharacteristics('Human')
    const roll2 = rollCharacteristics('Human')

    const allSame = CHARACTERISTIC_NAMES.every(
      (name) => roll1[name] === roll2[name]
    )
    expect(allSame).toBe(false)
  })

  it('returns exactly 10 characteristics', () => {
    const result = rollCharacteristics('Human')
    const keys = Object.keys(result)

    expect(keys).toHaveLength(10)
  })
})