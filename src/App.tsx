import { useState } from 'react'
import SpeciesSelector from './components/SpeciesSelector'
import type { Species } from './components/SpeciesSelector'
import StatRoller from './components/StatRoller'
import { rollCharacteristics } from './game/characteristics'
import type { Characteristics } from './game/characteristics'
import './App.css'

function App() {
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null)
  const [characteristics, setCharacteristics] = useState<Characteristics | null>(null)

  const handleRoll = () => {
    setCharacteristics(rollCharacteristics())
  }

  return (
    <div className="app">
      <header>
        <h1>WFRP4e Character Creator</h1>
        <p>Warhammer Fantasy Roleplay 4th Edition</p>
      </header>

      <main>
        <SpeciesSelector
          selected={selectedSpecies}
          onSelect={setSelectedSpecies}
        />

        {selectedSpecies && (
          <StatRoller
            characteristics={characteristics}
            onRoll={handleRoll}
          />
        )}
      </main>
    </div>
  )
}

export default App