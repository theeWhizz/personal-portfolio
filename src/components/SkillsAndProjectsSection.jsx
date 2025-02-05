/* eslint-disable react/prop-types */
import Slider from "react-slick"
import { Code, Terminal, Database, Laptop, Layout, Palette, Github, ExternalLink } from "lucide-react"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useEffect, useRef } from "react"

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
    title: "Daily Expense Tracker",
    description: "Real-time chat application with AI-powered responses",
    image: "/public/img/ff1.jpeg",
    tags: ["React", "OpenAI", "WebSocket"],
    links: {
      github: "https://github.com",
      live: "https://demo.com",
    },
  },
  {
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
    title: "Web Application",
    description: "Modern portfolio website with stunning animations",
    image: "/public/img/ff5.jpeg",
    tags: ["React", "Tailwind", "Auth", "Express"],
    links: {
      github: "https://github.com",
      live: "https://demo.com",
    },
  },
]

const SkillsAndProjectsSection = () => {
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
        breakpoint: 1024,
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

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entries]) => {
        if (entries.isIntersecting) {
          document.body.style.backgroundColor = '#101720';
          document.body.style.color = '#dfdff0';
        } else {
          document.body.style.backgroundColor = '';
          document.body.style.color = ''
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillCard = ({ skill, icon: Icon, level, badges }) => (
    <div className="transform transition-all duration-300 hover:scale-105">
      <div className="bg-background rounded-xl p-6 m-2 h-[220px] flex flex-col justify-between">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-accent/10">
              <Icon className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-medium text-primary opacity-80">{skill}</h3>
          </div>
  
          {/* Badges */}
          <div className="flex flex-wrap gap-2">
            {badges.map((badge, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
  
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-primary/75">Proficiency</span>
            <span className="text-sm font-medium text-accent">{level}%</span>
          </div>
          <div className="h-1.5 w-full bg-primary/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-500"
              style={{ width: `${level}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )

  const ProjectCard = ({ project }) => (
    <div className="group relative overflow-hidden rounded-xl">
      {/* Project Image */}
      <div className="relative h-[300px] w-full overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
  
      {/* Project Info - Slides up on hover */}
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-background translate-y-[70%] group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-xl font-semibold text-primary mb-2">{project.title}</h3>
        <p className="text-primary/70 mb-4">{project.description}</p>
  
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent">
              {tag}
            </span>
          ))}
        </div>
  
        {/* Links */}
        <div className="flex gap-4">
          <a
            href={project.links.github}
            className="flex items-center gap-2 text-primary/70 hover:text-accent transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5" />
            <span>Code</span>
          </a>
          <a
            href={project.links.live}
            className="flex items-center gap-2 text-primary/70 hover:text-accent transition-colors"
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

  return (
    <section 
      ref={sectionRef} 
      className="py-16">
      <div className="mx-auto">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-circular-web font-bold mb-4">My Skills</h2>
          <p className="text-lg col-secondary">Technical expertise and proficiency in modern web technologies</p>
        </div>
        <div className="SkillCard relative md:px-4">
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

        <div className="pt-10">
          <h2 className="text-3xl font-circular-web font-bold mb-4">Featured Projects</h2>
          <p className="col-secondary mb-8">Showcase of my recent work and personal projects</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsAndProjectsSection