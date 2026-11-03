import { type MouseEvent, useEffect, useRef, useState } from 'react'
import { flushSync } from 'react-dom'
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
  const isThemeTransitioning = useRef(false)
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

  const toggleTheme = (event: MouseEvent<HTMLButtonElement>) => {
    if (isThemeTransitioning.current) return

    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    const updateTheme = () => {
      flushSync(() => setPreference(nextTheme))
      try {
        localStorage.setItem('portfolio-theme', nextTheme)
      } catch {
        return
      }
    }
    const transitionDocument = document as Document & {
      startViewTransition?: (update: () => void) => { finished: Promise<void> }
    }

    if (!transitionDocument.startViewTransition || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      updateTheme()
      return
    }

    const bounds = event.currentTarget.getBoundingClientRect()
    const originX = bounds.left + bounds.width / 2
    const originY = bounds.top + bounds.height / 2
    const radius = Math.hypot(Math.max(originX, innerWidth - originX), Math.max(originY, innerHeight - originY))
    const root = document.documentElement
    root.style.setProperty('--theme-origin-x', `${originX}px`)
    root.style.setProperty('--theme-origin-y', `${originY}px`)
    root.style.setProperty('--theme-reveal-radius', `${radius}px`)
    root.classList.add('theme-transition')
    isThemeTransitioning.current = true

    const finishTransition = () => {
      root.classList.remove('theme-transition')
      root.style.removeProperty('--theme-origin-x')
      root.style.removeProperty('--theme-origin-y')
      root.style.removeProperty('--theme-reveal-radius')
      isThemeTransitioning.current = false
    }

    try {
      const transition = transitionDocument.startViewTransition(updateTheme)
      void transition.finished.then(finishTransition, finishTransition)
    } catch {
      finishTransition()
      updateTheme()
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
          Namit Singh<span className="v3-brand-mark" aria-hidden="true">.</span>
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