import { type ReactNode, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Activity,
  ArrowRight,
  BellRing,
  BrainCircuit,
  CheckCircle2,
  Command,
  Cpu,
  Database,
  ExternalLink,
  GitBranch,
  Github,
  Mail,
  Radar,
  ShieldCheck,
} from 'lucide-react'

type FlowNode = {
  id: string
  title: string
  x: number
  y: number
  detail: string
  stack: string[]
  icon: ReactNode
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

type FlowEdge = {
  id: string
  from: string
  to: string
  label: string
  color: string
}

type FlowMode = 'normal' | 'peak' | 'incident'

const flowNodes: FlowNode[] = [
  {
    id: 'gateway',
    title: 'Release API',
    x: 21,
    y: 24,
    detail: 'Entry API for Greenlight release-governance workflows with secure request handling and validations.',
    stack: ['Java 17', 'Spring Boot 3.4', 'JWT'],
    icon: <ShieldCheck size={13} />,
  },
  {
    id: 'orders',
    title: 'Rule Engine',
    x: 46,
    y: 20,
    detail: 'Concurrent processing engine for quality-gate decisions across 1,000+ user stories.',
    stack: ['ExecutorService', 'AtomicInteger', 'Concurrency'],
    icon: <BrainCircuit size={13} />,
  },
  {
    id: 'events',
    title: 'Event Aggregator',
    x: 69,
    y: 47,
    detail: 'Asynchronous event intake that consolidates multi-team notification traffic into actionable payloads.',
    stack: ['Apache Kafka', 'Redis Streams', 'Threshold Rules'],
    icon: <BellRing size={13} />,
  },
  {
    id: 'inventory',
    title: 'Redis Buffer',
    x: 34,
    y: 67,
    detail: 'Stateful buffering layer for validated events to minimize redundant downstream notifications.',
    stack: ['Redis Streams', 'State Tracking', 'Deduplication'],
    icon: <Database size={13} />,
  },
  {
    id: 'observability',
    title: 'Telemetry',
    x: 84,
    y: 14,
    detail: 'Cross-service metrics and traces to monitor quality-gate throughput and release health.',
    stack: ['Prometheus', 'Grafana', 'OpenTelemetry'],
    icon: <Activity size={13} />,
  },
]

const edges: FlowEdge[] = [
  { id: 'e1', from: 'gateway', to: 'orders', label: 'Release request', color: '#6fd8cf' },
  { id: 'e2', from: 'orders', to: 'events', label: 'Kafka publish', color: '#f2a65a' },
  { id: 'e3', from: 'orders', to: 'inventory', label: 'Validated buffer', color: '#8edca0' },
  { id: 'e4', from: 'orders', to: 'observability', label: 'Telemetry stream', color: '#9ec8ff' },
]

const swimlanes = [
  { id: 'l1', label: 'Entry', y: 9 },
  { id: 'l2', label: 'Validation Core', y: 30 },
  { id: 'l3', label: 'Event Delivery', y: 51 },
  { id: 'l4', label: 'Platform Signals', y: 72 },
]

const flowModes: Record<FlowMode, { speed: number; note: string }> = {
  normal: {
    speed: 1,
    note: 'Normal traffic profile with balanced throughput across services.',
  },
  peak: {
    speed: 0.68,
    note: 'Peak mode simulates burst traffic with faster event movement.',
  },
  incident: {
    speed: 1.25,
    note: 'Incident mode highlights degraded path behavior and slower flow.',
  },
}

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
  const [flowMode, setFlowMode] = useState<FlowMode>('normal')
  const [activeEdgeId, setActiveEdgeId] = useState(edges[0].id)

  const activeNode = useMemo(
    () => flowNodes.find((node) => node.id === activeNodeId) ?? flowNodes[0],
    [activeNodeId],
  )

  const activeStudy = useMemo(
    () => studies.find((study) => study.id === activeStudyId) ?? studies[0],
    [activeStudyId],
  )

  const activeCapability = capabilityGrid[activeCapabilityId] ?? capabilityGrid[0]
  const activeEdge = edges.find((edge) => edge.id === activeEdgeId) ?? edges[0]
  const modeConfig = flowModes[flowMode]

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
              <div className="v3-flow-toolbar">
                <div className="v3-flow-mode-group" role="tablist" aria-label="Flow mode selector">
                  {(['normal', 'peak', 'incident'] as FlowMode[]).map((mode) => (
                    <button
                      type="button"
                      key={mode}
                      className={`v3-flow-mode ${flowMode === mode ? 'is-active' : ''}`}
                      onClick={() => setFlowMode(mode)}
                    >
                      {mode}
                    </button>
                  ))}
                </div>
                <p>{modeConfig.note}</p>
              </div>

              <div className="v3-system-grid">
                {swimlanes.map((lane) => (
                  <div key={lane.id} className="v3-lane" style={{ top: `${lane.y}%` }}>
                    <span>{lane.label}</span>
                  </div>
                ))}

                <svg className="v3-edge" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <defs>
                    <marker id="flow-arrow" viewBox="0 0 10 10" refX="8.2" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse">
                      <path d="M 0 0 L 10 5 L 0 10 z" fill="#8fd3ca" />
                    </marker>
                  </defs>
                  {edges.map((edge, index) => {
                    const start = flowNodes.find((node) => node.id === edge.from)
                    const end = flowNodes.find((node) => node.id === edge.to)

                    if (!start || !end) {
                      return null
                    }

                    const dx = end.x - start.x
                    const c1x = start.x + dx * 0.34
                    const c2x = start.x + dx * 0.72
                    const c1y = start.y + (start.y < end.y ? 0 : -5)
                    const c2y = end.y + (start.y < end.y ? -6 : 0)
                    const pathId = `flow-path-${edge.id}`

                    return (
                      <g key={edge.id}>
                        <path
                          id={pathId}
                          d={`M ${start.x} ${start.y} C ${c1x} ${c1y}, ${c2x} ${c2y}, ${end.x} ${end.y}`}
                          stroke={flowMode === 'incident' ? '#f2a65a' : edge.color}
                          strokeWidth={flowMode === 'peak' ? '1' : '0.8'}
                          strokeDasharray="2.2 2.2"
                          strokeLinecap="round"
                          markerEnd="url(#flow-arrow)"
                          opacity={activeEdgeId === edge.id ? 1 : 0.6}
                          className="v3-edge-path"
                          onMouseEnter={() => setActiveEdgeId(edge.id)}
                          style={{ pointerEvents: 'stroke' }}
                          fill="none"
                        />
                        <circle r="0.9" fill="#d6fff5" opacity="0.95">
                          <animateMotion
                            dur={`${(2.4 + index * 0.45) * modeConfig.speed}s`}
                            repeatCount="indefinite"
                            rotate="auto"
                          >
                            <mpath href={`#${pathId}`} />
                          </animateMotion>
                        </circle>
                      </g>
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
                    <i>{node.icon}</i>
                    <span>{node.title}</span>
                  </button>
                ))}
              </div>

              <div className="v3-system-mobile" aria-label="Architecture map for mobile screens">
                {flowNodes.map((node) => (
                  <button
                    type="button"
                    key={`mobile-${node.id}`}
                    className={`v3-mobile-node ${activeNodeId === node.id ? 'is-active' : ''}`}
                    onClick={() => setActiveNodeId(node.id)}
                  >
                    <i>{node.icon}</i>
                    <strong>{node.title}</strong>
                    <span>{node.stack[0]}</span>
                  </button>
                ))}

                <div className="v3-mobile-flow-list">
                  {edges.map((edge) => {
                    const fromNode = flowNodes.find((node) => node.id === edge.from)
                    const toNode = flowNodes.find((node) => node.id === edge.to)
                    if (!fromNode || !toNode) {
                      return null
                    }

                    return (
                      <p key={`mobile-edge-${edge.id}`}>
                        {fromNode.title} {'->'} {toNode.title} | {edge.label}
                      </p>
                    )
                  })}
                </div>
              </div>

              <div className="v3-node-panel">
                <h3>{activeNode.title}</h3>
                <p>{activeNode.detail}</p>
                <p className="v3-edge-note">
                  Active Flow: <strong>{activeEdge.label}</strong>
                </p>
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