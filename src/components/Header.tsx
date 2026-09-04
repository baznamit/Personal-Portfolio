import { useEffect, useState } from 'react'
import { Command, FileText, Menu, X } from 'lucide-react'
import type { NavItem } from '../data/portfolio'

type HeaderProps = {
  navItems: NavItem[]
  resumeUrl: string
  emailUrl: string
  onOpenCommand: () => void
}

const Header = ({ navItems, resumeUrl, emailUrl, onOpenCommand }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="v3-header">
      <div className="container-max section-padding v3-header-inner">
        <a href="#home" className="v3-brand">
          Namit Singh
        </a>

        <nav className="v3-nav" aria-label="Primary">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="v3-header-actions">
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="v3-header-secondary">
            <FileText size={15} />
            Resume
          </a>
          <button type="button" className="v3-command" onClick={onOpenCommand}>
            <Command size={16} />
            <span>Command</span>
          </button>
          <button
            type="button"
            className="v3-mobile-toggle"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="container-max section-padding v3-mobile-panel">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="v3-mobile-link" onClick={handleMenuLinkClick}>
              {item.label}
            </a>
          ))}
          <div className="v3-mobile-cta-row">
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="v3-btn v3-btn-ghost">
              <FileText size={15} />
              Resume
            </a>
            <a href={emailUrl} className="v3-btn v3-btn-primary">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header