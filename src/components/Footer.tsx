import { getAssetPath } from '../utils/assets'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-heading text-primary font-bold mb-2">
              Namit Pratap Singh
            </h3>
            <p className="text-gray-300">
              Full Stack Developer
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <a href="#home" className="text-gray-300 hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="text-gray-300 hover:text-primary transition-colors">
                About
              </a>
              <a href="#skills" className="text-gray-300 hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-gray-300 hover:text-primary transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-gray-300 hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Connect With Me</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              <a
                href="mailto:namit.singh1269@gmail.com"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <img 
                  src={getAssetPath("Pics/gmail-icon.png")} 
                  alt="Gmail" 
                  className="w-5 h-5"
                />
              </a>
              <a
                href="https://github.com/baznamit"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="GitHub"
              >
                <img 
                  src={getAssetPath("Pics/github-logo.png")} 
                  alt="GitHub" 
                  className="w-5 h-5"
                />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <img 
                  src={getAssetPath("Pics/linkedin-logo.png")} 
                  alt="LinkedIn" 
                  className="w-5 h-5"
                />
              </a>
              <a
                href="https://twitter.com/baznamit1269"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Twitter"
              >
                <img 
                  src={getAssetPath("Pics/twitter-icon.png")} 
                  alt="Twitter" 
                  className="w-5 h-5"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © {currentYear} Namit Pratap Singh (@baznamit). All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer