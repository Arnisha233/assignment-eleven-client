import React from "react";
import { motion } from "framer-motion";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Container from "./Shared/Container";

const craftsmen = [
  {
    id: 1,
    name: "Rahim Mia",
    role: "Master Tailor",
    exp: "20+ Years Experience",
    // Working Image Link (Tailor at work)
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Karima Begum",
    role: "Fabric Expert",
    exp: "15+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976",
  },
  {
    id: 3,
    name: "Jahid Hasan",
    role: "Quality Control",
    exp: "12+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974",
  },
  {
    id: 4,
    name: "Fatema Akter",
    role: "Lead Designer",
    exp: "10+ Years Experience",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974",
  },
];

const Meet = () => {
  return (
    <div className="bg-[#F5F2EE] dark:bg-[#101828] py-24 transition-colors duration-300">
      <Container>
        {/* Header Section */}
        <div className="mb-16 text-left">
          <motion.h4
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#C9A24D] font-bold tracking-[0.3em] uppercase text-xs mb-3"
          >
            Behind the Seams
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-[#0A2540] dark:text-[#F5F2EE]"
          >
            Meet Our Craftsmen
          </motion.h2>
          <div className="w-20 h-1.5 bg-[#C9A24D] mt-6 rounded-full"></div>
        </div>

        {/* Craftsmen Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {craftsmen.map((person, index) => (
            <motion.div
              key={person.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group bg-white dark:bg-[#0A2540] rounded-2xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-800"
            >
              {/* Image Section */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                {/* Social Overlay */}
                <div className="absolute inset-0 bg-[#0A2540]/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-3 bg-white text-[#0A2540] rounded-full hover:bg-[#C9A24D] hover:text-white transition">
                    <FaLinkedinIn />
                  </button>
                  <button className="p-3 bg-white text-[#0A2540] rounded-full hover:bg-[#C9A24D] hover:text-white transition">
                    <FaInstagram />
                  </button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A2540] dark:text-[#F5F2EE] group-hover:text-[#C9A24D] transition-colors">
                  {person.name}
                </h3>
                <p className="text-[#C9A24D] text-sm font-semibold mb-3">
                  {person.role}
                </p>
                <p className="text-gray-500 dark:text-gray-400 text-sm italic">
                  {person.exp}
                </p>
              </div>

              {/* Bottom Decorative Line */}
              <div className="h-1 bg-[#C9A24D] w-0 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Meet;
