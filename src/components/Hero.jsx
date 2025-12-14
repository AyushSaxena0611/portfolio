import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const TechIcon = ({ src, alt }) => (
  <div className="relative group">
    <img src={src} alt={alt} className="w-24 h-24 object-contain transition-transform duration-300 group-hover:scale-110" />
    <span className="absolute bottom-0 left-0 right-0 text-center text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">
      {alt}
    </span>
  </div>
);

export const Hero = () => {
  const scrollContainerRef = useRef(null);

  const techStack = [
    { src: "https://cdn3d.iconscout.com/3d/free/thumb/free-html-3d-logo-download-in-png-blend-fbx-gltf-file-formats--code-coding-programming-social-media-pack-company-brand-logos-4781249.png", alt: "HTML" },
    { src: "https://w7.pngwing.com/pngs/66/60/png-transparent-web-development-cascading-style-sheets-css3-computer-icons-css-miscellaneous-blue-angle-thumbnail.png", alt: "CSS" },
    { src: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png", alt: "JavaScript" },
    { src: "https://cdn-icons-png.flaticon.com/512/875/875946.png", alt: "Node.js" },
    { src: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg", alt: "MongoDB" },
    { src: "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg", alt: "Express" },
    { src: "https://cdn-icons-png.flaticon.com/512/919/919825.png", alt: "React" },
    { src: "https://www.vectorlogo.zone/logos/angular/angular-icon.svg", alt: "Angular" },
    { src: "https://cdn-icons-png.flaticon.com/512/8127/8127395.png", alt: "AWS" },
  ];

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const moves = container.querySelectorAll('.move');
    moves.forEach((move) => {
      gsap.to(move, {
        x: -move.offsetWidth,
        duration: 15,
        repeat: -1,
        ease: "none",
      });
    });
  }, []);

  return (
    <section className="min-h-screen w-full bg-primary flex flex-col justify-center items-center pt-24">
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-8xl font-black uppercase leading-tight mb-2">
          AYUSH <span className="text-secondary">SAXENA</span>
        </h1>
        <p className="text-2xl text-secondary font-semibold mb-4">Software Engineer @ MAQ Software</p>
        <p className="text-lg text-gray-300 text-center max-w-3xl mx-auto font-light">
          "Cloud architect & full-stack developer specializing in Azure cloud solutions, data engineering pipelines, and scalable applications. Expertise in Databricks, PySpark, C# .NET, and modern web technologies."
        </p>
      </div>

      <div
        ref={scrollContainerRef}
        className="relative w-1/2 mx-auto mt-16 overflow-hidden bg-primary rounded-xl shadow-2xl"
      >
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-primary to-transparent z-10"></div>
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-primary to-transparent z-10"></div>

        <div className="flex gap-8 p-6 w-max animate-scroll">
          <div className="flex gap-8">
            {techStack.map((tech, idx) => (
              <TechIcon key={idx} src={tech.src} alt={tech.alt} />
            ))}
          </div>
          <div className="flex gap-8">
            {techStack.map((tech, idx) => (
              <TechIcon key={`repeat-${idx}`} src={tech.src} alt={tech.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
