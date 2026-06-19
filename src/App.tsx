import { useState } from 'react'
import SpeciesSelector from './components/SpeciesSelector'
import './App.css'

function App() {
  const [selectedSpecies, setSelectedSpecies] = useState<string | null>(null)

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
      </main>
    </div>
  )
}

export default App