import React from "react";
import { motion } from "framer-motion";
import { FiAperture, FiFeather, FiShield, FiWind } from "react-icons/fi";
import Container from "./Shared/Container";

const materials = [
  {
    id: 1,
    title: "Organic Cotton",
    desc: "Sourced from certified organic farms, ensuring 100% skin-friendly and breathable fabric.",
    icon: <FiFeather />,
  },
  {
    id: 2,
    title: "Sustainable Dyeing",
    desc: "We use eco-friendly, non-toxic dyes that save 40% more water than traditional methods.",
    icon: <FiAperture />,
  },
  {
    id: 3,
    title: "Precision Stitching",
    desc: "Every garment is crafted with high-density stitching for maximum durability and finish.",
    icon: <FiShield />,
  },
  {
    id: 4,
    title: "Eco-Airlight Tech",
    desc: "Our unique manufacturing process creates lightweight garments perfect for any season.",
    icon: <FiWind />,
  },
];

const MaterialsManufacturing = () => {
  return (
    <div className="bg-white dark:bg-[#101828] py-24 transition-colors duration-300 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Image Gallery Style */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <img
                  src="https://images.pexels.com/photos/3734791/pexels-photo-3734791.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Fabric detail"
                  className="rounded-2xl h-64 w-full object-cover shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/4614233/pexels-photo-4614233.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Manufacturing"
                  className="rounded-2xl h-48 w-full object-cover shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.pexels.com/photos/5705490/pexels-photo-5705490.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Quality Check"
                  className="rounded-2xl h-48 w-full object-cover shadow-lg"
                />
                <img
                  src="https://images.pexels.com/photos/3965557/pexels-photo-3965557.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Thread detail"
                  className="rounded-2xl h-64 w-full object-cover shadow-lg"
                />
              </div>
            </motion.div>

            {/* Background Decorative Gold Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#C9A24D]/10 rounded-full blur-[100px] -z-10"></div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-[#C9A24D] font-bold tracking-[0.2em] uppercase text-sm mb-4">
                Excellence in Production
              </h4>
              <h2 className="text-3xl md:text-5xl font-bold text-[#0A2540] dark:text-[#F5F2EE] leading-tight mb-8">
                Materials That Define <br />{" "}
                <span className="text-[#C9A24D]">Our Standard</span>
              </h2>

              {/* Materials List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {materials.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 w-12 h-12 shrink-0 bg-[#F5F2EE] dark:bg-[#0A2540] text-[#C9A24D] rounded-lg flex items-center justify-center text-xl group-hover:bg-[#C9A24D] group-hover:text-white transition-all duration-300 shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-[#0A2540] dark:text-[#F5F2EE] mb-2 group-hover:text-[#C9A24D] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Progress Bar (Experience) */}
              <div className="mt-12 p-6 bg-[#F5F2EE] dark:bg-[#0A2540] rounded-2xl border border-gray-100 dark:border-gray-800">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[#0A2540] dark:text-[#F5F2EE] font-bold">
                    Production Efficiency
                  </span>
                  <span className="text-[#C9A24D] font-bold">98%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "98%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-[#C9A24D]"
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MaterialsManufacturing;
