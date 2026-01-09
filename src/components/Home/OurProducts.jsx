// import React, { useEffect, useState } from "react";
// import Container from "../Shared/Container";
// import { Link } from "react-router";
// import { motion } from "framer-motion";
// const OurProducts = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(`${import.meta.env.VITE_API_URL}/six-card`)
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch(() => setLoading(false));
//   }, []);

//   return (
//     <Container>
//       <div className="my-16">
//         {/* Section Title */}
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-2xl md:text-3xl text-center font-bold mb-10"
//         >
//           Our Products
//         </motion.h1>

//         {/* Loading State */}
//         {loading && (
//           <p className="text-center text-gray-500">Loading products...</p>
//         )}

//         {/* Products Grid */}
//         {!loading && products.length > 0 && (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {products.map((product, index) => (
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 key={product._id}
//                 className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
//               >
//                 {/* Image */}
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-44 object-cover rounded"
//                 />

//                 {/* Name */}
//                 <h2 className="text-lg font-semibold mt-3">{product.name}</h2>

//                 {/* Short Description */}
//                 <p className="text-sm text-gray-600 mt-1">
//                   {product.description}
//                 </p>

//                 {/* Price */}
//                 <p className="font-bold mt-2">$ {product.price}</p>

//                 {/* View Details Button */}
//                 <Link to={`/product-details/${product._id}`}>
//                   <button className="btn bg-[#C9A24D] btn-sm mt-4 w-full">
//                     View Details
//                   </button>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         )}

//         {/* Empty State */}
//         {!loading && products.length === 0 && (
//           <p className="text-center text-gray-500 mt-10">
//             No products available
//           </p>
//         )}
//       </div>
//     </Container>
//   );
// };

// export default OurProducts;

// --------------------------------

import React, { useEffect, useState } from "react"; // router-dom ব্যবহার নিশ্চিত করুন
import { motion } from "framer-motion";
import { FiArrowRight, FiTag } from "react-icons/fi";
import Container from "../Shared/Container";
import { Link } from "react-router";

const OurProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/six-card`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="bg-[#F8FAFC] dark:bg-[#0A2540] py-20 transition-colors duration-300">
      <Container>
        <div className="mb-16 text-center">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#C9A24D] font-bold tracking-[0.3em] uppercase text-xs mb-3"
          >
            Our Collection
          </motion.h4>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold text-[#0A2540] dark:text-[#F5F2EE]"
          >
            Featured Products
          </motion.h1>
          <div className="w-24 h-1 bg-[#C9A24D] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="h-96 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-3xl"
              ></div>
            ))}
          </div>
        )}

        {/* Products Grid */}
        {!loading && products.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-white dark:bg-[#101828] rounded-[2rem] p-4 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-800"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden rounded-[1.5rem] bg-gray-100">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Price Tag Badge */}
                  <div className="absolute top-4 right-4 bg-[#0A2540]/80 dark:bg-[#C9A24D] backdrop-blur-md text-white dark:text-[#0A2540] px-4 py-1.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                    <FiTag className="text-xs" />${product.price}
                  </div>
                </div>

                {/* Content */}
                <div className="px-2 py-6">
                  <div className="flex justify-between items-start mb-2">
                    <h2 className="text-xl font-bold text-[#0A2540] dark:text-[#F5F2EE] line-clamp-1">
                      {product.name}
                    </h2>
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mb-6">
                    {product.description}
                  </p>

                  {/* Action Button */}
                  <Link to={`/product-details/${product._id}`}>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-4 bg-[#F5F2EE] dark:bg-[#0A2540] text-[#0A2540] dark:text-[#C9A24D] font-bold rounded-2xl flex items-center justify-center gap-2 group-hover:bg-[#C9A24D] group-hover:text-white transition-all duration-300"
                    >
                      View Details
                      <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && products.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl font-medium">
              No products available at the moment.
            </p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default OurProducts;
