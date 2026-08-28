import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { getAssetPath } from '../utils/assets'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-max section-padding">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="heading-secondary mb-4">About Me</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex justify-center">
                <div className="relative w-80 h-80">
                  <img
                    src={getAssetPath("Pics/profile-pic.jpg")}
                    alt="Namit Pratap Singh"
                    className="w-80 h-80 object-cover rounded-full shadow-2xl"
                  />
                  <div className="absolute inset-0 rounded-full border-4 border-primary"></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-secondary">Hello there!</h3>
              <p className="text-body text-lg leading-relaxed">
                I'm Namit Pratap Singh, a backend-focused software engineer specializing in Java and 
                Spring Boot. I design and build reliable APIs and microservices that power fast, 
                scalable, and maintainable applications.
              </p>
              <p className="text-body leading-relaxed">
                My core strengths include backend architecture, event-driven systems with Kafka, 
                resilient distributed services, and cloud-native deployment practices. I enjoy solving 
                performance and reliability challenges across production systems.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-light rounded-lg">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-light rounded-lg">
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a href="#contact" className="btn-primary">
                  Let's Connect
                </a>
                <a
                  href="https://drive.google.com/file/d/1BRW-zwDK-Ae3H7zJj5xP5XXpeG1QuTQ8/view?usp=drivesdk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border-2 border-secondary text-secondary font-medium rounded-lg hover:bg-secondary hover:text-white transition-all duration-300"
                >
                  Download CV
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About