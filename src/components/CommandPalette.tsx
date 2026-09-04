import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Radar, X } from 'lucide-react'
import type { CommandItem } from '../data/portfolio'

type CommandPaletteProps = {
  isOpen: boolean
  commandItems: CommandItem[]
  onClose: () => void
}

const CommandPalette = ({ isOpen, commandItems, onClose }: CommandPaletteProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="v3-command-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="v3-command-panel"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="v3-command-head">
              <div className="v3-command-headline">
                <Radar size={18} />
                <p>Quick Actions</p>
              </div>
              <button type="button" className="v3-command-close" onClick={onClose} aria-label="Close quick actions">
                <X size={16} />
              </button>
            </div>

            <p className="v3-command-hint">Useful recruiter actions, one click away.</p>

            {commandItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="v3-command-link"
              >
                {item.icon}
                <span>{item.label}</span>
                <ArrowRight size={15} />
              </a>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CommandPalette