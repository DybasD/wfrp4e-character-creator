import {
  CHARACTERISTIC_NAMES,
  CHARACTERISTIC_LABELS,
  type Characteristics,
} from '../game/characteristics'
import './StatRoller.css'

interface StatRollerProps {
  characteristics: Characteristics | null
  onRoll: () => void
}

function StatRoller({ characteristics, onRoll }: StatRollerProps) {
  return (
    <section className="stat-roller">
      <h2>Characteristics</h2>

      <button className="roll-button" onClick={onRoll}>
        {characteristics ? 'Re-Roll Stats' : 'Roll Stats'}
      </button>

      {characteristics && (
        <table className="stats-table">
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
      )}
    </section>
  )
}

export default StatRoller