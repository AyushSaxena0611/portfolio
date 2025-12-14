import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "GitOps CI/CD Pipeline",
      description: "Automated Build & Deployment Workflow",
      link: "https://github.com/AyushSaxena0611",
      image: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517afda8a/topics/jenkins/jenkins.png",
      details: "Built and executed a Jenkins CI/CD pipeline integrated with GitHub for automated build and deployment workflows. Leveraged Docker for containerization and deployed services using AWS CLI, following GitOps principles.",
      tech: ["Jenkins", "Docker", "GitHub", "AWS CLI", "CI/CD", "AWS"]
    },
    {
      id: 2,
      title: "Rely-Cab Booking System",
      description: "Intelligent Cab Booking Platform",
      link: "https://github.com/AyushSaxena0611/rely-cabs",
      image: "https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_474,h_593/v1684852612/assets/ba/4947c1-b862-400e-9f00-668f4926a4a2/original/Ride-with-Uber.png",
      details: "Created a cab booking platform with user registration, ride booking, and real-time tracking. Integrated Dijkstra's Algorithm for optimal route planning and cost-efficient ride calculations.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "Algorithms"]
    },
    {
      id: 3,
      title: "Data Ingestion & Analytics Pipeline",
      description: "Automated Azure Cloud Data Solutions",
      link: "https://github.com/AyushSaxena0611",
      image: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
      details: "Designed automated pipelines in Azure Data Factory for large dataset ingestion. Used Databricks PySpark for transformations and stored results in Delta tables (ADLS Gen2), reducing manual effort by 95%.",
      tech: ["Azure Data Factory", "Databricks", "PySpark", "Azure Synapse", "SQL", "ADLS Gen2"]
    }
  ];

  const projectRefs = useRef([]);

  useEffect(() => {
    projectRefs.current.forEach((elem) => {
      if (!elem) return;

      elem.addEventListener("mouseenter", () => {
        const img = elem.querySelector('img');
        if (img) {
          gsap.to(img, { opacity: 1, scale: 1, duration: 0.3 });
        }
      });

      elem.addEventListener("mouseleave", () => {
        const img = elem.querySelector('img');
        if (img) {
          gsap.to(img, { opacity: 0, scale: 0, duration: 0.3 });
        }
      });

      elem.addEventListener("mousemove", (dets) => {
        const img = elem.querySelector('img');
        if (img) {
          gsap.to(img, {
            x: dets.x - elem.getBoundingClientRect().x - 45,
            y: dets.y - elem.getBoundingClientRect().y - 50,
            duration: 0.1
          });
        }
      });
    });
  }, []);

  return (
    <section id="projects" className="min-h-screen w-full bg-primary py-24 px-24">
      <div className="flex gap-16">
        <div className="w-2/5">
          <h2 className="text-5xl font-bold text-white mb-8">Projects :</h2>
          <img
            src="https://darkproject.eu/images/detailed/9/WEB___KD___EU___ISO___87.2_1u80-b1.png"
            alt="Projects"
            className="w-full rounded-lg opacity-40"
          />
        </div>

        <div className="w-3/5 space-y-6">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[idx] = el)}
              className="relative py-6 border-l-4 border-secondary bg-dark bg-opacity-50 cursor-pointer group transition-all duration-300 hover:bg-opacity-100 rounded-lg p-6"
            >
              <h3 className="text-2xl font-bold text-white group-hover:text-secondary transition-colors duration-300 mb-1">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {project.title}
                </a>
              </h3>
              <p className="text-secondary text-sm font-semibold mb-2">{project.description}</p>
              <p className="text-gray-300 mb-4 text-sm">{project.details}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs bg-secondary bg-opacity-20 text-secondary px-3 py-1 rounded-full hover:bg-opacity-40 transition-all duration-300">
                    {tech}
                  </span>
                ))}
              </div>
              <img
                src={project.image}
                alt={project.title}
                className="w-40 h-40 rounded-lg object-cover absolute opacity-0 scale-0 pointer-events-none shadow-2xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
