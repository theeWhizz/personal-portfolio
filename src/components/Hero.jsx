import { Images } from './ImagesData';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const portraitHeroImage = Images.find((img) => img.id === 5);

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


  useEffect(() => {
    // Main timeline for entrance animations
    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' }
    });

    const animatedBg = animatedBgRef.current;
    const container = containerRef.current;

    // Initial States
    gsap.set([hiTextRef.current, nameTextRef.current, roleTextRef.current, descriptionRef.current, buttonsRef.current], {
      y: 50,
      opacity: 0
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

    // Entrance Animations Sequence
    tl.to([hiTextRef.current, nameTextRef.current, roleTextRef.current, descriptionRef.current], {
      y: 0,
      opacity: 1,
      duration: 0.8,
      stagger: 0.15
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
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      gsap.killTweensOf([
        animatedBg,
        // animatedBgRef.current,
        container
        // containerRef.current]
      ]);
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 md:py-8 md:pt-16">
      <div className="md:flex grid md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="max-[990px]:flex-1 space-y-2">
          <p ref={hiTextRef} className="text-2xl text-primary opacity-80 font-zentry">
            Hi, I&apos;m Osman Blenick
          </p>
          
          <h1 ref={roleTextRef} className="text-5xl md:text-5xl lg:text-[4rem] font-circular-web text-primary leading-tight">
            Full Stack Developer
          </h1>
          
          <p ref={descriptionRef} className="text-2xl md:text-xl text-primary md:max-w-lg">
            Crafting robust web solutions with clean code and modern design
          </p>
          
          <div ref={buttonsRef} className="flex gap-4 pt-4">
            <button className="bg-primary text-white px-6 py-2.5 rounded-full hover:bg-accent transition-colors duration-200">
              View My Work
            </button>
            <button className="border-2 border-primary text-primary px-6 py-2.5 rounded-full hover:border-accent hover:text-accent transition-colors duration-200">
              Let&apos;s Connect
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative">
          <div ref={imageContainerRef} className="relative w-full aspect-[4/5] max-w-lg">
            {/*  */}
            <div
              ref={animatedBgRef}
              className="absolute inset-0 -z-10 bg-accent-100 rounded-bl-[100px] rounded-tr-[100px] translate-x-1 min-[480px]:translate-x-40 md:translate-x-1 -translate-y-28"
              style={{
                transformOrigin: 'center center',
                backfaceVisibility: 'hidden'
              }}
            ></div>
            <div className="absolute inset-0 -z-20 opacity-0 bg-accent-100 rounded-bl-[100px] rounded-tr-[100px] translate-x-1 min-[480px]:translate-x-40 md:translate-x-1 -translate-y-28"></div>
            <img
              ref={heroImageRef}
              src={portraitHeroImage.src}
              alt={portraitHeroImage.alt}
              className="absolute md:-translate-y-32 -z-10 w-full h-full object-cover rounded-bl-[100px]"
              style={{
                backfaceVisibility: 'hidden'
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;