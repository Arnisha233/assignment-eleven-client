// import React from "react";
// import Container from "../../Shared/Container";
// import customer from "../../../assets/customer.webp";
// import { motion } from "framer-motion";
// const Customer = () => {
//   return (
//     <div>
//       <Container>
//         <div className="mt-12 gap-9 flex flex-col md:flex-row items-center">
//           <div className="w-[50%] flex flex-col justify-center">
//             <motion.h2
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8 }}
//               className="text-2xl"
//             >
//               Serving Customers With Care
//             </motion.h2>
//             <motion.p
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.6 }}
//               className="mt-6"
//             >
//               We prioritize our customers’ satisfaction. From placing orders to
//               receiving your garments, our dedicated support ensures a smooth
//               and enjoyable shopping experience every step of the way.Hear
//               directly from our satisfied customers! From premium quality
//               garments to on-time delivery, our clients share their experiences
//               to help you shop with confidence.
//             </motion.p>
//           </div>
//           <div className="w-[50%]">
//             <img src={customer} alt="" />
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Customer;

// -------------------------------

import React from "react";
import Container from "../../Shared/Container";
import customer from "../../../assets/customer.webp";
import { motion } from "framer-motion";
import { FiHeart, FiHeadphones, FiCheck } from "react-icons/fi";

const Customer = () => {
  return (
    <div className="py-24 bg-white dark:bg-[#101828] transition-colors duration-300 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-16">
          {/* Left Side: Content */}
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-[#C9A24D] font-bold tracking-[0.2em] uppercase text-sm mb-4">
                Our Commitment
              </h4>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] dark:text-[#F5F2EE] leading-tight">
                Serving Customers <br />{" "}
                <span className="text-[#C9A24D]">With Care</span>
              </h2>

              <p className="mt-8 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                We prioritize our customers’ satisfaction. From placing orders
                to receiving your garments, our dedicated support ensures a
                smooth and enjoyable experience every step of the way.
              </p>

              {/* Feature List */}
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C9A24D]/10 flex items-center justify-center text-[#C9A24D]">
                    <FiHeadphones />
                  </div>
                  <span className="font-medium dark:text-gray-200">
                    24/7 Support
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C9A24D]/10 flex items-center justify-center text-[#C9A24D]">
                    <FiCheck />
                  </div>
                  <span className="font-medium dark:text-gray-200">
                    Quality Assured
                  </span>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 px-10 py-4 bg-[#0A2540] dark:bg-[#C9A24D] text-white dark:text-[#0A2540] rounded-full font-bold shadow-xl transition-all"
              >
                Contact Support
              </motion.button>
            </motion.div>
          </div>

          {/* Right Side: Image with Decorative Elements */}
          <div className="w-full md:w-1/2 relative order-1 md:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              {/* Golden Frame Decoration */}
              <div className="absolute -top-6 -right-6 w-full h-full border-2 border-[#C9A24D] rounded-2xl z-0 hidden md:block"></div>

              <img
                src={customer}
                alt="Customer Care"
                className="relative z-10 rounded-2xl shadow-2xl w-full object-cover"
              />

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-8 -left-8 bg-white dark:bg-[#0A2540] p-6 rounded-2xl shadow-2xl z-20 flex items-center gap-4 border border-gray-100 dark:border-gray-800"
              >
                <div className="w-12 h-12 bg-[#C9A24D] rounded-full flex items-center justify-center text-white text-2xl">
                  <FiHeart />
                </div>
                <div>
                  <h4 className="font-bold text-[#0A2540] dark:text-white">
                    100% Happy
                  </h4>
                  <p className="text-xs text-gray-500">Customer Satisfaction</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Customer;
