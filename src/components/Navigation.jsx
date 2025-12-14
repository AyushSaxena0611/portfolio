import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-gray-800 shadow-lg transition-all duration-300 hover:bg-dark">
      <div className="flex items-center justify-between px-14 py-4">
        <h1 className="text-2xl font-bold text-white">Ayush Saxena</h1>
        
        <div className="flex items-center gap-8">
          <div className="flex gap-4 items-center">
            <a
              href="mailto:ayushsaxena06112000@gmail.com"
              className="text-xs text-gray-300 hover:text-secondary transition-colors duration-300 hidden sm:block"
              title="Email"
            >
              ayushsaxena06112000@gmail.com
            </a>
            <span className="text-gray-600 hidden sm:block">|</span>
            <a
              href="tel:+919140186479"
              className="text-xs text-gray-300 hover:text-secondary transition-colors duration-300 hidden sm:block"
              title="Phone"
            >
              +91-9140186479
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/ayush-saxena-126414226/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-125 hover:text-secondary"
              title="LinkedIn"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png" alt="LinkedIn" className="w-10 h-10" />
            </a>
            <a
              href="https://github.com/AyushSaxena0611"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-125 hover:text-secondary"
              title="GitHub"
            >
              <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" className="w-10 h-10" />
            </a>
          </div>

          <div className="flex gap-6">
            <a href="#projects" className="text-sm uppercase font-semibold text-white hover:text-secondary transition-colors duration-300 hover:scale-110">
              Projects
            </a>
            <a href="#about" className="text-sm uppercase font-semibold text-white hover:text-secondary transition-colors duration-300 hover:scale-110">
              About
            </a>
          </div>

          <button className="px-6 py-2 border-2 border-transparent bg-primary text-white font-semibold uppercase text-sm rounded-full transition-all duration-300 hover:bg-secondary hover:text-primary hover:border-secondary">
            <a href="#contact">Let's Talk</a>
          </button>
        </div>
      </div>
    </nav>
  );
};
