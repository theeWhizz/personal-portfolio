import { useEffect, useRef } from "react";
import ContactForm from "./ContactForm";
import CTASection from "./CTASection";
import gsap from "gsap";

const RadialBackground = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      repeat: -1,
      yoyo: true,
    });

    tl.to(backgroundRef.current, {
      scale: 1.1,
      duration: 8,
      ease: "sine.inOut"
    });

    return () => tl.kill();
  }, []);

  return (
    <div className="absolute grid left-0 right-0 px-4 py-8 md:py-10 w-full items-center justify-center md:bg-gradient-to-br from-accent-100 to-cyan-100/10 overflow-hidden">
      <div
        ref={backgroundRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='800' height='800' viewBox='0 0 800 800' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='500' cy='400' r='400' fill='hsl(183, 100%, 35%, 0.2)'/%3E%3Ccircle cx='100' cy='300' r='150' fill='hsl(183, 100%, 35%, 0.2)'/%3E%3Ccircle cx='600' cy='500' r='200' fill='hsl(183, 100%, 35%, 0.2)'/%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "scale(1)",
          transformOrigin: "center center"
        }}
      />
      <div className="relative z-10">
        <ContactForm />
        <CTASection />
      </div>
    </div>
  );
};

export default RadialBackground;