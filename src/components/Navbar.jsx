import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import { FaGithub, FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import AnimatedMenuButton from "./AnimatedMenuButton";

// import SocialMediaIconsGallery from "./SocialMediaIconsGallery";
// import  { SocialMediaIcons }  from "./SocialMediaData";


const Navbar = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0
  });
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShortViewport, setIsShortViewport] = useState(false);
  const [isHoveringNav, setIsHoveringNav] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Navbar Visibility
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollTimeout = useRef(null);

  const navRef = useRef(null);
  const linksRefs = useRef({});
  const mobileMenuRef= useRef(null);
  const socialsRef= useRef(null);

  // Scroll Handler Effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Add a small delay to prevent rapid toggling
      scrollTimeout.current = setTimeout(() => {
        if (currentScrollY < 20) {
          setIsVisible(true);
        } else {
            // Check if scrolling up, hide if scrolling down
            setIsVisible(currentScrollY < lastScrollY.current);
          }
          lastScrollY.current = currentScrollY;
      }, 50); // Small delay for smoother transitions
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, []);

  // Animation Effect for Mobile Menu
  useEffect(() => {
    if (isMobile) {
      if (isMobileMenuOpen) {
        // Menu Opening Animation
        gsap.to(mobileMenuRef.current, {
          // height: 'calc(var(--vh, 1vh) * 100)',
          // duration: 0.5,
          // ease: 'power3.inout'
          opacity: 1,
          pointerEvents: 'auto',
          duration: 0.5,
          ease:'power3.inOut'
        });

        // Animate Each Link
        gsap.fromTo (
          ".menu-link",
          {
            y: 50,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.4,
            ease: 'power2.out',
            delay: 0.2
          }
        );

        // Animate Each Social Icon
        gsap.fromTo (
          ".social-icon",
          {
            y: 30,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.3,
            ease: "power2.out",
            delay: 0.4
          }
        );
      } else {
        // Menu Closing Animation
        gsap.to(".menu-link", {
          y: -30,
          opacity: 0,
          stagger: 0.05,
          duration: 0.3,
          ease: "power2.in"
        });

        gsap.to(".social-icon", {
          y: -20,
          opacity: 0,
          stagger: 0.05,
          duration: 0.2,
          ease: "power2.in"
        });

        gsap.to(mobileMenuRef.current, {
          // height: 0, // suspicious on this
          // duration: 0.4,
          // ease: "power3.inOut",
          // delay: 0.2
          opacity: 0,
          pointerEvents: 'none',
          duration: 0.4,
          ease: 'power3.inOut',
          delay: 0.3
        });
      }
    }
  }, [isMobileMenuOpen, isMobile]);

  const handleMenuToggle =() => {
    if (isMobileMenuOpen) {
      gsap.to([".menu-link", '.social-icon'], {
        opacity: 0,
        y: -20,
        duration: 0.2,
        stagger: 0.05,
        ease: "power2.in",
        onComplete: () => setIsMobileMenuOpen(false)
      });
    } else {
      setIsMobileMenuOpen(true);
    }
  };

  const socialLinks= [
    {
      id: 1,
      Icon: FaXTwitter,
      url: 'https://twitter.com/blenick',
      label: 'Twitter'
    },
    {
      id: 4,
      Icon: FaWhatsapp,
      url: 'https://wa.me/+254704250557',
      label: 'Whatsapp'
    },
    {
      id: 4,
      Icon: FaGithub,
      url: 'https://github.com/theeWhizz',
      label: 'Github'
    },
    {
      id: 4,
      Icon: FaInstagram,
      url: 'https://www.instagram.com/_blenick/',
      label: 'Instagram'
    }
  ]

  
  const links = [
    { id: 1, text: 'Home', href: '#'},
    { id: 2, text: 'About', href: '#'},
    { id: 3, text: 'Services', href: '#'},
    { id: 4, text: 'Contact', href: '#'},
    { id: 5, text: 'Projects', href: '#'}
  ];

  // Set Dynamic Viewport Height
  useEffect(() => {
    const setDynamicHeight = () => {
      document.documentElement.style.setProperty("--vh", `${window.innerHeight * 0.0083}px`);
      setIsShortViewport(window.innerHeight < 600);
    };

    setDynamicHeight();
    window.addEventListener("resize", setDynamicHeight);

    return () => {
      window.removeEventListener("resize", setDynamicHeight);
    };
  }, []);

  // Detect Mobile View
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (hoveredId && linksRefs.current[hoveredId]) {
      const linkElement = linksRefs.current[hoveredId];
      const rect = linkElement.getBoundingClientRect();
      const parentRect = linkElement.parentElement.getBoundingClientRect();

      setIndicatorStyle({
        width: rect.width,
        left: rect.left - parentRect.left,
      });
    }
  }, [hoveredId]);

  const handleMouseMove = (e) => {
    if (!isHoveringNav || isMobile) return;

    const nextRect = navRef.current.getBoundingClientRect();
    const mouseX = e.clientX - nextRect.left;

    let closestLink = null;
    let minDistance = Infinity;

    Object.entries(linksRefs.current).forEach(([id, element]) => {
      const rect = element.getBoundingClientRect();
      const linkCenterX = rect.left + rect.width / 2 - nextRect.left;
      const distance = Math.abs(mouseX - linkCenterX);

      if (distance < minDistance) {
        minDistance = distance;
        closestLink = parseInt(id);
      }
    });

    if (closestLink !== hoveredId) {
      setHoveredId(closestLink);
    }
  };
  
  return (
    <div className="relative">
      <div className={'fixed w-full left-0 right-0 z-50 bg-background-primary transition-transform duration-300 ease-in-out'}
        style = {{
          transition: 'transform 0.4s ease-in-out, opacity 0.4s ease-in-out',
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          opacity: isVisible ? 1 : 0,
          pointerEvents: isVisible ? 'auto' : 'none'
        }}>
        <div className="max-w-[1115px] mx-auto px-4">
          <div className="flex-between bg-primary rounded-lg p-3 relative z-50">
            {/* Logo */}
            <div className="z-50">
              <Link aria-label="Got toHomepage">
                <h1 className="font-zentry text-2xl special-font text-secondary cursor-pointer">. / . <b>blenick</b></h1>
              </Link>
            </div>
          
            {/* Mobile Menu Button */}
            <div className="z-50 md:hidden">
              <AnimatedMenuButton
                isOpen={isMobileMenuOpen}
                onClick={handleMenuToggle}
                variant="scale" // or 'scale', 'slide', 'flip'
              />
            </div>
            {/* Links for Desktop */}
            {!isMobile && (
              <div
                ref={navRef}
                className={`md:flex md:relative gap-4`}
                onMouseEnter={() => setIsHoveringNav(true)}
                onMouseLeave={() => setIsHoveringNav(false)}
                onMouseMove={handleMouseMove}
                >
              {/* Hover Indicator for Desktop */}
              <div
                className={`
                  absolute pt-2 pb-5 -z-10 rounded-3xl transition-all duration-300 ease-in-out bg-secondary
                  `}
                  style={{
                    width: indicatorStyle.width,
                    left: indicatorStyle.left,
                    opacity: isHoveringNav && !isMobile ? 1 : 0,
                  }}
                  />
              {/* Map through Links */}
              {links.map(link => (
                <a
                  key = {link.id}
                  ref={el => linksRefs.current[link.id] = el}
                  href={link.href}
                  className={`px-3 z-50 transition-colors duration-200
                  ${hoveredId === link.id ? 'text-secondary' : 'text-secondary'}
                  hover:text-primary font-robert-medium
                  `}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.text}
                </a>
              ))}
            </div>
            )}
          </div>
        </div>
      </div>

      <div className="h-16"></div>

      {/* Mobile View Menu with Available Height */}
      {isMobile && (
        <div
          ref={mobileMenuRef}
          className={`fixed top-0 left-0 w-full bg-background-primary py-6 -space-y-6 transition-opacity duration-300 text-primary my-element flex flex-col justify-start overflow-hidden z-40
            ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
          `}
          style={{
            height: 'calc(var(--vh, 1vh) * 122)',
          }}
        >
          {/* Menu links taking up the available screen height */}
          {links.map((link) => {
            return (
              <Link
                key={link.id}
                to={link.href}
                className="menu-link mt-20 px-4 py-4 text-[4.6rem] leading-none tracking-wide font-zentry special-font hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <b>{link.text}</b>
              </Link>
            );
          })}

          {/* Social Media Icons */}
          {/* <SocialMediaIconsGallery images={SocialMediaIcons} /> */}
          <div
            ref={socialsRef}
            className={`flex justify-around px-16 min-[480px]:justify-start min-[480px]:px-0 min-[480px]:pt-4 w-full gap-4
            ${isShortViewport ? 'pt-4' : 'absolute top-[91%]'}
            `}>
              {socialLinks.map(({ id, Icon, url, label }) => (
                <button
                key={id}
                className="social-icon text-primary hover:opacity-80 transition-all duration-200 hover:scale-110 opacity-0"
                onClick={() => window.open(url, '_blank')}
                aria-label={label}
              >
                <Icon size={36} />
              </button>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar