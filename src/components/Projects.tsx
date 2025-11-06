import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript",
      image: "/Pics/project1.jpg",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "https://github.com/baznamit/my-site"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration",
      image: "/Pics/project2.jpg",
      technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      image: "/Pics/project3.jpg",
      technologies: ["Vue.js", "Firebase", "Vuex", "CSS3"],
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
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
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