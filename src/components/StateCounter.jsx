import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { FiUsers, FiBox, FiClock, FiGlobe } from "react-icons/fi";
import Container from "./Shared/Container";

const stats = [
  {
    id: 1,
    label: "Global Clients",
    value: 500,
    suffix: "+",
    icon: <FiUsers />,
  },
  {
    id: 2,
    label: "Garments Produced",
    value: 1,
    suffix: "M+",
    icon: <FiBox />,
  },
  {
    id: 3,
    label: "Years Experience",
    value: 12,
    suffix: "+",
    icon: <FiClock />,
  },
  {
    id: 4,
    label: "On-time Delivery",
    value: 99,
    suffix: "%",
    icon: <FiGlobe />,
  },
];

const StatsCounter = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div className="bg-[#0A2540] py-20 transition-colors duration-300 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-[#C9A24D] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#C9A24D] rounded-full blur-[120px]"></div>
      </div>

      <Container>
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 mx-auto mb-6 bg-[#C9A24D]/10 text-[#C9A24D] rounded-2xl flex items-center justify-center text-3xl group-hover:bg-[#C9A24D] group-hover:text-[#0A2540] transition-all duration-500 shadow-lg border border-[#C9A24D]/20">
                {stat.icon}
              </div>

              {/* Number with CountUp */}
              <h2 className="text-4xl md:text-5xl font-bold text-[#F5F2EE] mb-2">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={3}
                    suffix={stat.suffix}
                  />
                ) : (
                  "0"
                )}
              </h2>

              {/* Label */}
              <p className="text-[#C9A24D] font-medium uppercase tracking-[0.2em] text-xs">
                {stat.label}
              </p>

              {/* Decorative line */}
              <div className="w-12 h-1 bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default StatsCounter;
