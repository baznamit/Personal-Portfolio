import { type ReactNode } from 'react'
import {
  Activity,
  BellRing,
  BrainCircuit,
  CheckCircle2,
  Database,
  ExternalLink,
  FileText,
  Github,
  GitBranch,
  Linkedin,
  Mail,
  ShieldCheck,
} from 'lucide-react'

export type FlowNode = {
  id: string
  title: string
  detail: string
  stack: string[]
  icon: ReactNode
  impact?: string
}

export type CaseStudy = {
  id: string
  title: string
  role: string
  scope: string
  architecture: string
  challenge: string
  decision: string
  outcome: string
  proofPoints: string[]
  tags: string[]
}

export type CapabilityCell = {
  pillar: string
  area: string
  proof: string
}

export type FlowEdge = {
  id: string
  from: string
  to: string
  label: string
  color: string
}

export type TimelineItem = {
  period: string
  title: string
  text: string
}

export type NavItem = {
  href: string
  label: string
}

export type CommandItem = {
  id: string
  label: string
  href: string
  icon: ReactNode
}

export const resumeUrl = 'https://drive.google.com/file/d/1BRW-zwDK-Ae3H7zJj5xP5XXpeG1QuTQ8/view?usp=drivesdk'
export const githubUrl = 'https://github.com/baznamit'
export const linkedInUrl = 'https://linkedin.com/in/baznamit'
export const emailUrl = 'mailto:namit.singh1269@gmail.com'

export const navItems: NavItem[] = [
  { href: '#case-studies', label: 'Case Studies' },
  { href: '#capabilities', label: 'Capabilities' },
  { href: '#timeline', label: 'Timeline' },
  { href: '#contact', label: 'Contact' },
]

export const flowNodes: FlowNode[] = [
  {
    id: 'gateway',
    title: 'Release API',
    detail: 'Entry API for Greenlight release-governance workflows with secure request handling and validations.',
    stack: ['Java 17', 'Spring Boot 3.4', 'JWT'],
    icon: <ShieldCheck size={16} />,
  },
  {
    id: 'orders',
    title: 'Rule Engine',
    detail: 'Concurrent processing engine for quality-gate decisions across 1,000+ user stories.',
    stack: ['ExecutorService', 'AtomicInteger', 'Concurrency'],
    impact: '~5 min → <2 sec',
    icon: <BrainCircuit size={16} />,
  },
  {
    id: 'events',
    title: 'Event Aggregator',
    detail: 'Asynchronous event intake that consolidates multi-team notification traffic into actionable payloads.',
    stack: ['Apache Kafka', 'Redis Streams', 'Threshold Rules'],
    icon: <BellRing size={16} />,
  },
  {
    id: 'inventory',
    title: 'Redis Buffer',
    detail: 'Stateful buffering layer for validated events to minimize redundant downstream notifications.',
    stack: ['Redis Streams', 'State Tracking', 'Deduplication'],
    icon: <Database size={16} />,
  },
  {
    id: 'observability',
    title: 'Observability',
    detail:
      'Metrics and distributed traces used to monitor quality-gate throughput, failures, and release health.',
    stack: ['Prometheus', 'Grafana', 'OpenTelemetry'],
    icon: <Activity size={16} />,
  },
]

export const edges: FlowEdge[] = [
  { id: 'e1', from: 'gateway', to: 'orders', label: 'Release request', color: '#6fd8cf' },
  { id: 'e2', from: 'orders', to: 'events', label: 'Kafka publish', color: '#f2a65a' },
  { id: 'e3', from: 'events', to: 'inventory', label: 'Validated events', color: '#8edca0' },
  { id: 'e4', from: 'orders', to: 'observability', label: 'Metrics & traces', color: '#9ec8ff' },
]

export const primaryFlowNodeIds = ['gateway', 'orders', 'events', 'inventory']

export const studies: CaseStudy[] = [
  {
    id: 's1',
    title: 'Greenlight Quality Gate Platform (TCS)',
    role: 'Backend engineer on the release-governance workflow and API performance path.',
    scope: 'Concurrent backend processing, JWT-secured APIs, and frontend delivery support for engineering teams.',
    architecture: 'Java 17, Spring Boot 3.4, React 18, Redux Toolkit, JWT.',
    challenge:
      'Legacy release-governance APIs had long blocking backend cycles, delaying CI/CD decisions across teams.',
    decision:
      'Refactored processing to concurrent execution using Java ExecutorService and AtomicInteger while modernizing the stack to Java 17, Spring Boot 3.4, and React 18.',
    outcome:
      'Reduced end-to-end API response time from around 5 minutes to under 2 seconds while handling 1,000+ user stories concurrently.',
    proofPoints: ['1,000+ user stories processed concurrently', 'API latency reduced from ~5 minutes to <2 seconds', 'Governance workflow used by multiple engineering teams'],
    tags: ['Java 17', 'Spring Boot 3.4', 'Concurrency', 'CI/CD'],
  },
  {
    id: 's2',
    title: 'Event-Driven Notification Aggregation',
    role: 'Backend engineer focused on event validation, buffering, and downstream delivery quality.',
    scope: 'High-volume notification intake, threshold rules, stateful buffering, and duplicate suppression.',
    architecture: 'Spring Boot, Apache Kafka, Redis Streams, threshold-based event validation.',
    challenge:
      'High-volume notification events from multiple application teams were fragmented and generated redundant user alerts.',
    decision:
      'Engineered a Kafka + Redis Streams pipeline with threshold-based buffering and stateful validation before downstream delivery.',
    outcome:
      'Consolidated raw event noise into delivery-ready payloads, reducing duplicate notifications and preventing user notification fatigue.',
    proofPoints: ['Kafka-based asynchronous ingestion', 'Redis-backed state tracking and buffering', 'Reduced duplicate outbound notifications before downstream delivery'],
    tags: ['Apache Kafka', 'Redis Streams', 'Event Processing', 'Spring Boot'],
  },
  {
    id: 's3',
    title: 'Event-Driven Media Processing Pipeline',
    role: 'Backend engineer shaping asynchronous ingestion and media processing orchestration.',
    scope: 'Upload decoupling, storage integration, async workers, and post-upload processing steps.',
    architecture: 'Spring Boot, Kafka, AWS S3, PostgreSQL, asynchronous consumer workers.',
    challenge:
      'Direct high-resolution image processing during uploads caused timeout risk and poor browser responsiveness.',
    decision:
      'Decoupled ingestion and processing with Kafka + AWS S3, then built async consumers for thumbnail generation, watermarking, and EXIF extraction.',
    outcome:
      'Eliminated heavy processing from the request path and enabled scalable, non-blocking media workflows.',
    proofPoints: ['Upload path no longer blocked by image processing', 'Async workers handle thumbnails, watermarks, and EXIF extraction', 'Architecture scaled beyond single-request processing limits'],
    tags: ['Kafka', 'AWS S3', 'Spring Boot', 'PostgreSQL'],
  },
]

export const capabilityGrid: CapabilityCell[] = [
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

export const timeline: TimelineItem[] = [
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

export const commandItems: CommandItem[] = [
  {
    id: 'resume',
    label: 'Open Resume',
    href: resumeUrl,
    icon: <FileText size={15} />,
  },
  {
    id: 'email',
    label: 'Email Namit',
    href: emailUrl,
    icon: <Mail size={15} />,
  },
  {
    id: 'linkedin',
    label: 'Open LinkedIn',
    href: linkedInUrl,
    icon: <Linkedin size={15} />,
  },
  {
    id: 'github',
    label: 'Open GitHub',
    href: githubUrl,
    icon: <Github size={15} />,
  },
]

export const heroSignals = [
  '3+ years building backend systems',
  '1,000+ user stories handled concurrently',
  'API turnaround reduced from ~5 min to <2 sec',
]

export const footerLinks = [
  { label: 'GitHub', href: githubUrl, icon: <Github size={15} /> },
  { label: 'LinkedIn', href: linkedInUrl, icon: <ExternalLink size={15} /> },
  { label: 'Email', href: emailUrl, icon: <Mail size={15} /> },
  { label: 'Resume', href: resumeUrl, icon: <FileText size={15} /> },
]

export const studyTabIcon = <GitBranch size={16} />
export const capabilityProofIcon = <CheckCircle2 size={18} />