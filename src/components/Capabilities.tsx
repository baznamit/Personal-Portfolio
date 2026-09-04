import { motion } from 'framer-motion'
import { capabilityProofIcon } from '../data/portfolio'
import type { CapabilityCell } from '../data/portfolio'

type CapabilitiesProps = {
  capabilityGrid: CapabilityCell[]
  activeCapabilityId: number
  onCapabilitySelect: (index: number) => void
}

const Capabilities = ({ capabilityGrid, activeCapabilityId, onCapabilitySelect }: CapabilitiesProps) => {
  const activeCapability = capabilityGrid[activeCapabilityId] ?? capabilityGrid[0]

  return (
    <section id="capabilities" className="v3-section section-padding">
      <div className="container-max">
        <div className="v3-section-head">
          <p>Capability Matrix</p>
          <h2>Proof-first mapping of engineering strengths</h2>
        </div>

        <div className="v3-capabilities">
          <div className="v3-grid">
            {capabilityGrid.map((item, index) => (
              <button
                key={`${item.pillar}-${item.area}`}
                type="button"
                className={`v3-grid-cell ${activeCapabilityId === index ? 'is-active' : ''}`}
                onClick={() => onCapabilitySelect(index)}
              >
                <p>{item.pillar}</p>
                <h3>{item.area}</h3>
              </button>
            ))}
          </div>

          <motion.div
            key={`${activeCapability.pillar}-${activeCapability.area}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="v3-proof"
          >
            {capabilityProofIcon}
            <p>{activeCapability.proof}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Capabilities