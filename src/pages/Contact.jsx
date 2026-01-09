import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";
import Container from "../components/Shared/Container";

const Contact = () => {
  const contactInfo = [
    { icon: <FiPhone />, label: "Call Us", value: "+880 34 567 890" },
    { icon: <FiMail />, label: "Email Us", value: "support@garments.com" },
    { icon: <FiMapPin />, label: "Visit Us", value: "Dhaka, Bangladesh" },
  ];

  return (
    <div className="bg-[#F5F2EE] dark:bg-[#101828] py-24 transition-colors duration-300">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Side: Contact Information */}
            <div className="w-full lg:w-2/5">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h4 className="text-[#C9A24D] font-bold tracking-[0.2em] uppercase text-sm mb-4">
                  Get In Touch
                </h4>
                <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] dark:text-[#F5F2EE] mb-6">
                  Ready to Start Your{" "}
                  <span className="text-[#C9A24D]">Project?</span>
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 leading-relaxed">
                  Have questions or need support? Our team is always ready to
                  help you with your garment production needs.
                </p>

                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-5 group"
                    >
                      <div className="w-12 h-12 bg-[#0A2540] dark:bg-[#C9A24D] text-white dark:text-[#0A2540] rounded-xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#C9A24D] uppercase tracking-widest">
                          {info.label}
                        </p>
                        <p className="text-lg font-semibold text-[#0A2540] dark:text-gray-200">
                          {info.value}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Side: Contact Form */}
            <div className="w-full lg:w-3/5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-[#0A2540] p-8 md:p-12 rounded-3xl shadow-2xl border border-gray-100 dark:border-gray-800"
              >
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#0A2540] dark:text-gray-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-[#101828] border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C9A24D] dark:text-white transition-all"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-[#0A2540] dark:text-gray-300">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-[#101828] border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C9A24D] dark:text-white transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0A2540] dark:text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="How can we help?"
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-[#101828] border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C9A24D] dark:text-white transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0A2540] dark:text-gray-300">
                      Message
                    </label>
                    <textarea
                      rows="4"
                      placeholder="Write your message here..."
                      className="w-full px-5 py-4 rounded-xl bg-gray-50 dark:bg-[#101828] border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C9A24D] dark:text-white transition-all resize-none"
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-[#C9A24D] text-[#0A2540] font-extrabold rounded-xl shadow-lg hover:shadow-[#C9A24D]/20 flex items-center justify-center gap-3 transition-all"
                  >
                    <FiSend className="text-xl" />
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
