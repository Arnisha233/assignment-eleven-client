// import React from "react";
// import banner from "../../assets/banner.jpg";
// import { Link } from "react-router";
// import { motion } from "framer-motion";

// const Banner = () => {
//   return (
//     <div>
//       <div
//         className="w-full h-96 bg-cover bg-center bg-[red]"
//         style={{
//           backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${banner})`,
//         }}
//       >
//         <div className="flex flex-col items-center justify-center h-full">
//           <motion.h1
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-white text-4xl"
//           >
//             Garments Order & Production Tracker
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.3 }}
//             className="w-[60%] mx-auto text text-gray-300 text-center my-5"
//           >
//             A comprehensive system designed to streamline the management of
//             garment orders and production processes. It allows businesses to
//             track order status, monitor production progress, manage inventory,
//             and ensure timely delivery—all in a centralized, easy-to-use
//             platform. Ideal for garment manufacturers, suppliers, and retailers
//             seeking efficiency and transparency in their operations.
//           </motion.p>
//           <motion.div
//             initial={{ scale: 0.8, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.6 }}
//           >
//             <Link to="/all-product" className="btn bg-[#C9A24D] text-[#F8FAFC]">
//               View Product
//             </Link>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

// -----------------------------------

import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

// Swiper Components এবং Styles ইমপোর্ট করুন
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// আপনার স্লাইড ডাটা (এখানে ইমেজগুলো পরিবর্তন করে নিন)
const sliderData = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=2070",
    title: "Garments Order & Production Tracker",
    desc: "A comprehensive system designed to streamline the management of garment orders and production processes.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974",
    title: "Eco-Friendly Fabric Selection",
    desc: "We prioritize organic fibers and sustainable manufacturing standards ensuring ethical fashion at its best.",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070",
    title: "Global Supply Chain Excellence",
    desc: "Track order status, monitor production progress, and ensure timely delivery across the globe.",
  },
];

const Banner = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade" // স্মুথ ফেড ট্রানজিশনের জন্য
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-[500px] md:h-[600px]"
      >
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${slide.image})`,
              }}
            >
              <div className="flex flex-col items-center justify-center h-full px-6 max-w-5xl text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-[#F5F2EE] text-3xl md:text-5xl font-bold uppercase tracking-wide"
                >
                  {slide.title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="w-full md:w-[80%] text-gray-300 text-lg my-6 leading-relaxed"
                >
                  {slide.desc}
                </motion.p>

                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <Link
                    to="/all-product"
                    className="px-8 py-3 bg-[#C9A24D] text-[#F8FAFC] rounded-lg font-semibold hover:bg-[#b58f3e] transition shadow-xl"
                  >
                    View Products
                  </Link>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* স্লাইডারের নেভিগেশন বাটনের কালার কাস্টমাইজ করতে (CSS ফাইলে দিতে পারেন) */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        .swiper-button-next, .swiper-button-prev { color: #C9A24D !important; }
        .swiper-pagination-bullet-active { background: #C9A24D !important; }
      `,
        }}
      />
    </div>
  );
};

export default Banner;
