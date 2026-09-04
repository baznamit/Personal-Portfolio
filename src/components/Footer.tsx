import type { ReactNode } from 'react'

type FooterLink = {
  label: string
  href: string
  icon: ReactNode
}

type FooterProps = {
  footerLinks: FooterLink[]
}

const Footer = ({ footerLinks }: FooterProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="v3-footer section-padding">
      <div className="container-max v3-footer-inner">
        <div>
          <strong>Namit Pratap Singh</strong>
          <p>Backend engineer focused on Java services, event pipelines, and production reliability.</p>
        </div>

        <div className="v3-footer-links">
          {footerLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </div>

        <p className="v3-footer-note">© {currentYear} Crafted with React, TypeScript, and a systems-thinking design language.</p>
      </div>
    </footer>
  )
}

export default Footer