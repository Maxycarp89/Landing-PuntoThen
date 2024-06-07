import { features } from "../constants";
import { motion } from 'framer-motion';

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px] animate-fade-up animate-once">
       <div 
       className="text-center"

       >
        <span className="bg-neutral-900 text-cyan-500 rounded-full h-6 text-xl font-extralight px-2 py-1 uppercase animate-fade-left animate-normal">
          Nuestros Servicios
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Descubre cómo{" "}
          <span className="bg-gradient-to-r from-cyan-500 to-emerald-800 text-transparent bg-clip-text animate-fade-right animate-normal">
            podemos ayudarte
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/3 p-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: index * 0.1 }}
          >
            <div className="card flex flex-col items-center bg-neutral-800 rounded-lg overflow-hidden h-full transition-transform duration-300 hover:scale-105">
              <div className="flex justify-center items-center h-16 w-16 p-2 bg-neutral-900 text-cyan-500 rounded-full mt-4">
                {feature.icon}
              </div>
              <img src={feature.image} alt="" className="w-full h-40 object-cover mt-4"/>
              <h5 className="mt-4 text-xl text-center">{feature.text}</h5>
              <p className="text-md p-4 text-neutral-500 text-center">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
