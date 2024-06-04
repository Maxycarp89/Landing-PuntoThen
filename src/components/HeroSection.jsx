import logo from "../assets/profile-pictures/logodevsoft.png"



const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <div className="flex flex-col sm:flex-row items-center justify-center w-full">
        <img src={logo} className="w-48 h-48 m-0 p-0 sm:w-72 md:w-96 lg:w-96" alt="logo" />
        <h1 className="text-5xl sm:text-6xl lg:text-7xl text-center tracking-wide sm:ml-[-6.9rem] mt-4 sm:mt-0 md:ml-[-5.9rem]">
          STUDIO <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-transparent bg-clip-text transition-transform duration-300 hover:scale-105">DEVSOFT</span>
        </h1>
      </div>
    <h3 className="text-white p-2 m-2">SOLUCIONES WEB INNOVADORAS</h3>
      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
Creando experiencias digitales con un toque de creatividad.
En  <span className="text-white"> STUDIO DEVSOFT</span> nos especializamos en diseñar y desarrollar sitios web de vanguardia que cautiven y atraigan a los usuarios. Nuestro equipo de expertos está dedicado a hacer realidad su visión a través de soluciones web con las mejores tecnologías.
      </p>
      <div className="flex justify-center my-12">
        <a
          href="#"
          className="bg-gradient-to-r from-cyan-500 to-emerald-500 py-4 px-8 rounded-md text-white transition-transform duration-300 hover:scale-105"
        >
          Consultá ahora
        </a>
      </div>
      <div className="flex mt-10 justify-center"></div>
    </div>
  );
};

export default HeroSection;