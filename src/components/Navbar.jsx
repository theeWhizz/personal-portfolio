import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
// import SocialMediaIconsGallery from "./SocialMediaIconsGallery";
// import  { SocialMediaIcons }  from "./SocialMediaData";
import { FaGithub, FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

import gsap from "gsap";

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

  const navRef = useRef(null);
  const linksRefs = useRef({});

  const mobileMenuRef= useRef(null);
  const linksContainerRef = useRef(null);
  const socialsRef= useRef(null);

  // Animation Effect for Mobile Menu
  useEffect(() => {
    if (isMobile) {
      if (isMobileMenuOpen) {
        // Menu Opening Animation
        gsap.to(mobileMenuRef.current, {
          height: 'calc(var(--vh, 1vh) * 100)',
          duration: 0.5,
          ease: 'power3.inout'
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
          height: 0, // suspicious on this
          duration: 0.4,
          ease: "power3.inOut",
          delay: 0.2
        });
      }
    }
  }, [isMobileMenuOpen, isMobile]);

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
      <div className="navbar flex-between bg-primary py-3 rounded-lg px-3">
        {/* Logo */}
        <div className="z-50">
          <Link aria-label="Got toHomepage">
            <h1 className="font-zentry text-2xl special-font text-secondary cursor-pointer">. / . <b>blenick</b></h1>
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="z-50 md:hidden">
          <button
            className="rounded-lg transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMobileMenuOpen ? (
              <IoClose size={30} className="text-secondary" />
            ) : (
              <CgMenuRight size={30} className="text-secondary" />
            )}
          </button>
        </div>

        {/* Links for Desktop */}
        {!isMobile && (
          <div
            ref={navRef}
            className={`
            md:flex md:relative gap-4
            ${isMobileMenuOpen ? 'grid' : 'hidden'}
            grid-cols-1 md:flex-row absolute top-full right-0 bg-primary text-secondary z-10 transition-all duration-200 ease-in-out
            ${isMobile ? 'w-full' : 'md:w-auto'}
            `}
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

      {/* Mobile View Menu with Available Height */}
      {isMobile && (
        <div 
          ref={mobileMenuRef}
          className={`md:hidden
          ${isMobileMenuOpen ? 'block' : 'hidden'} text-primary w-full my-element flex flex-col justify-start py-6 -space-y-6 overflow-hidden
          `}
          style={{ height: 0 }}
        >
          {/* Menu links taking up the available screen height */}
          {links.map((link) => {
            return (
              <Link
                key={link.id}
                to={link.href}
                className="menu-link py-4 text-[4.6rem] leading-none tracking-wide font-zentry special-font hover:text-primary"
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
            className={`flex justify-around px-16 min-[480px]:justify-start min-[480px]:px-0 min-[480px]:pt-4 top-full w-full gap-4
            ${isShortViewport ? 'pt-4' : 'absolute'}
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