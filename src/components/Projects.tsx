import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Cloud, Database, ExternalLink, Github, Server } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const projects = [
    {
      title: "Order & Inventory API",
      description: "Backend services for product, order, and inventory workflows with resilient API design.",
      previewTitle: "Spring Boot Microservices",
      previewStyle: "from-slate-900 via-cyan-900 to-cyan-700",
      icon: <Server className="w-8 h-8" />,
      technologies: ["Java", "Spring Boot", "REST APIs", "Redis", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "https://github.com/baznamit/my-site"
    },
    {
      title: "Event-Driven Checkout",
      description: "Asynchronous checkout pipeline built around reliable events and fault-tolerant processing.",
      previewTitle: "Kafka + Resilience",
      previewStyle: "from-blue-900 via-indigo-900 to-slate-800",
      icon: <Database className="w-8 h-8" />,
      technologies: ["Apache Kafka", "Resilience4j", "Spring Boot", "JUnit 5", "Mockito"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Cloud-Native Service Platform",
      description: "Containerized backend deployment setup with observability and CI/CD automation.",
      previewTitle: "Docker • Kubernetes • CI/CD",
      previewStyle: "from-emerald-900 via-teal-900 to-cyan-800",
      icon: <Cloud className="w-8 h-8" />,
      technologies: ["Docker", "Kubernetes", "Jenkins", "Prometheus", "Grafana"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">My Projects</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-body text-lg max-w-2xl mx-auto">
              Here are some of the projects I've worked on, showcasing my skills and creativity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="card group hover:scale-105 transition-all duration-300"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div
                    className={`w-full h-48 bg-gradient-to-br ${project.previewStyle} text-white flex flex-col items-start justify-between p-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div className="bg-white/10 p-3 rounded-xl backdrop-blur-sm">
                      {project.icon}
                    </div>
                    <p className="text-sm font-semibold tracking-wide text-white/90">
                      {project.previewTitle}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-primary bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center">
                    <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.liveUrl}
                        className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink className="w-5 h-5 text-primary" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="View source code"
                      >
                        <Github className="w-5 h-5 text-primary" />
                      </a>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-secondary mb-2">
                  {project.title}
                </h3>
                <p className="text-body mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/baznamit"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View More on GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects