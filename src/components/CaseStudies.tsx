import { motion } from 'framer-motion'
import { studyTabIcon } from '../data/portfolio'
import type { CaseStudy } from '../data/portfolio'

type CaseStudiesProps = {
  studies: CaseStudy[]
  activeStudyId: string
  onStudySelect: (studyId: string) => void
}

const CaseStudies = ({ studies, activeStudyId, onStudySelect }: CaseStudiesProps) => {
  const activeStudy = studies.find((study) => study.id === activeStudyId) ?? studies[0]

  return (
    <section id="case-studies" className="v3-section section-padding">
      <div className="container-max">
        <div className="v3-section-head">
          <p>Selected Work</p>
          <h2>Case studies built around reliability outcomes</h2>
        </div>

        <div className="v3-studies">
          <div className="v3-study-list">
            {studies.map((study) => (
              <button
                type="button"
                key={study.id}
                className={`v3-study-tab ${activeStudyId === study.id ? 'is-active' : ''}`}
                onClick={() => onStudySelect(study.id)}
              >
                {studyTabIcon}
                {study.title}
              </button>
            ))}
          </div>

          <motion.article
            key={activeStudy.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            className="v3-study-panel"
          >
            <h3>{activeStudy.title}</h3>

            <div className="v3-proof-grid">
              <div className="v3-proof-card">
                <span>Role</span>
                <p>{activeStudy.role}</p>
              </div>
              <div className="v3-proof-card">
                <span>Scope</span>
                <p>{activeStudy.scope}</p>
              </div>
              <div className="v3-proof-card">
                <span>Architecture</span>
                <p>{activeStudy.architecture}</p>
              </div>
              <div className="v3-proof-card">
                <span>Impact</span>
                <p>{activeStudy.outcome}</p>
              </div>
            </div>

            <p>
              <strong>Challenge:</strong> {activeStudy.challenge}
            </p>
            <p>
              <strong>Decision:</strong> {activeStudy.decision}
            </p>

            <div className="v3-proof-list" aria-label="Verification points">
              {activeStudy.proofPoints.map((item) => (
                <span key={item} className="v3-proof-item">
                  {item}
                </span>
              ))}
            </div>

            <div className="v3-tag-wrap">
              {activeStudy.tags.map((tag) => (
                <span key={tag} className="v3-pill">
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies