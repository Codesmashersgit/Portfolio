import React from 'react';
import './typewriter.css';

const Hero = () => {
  return (
    <section id="hero" className="h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="text-center text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-7 animate-bounce">Welcome to My Portfolio</h1>
        <p className="text-lg md:text-xl mb-11 typewriter">I'm a Web Developer</p>
        <a href="#projects" className="bg-white text-black px-6 py-4 rounded-full hover:bg-slate-400 transform transition duration-300 hover:scale-150">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
