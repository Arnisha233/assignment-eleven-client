// import React, { useEffect, useState } from "react";
// import Container from "../Shared/Container";
// import { motion } from "framer-motion";
// const feedbacks = [
//   {
//     id: 1,
//     name: "Rahim Uddin",
//     comment: "Excellent quality garments and fast delivery!",
//   },
//   {
//     id: 2,
//     name: "Karima Akter",
//     comment: "Very professional service. Highly recommended.",
//   },
//   {
//     id: 3,
//     name: "Jahid Hasan",
//     comment: "Production quality was top-notch and reliable.",
//   },
// ];

// const CustomerFeedback = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % feedbacks.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <Container>
//       <div className="my-20">
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-2xl md:text-3xl font-bold text-center mb-10"
//         >
//           Customer Feedback
//         </motion.h1>

//         <div className="max-w-xl mx-auto border rounded-lg p-6 text-center shadow-sm">
//           <p className="text-gray-600 italic mb-4">
//             "{feedbacks[index].comment}"
//           </p>
//           <h3 className="font-semibold">— {feedbacks[index].name}</h3>
//         </div>
//       </div>
//     </Container>
//   );
// };

// export default CustomerFeedback;

// -------------------------------------

import React, { useEffect, useState } from "react";
import Container from "../Shared/Container";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const feedbacks = [
  {
    id: 1,
    name: "Rahim Uddin",
    role: "Fashion Retailer",
    comment:
      "Excellent quality garments and fast delivery! The attention to detail in their stitching is truly remarkable.",
  },
  {
    id: 2,
    name: "Karima Akter",
    role: "Boutique Owner",
    comment:
      "Very professional service. Their production process is transparent, and the final products always exceed expectations.",
  },
  {
    id: 3,
    name: "Jahid Hasan",
    role: "Supply Chain Manager",
    comment:
      "Production quality was top-notch and reliable. They are our go-to partner for all premium garment orders.",
  },
];

const CustomerFeedback = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % feedbacks.length);
    }, 5000); // কাস্টমার যেন পড়ার সময় পায় তাই ৫ সেকেন্ড দেওয়া হয়েছে

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white dark:bg-[#101828] py-24 transition-colors duration-300 overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[#C9A24D] font-medium tracking-widest uppercase text-sm mb-2"
            >
              Testimonials
            </motion.h2>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-[#0A2540] dark:text-[#F5F2EE]"
            >
              Voices of Satisfaction
            </motion.h1>
          </div>

          {/* Feedback Card Container */}
          <div className="relative min-h-[350px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={feedbacks[index].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="w-full bg-[#F5F2EE] dark:bg-[#0A2540] rounded-3xl p-8 md:p-16 text-center shadow-2xl relative"
              >
                {/* Decorative Quote Icon */}
                <div className="absolute top-6 left-10 text-[#C9A24D]/20 text-6xl">
                  <FaQuoteLeft />
                </div>

                <div className="relative z-10">
                  <p className="text-[#0A2540] dark:text-gray-200 text-xl md:text-2xl italic leading-relaxed mb-8">
                    "{feedbacks[index].comment}"
                  </p>

                  <div className="flex flex-col items-center">
                    {/* Placeholder for Avatar/Image */}
                    <div className="w-16 h-16 bg-[#C9A24D] rounded-full mb-4 border-4 border-white dark:border-[#101828] flex items-center justify-center text-white font-bold text-xl">
                      {feedbacks[index].name.charAt(0)}
                    </div>

                    <h3 className="text-[#0A2540] dark:text-[#C9A24D] font-bold text-xl uppercase tracking-wider">
                      {feedbacks[index].name}
                    </h3>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {feedbacks[index].role}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Pagination Dots */}
            <div className="absolute -bottom-10 flex gap-2">
              {feedbacks.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 transition-all duration-300 rounded-full ${
                    index === i
                      ? "w-8 bg-[#C9A24D]"
                      : "w-2 bg-gray-300 dark:bg-gray-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CustomerFeedback;
