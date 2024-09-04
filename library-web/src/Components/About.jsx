

const AboutMe = () => {
  return (
    <section id="about" className="py-16 px-6 bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-8 md:mb-0 flex justify-center">
          <img
            src="/images/profile.png"
            alt="Profile"
            className="w-48 h-48 rounded-full object-cover shadow-lg border-4 border-white"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-700">
            Hi, I'm Sudhanshu Raj. I'm a Web Developer with a passion for creating beautiful and functional websites. I love working with modern technologies to build interactive and user-friendly web applications. In my spare time, I enjoy exploring new tech trends and experimenting with new recipes. Feel free to explore my portfolio to see some of my work and get in touch!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
