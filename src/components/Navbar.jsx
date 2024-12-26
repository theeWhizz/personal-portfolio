import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import SocialMediaIconsGallery from "./SocialMediaIconsGallery";
import  { SocialMediaIcons }  from "./SocialMediaData";
import { FaGithub, FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

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
        <div className={`md:hidden
          ${isMobileMenuOpen ? 'block' : 'hidden'} text-primary w-full my-element flex flex-col justify-start py-6 -space-y-6
          `}
        >
          {/* Menu links taking up the available screen height */}
          {links.map((link) => {
            return (
              <Link
                key={link.id}
                to={link.href}
                className="py-4 text-[4.6rem] leading-none tracking-wide font-zentry special-font hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <b>{link.text}</b>
              </Link>
            );
          })}

          {/* Social Media Icons */}
          {/* <SocialMediaIconsGallery images={SocialMediaIcons} /> */}
          <div className={`flex justify-around px-16 min-[480px]:justify-start min-[480px]:px-0 min-[480px]:pt-4 top-full w-full gap-4
            ${isShortViewport ? 'pt-4' : 'absolute'}
            `}>
            <FaXTwitter size={36} style={{}} className="text-primary" onClick={() => window.open('https://twitter.com/blenick', '_blank')} />
            <FaWhatsapp size={36} style={{}} className="text-primary" onClick={() => window.open('https://wa.me/+254704250557', '_blank')} />
            <FaGithub size={36} style={{}} className="text-primary" onClick={() => window.open('https://github.com/theeWhizz', '_blank')} />
            <FaInstagram size={36} style={{}} className="text-primary" onClick={() => window.open('https://www.instagram.com/_blenick/', '_blank')} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar