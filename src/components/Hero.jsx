import { Images } from './ImagesData';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Hero = () => {
  const portraitHeroImage = Images.find((img) => img.id === 5);
  const [cursorVisible, setCursorVisible] = useState(true);


  // Refs for animation targets
  const animatedBgRef = useRef(null);
  const containerRef = useRef(null);
  const hiTextRef = useRef(null);
  const nameTextRef = useRef(null);
  const roleTextRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const heroImageRef = useRef(null);
  const imageContainerRef = useRef(null);
  const cursorRef = useRef(null);
  const glowRef = useRef(null);
  const particlesRef = useRef(null);

  const roleText = "Full Stack Developer";
  const [displayedRole, setDisplayedRole] = useState('');


  useEffect(() => {
    // Createe particles
    const particlesContainer = particlesRef.current;
    if (particlesContainer) {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full bg-accent opacity-70';

        // Random size between 3px and 8px
        const size = Math.random() * 5 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Add to container
        particlesContainer.appendChild(particle);

        // Aniamte each particle
        gsap.to(particle, {
          x: `random(-50, 50)`,
          y: `random(-50, 50)`,
          opacity: `random(0.3, 0.7)`,
          duration: `random(1, 5)`,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 2,
        })
      }
    }

    // Main timeline for entrance animations
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' }
    });

    const animatedBg = animatedBgRef.current;
    const container = containerRef.current;
    const glow = glowRef.current;

    // Initial States
    gsap.set([hiTextRef.current, nameTextRef.current, roleTextRef.current, descriptionRef.current, buttonsRef.current], {
      y: 50,
      opacity: 0
    });

    gsap.set(roleTextRef.current, {
      opacity: 0,
    });

    gsap.set(heroImageRef.current, {
      opacity: 0,
      scale: 0.8,
      y: 50
    });

    gsap.set(animatedBgRef.current, {
      opacity: 0,
      scale: 0.9,
      rotation: -5
    });

    gsap.set(glow, {
      opacity: 0,
      scale: 0.8,
    })

    // Entrance Animations Sequence
    tl.to([hiTextRef.current, nameTextRef.current, roleTextRef.current], {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15
    })
      .to(roleTextRef.current, {
        opacity: 1,
        duration: 0.4,
      })
      .to(descriptionRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6
      })
      .to(buttonsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6
      }, '-=0.4')
      .to(animatedBgRef.current, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.2
      })
      .to(glow, {
        opacity: 0.7,
        scale: 1,
        duration: 1,
      }, '-=1')
      .to(heroImageRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: 'power4.inOut'
      }, '-=0.8');

    // Animated background scaling
    gsap.to(animatedBgRef.current, {
      scale: 1.1,
      duration: 2,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1
    });

    // Glow animation
    gsap.to(glow, {
      sclae: 1.2,
      opacity: 0.5,
      duration: 2.5,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1,
    })

    // ScrollTriggered Animations
    gsap.to(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: 100,
      opacity: 0.5
    });

    gsap.to(imageContainerRef.current, {
      y: '-15px',
      duration: 2,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1
    });

    // Mouse move parallax effect
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 30;
      const yPos = (clientY / window.innerHeight - 0.5) * 30;

      gsap.to(animatedBgRef.current, {
        x: xPos * 1.2,
        y: yPos * 1.2,
        rotation: xPos * 0.05,
        duration: 1,
        ease: 'power2.out'
      });

      gsap.to(heroImageRef.current, {
        x: xPos * 1.5,
        y: yPos * 1.5,
        duration: 1,
        ease: 'power2.out'
      });

      gsap.to(glow, {
        x: xPos * 2,
        y: yPos * 2,
        duration: 0.8,
        ease: 'power2.out',
      })

      // Move particles in opposite direction for depth effect
      gsap.to(particlesRef.current.children, {
        x: -xPos * 0.8,
        y: -yPos * 0.8,
        duration: 1.2,
        ease: 'power1.inOut',
        stagger: 0.01,
      })
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Typing animation for role text
    const typingT1 = gsap.timeline({ repeat: 0 })

    // Cursor blinking effect
    const cursorBlinkInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      gsap.killTweensOf([
        // animatedBgRef.current,
        animatedBg,
        // containerRef.current]
        container,
        glow,
        ...(particlesRef.current?.children || [])
      ]);
    };
  }, []);

  // Typing effect for role text
  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= roleText.length) {
        setDisplayedRole(roleText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  // Button hover animations
  const handleMouseHover = (e, enter) => {
    const button = e.currentTarget;

    if (enter) {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      })

      // Create ripple effect
      const ripple = document.createElement('dive');
      ripple.className = 'absolute inset-0 bg-white rounded-full scale-0 opacity-30'
      button.appendChild(ripple);

      gsap.to(ripple, {
        scale: 1.5,
        opacity: 0,
        duration: 0.6,
        ease: 'power1.out',
        onComplete: () => ripple.remove(),
      })
    } else {
      gsap.to (button, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
    }
  }

  return (
    <div className="max-w-6xl mx-auto py-10 md:py-8 md:pt-16" ref={containerRef}>
      <div className="md:flex grid md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="max-[990px]:flex-1 space-y-2">
          <p ref={hiTextRef} className="text-2xl text-primary opacity-80 font-zentry relative inline-block">
            Hi, I&apos;m{' '}
            <span>
              Ongaga Blenick
              <span className='absolute -bottom-1 left-0 w-full h-[2px] bg-accent sclae-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100'></span></span>
          </p>
          
          <h1 ref={roleTextRef} className="text-5xl md:text-5xl lg:text-[4rem] font-circular-web text-primary leading-tight flex items-center">
            <span>
              {displayedRole}
              <span
                ref={cursorRef}
                className={`inline-block w-[3px] h-[50px] bg-accent ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}
              ></span>
            </span>
          </h1>
          
          <p ref={descriptionRef} className="text-2xl md:text-xl text-primary md:max-w-lg">
            Crafting robust web solutions with clean code and modern design
          </p>
          
          <div ref={buttonsRef} className="flex gap-4 pt-4">
            <button className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-accent transition-colors duration-200 relative overflow-hidden"
              onMouseEnter={(e) => handleMouseHover(e, true)}
              onMouseLeave={(e) => handleMouseHover(e, false)}
            >
              View My Work
            </button>
            <button className="border-2 border-primary text-primary px-6 py-2.5 rounded-full hover:border-accent hover:text-accent transition-colors duration-200 relative overflow-hidden"
              onMouseEnter={(e) => handleMouseHover(e, true)}
              onMouseLeave={(e) => handleMouseHover(e, false)}
            >
              Let&apos;s Connect
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative">
          <div ref={imageContainerRef} className="relative w-full aspect-[4/5] max-w-lg">
            {/* Animated particles */}
            <div className='absolute inset-0 -z-10 overflow-hidden'></div>
            
            {/* Animated background */}
            <div
              ref={animatedBgRef}
              className="absolute inset-0 -z-10 bg-accent-100 rounded-bl-[100px] rounded-tr-[100px] translate-x-1 min-[480px]:translate-x-40 md:translate-x-1 -translate-y-28"
              style={{
                transformOrigin: 'center center',
                backfaceVisibility: 'hidden',
              }}
            ></div>
            {/* Glow effect */}
            <div 
              ref={glowRef}
              className="absolute inset-0 -z-20 rounded-bl-[100px] rounded-tr-[100px] translate-x-1 min-[480px]:translate-x-40 md:translate-x-1 -translate-y-28 blur-[50px]"
              style={{
                background: 'hsl(183, 100%, 35%)',
                opacity: 0.4,
              }}
            ></div>

            <div className='absolute inset-0 -z-20 opacity-0 bg-accent rounded-bl-[100px] rounded-tr-[100px] translate-x-1 min-[480px]:translate-x-40 md:translate-x-1 -translate-y-28'></div>
            <img
              ref={heroImageRef}
              src={portraitHeroImage.src}
              alt={portraitHeroImage.alt}
              className="absolute md:-translate-y-32 -z-10 w-full h-full object-cover rounded-bl-[100px]"
              style={{
                backfaceVisibility: 'hidden',
                clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;