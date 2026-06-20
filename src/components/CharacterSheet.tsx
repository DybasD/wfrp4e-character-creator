import { CHARACTERISTIC_NAMES, CHARACTERISTIC_LABELS } from '../game/characteristics'
import type { Characteristics } from '../game/characteristics'
import type { Species } from './SpeciesSelector'
import type { Career } from '../game/careers'
import './CharacterSheet.css'

interface CharacterSheetProps {
  species: Species
  characteristics: Characteristics
  career: Career
}

function CharacterSheet({ species, characteristics, career }: CharacterSheetProps) {
  return (
    <section className="character-sheet">
      <h2>Character Sheet</h2>

      <div className="sheet-content">
        <div className="sheet-header">
          <div className="sheet-field">
            <span className="field-label">Species</span>
            <span className="field-value">{species}</span>
          </div>
          <div className="sheet-field">
            <span className="field-label">Career</span>
            <span className="field-value">{career.name}</span>
          </div>
          <div className="sheet-field">
            <span className="field-label">Class</span>
            <span className="field-value">{career.class}</span>
          </div>
        </div>

        <h3>Characteristics</h3>
        <table className="sheet-stats">
          <thead>
            <tr>
              {CHARACTERISTIC_NAMES.map((name) => (
                <th key={name} title={CHARACTERISTIC_LABELS[name]}>
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {CHARACTERISTIC_NAMES.map((name) => (
                <td key={name}>{characteristics[name]}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default CharacterSheet