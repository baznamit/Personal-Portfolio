import { motion } from 'framer-motion'
import type { TimelineItem } from '../data/portfolio'

type TimelineProps = {
  timeline: TimelineItem[]
}

const Timeline = ({ timeline }: TimelineProps) => {
  return (
    <section id="timeline" className="v3-section section-padding">
      <div className="container-max">
        <div className="v3-section-head">
          <p>Journey</p>
          <h2>How the engineering lens has evolved</h2>
        </div>

        <div className="v3-timeline">
          {timeline.map((item, index) => (
            <motion.article
              key={item.period}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="v3-time-card"
            >
              <span>{item.period}</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline