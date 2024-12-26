import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    width: 0,
    left: 0
  });
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const linksRefs = useRef({});
  const [isHoveringNav, setIsHoveringNav] = useState(false);
  
  const links = [
    { id: 1, text: 'Home', href: '#'},
    { id: 2, text: 'About', href: '#'},
    { id: 3, text: 'Services', href: '#'},
    { id: 4, text: 'Contact', href: '#'}
  ];

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

  useEffect(() => {
    if (linksRefs.current[1]) {
      const firstLink = linksRefs.current[1];
      const rect = firstLink.getBoundingClientRect();
      const parentRect = firstLink.parentElement.getBoundingClientRect();

      setIndicatorStyle({
        width: rect.width,
        left: rect.left - parentRect.left,
      });
    }
  }, []);

  const handleMouseMove = (e) => {
    if (!isHoveringNav) return;

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
      <div className="navbar flex-between bg-primary px-5 py-3 rounded-lg">
        <div>
          <Link>
            <h1 className="font-zentry text-2xl special-font text-secondary cursor-pointer">. / . <b>blenick</b></h1>
          </Link>
        </div>
        
        <button
          className="md:hidden p-2 rounded-lg transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMobileMenuOpen ? (
            <IoClose size={30} className="text-secondary" />
          ) : (
            <CgMenuRight size={30} className="text-secondary" />
          )}
        </button>

        <div
          ref={navRef}
          className={`
            md:flex md:relative gap-4
            ${isMobileMenuOpen ? 'grid' : 'hidden'} grid-cols-2 md:flex-row absolute top-full right-0 bg-primary text-secondary z-10 transition-all duration-200 ease-in-out
          `}
          onMouseEnter={() => setIsHoveringNav(true)}
          onMouseLeave={() => setIsHoveringNav(false)}
          onMouseMove={handleMouseMove}
        >
          <div
            className={`
              absolute pt-2 pb-5 -z-10 rounded-3xl transition-all duration-300 ease-in-out bg-secondary
            `}
            style={{
              width: indicatorStyle.width,
              left: indicatorStyle.left,
              opacity: isHoveringNav ? 1 : 0,
            }}
          />

          <div
            className={`
              absolute pt-3 pb-3 rounded-3xl transition-all duration-300 ease-in-out bg-secondary hidden md:block
            `}
            style={{
              width: indicatorStyle.width,
              left: indicatorStyle.left,
              opacity: isHoveringNav ? 1 : 0,
            }}
          />

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
      </div>
    </div>
  );
};

export default Navbar