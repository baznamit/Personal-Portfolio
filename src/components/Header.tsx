import { useEffect, useState } from 'react'
import { Command, FileText, Menu, Moon, Sun, X } from 'lucide-react'
import type { NavItem } from '../data/portfolio'

type HeaderProps = {
  navItems: NavItem[]
  resumeUrl: string
  emailUrl: string
  onOpenCommand: () => void
}

const Header = ({ navItems, resumeUrl, emailUrl, onOpenCommand }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [preference, setPreference] = useState<'light' | 'dark' | null>(() => {
    try {
      const saved = localStorage.getItem('portfolio-theme')
      return saved === 'light' || saved === 'dark' ? saved : null
    } catch {
      return null
    }
  })
  const [systemDark, setSystemDark] = useState(() => matchMedia('(prefers-color-scheme: dark)').matches)
  const theme = preference ?? (systemDark ? 'dark' : 'light')
  const themeLabel = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`

  useEffect(() => {
    const media = matchMedia('(prefers-color-scheme: dark)')
    const handleThemeChange = (event: MediaQueryListEvent) => setSystemDark(event.matches)
    const handleStorage = (event: StorageEvent) => {
      if (event.key === 'portfolio-theme' || event.key === null) {
        setPreference(event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : null)
      }
    }
    media.addEventListener('change', handleThemeChange)
    window.addEventListener('storage', handleStorage)
    return () => {
      media.removeEventListener('change', handleThemeChange)
      window.removeEventListener('storage', handleStorage)
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#14171A' : '#F7F8FA')
  }, [theme])

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setPreference(nextTheme)
    try {
      localStorage.setItem('portfolio-theme', nextTheme)
    } catch {
      return
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
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
            <FileText size={15} aria-hidden="true" />
            <span>Resume</span>
          </a>
          <button type="button" className="v3-command" onClick={onOpenCommand} aria-label="Open command palette" title="Open command palette">
            <Command size={16} />
            <span>Command</span>
          </button>
          <button type="button" className="v3-theme-toggle" onClick={toggleTheme} aria-label={themeLabel} title={themeLabel}>
            {theme === 'dark' ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
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