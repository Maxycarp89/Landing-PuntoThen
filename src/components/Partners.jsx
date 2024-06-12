import { motion } from "framer-motion";
import { checklistItems } from "../constants";

const Workflow = () => {
  const allPartners = [...checklistItems, ...checklistItems];

  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Nuestros{" "}
        <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-transparent bg-clip-text mb-20">
          Partners
        </span>
      </h2>
      <section className="py-16">
        <div className="container mx-auto text-center overflow-hidden">
          <motion.div
            className="flex"
            initial={{ x: 0 }}
            animate={{ x: '-100%' }}
            transition={{
              duration: checklistItems.length * 0.9,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {allPartners.map((partner, index) => (
              <div key={index} className="flex-shrink-0 w-[1/8] mx-4">
                <img src={partner.image} alt={partner.title} className="w-48 h-48 object-contain bg-gradient-to-r from-gray-50 to-slate-50 rounded-full" />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Workflow;
