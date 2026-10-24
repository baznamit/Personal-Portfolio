import { ArrowUpRight, FileText, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

type ContactProps = {
  resumeUrl: string
  emailUrl: string
  linkedInUrl: string
  githubUrl: string
}

const Contact = ({ resumeUrl, emailUrl, linkedInUrl, githubUrl }: ContactProps) => {
  return (
    <section id="contact" className="v3-contact section-padding" aria-labelledby="contact-heading">
      <div className="container-max v3-contact-inner">
        <div className="v3-contact-copy">
          <p className="v3-contact-status"><span aria-hidden="true" />Open to opportunities</p>
          <h2 id="contact-heading">Let's work together.</h2>
          <ul className="v3-contact-roles" aria-label="Roles of interest">
            <li>Software Engineer <span>SDE 1 / SDE 2</span></li>
            <li>Java Full Stack Developer</li>
          </ul>
          <p className="v3-contact-description">
            Building with Java and Spring, from thoughtful APIs to reliable systems.
            Let's talk about what your team is working on.
          </p>
        </div>

        <div className="v3-contact-actions">
          <h3>Have a role in mind?</h3>
          <p>I'd love to hear about it.</p>
          <a href={emailUrl} className="v3-btn v3-btn-primary">
            <Mail size={18} aria-hidden="true" />
            Email Me
            <ArrowUpRight size={18} className="v3-contact-arrow" aria-hidden="true" />
          </a>
          <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="v3-btn v3-btn-ghost">
            <FileText size={18} aria-hidden="true" />
            View Resume
            <ArrowUpRight size={18} className="v3-contact-arrow" aria-hidden="true" />
          </a>
          <div className="v3-contact-socials">
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <Linkedin size={16} aria-hidden="true" />LinkedIn
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <Github size={16} aria-hidden="true" />GitHub
            </a>
          </div>
        </div>

        <div className="v3-contact-details">
          <span><MapPin size={16} aria-hidden="true" />Mumbai, India</span>
          <a href="tel:+919353845652"><Phone size={16} aria-hidden="true" />+91 93538 45652</a>
        </div>
      </div>
    </section>
  )
}

export default Contact