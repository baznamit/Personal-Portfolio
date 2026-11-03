import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
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
          <h2>Engineering work. Measurable outcomes.</h2>
        </div>

        <div className="v3-studies">
          <div className="v3-study-list" role="group" aria-label="Select a case study">
            {studies.map((study) => (
              <button
                type="button"
                key={study.id}
                className={`v3-study-tab ${activeStudyId === study.id ? 'is-active' : ''}`}
                onClick={() => onStudySelect(study.id)}
                aria-pressed={activeStudyId === study.id}
                aria-controls="selected-case-study"
              >
                {studyTabIcon}
                <span>{study.title}</span>
              </button>
            ))}
          </div>

          <motion.article
            key={activeStudy.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
            className="v3-study-panel"
            id="selected-case-study"
            aria-labelledby="selected-study-heading"
          >
            <h3 id="selected-study-heading">{activeStudy.title}</h3>

            <div className="v3-study-outcome">
              <span>Outcome</span>
              <p>{activeStudy.outcome}</p>
            </div>

            <dl className="v3-study-facts">
              <div><dt>My role</dt><dd>{activeStudy.role}</dd></div>
              <div><dt>Scope</dt><dd>{activeStudy.scope}</dd></div>
              <div><dt>Stack</dt><dd>{activeStudy.architecture}</dd></div>
            </dl>

            <div className="v3-study-story">
              <div><h4>The challenge</h4><p>{activeStudy.challenge}</p></div>
              <div><h4>What I changed</h4><p>{activeStudy.decision}</p></div>
            </div>

            <ul className="v3-study-results" aria-label="Project highlights">
              {activeStudy.proofPoints.map((item) => (
                <li key={item}>
                  <CheckCircle2 size={16} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

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