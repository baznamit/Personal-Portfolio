import { useEffect, useMemo, useState } from 'react'
import Capabilities from './components/Capabilities'
import CaseStudies from './components/CaseStudies'
import CommandPalette from './components/CommandPalette'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Timeline from './components/Timeline'
import {
  capabilityGrid,
  commandItems,
  edges,
  emailUrl,
  flowNodes,
  footerLinks,
  githubUrl,
  heroSignals,
  linkedInUrl,
  navItems,
  primaryFlowNodeIds,
  resumeUrl,
  studies,
  timeline,
} from './data/portfolio'

function App() {
  const [activeNodeId, setActiveNodeId] = useState(flowNodes[0].id)
  const [activeStudyId, setActiveStudyId] = useState(studies[0].id)
  const [activeCapabilityId, setActiveCapabilityId] = useState(0)
  const [isCommandOpen, setIsCommandOpen] = useState(false)
  const [activeEdgeId, setActiveEdgeId] = useState(edges[0].id)

  const activeNode = useMemo(() => flowNodes.find((node) => node.id === activeNodeId) ?? flowNodes[0], [activeNodeId])

  const handleNodeSelect = (nodeId: string) => {
    setActiveNodeId(nodeId)
    const relatedEdge = edges.find((edge) => edge.from === nodeId) ?? edges.find((edge) => edge.to === nodeId)
    if (relatedEdge) {
      setActiveEdgeId(relatedEdge.id)
    }
  }

  const handleEdgeSelect = (edgeId: string) => {
    setActiveEdgeId(edgeId)
    const selectedEdge = edges.find((edge) => edge.id === edgeId)
    if (selectedEdge) {
      setActiveNodeId(selectedEdge.to)
    }
  }

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
      <Header navItems={navItems} resumeUrl={resumeUrl} emailUrl={emailUrl} onOpenCommand={() => setIsCommandOpen(true)} />

      <main>
        <Hero
          flowNodes={flowNodes}
          edges={edges}
          primaryFlowNodeIds={primaryFlowNodeIds}
          activeNodeId={activeNode.id}
          activeEdgeId={activeEdgeId}
          heroSignals={heroSignals}
          resumeUrl={resumeUrl}
          emailUrl={emailUrl}
          linkedInUrl={linkedInUrl}
          githubUrl={githubUrl}
          onNodeSelect={handleNodeSelect}
          onEdgeSelect={handleEdgeSelect}
        />
        <CaseStudies studies={studies} activeStudyId={activeStudyId} onStudySelect={setActiveStudyId} />
        <Capabilities
          capabilityGrid={capabilityGrid}
          activeCapabilityId={activeCapabilityId}
          onCapabilitySelect={setActiveCapabilityId}
        />
        <Timeline timeline={timeline} />
        <Contact resumeUrl={resumeUrl} emailUrl={emailUrl} linkedInUrl={linkedInUrl} githubUrl={githubUrl} />
      </main>

      <Footer footerLinks={footerLinks} />
      <CommandPalette isOpen={isCommandOpen} commandItems={commandItems} onClose={() => setIsCommandOpen(false)} />
    </div>
  )
}

export default App