import { Github, Linkedin, Mail, Twitter, ExternalLink } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className="mt-[140vh] w-full">
      <footer className="py-12 rounded-3xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo/Name */}
            <div className="flex items-center gap-2">
              <h1 className="text-primary font-zentry text-2xl special-font cursor-pointer">. / . <b>blenick</b></h1>
              <span className="text-sm text-primary font-circular-web- opacity-60 hidden md:inline">Full Stack Developer</span>
            </div>
            {/* Navigation Links */}
            <nav className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="#about" className="text-primary opacity-70 hover:text-accent transition-colors">
                About
              </a>
              <a href="#skills" className="text-primary opacity-70 hover:text-accent transition-colors">
                Skills
              </a>
              <a href="#projects" className="text-primary opacity-70 hover:text-accent transition-colors">
                Projects
              </a>
              <a href="#contact" className="text-primary opacity-70 hover:text-accent transition-colors">
                Contact
              </a>
            </nav>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent-100/10 text-primary hover:text-accent transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent-100/10 text-primary hover:text-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-accent-100/10 text-primary hover:text-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="mailto:example@gmail.com"
                className="p-2 rounded-full bg-accent-100/10 text-primary hover:text-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 my-8"></div>
          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary opacity-60">
            <div>© {currentYear} <span className="text-accent">Blenick Ongaga</span>. All rights reserved.</div>
            <div className="flex items-center gap-2">
              <span>Built with</span>
              <a href="react.com" className="inline-flex items-center gap-1 text-accent">
                {/* React <Code className="h-4 w-4" /> */}
                React <ExternalLink className="h-4 w-4" />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <a href="#" className="hover:text-accent transition-colors flex items-center gap-1">
                To Top
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer