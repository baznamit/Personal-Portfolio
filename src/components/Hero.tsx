import { motion } from 'framer-motion'
import { ArrowDown, ArrowLeft, ArrowRight, ExternalLink, FileText, Mail } from 'lucide-react'
import type { FlowEdge, FlowNode } from '../data/portfolio'

type HeroProps = {
  flowNodes: FlowNode[]
  edges: FlowEdge[]
  primaryFlowNodeIds: string[]
  activeNodeId: string
  activeEdgeId: string
  heroSignals: string[]
  resumeUrl: string
  emailUrl: string
  linkedInUrl: string
  githubUrl: string
  onNodeSelect: (nodeId: string) => void
  onEdgeSelect: (edgeId: string) => void
}

const Hero = ({
  flowNodes,
  edges,
  primaryFlowNodeIds: _primaryFlowNodeIds,
  activeNodeId,
  activeEdgeId,
  heroSignals,
  resumeUrl,
  emailUrl,
  linkedInUrl,
  githubUrl,
  onNodeSelect,
  onEdgeSelect,
}: HeroProps) => {
  const activeNode = flowNodes.find((node) => node.id === activeNodeId) ?? flowNodes[0]
  const telemetryNode = flowNodes.find((node) => node.id === 'observability') ?? flowNodes[0]

  const getNodeById = (id: string) => flowNodes.find((node) => node.id === id) ?? flowNodes[0]
  const getEdgeById = (id: string) => edges.find((edge) => edge.id === id) ?? edges[0]

  return (
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
            Software Engineer at TCS focused on Java microservices, event-driven pipelines,
            concurrency, and quality-governed delivery systems used by multiple engineering teams.
          </p>

          <div className="v3-signal-row" aria-label="Professional highlights">
            {heroSignals.map((item) => (
              <span key={item} className="v3-signal">
                {item}
              </span>
            ))}
          </div>

          <div className="v3-hero-actions">
            <a href="#case-studies" className="v3-btn v3-btn-primary">
              Explore case studies
              <ArrowRight size={16} />
            </a>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="v3-btn v3-btn-ghost">
              <FileText size={16} />
              Resume
            </a>
            <a href={emailUrl} className="v3-btn v3-btn-ghost">
              <Mail size={16} />
              Email
            </a>
          </div>

          <div className="v3-link-row">
            <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={15} />
              LinkedIn
            </a>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={15} />
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
          <div className="v3-system-intro">
            <div className="v3-system-title-row">
              <div>
                <h3>Architecture spotlight</h3>
                <p>Greenlight release decision pipeline</p>
              </div>

              <span className="v3-system-badge">
                Interactive
              </span>
            </div>
          </div>

          <div className="v3-flow-toolbar">
            <p>
              Select a component to explore its responsibility,
              implementation and engineering impact.
            </p>
          </div>

          <div
            className="v3-architecture"
            aria-label="Interactive Greenlight system architecture"
          >
            <div className="v3-flow-grid">
              <button
                type="button"
                className={`v3-arch-node v3-node-api ${
                  activeNodeId === 'gateway' ? 'is-active' : ''
                }`}
                onClick={() => onNodeSelect('gateway')}
                aria-pressed={activeNodeId === 'gateway'}
              >
                <span className="v3-arch-node-top">
                  <span className="v3-arch-icon">{getNodeById('gateway').icon}</span>
                  <span className="v3-arch-index">01</span>
                </span>

                <span className="v3-arch-content">
                  <strong>{getNodeById('gateway').title}</strong>
                  <span>{getNodeById('gateway').stack[0]}</span>
                </span>
              </button>

              <button
                type="button"
                className={`v3-flow-connector v3-connector-request ${
                  activeEdgeId === 'e1' ? 'is-active' : ''
                }`}
                onClick={() => onEdgeSelect('e1')}
                aria-label="Release request from Release API to Rule Engine"
              >
                <span>{getEdgeById('e1').label}</span>
                <span className="v3-flow-line">
                  <ArrowRight size={16} strokeWidth={1.7} />
                </span>
              </button>

              <button
                type="button"
                className={`v3-arch-node v3-node-rules ${
                  activeNodeId === 'orders' ? 'is-active' : ''
                }`}
                onClick={() => onNodeSelect('orders')}
                aria-pressed={activeNodeId === 'orders'}
              >
                <span className="v3-arch-node-top">
                  <span className="v3-arch-icon">{getNodeById('orders').icon}</span>
                  <span className="v3-arch-index">02</span>
                </span>

                <span className="v3-arch-content">
                  <strong>{getNodeById('orders').title}</strong>
                  <span>{getNodeById('orders').stack[0]}</span>
                </span>
              </button>

              <button
                type="button"
                className={`v3-flow-transition ${
                  activeEdgeId === 'e2' ? 'is-active' : ''
                }`}
                onClick={() => onEdgeSelect('e2')}
                aria-label="Kafka publish from Rule Engine to Event Aggregator"
              >
                <span className="v3-transition-line" />

                <span className="v3-transition-content">
                  <span>{getEdgeById('e2').label}</span>
                  <ArrowDown size={16} strokeWidth={1.7} />
                </span>
              </button>

              <button
                type="button"
                className={`v3-arch-node v3-node-events ${
                  activeNodeId === 'events' ? 'is-active' : ''
                }`}
                onClick={() => onNodeSelect('events')}
                aria-pressed={activeNodeId === 'events'}
              >
                <span className="v3-arch-node-top">
                  <span className="v3-arch-icon">{getNodeById('events').icon}</span>
                  <span className="v3-arch-index">03</span>
                </span>

                <span className="v3-arch-content">
                  <strong>{getNodeById('events').title}</strong>
                  <span>{getNodeById('events').stack[0]}</span>
                </span>
              </button>

              <button
                type="button"
                className={`v3-flow-connector v3-connector-events ${
                  activeEdgeId === 'e3' ? 'is-active' : ''
                }`}
                onClick={() => onEdgeSelect('e3')}
                aria-label="Validated events sent from Event Aggregator to Redis Buffer"
              >
                <span>{getEdgeById('e3').label}</span>

                <span className="v3-flow-line v3-flow-line-reverse">
                  <ArrowLeft size={16} strokeWidth={1.7} />
                </span>
              </button>

              <button
                type="button"
                className={`v3-arch-node v3-node-redis ${
                  activeNodeId === 'inventory' ? 'is-active' : ''
                }`}
                onClick={() => onNodeSelect('inventory')}
                aria-pressed={activeNodeId === 'inventory'}
              >
                <span className="v3-arch-node-top">
                  <span className="v3-arch-icon">{getNodeById('inventory').icon}</span>
                  <span className="v3-arch-index">04</span>
                </span>

                <span className="v3-arch-content">
                  <strong>{getNodeById('inventory').title}</strong>
                  <span>{getNodeById('inventory').stack[0]}</span>
                </span>
              </button>
            </div>

            <div className="v3-observability">
              <div className="v3-observability-label">
                <span className="v3-observability-line" />
                <span>Metrics &amp; traces</span>
              </div>

              <button
                type="button"
                className={`v3-observability-node ${
                  activeNodeId === 'observability' ? 'is-active' : ''
                }`}
                onClick={() => {
                  onNodeSelect('observability')
                  onEdgeSelect('e4')
                }}
                aria-pressed={activeNodeId === 'observability'}
              >
                <span className="v3-observability-icon">
                  {telemetryNode.icon}
                </span>

                <span className="v3-observability-copy">
                  <strong>Observability</strong>
                  <span>Prometheus · Grafana · OpenTelemetry</span>
                </span>

                <span className="v3-observability-status">Monitoring</span>
              </button>
            </div>
          </div>

          <div className="v3-node-panel" aria-live="polite">
            <div className="v3-node-panel-header">
              <div>
                <span className="v3-panel-eyebrow">Selected component</span>
                <h3>{activeNode.title}</h3>
              </div>

              <span className="v3-panel-status">
                <span />
                Active
              </span>
            </div>

            <p className="v3-panel-description">
              {activeNode.detail}
            </p>

            <div
              className={`v3-panel-meta ${
                !activeNode.impact ? 'is-single' : ''
              }`}
            >
              <div>
                <span>Primary technology</span>
                <strong>{activeNode.stack[0]}</strong>
              </div>

              {activeNode.impact && (
                <div className="v3-panel-impact">
                  <span>Engineering impact</span>
                  <strong>{activeNode.impact}</strong>
                </div>
              )}
            </div>

            <div className="v3-panel-stack">
              {activeNode.stack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero