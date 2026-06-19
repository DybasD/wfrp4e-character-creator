import { useState } from "react"
import './SpeciesSelector.css'

const SPECIES = ['Human', 'Dwarf', 'Elf', 'Halfling'] as const

type Species = typeof SPECIES[number]

interface SpeciesSelectorProps {
    onSelect: (species: Species) => void
    selected: Species | null
}

function SpeciesSelector({ onSelect, selected }: SpeciesSelectorProps) {
    return (
        <section className="species-selector">
            <h2>Choose Your Species</h2>
            <div className="species-grid">
                {SPECIES.map((species) => (
                    <button
                        key={species}
                        className={`species-card ${selected === species ? 'selected' : ''}`}
                        onClick={() => onSelect(species)}
                    >
                        {species}
                    </button>
                ))}
            </div>
            {selected && (
                <p className="spiecies-chosen">
                    Selected: <strong>{selected}</strong>
                </p>
                        )}
        </section>
    )
}

export default SpeciesSelector