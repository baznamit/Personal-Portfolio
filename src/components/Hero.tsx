import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-light to-primary/10">
      {/* Animated Background Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-20 left-10 opacity-30"
      >
        <img src="/Pics/cloud.png" alt="" className="w-32 h-20" />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-32 right-10 opacity-30"
      >
        <img src="/Pics/cloud.png" alt="" className="w-24 h-16" />
      </motion.div>

      <div className="container-max section-padding text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="heading-primary"
          >
            Hi! I'm <span className="text-gradient">Namit</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-2"
          >
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-body">
              I'm a <span className="text-secondary font-semibold">Full Stack Developer</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate about creating beautiful and functional web experiences
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Mountain Image */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 relative"
        >
          <img
            src="/Pics/mountain.png"
            alt="Mountain illustration"
            className="w-full max-w-4xl mx-auto h-auto"
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </motion.div>
    </section>
  )
}

export default Hero