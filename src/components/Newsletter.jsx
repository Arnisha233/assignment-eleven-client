import React from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import Container from "./Shared/Container";

const Newsletter = () => {
  return (
    <div className="bg-[#0A2540] dark:bg-[#101828] py-20 transition-colors duration-300">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 md:p-12 rounded-3xl bg-[#0A2540]/80 dark:bg-[#101828]/80 backdrop-blur-sm border border-gray-700 dark:border-gray-800 shadow-2xl relative overflow-hidden"
          >
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-10 dark:opacity-5 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#C9A24D 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            ></div>

            <div className="relative z-10">
              <div className="w-16 h-16 mx-auto mb-6 bg-[#C9A24D] rounded-full flex items-center justify-center text-white text-3xl shadow-lg">
                <FiMail />
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-[#F5F2EE] mb-4">
                Join Our Inner Circle
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Be the first to know about new arrivals, exclusive offers, and
                behind-the-scenes content from our luxury collection.
              </p>

              {/* Subscription Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full sm:w-2/3 px-6 py-4 rounded-full bg-white text-[#0A2540] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#C9A24D] transition-all"
                  required
                />
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: "#b58f3e" }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full sm:w-1/3 px-8 py-4 bg-[#C9A24D] text-[#0A2540] font-bold rounded-full shadow-lg transition-all"
                >
                  Subscribe
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Newsletter;
