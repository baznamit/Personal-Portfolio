import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowRight,
  CheckCircle2,
  Command,
  Cpu,
  ExternalLink,
  GitBranch,
  Github,
  Mail,
  Radar,
  Server,
} from 'lucide-react'

type FlowNode = {
  id: string
  title: string
  x: number
  y: number
  detail: string
  stack: string[]
}

type CaseStudy = {
  id: string
  title: string
  challenge: string
  decision: string
  outcome: string
  tags: string[]
}

type CapabilityCell = {
  pillar: string
  area: string
  proof: string
}

const flowNodes: FlowNode[] = [
  {
    id: 'gateway',
    title: 'API Gateway',
    x: 16,
    y: 24,
    detail: 'Unified entrypoint with auth checks, routing rules, and observability hooks.',
    stack: ['Spring Cloud Gateway', 'JWT', 'Rate Limiting'],
  },
  {
    id: 'orders',
    title: 'Order Service',
    x: 42,
    y: 20,
    detail: 'Core orchestration logic for checkout, idempotency handling, and compensations.',
    stack: ['Spring Boot', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'events',
    title: 'Event Stream',
    x: 69,
    y: 47,
    detail: 'Asynchronous event backbone for inventory, notifications, and analytics pipelines.',
    stack: ['Kafka', 'Schema Registry', 'Retry DLQ'],
  },
  {
    id: 'inventory',
    title: 'Inventory',
    x: 31,
    y: 67,
    detail: 'Reservation-first stock model to prevent over-selling under heavy load.',
    stack: ['Spring Boot', 'Optimistic Locking', 'Redis'],
  },
  {
    id: 'observability',
    title: 'Observability',
    x: 84,
    y: 14,
    detail: 'Metrics, traces, and service-level dashboards connected to release workflows.',
    stack: ['Prometheus', 'Grafana', 'OpenTelemetry'],
  },
]

const edges = [
  ['gateway', 'orders'],
  ['orders', 'events'],
  ['orders', 'inventory'],
  ['orders', 'observability'],
]

const studies: CaseStudy[] = [
  {
    id: 's1',
    title: 'Greenlight Quality Gate Platform (TCS)',
    challenge:
      'Legacy release-governance APIs had long blocking backend cycles, delaying CI/CD decisions across teams.',
    decision:
      'Refactored processing to concurrent execution using Java ExecutorService and AtomicInteger while modernizing the stack to Java 17, Spring Boot 3.4, and React 18.',
    outcome:
      'Reduced end-to-end API response time from around 5 minutes to under 2 seconds while handling 1,000+ user stories concurrently.',
    tags: ['Java 17', 'Spring Boot 3.4', 'Concurrency', 'CI/CD'],
  },
  {
    id: 's2',
    title: 'Event-Driven Notification Aggregation',
    challenge:
      'High-volume notification events from multiple application teams were fragmented and generated redundant user alerts.',
    decision:
      'Engineered a Kafka + Redis Streams pipeline with threshold-based buffering and stateful validation before downstream delivery.',
    outcome:
      'Consolidated raw event noise into delivery-ready payloads, reducing duplicate notifications and preventing user notification fatigue.',
    tags: ['Apache Kafka', 'Redis Streams', 'Event Processing', 'Spring Boot'],
  },
  {
    id: 's3',
    title: 'Event-Driven Media Processing Pipeline',
    challenge:
      'Direct high-resolution image processing during uploads caused timeout risk and poor browser responsiveness.',
    decision:
      'Decoupled ingestion and processing with Kafka + AWS S3, then built async consumers for thumbnail generation, watermarking, and EXIF extraction.',
    outcome:
      'Eliminated heavy processing from the request path and enabled scalable, non-blocking media workflows.',
    tags: ['Kafka', 'AWS S3', 'Spring Boot', 'PostgreSQL'],
  },
]

const capabilityGrid: CapabilityCell[] = [
  {
    pillar: 'Build',
    area: 'Spring + React Delivery',
    proof:
      'Built the Greenlight platform end-to-end with Java 17, Spring Boot 3.4, React 18, Redux Toolkit, and secure JWT request flows.',
  },
  {
    pillar: 'Scale',
    area: 'High Concurrency',
    proof:
      'Cut backend turnaround from around 5 minutes to under 2 seconds for 1,000+ user stories through concurrent execution tuning.',
  },
  {
    pillar: 'Operate',
    area: 'Event Pipelines',
    proof:
      'Designed resilient Kafka and Redis Streams workflows to aggregate high-volume events into actionable downstream payloads.',
  },
  {
    pillar: 'Secure',
    area: 'Quality Gates',
    proof:
      'Built governance-first release validation patterns that enforce CI/CD quality controls for multiple engineering teams.',
  },
]

const timeline = [
  {
    period: '2023',
    title: 'Microservices Foundation',
    text: 'Started building modular services around clean APIs and independent deployments.',
  },
  {
    period: '2024',
    title: 'Async Architecture',
    text: 'Introduced Kafka workflows to separate write pressure from user-facing requests.',
  },
  {
    period: '2025',
    title: 'Observability Maturity',
    text: 'Standardized metrics and traces to support faster incident triage and release safety.',
  },
  {
    period: '2026',
    title: 'Cloud Platform Thinking',
    text: 'Aligned code design with deployment, reliability, and scaling constraints from day one.',
  },
]

const commandItems = [
  {
    id: 'linkedin',
    label: 'Open LinkedIn',
    href: 'https://linkedin.com/in/baznamit',
  },
  {
    id: 'github',
    label: 'Open GitHub',
    href: 'https://github.com/baznamit',
  },
  {
    id: 'resume',
    label: 'Open Resume',
    href: 'https://drive.google.com/file/d/1BRW-zwDK-Ae3H7zJj5xP5XXpeG1QuTQ8/view?usp=drivesdk',
  },
  {
    id: 'email',
    label: 'Email Namit',
    href: 'mailto:namit.singh1269@gmail.com',
  },
]

function App() {
  const [activeNodeId, setActiveNodeId] = useState(flowNodes[0].id)
  const [activeStudyId, setActiveStudyId] = useState(studies[0].id)
  const [activeCapabilityId, setActiveCapabilityId] = useState(0)
  const [isCommandOpen, setIsCommandOpen] = useState(false)

  const activeNode = useMemo(
    () => flowNodes.find((node) => node.id === activeNodeId) ?? flowNodes[0],
    [activeNodeId],
  )

  const activeStudy = useMemo(
    () => studies.find((study) => study.id === activeStudyId) ?? studies[0],
    [activeStudyId],
  )

  const activeCapability = capabilityGrid[activeCapabilityId] ?? capabilityGrid[0]

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setIsCommandOpen((prev) => !prev)
      }
      if (event.key === 'Escape') {
        setIsCommandOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="v3-shell">
      <header className="v3-header">
        <div className="container-max section-padding v3-header-inner">
          <a href="#home" className="v3-brand">
            Namit Singh
          </a>
          <nav className="v3-nav">
            <a href="#case-studies">Case Studies</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#timeline">Timeline</a>
            <a href="#contact">Contact</a>
          </nav>
          <button type="button" className="v3-command" onClick={() => setIsCommandOpen(true)}>
            <Command size={16} />
            <span>Command</span>
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="v3-hero section-padding">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65 }}
              className="v3-hero-copy"
            >
              <p className="v3-kicker">Backend Engineer | Java + Cloud Systems</p>
              <h1>From API design to production reliability, I create backend architectures teams can trust.</h1>
              <p>
                Software Engineer at TCS focused on Java microservices, event-driven pipelines, and
                quality-governed delivery systems used by multiple engineering teams.
              </p>
              <div className="v3-hero-actions">
                <a href="#case-studies" className="v3-btn v3-btn-primary">
                  Explore case studies
                  <ArrowRight size={16} />
                </a>
                <a
                  href="https://linkedin.com/in/baznamit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v3-btn v3-btn-ghost"
                >
                  <ExternalLink size={16} />
                  LinkedIn
                </a>
                <a href="https://github.com/baznamit" target="_blank" rel="noopener noreferrer" className="v3-btn v3-btn-ghost">
                  <Github size={16} />
                  GitHub
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="v3-system-board"
            >
              <div className="v3-system-grid">
                <svg className="v3-edge" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="flow-grad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#26d0ce" />
                      <stop offset="100%" stopColor="#f2a65a" />
                    </linearGradient>
                  </defs>
                  {edges.map(([from, to]) => {
                    const start = flowNodes.find((node) => node.id === from)
                    const end = flowNodes.find((node) => node.id === to)

                    if (!start || !end) {
                      return null
                    }

                    const controlX = (start.x + end.x) / 2
                    const controlY = (start.y + end.y) / 2 - 7

                    return (
                      <path
                        key={`${from}-${to}`}
                        d={`M ${start.x} ${start.y} Q ${controlX} ${controlY} ${end.x} ${end.y}`}
                        stroke="url(#flow-grad)"
                        strokeWidth="0.8"
                        strokeDasharray="2.2 2.2"
                        strokeLinecap="round"
                        fill="none"
                      />
                    )
                  })}
                </svg>

                {flowNodes.map((node) => (
                  <button
                    type="button"
                    key={node.id}
                    className={`v3-node ${activeNodeId === node.id ? 'is-active' : ''}`}
                    style={{ left: `${node.x}%`, top: `${node.y}%` }}
                    onMouseEnter={() => setActiveNodeId(node.id)}
                    onFocus={() => setActiveNodeId(node.id)}
                    onClick={() => setActiveNodeId(node.id)}
                  >
                    <span>{node.title}</span>
                  </button>
                ))}
              </div>

              <div className="v3-node-panel">
                <h3>{activeNode.title}</h3>
                <p>{activeNode.detail}</p>
                <div>
                  {activeNode.stack.map((item) => (
                    <span key={item} className="v3-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

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
                    onClick={() => setActiveStudyId(study.id)}
                  >
                    <GitBranch size={16} />
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
                <p>
                  <strong>Challenge:</strong> {activeStudy.challenge}
                </p>
                <p>
                  <strong>Decision:</strong> {activeStudy.decision}
                </p>
                <p>
                  <strong>Outcome:</strong> {activeStudy.outcome}
                </p>
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

        <section id="capabilities" className="v3-section section-padding">
          <div className="container-max">
            <div className="v3-section-head">
              <p>Capability Matrix</p>
              <h2>Proof-first mapping of engineering strengths</h2>
            </div>

            <div className="v3-capabilities">
              <div className="v3-grid">
                {capabilityGrid.map((item, index) => (
                  <button
                    key={`${item.pillar}-${item.area}`}
                    type="button"
                    className={`v3-grid-cell ${activeCapabilityId === index ? 'is-active' : ''}`}
                    onClick={() => setActiveCapabilityId(index)}
                  >
                    <p>{item.pillar}</p>
                    <h3>{item.area}</h3>
                  </button>
                ))}
              </div>

              <motion.div
                key={`${activeCapability.pillar}-${activeCapability.area}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="v3-proof"
              >
                <CheckCircle2 size={18} />
                <p>{activeCapability.proof}</p>
              </motion.div>
            </div>
          </div>
        </section>

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

        <section id="contact" className="v3-contact section-padding">
          <div className="container-max v3-contact-inner">
            <div>
              <p>Mumbai, India | +91 9353845652 | Open to backend and platform engineering opportunities.</p>
              <h2>Let us build robust systems together.</h2>
            </div>
            <div className="v3-contact-actions">
              <a href="mailto:namit.singh1269@gmail.com" className="v3-btn v3-btn-primary">
                <Mail size={16} />
                Email Me
              </a>
              <a
                href="https://linkedin.com/in/baznamit"
                target="_blank"
                rel="noopener noreferrer"
                className="v3-btn v3-btn-ghost"
              >
                <ExternalLink size={16} />
                LinkedIn
              </a>
              <a
                href="https://github.com/baznamit"
                target="_blank"
                rel="noopener noreferrer"
                className="v3-btn v3-btn-ghost"
              >
                <ExternalLink size={16} />
                Open GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="v3-footer section-padding">
        <div className="container-max">
          <p>
            Crafted with React, TypeScript, and a systems-thinking design language.
          </p>
        </div>
      </footer>

      <AnimatePresence>
        {isCommandOpen && (
          <motion.div
            className="v3-command-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCommandOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="v3-command-panel"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="v3-command-head">
                <Radar size={18} />
                <p>Quick Actions</p>
              </div>
              {commandItems.map((item) => (
                <a key={item.id} href={item.href} target="_blank" rel="noopener noreferrer" className="v3-command-link">
                  <Cpu size={15} />
                  <span>{item.label}</span>
                  <ArrowRight size={15} />
                </a>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App