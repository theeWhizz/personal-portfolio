import { useRef, useState, useEffect } from "react";
import { Code, Monitor, PaletteIcon } from "lucide-react";
import gsap from "gsap";

const AboutMe = () => {
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);
  const skillsRefs = useRef([]);
  const textRef = useRef(null);

  const skills = [
    {
      icon: <Code className="w-6 h-6 text-blue-500" />,
      title: "Full-Stack Development",
      description: "Crafting robust web applications with modern technologies",
    },
    {
      icon: <Monitor className="w-6 h-6 text-green-500" />,
      title: "Responsive Design",
      description: "Creating seamless experiences across all devices",
    },
    {
      icon: <PaletteIcon className="w-6 h-6 text-purple-500" />,
      title: "UI/UX Design",
      description: "Designing intuitive and engaging user interfaces",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const skills = skillsRefs.current;
    const textElement = textRef.current;

    gsap.fromTo(section,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: 'top 80%'
        }
      }
    );

    // Text Animation
    gsap.fromTo(textElement,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: 'top 80%'
        }
      }
    );

    // Skills Cards Stagger Animation
    gsap.fromTo(skills,
      {
        opacity: 0,
        scale: 0.5,
        y: 50
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: section,
          start: 'top 70%',
        }
      }
    );

    // Hover Animations for Skills
    skills.forEach((skill) => {
      gsap.to(skill, {
        scale: 1.05,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
        paused: true,
      });
    });

  }, []);

  return (
    <div
      ref = {sectionRef}
      className="container py-12"
    >
      <div className="">
        <h2 className="text-4xl md:text-5xl opacity-90 text-midnightblue-900 font-circular-web font-semibold mb-6">About Me</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div
            ref={textRef}
            className="opacity-0"
          >
            <p className="text-lg col-secondary mb-4">
              I&apos;m a web developer and designer driven by a passion for creating
              innovative digital solutions. My approach blends technical
              expertise with creative design to build exceptional web
              experiences.
            </p>
            <p className="text-lg col-secondary">
              From concept to execution, I transform complex challenges into
              elegant, user-centric websites and applications that not only look
              great but perform seamlessly.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4 opacity-85">
              My Core Skills
            </h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  ref={(el) => (skillsRefs.current[index] = el)}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`
                    flex items-center space-x-4 p-4 bg-background rounded-lg shadow-sm transition-all duration-300 ease-in-out
                    ${activeCard === index
                      ? 'bg-blue-50 sm:scale-105 sm:translate-x-2 shadow-md'
                      : 'bg-midnightblue-900'
                    }
                  `}
                >
                  <div className={`
                    transition-transform duration-300 ease-in-out
                    ${activeCard === index
                      ? 'scale-110 rotate-12'
                      : ''
                    }
                  `}>
                    {skill.icon}
                  </div>
                  <div className="">
                    <h4 className={`
                      font-semibold text-xl transition-colors duration-300 ease-in-out
                      ${activeCard === index
                        ? 'text-accent'
                        : 'text-background'}
                    `}>
                      {skill.title}
                    </h4>
                    <p className={`
                      col-secondary text-sm transition-colors duration-300 ease-in-out
                      ${activeCard === index
                        ? 'text-primary'
                        : 'text-background'}
                    `}>{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
