import { SocialMediaIcons } from './SocialMediaData';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const portraitHeroImage = SocialMediaIcons.find((img) => img.id === 5);
  const vectorImage = SocialMediaIcons.find((img) => img.id === 6).src;

  const imageRef = useRef(null);
  const animatedBgRef = useRef(null);

  useEffect(() => {
    gsap.to(animatedBgRef.current, {
      scale: 1.1,
      duration: 2,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1
    })

    gsap.to(imageRef.current, {
      y: -20,
      duration: 1.5,
      ease: 'power4.inOut',
      yoyo: true,
      repeat: -1
    });

    gsap.to(imageRef.current, {
      rotation: 360,
      duration: 20,
      ease: 'none',
      repeat: -1
    });

    return () => {
      gsap.killTweensOf(imageRef.current);
    };
  }, []);

  return (
    <div className="max-w-6xl mx-auto py-10 md:py-8 md:pt-16">
      <img src={vectorImage}
        ref={imageRef}
        style={{
          position: 'absolute',
          height: '6rem',
          width: 'auto',
          zIndex: '-10',
          opacity: '50%',
          transform: 'translateX(10rem)'
        }}
      />
      <div className="md:flex grid md:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="max-[990px]:flex-1 space-y-2">
          <p className="text-2xl text-primary opacity-80 font-zentry">
            Hi, I'm Osman Blenick
          </p>
          
          <h1 className="text-5xl md:text-5xl lg:text-[4rem] font-circular-web text-primary leading-tight">
            Full Stack Developer
          </h1>
          
          <p className="text-2xl md:text-xl text-primary md:max-w-lg">
            Crafting robust web solutions with clean code and modern design
          </p>
          
          <div className="flex gap-4 pt-4">
            <button className="bg-accent text-white px-6 py-2.5 rounded-full hover:bg-accent/75 transition-colors duration-200">
              View My Work
            </button>
            <button className="border-2 border-accent text-teal-500 px-6 py-2.5 rounded-full hover:bg-secondary transition-colors duration-200">
              Let's Connect
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 relative">
          <div className="relative w-full aspect-[4/5] max-w-lg">
            {/*  */}
            <div
              ref={animatedBgRef}
              className="absolute inset-0 -z-10 bg-accent-100 rounded-bl-[100px] rounded-tr-[100px] translate-x-1 min-[480px]:translate-x-40 md:translate-x-1 -translate-y-28"
              style={{
                transformOrigin: 'center center'
              }}
            ></div>
            <div className="absolute inset-0 -z-20 opacity-0 bg-accent-100 rounded-bl-[100px] rounded-tr-[100px] translate-x-1 min-[480px]:translate-x-40 md:translate-x-1 -translate-y-28"></div>
            <img
              src={portraitHeroImage.src}
              alt={portraitHeroImage.alt}
              className="absolute md:-translate-y-32 -z-10 w-full h-full object-cover rounded-bl-[100px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;