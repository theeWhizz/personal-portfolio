"use client"

/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from "react"
import Slider from "react-slick"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Code, Terminal, Database, Laptop, Layout, Palette, Github, ExternalLink, ArrowRight } from "lucide-react"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

// Register ScrollTrigger Plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const skills = [
  {
    name: "React",
    icon: Code,
    level: 80,
    badges: ["Next.js", "Redux", "TypeScript"],
  },
  {
    name: "UI/UX Design",
    icon: Palette,
    level: 85,
    badges: ["Figma", "Wireframing", "Prototyping"],
  },
  {
    name: "Node.js",
    icon: Terminal,
    level: 75,
    badges: ["Express", "REST APIs", "MongoDB"],
  },
  {
    name: "Frontend",
    icon: Layout,
    level: 88,
    badges: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    name: "Backend",
    icon: Database,
    level: 80,
    badges: ["PostgreSQL", "Firebase", "AWS"],
  },
  {
    name: "Mobile Dev",
    icon: Laptop,
    level: 75,
    badges: ["React Native", "Expo"],
  },
]

const projects = [
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management",
    image: "/public/img/ff3.jpeg",
    tags: ["Next.js", "Node.js", "MongoDB"],
    links: {
      github: "https://github.com",
      live: "https://demo.com",
    },
  },
  {
    id: "ai-chat",
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses",
    image: "/public/img/ff2.jpeg",
    tags: ["React", "OpenAI", "WebSocket"],
    links: {
      github: "https://github.com",
      live: "https://demo.com",
    },
  },
  {
    id: "expense-tracker",
    title: "Daily Expense Tracker",
    description: "Track and analyze your daily expenses with detailed reports and insights",
    image: "/public/img/ff1.jpeg",
    tags: ["React", "OpenAI", "WebSocket"],
    links: {
      github: "https://github.com",
      live: "https://demo.com",
    },
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    description: "Modern portfolio website with stunning animations",
    image: "/public/img/ff4.jpeg",
    tags: ["React", "Tailwind", "GSAP", "Next.js"],
    links: {
      github: "https://github.com",
      live: "https://demo.com",
    },
  },
  {
    id: "web-app",
    title: "Web Application",
    description: "Comprehensive web application with authentication and data visualization",
    image: "/public/img/ff5.jpeg",
    tags: ["React", "Tailwind", "Auth", "Express"],
    links: {
      github: "https://github.com",
      live: "https://demo.com",
    },
  },
]

// Custom hook to detect screen size
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
      })
    }

    // Add event listener
    window.addEventListener("resize", handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty array ensures that effect is only run on mount

  return windowSize
}

const SkillsAndProjectsSection = () => {
  const [activeProject, setActiveProject] = useState("ecommerce")
  const [previousProject, setPreviousProject] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)
  const projectContentRef = useRef(null)
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const skillsSliderRef = useRef(null)
  const projectsHeadingRef = useRef(null)
  const projectsContainerRef = useRef(null)
  const mobileProjectsRef = useRef(null)
  const { width } = useWindowSize()
  const isMobile = width < 768

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  }

  // Handle project change with GSAP animation
  const handleProjectChange = (projectId) => {
    if (isAnimating || projectId === activeProject) return

    setIsAnimating(true)
    setPreviousProject(activeProject)
    setActiveProject(projectId)

    // Animation will be triggered in the useEffect below
  }

  // Initialize entrance animations
  useEffect(() => {
    if (!sectionRef.current) return

    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'center center',
        toggleActions: 'play none none none',
      }
    })

    mainTl.fromTo(sectionRef.current, {
      borderRadius: '0rem'
    }, {
      borderRadius: isMobile ? '1rem' : '2.5rem',
      duration: 1,
      ease: 'power2.out',
    }, 0)

    if (headingRef.current) {
      gsap.fromTo(headingRef.current.querySelectorAll('h2, p'), {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        }
      })
    }

    if (skillsSliderRef.current) {
      gsap.fromTo(skillsSliderRef.current, {
        y: 80,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: skillsSliderRef.current,
          start: 'top 85%',
        }
      })
    }

    if (projectsHeadingRef.current) {
      gsap.fromTo(projectsHeadingRef.current.querySelectorAll('h2, p'), {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: projectsHeadingRef.current,
          start: 'top 85%',
        }
      })
    }

    if (!isMobile && projectsContainerRef.current) {
      const projectElements = projectsContainerRef.current.querySelectorAll('.project-item')
    
      gsap.fromTo(projectElements, {
        y: -50,
        opacity: 0
      }, {
        x: 0,
        opacity: 1,
        duration: 0.15,
        stagger: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: projectsContainerRef.current,
          start: 'top 85%',
        }
      })
    }

    if (isMobile && mobileProjectsRef.current) {
      const mobileProjects = mobileProjectsRef.current.querySelectorAll('.project-item')

      gsap.fromTo(mobileProjects, {
        y: 100,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: mobileProjectsRef.current,
          start: 'top 85%',
        }
      })
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [isMobile])

  // GSAP animation effect when activeProject changes
  useEffect(() => {
    if (!projectContentRef.current || isMobile || !previousProject) return

    const container = projectContentRef.current
    const currentProject = container.querySelector(`[data-project="${activeProject}"]`)
    const previousProjectElem = container.querySelector(`[data-project='${previousProject}']`)

    if (!currentProject || !previousProjectElem) return

    // Create animation timeline
    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false)
      },
    })
    
    tl.to(previousProjectElem, {
      y: 30,
      opacity: 0,
      duration: 0.4,
      ease: 'power2.in',
      onComplete: () => {
        gsap.set(previousProjectElem, { display: 'none' })
        gsap.set(currentProject, { display: 'block' })
      }
    })

    .set(currentProject, {
      y: 50,
      opacity: 0
    })

    .to(currentProject, {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power2.out'
    })

    .fromTo(
      currentProject.querySelectorAll('.project-detail'),
      {y: 20, opacity: 0 },
      {y: 0, opacity: 1, stagger: 0.1, duration: 0.4, ease: 'power2.out'},
      '-=0.3'
    )
  }, [activeProject, previousProject, isMobile])

  const SkillCard = ({ skill, icon: Icon, level, badges }) => (
    <div className="transform transition-all duration-300 hover:scale-105">
      <div className="bg-background rounded-xl p-6 m-2 h-[220px] flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent-100/15">
              <Icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-medium text-primary opacity-80">{skill}</h3>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-accent-100/10 text-accent border border-accent/20"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-primary opacity-70">Proficiency</span>
            <span className="text-sm font-medium text-accent">{level}%</span>
          </div>
          <div className="h-1.5 w-full bg-primary/10 rounded-full overflow-hidden">
            <div className="h-full bg-accent rounded-full transition-all duration-500"
            style={{ width: `${0}%` }}
            ref={el => {
              if (el) {
                // Animate the width to the skill level
                gsap.to(el, {
                  width: `${level}%`,
                  duration: 1.5,
                  ease: 'power2.out',
                  scrollTrigger: {
                    trigger: el,
                    start: 'top 90%'
                  }
                })
              }
            }}
          />
          </div>
        </div>
      </div>
    </div>
  )

  // Tab component for project navigation
  const TabsTrigger = ({ project, isActive, onClick }) => (
    <button
      onClick={onClick}
      className={`project-item w-full text-left p-4 h-auto border rounded-lg transition-all ${
        isActive ? "border-accent bg-accent-100" : "bg-transparent border-secondary hover:border-accent hover: transition-colors duration-300"
      }`}
      disabled={isAnimating}
    >
      <div className="flex items-start">
        <div className="flex-1">
          <h3 className="font-medium text-secondary">{project.title}</h3>
          <div className="flex flex-wrap gap-1 mt-1">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-xs rounded-full bg-accent-100/10 text-accent border border-accent/20"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 2 && (
              <span className="px-2 py-0.5 text-xs rounded-full bg-accent-100/10 text-accent border border-accent/20">
                +{project.tags.length - 2}
              </span>
            )}
          </div>
        </div>
        <ArrowRight
          className={`h-4 w-4 transition-transform ${isActive ? "rotate-90 text-accent" : "text-primary opacity-50"}`}
        />
      </div>
    </button>
  )

  // Project card component for desktop tab view
  const ProjectCard = ({ project }) => (
    <div className="overflow-hidden border-none bg-background rounded-xl shadow-xl">
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
        />
      </div>
      <div className="p-6 project-detail">
        <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
        <p className="text-primary opacity-70 mb-4">{project.description}</p>
      </div>
      <div className="px-6 pb-6 flex justify-between">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs rounded-full bg-accent-100/10 text-accent border border-accent/20"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.links.github}
            className="flex items-center gap-1 text-sm font-medium text-primary opacity-70 hover:text-accent transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" />
            <span>Code</span>
          </a>
          <a
            href={project.links.live}
            className="flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Live Demo</span>
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )

  const OriginalProjectCard = ({ project }) => {
    const cardRef = useRef(null)
    const imageRef = useRef(null)
    const infoRef = useRef(null)

    useEffect(() => {
      if (!cardRef.current || !imageRef.current || !infoRef.current) return

      const card = cardRef.current
      const image = imageRef.current
      const info = infoRef.current

      card.addEventListener('mouseenter', () => {
        gsap.to(image, {
          scale: 1,
          duration: 0.5,
          ease: 'power2.out'
        })

        gsap.to(info, {
          y: 0,
          duration: 0.5,
          ease: 'back.out(1.5)'
        })
      })

      card.addEventListener('mouseleave', () => {
        gsap.to(image, {
          scale: 5.5,
          duration: 0.5,
          ease: 'power2.out'
        })

        gsap.to(info, {
          y: '70%',
          duration: 0.5,
          ease: 'power3.in'
        })
      })

      return () => {
        card.removeEventListener('mouseenter', () => {})
        card.removeEventListener('mouseleave', () => {})
      }
    }, [])

    return(
      <div className="project-item group relative overflow-hidden rounded-xl">
        {/* Project Image */}
        <div className="relative h-[300px] w-full overflow-hidden">
          <img
            ref={imageRef}
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Project Info - Slides up on hover */}
        <div ref={infoRef} className="absolute bottom-0 left-0 right-0 p-6 bg-background translate-y-[70%] group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
          <p className="text-muted-foreground mb-4">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-accent-100/10 text-accent border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <a
              href={project.links.github}
              className="flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
              <span>Code</span>
            </a>
            <a
              href={project.links.live}
              className="flex items-center gap-2 text-primary opacity-70 hover:text-accent transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
    )
  }

  // Render the desktop tab-based layout with GSAP animations
  const renderDesktopProjects = () => (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Project Navigation Tabs */}
      <div className="md:w-1/3">
        <div className="flex flex-col h-auto w-full bg-transparent space-y-2">
          {projects.map((project) => (
            <TabsTrigger
              key={project.id}
              project={project}
              isActive={activeProject === project.id}
              onClick={() => handleProjectChange(project.id)}
            />
          ))}
        </div>
      </div>

      {/* Project Content with GSAP Animation */}
      <div className="md:w-2/3" ref={projectContentRef}>
        {projects.map((project) => (
          <div
            key={project.id}
            data-project={project.id}
            className={`${project.id === activeProject ? "block" : "hidden"}`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  )

  // Render the original mobile grid layout
  const renderMobileProjects = () => (
    <div ref={mobileProjectsRef} className="grid grid-cols-1 gap-6">
      {projects.map((project, index) => (
        <OriginalProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  )

  return (
    <section 
      className="py-10 my-10 bg-primary w-screen relative left-[50%] right-[50%] mx-[-50vw]"
      ref={sectionRef}
    >
      <div className="mx-auto max-w-[1150px] px-4 lg:px-0">
        <div ref={headingRef} className="mb-8">
          <h2 className="text-4xl md:text-5xl text-secondary font-circular-web font-medium mb-4">My Skills</h2>
          <p className="text-lg text-secondary col-secondary">Technical expertise and proficiency in modern web technologies</p>
        </div>
        <div ref={skillsSliderRef} className="SkillCard relative md:px-4">
          <Slider {...settings}>
            {skills.map((skill) => (
              <SkillCard
                key={skill.name}
                skill={skill.name}
                icon={skill.icon}
                level={skill.level}
                badges={skill.badges}
              />
            ))}
          </Slider>
          <div className="absolute bottom-0 left-0 w-[96%] mx-auto right-0 h-1 bg-gradient-to-r from-accent/20 via-accent/40 to-accent/20 rounded-full" />
        </div>
        {/* Featured Projects Section */}
        <div className="pt-10">
          <div ref={projectsHeadingRef}>
            <h2 className="text-3xl text-secondary font-circular-web font-bold mb-4">Featured Projects</h2>
            <p className="text-secondary col-secondary mb-8">Showcase of my recent work and personal projects</p>
          </div>
          {/* Conditionally render based on screen size */}
          <div ref={projectsContainerRef}>
            {isMobile ? renderMobileProjects() : renderDesktopProjects()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsAndProjectsSection