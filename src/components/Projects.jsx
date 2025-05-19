import React from 'react'
import GreenZone from '../assets/images/projects/greenzone.png';
import WanderVietnam from "../assets/images/projects/wander.png";
import CatMusic from "../assets/images/projects/catmusic.png";
import TPets from "../assets/images/projects/tpets.png";

const projects = [
  {
    id: 1,
    title: "Green Zone",
    description:
      "An online beverage ordering app that allows users to track orders, place quick orders, and choose from multiple payment methods and pickup options.",
    image: GreenZone,
    technologies: ["React Native", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/GreenZone-FPL",
  },
  {
    id: 2,
    title: "Wander Vietnam (Việt Adventure)",
    description:
      "A groundbreaking application that promotes tourism by providing useful information, exciting experiences, and connecting travelers with amazing destinations across Vietnam.",
    image: WanderVietnam,
    technologies: ["React Native", "Node.js", "Express", "MongoDB", "Firebase"],
    github: "private",
  },
  {
    id: 3,
    title: "CatMusic",
    description:
      "A music streaming application with a user-friendly interface, personalized libraries, and seamless playback experience.",
    image: CatMusic,
    technologies: ["Android Native", "SQLite", "Java"],
    github: "https://github.com/Tanniiee/DuAn1",
  },
  {
    id: 4,
    title: "Pet Sales Website (T-Pets)",
    description:
      "A pet sales website with a user-friendly interface, providing product information, promotions, and a shopping cart feature.",
    image: TPets,
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Tanniiee/ASM_JS_FINAL",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((projects) => (
            <div
              key={projects.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={projects.image}
                alt={projects.title}
                className="mb-4 w-full h-48 object-contain mt-6 rounded-lg"
              />
              <h3 className="text-2xl font-bold mb-2">{projects.title}</h3>
              {projects.technologies && projects.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {projects.technologies.map((tech, index) => (
                    <span key={index} className="text-gray-400 mb-4">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <a
                href={projects.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects
