// import React from "react";
// import Container from "../Shared/Container";
// import { motion } from "framer-motion";
// const HowItWork = () => {
//   const steps = [
//     {
//       title: "Place Order",
//       desc: "Customer places an order through our platform.",
//     },
//     {
//       title: "Production Starts",
//       desc: "Our factory begins garment production with quality materials.",
//     },
//     {
//       title: "Quality Check",
//       desc: "Each product goes through strict quality inspection.",
//     },
//     {
//       title: "Delivery",
//       desc: "Finished products are delivered on time to the customer.",
//     },
//   ];

//   return (
//     <Container>
//       <div className="my-20">
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-2xl md:text-3xl font-bold text-center mb-12"
//         >
//           How It Works
//         </motion.h1>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//           {steps.map((step, index) => (
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               key={step.id}
//               className="border rounded-lg p-6 text-center shadow-sm"
//             >
//               <div className="text-3xl font-bold text-primary mb-3">
//                 {step.id}
//               </div>
//               <h2 className="font-semibold text-lg mb-2">{step.title}</h2>
//               <p className="text-sm text-gray-600">{step.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default HowItWork;

// -------------------------------

import React from "react";
import Container from "../Shared/Container";
import { motion } from "framer-motion";
import {
  FiShoppingCart,
  FiSettings,
  FiCheckCircle,
  FiTruck,
} from "react-icons/fi";

const HowItWork = () => {
  const steps = [
    {
      id: "01",
      title: "Place Order",
      desc: "Customer places an order through our platform seamlessly.",
      icon: <FiShoppingCart />,
    },
    {
      id: "02",
      title: "Production Starts",
      desc: "Our factory begins garment production with premium materials.",
      icon: <FiSettings />,
    },
    {
      id: "03",
      title: "Quality Check",
      desc: "Each product goes through strict 10-point quality inspection.",
      icon: <FiCheckCircle />,
    },
    {
      id: "04",
      title: "Delivery",
      desc: "Finished products are delivered on time to your doorstep.",
      icon: <FiTruck />,
    },
  ];

  return (
    <div className="py-24 transition-colors duration-300">
      <Container>
        <div className="relative">
          {/* Header Section */}
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#C9A24D] font-bold tracking-[0.2em] uppercase text-sm mb-3"
            >
              Process
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-5xl font-bold text-[#0A2540] dark:text-[#F5F2EE]"
            >
              How It Works
            </motion.h1>
            <div className="w-24 h-1 bg-[#C9A24D] mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group bg-white dark:bg-[#101828] p-8 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800 text-center relative overflow-hidden"
              >
                {/* Background Number Decoration */}
                <span className="absolute -right-4 -top-4 text-8xl font-bold text-gray-50 dark:text-gray-900 group-hover:text-[#C9A24D]/10 transition-colors pointer-events-none">
                  {step.id}
                </span>

                {/* Icon Container */}
                <div className="w-16 h-16 bg-[#F5F2EE] dark:bg-[#0A2540] text-[#C9A24D] rounded-xl flex items-center justify-center text-3xl mx-auto mb-6 shadow-inner group-hover:bg-[#C9A24D] group-hover:text-white transition-all duration-300">
                  {step.icon}
                </div>

                <h2 className="font-bold text-xl mb-3 text-[#0A2540] dark:text-[#F5F2EE] group-hover:text-[#C9A24D] transition-colors">
                  {step.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {step.desc}
                </p>

                {/* Bottom Border Glow */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-[#C9A24D] group-hover:w-full transition-all duration-500"></div>
              </motion.div>
            ))}
          </div>

          {/* Decorative Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800 -translate-y-1/2 z-0"></div>
        </div>
      </Container>
    </div>
  );
};

export default HowItWork;
