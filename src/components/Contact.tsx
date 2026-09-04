import { ExternalLink, FileText, Github, Mail } from 'lucide-react'

type ContactProps = {
  resumeUrl: string
  emailUrl: string
  linkedInUrl: string
  githubUrl: string
}

const Contact = ({ resumeUrl, emailUrl, linkedInUrl, githubUrl }: ContactProps) => {
  return (
    <section id="contact" className="v3-contact section-padding">
      <div className="container-max v3-contact-inner">
        <div className="v3-contact-copy">
          <p>Mumbai, India | +91 9353845652 | Open to backend and platform engineering opportunities.</p>
          <h2>Available for backend, platform, and reliability-focused engineering roles.</h2>
          <p>
            I work best on Java and Spring systems where API design, event pipelines, operational
            reliability, and performance tuning directly affect business delivery.
          </p>
        </div>

        <div className="v3-contact-actions">
          <a href={emailUrl} className="v3-btn v3-btn-primary">
            <Mail size={16} />
            Email Me
          </a>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="v3-btn v3-btn-ghost">
            <FileText size={16} />
            Resume
          </a>
          <a href={linkedInUrl} target="_blank" rel="noopener noreferrer" className="v3-btn v3-btn-ghost">
            <ExternalLink size={16} />
            LinkedIn
          </a>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="v3-btn v3-btn-ghost">
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact