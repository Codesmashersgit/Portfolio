
import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Spotify-Clone',
    image: '/images/spotify.png',
    description: 'This project is a Spotify clone that replicates the core features of the popular music streaming platform. Enjoy uninterrupted music playback with controls like play and pause.',
  },
  {
    id: 2,
    title: 'E-Commerce',
    image: '/images/music.png',
    description: 'A sound purchasing platform where users can browse and buy audio products like speakers and headphones with a price alert feature that notifies users via email or SMS when prices drop, improving customer satisfaction.',
  },
  {
    id: 3,
    title: 'Startup-Project',
    image: '/images/doctor.png',
    description: 'Welcome to our innovative doctor consultation platform, a startup project dedicated to revolutionizing healthcare access. Our platform connects patients with qualified doctors for seamless consultations, provides medical prescriptions in a document format, and securely saves medical records.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`bg-gray-100 p-6 rounded-lg shadow-md transform transition duration-500 hover:scale-105 relative ${
                project.id === 3 ? 'border-4 border-red-500' : ''
              }`}
            >
              {project.id === 3 && (
                <span className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded-bl-lg">
                  In Progress
                </span>
              )}
              <h3 className="text-2xl font-bold mb-7">{project.title}</h3>
              <img
                src={project.image}
                className="w-full bg-cover mb-2"
                alt={project.title}
              />
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


