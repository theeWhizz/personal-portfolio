import { useRef } from 'react';
import { FaXTwitter, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa6';

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
const Footer = () => {
  const socialsRef = useRef();

  
  return (
    <div className="py-10 mt-10 rounded-t-3xl bg-primary w-screen relative left-1/2 right-1/2 mx-[-50vw]">
      <div className="">
        <div className="grid items-center justify-items-center">
          <h1 className="text-muted font-zentry text-5xl special-font cursor-pointer"><b>blenick</b></h1>
          <div className="">
            <nav className="flex flex-wrap text-muted py-4 justify-center gap-6 lg:gap-12 text-sm">
              <a href="#about" className="font-face text-xl opacity-70 hover:opacity-100 transition-opacity duration-200"><b>About</b></a>
              <a href="#skills" className="font-face text-xl opacity-70 hover:opacity-100 transition-opacity duration-200"><b>Skills</b></a>
              <a href="#projects" className="font-face text-xl opacity-70 hover:opacity-100 transition-opacity duration-200"><b>Projects</b></a>
              <a href="#contact" className="font-face text-xl opacity-70 hover:opacity-100 transition-opacity duration-200"><b>Contact</b></a>
            </nav>
            <div 
              ref={socialsRef}
              className="flex flex-wrap gap-6 pb-10 justify-center">
              {socialLinks.map(({ id, Icon, url, label }) => (
                <button
                  key={id}
                  onClick={() => window.open(url, '_blank')}
                  aria-label={label}
                >
                  <Icon size={30} className='text-muted hover:text-accent transition-all duration-300' />
                </button>
              ))}
            </div>
            <p className='text-center text-muted font-circular-web text-lg'>Copyright <span className='opacity-65'>©</span> {new Date().getFullYear()}  blenick</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer