import type { Career } from '../game/careers'
import './CareerSelector.css'

interface CareerSelectorProps {
  careers: Career[]
  selected: Career | null
  onSelect: (career: Career) => void
}

function CareerSelector({ careers, selected, onSelect }: CareerSelectorProps) {
  return (
    <section className="career-selector">
      <h2>Choose Your Career</h2>

      <div className="career-list">
        {careers.map((career) => (
          <button
            key={career.name}
            className={`career-card ${selected?.name === career.name ? 'selected' : ''}`}
            onClick={() => onSelect(career)}
          >
            <span className="career-name">{career.name}</span>
            <span className="career-class">{career.class}</span>
          </button>
        ))}
      </div>

      {selected && (
        <p className="career-chosen">
          Career: <strong>{selected.name}</strong> ({selected.class})
        </p>
      )}
    </section>
  )
}

export default CareerSelector