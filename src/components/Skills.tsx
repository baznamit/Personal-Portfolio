import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Cloud, Code, Database, Globe, Server, Wrench } from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  const skillCategories = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Programming Languages",
      skills: ["Java", "Python", "JavaScript", "TypeScript", "SQL"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Frontend",
      skills: ["React.js", "Redux Toolkit", "HTML5", "CSS3", "Bootstrap"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend & Systems",
      skills: ["Spring Boot", "Microservices", "REST APIs", "Redis", "Apache Kafka", "Resilience4j"]
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, Lambda)", "Azure PaaS", "Docker", "Kubernetes", "Jenkins", "CI/CD"]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Databases & Observability",
      skills: ["PostgreSQL", "MongoDB", "Prometheus", "Grafana"]
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tools & Testing",
      skills: ["Git", "Nexus", "JUnit 5", "Mockito", "SonarQube"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-light">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">Technical Skills</h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-body text-lg max-w-2xl mx-auto">
              Here are some of the technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="card text-center hover:scale-105 transition-transform duration-300"
              >
                <div className="text-primary mb-4 flex justify-center">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-4">
                  {category.title}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag mr-2 mb-2 inline-block">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Experience Level Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold text-center text-secondary mb-8">
              Proficiency Levels
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { skill: "Java & Spring Boot", level: 92 },
                { skill: "Microservices & REST APIs", level: 88 },
                { skill: "Cloud, Docker & Kubernetes", level: 82 }
              ].map((item, index) => (
                <div key={item.skill} className="card">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-secondary">{item.skill}</span>
                    <span className="text-primary font-bold">{item.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + index * 0.2 }}
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills