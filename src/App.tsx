import { useState } from 'react'
import SpeciesSelector from './components/SpeciesSelector'
import type { Species } from './components/SpeciesSelector'
import StatRoller from './components/StatRoller'
import CareerSelector from './components/CareerSelector'
import { rollCharacteristics } from './game/characteristics'
import type { Characteristics } from './game/characteristics'
import { getCareersForSpecies } from './game/careers'
import type { Career } from './game/careers'
import './App.css'

function App() {
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null)
  const [characteristics, setCharacteristics] = useState<Characteristics | null>(null)
  const [selectedCareer, setSelectedCareer] = useState<Career | null>(null)

  const handleRoll = () => {
    setCharacteristics(rollCharacteristics())
  }

  const handleSpeciesSelect = (species: Species) => {
    setSelectedSpecies(species)
    setSelectedCareer(null)
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
          onSelect={handleSpeciesSelect}
        />

        {selectedSpecies && (
          <StatRoller
            characteristics={characteristics}
            onRoll={handleRoll}
          />
        )}

        {selectedSpecies && characteristics && (
          <CareerSelector
            careers={getCareersForSpecies(selectedSpecies)}
            selected={selectedCareer}
            onSelect={setSelectedCareer}
          />
        )}
      </main>

      <footer>
        <p>WFRP4e Character Creator | Built with React + TypeScript</p>
      </footer>
    </div>
  )
}

export default App