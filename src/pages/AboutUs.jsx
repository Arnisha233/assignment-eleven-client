import React from "react";
import about_us from "../assets/about-us.webp";
import { motion } from "framer-motion";
import Container from "../components/Shared/Container";

const AboutUs = () => {
  return (
    <div className="dark:bg-[#101828] py-24 relative overflow-hidden transition-colors duration-300">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A24D]/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#C9A24D]/5 rounded-full blur-[120px]"></div>

      <Container>
        <div className="flex flex-col items-center justify-center relative z-10">
          {/* Section Subtitle */}
          <motion.p
            initial={{ opacity: 0, tracking: "0.1em" }}
            whileInView={{ opacity: 1, tracking: "0.3em" }}
            transition={{ duration: 1 }}
            className="text-[#C9A24D] uppercase font-semibold text-xs mb-4 tracking-[0.3em]"
          >
            Our Philosophy
          </motion.p>

          {/* Main Title with Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[#F5F2EE] text-3xl md:text-5xl font-bold text-center mb-12 max-w-2xl leading-tight"
          >
            “Crafting Quality,{" "}
            <span className="text-[#C9A24D]">Stitch by Stitch</span>”
          </motion.h1>

          {/* Image with Frame Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full max-w-5xl group"
          >
            <div className="absolute -inset-2 border border-[#C9A24D]/30 rounded-2xl group-hover:inset-0 transition-all duration-500"></div>
            <img
              src={about_us}
              alt="About Us"
              className="rounded-xl shadow-2xl w-full object-cover max-h-[500px]"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/60 via-transparent to-transparent rounded-xl"></div>
          </motion.div>

          {/* Description Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-[-60px] md:mt-[-100px] relative z-20 w-[90%] md:w-[75%] bg-white/10 dark:bg-[#101828]/80 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-center"
          >
            <p className="text-[#F5F2EE] text-lg md:text-xl leading-relaxed italic font-light">
              “At <span className="text-[#C9A24D] font-bold">Garments</span>, we
              believe that every piece of clothing tells a story. From selecting
              premium fabrics to designing timeless styles, we are dedicated to
              providing our customers with high-quality garments that combine
              comfort, style, and durability. Our mission is to make fashion
              accessible, sustainable, and meaningful, ensuring that every
              stitch reflects our commitment to excellence.”
            </p>

            {/* Decorative Gold Line */}
            <div className="w-20 h-1 bg-[#C9A24D] mx-auto mt-8 rounded-full"></div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default AboutUs;
