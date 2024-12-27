// import { useState } from 'react';
import { CgMenuRight } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const AnimatedMenuButton = ( { isOpen, onClick, variant = 'rotate'} ) => {
  const transitions = {
    // Rotation and fade
    rotate: {
      wrapper: 'relative size-8',
      icon: `absolute top-0 right-0 transition-all duration-300 ease-in-out
      ${isOpen
        ? 'rotate-180 opacity-0'
        : 'rotate-0 opacity-100'
      }`,
      closeIcon: `absolute top-0 right-0 transition-all duration-300 ease-in-out
      ${isOpen
        ? 'rotate-0 opacity-100'
        : 'rotate-180 opacity-0'
      }`,
    },

    // scale and crossfade
    scale: {
      wrapper: 'relative size-8',
      icon: `absolute top-0 right-0 transition-all duration-300 ease-in-out
      ${isOpen
        ? 'scale-50 opacity-0'
        : 'scale-100 opacity-100'
      }`,
      closeIcon: `absolute top-0 right-0 transition-all duration-300 ease-in-out
      ${isOpen
        ? 'scale-100 opacity-100'
        : 'scale-50 opacity-0'
      }`
    },

    // Slide transition
    slide: {
      wrapper: 'relative size-8 overflow-hidden',
      icon: `absolute transition-all duration-300 ease-in-out
      ${isOpen
        ? 'translate-y-0 opacity-0'
        : 'translate-y-full opacity-100'
      }`
    },

    // Flip transition
    flip: {
      wrapper: 'relative size-8 perspective-500',
      icon: `absolute top-0 right-0 transition-all duration-300 ease-in-out
      ${isOpen
        ? 'rotate-X-180 opacity-0'
        : 'rotate-X-0 opacity-100'
      }`,
      closeIcon: `absolute top-0 right-0 transition-all duration-300 ease-in-out
      ${isOpen
        ? 'rotateX-0 opacity-100'
        : 'rotateX-180 opacity-0'
      }`
    }
  };

  const style = transitions[variant];

  return (
    <button
      className={style.wrapper}
      onClick={onClick}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      <CgMenuRight
        size={36}
        className={`text-secondary ${style.icon}`}
      />
      <IoClose
        size={36}
        className={`text-secondary ${style.closeIcon}`}
      />
    </button>
  );
};

export default AnimatedMenuButton