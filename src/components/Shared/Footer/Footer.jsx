// import React from "react";
// import logo from "../../../assets/logo.jpg";
// const Footer = () => {
//   return (
//     <div>
//       <footer className="px-4 divide-y  text-gray-800 relative bottom-0 left-0">
//         <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
//           <img className="w-[100px] h-[100px]" src={logo} alt="" />
//           <nav className="grid grid-flow-col gap-4">
//             <a className="link link-hover">About us</a>
//             <a className="link link-hover">Contact</a>
//             <a className="link link-hover">Jobs</a>
//             <a className="link link-hover">Press kit</a>
//           </nav>
//           <nav>
//             <div className="grid grid-flow-col gap-4">
//               <a href="https://x.com/" target="_blank">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   className="fill-current"
//                 >
//                   <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
//                 </svg>
//               </a>
//               <a href="https://www.youtube.com/" target="_blank">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   className="fill-current"
//                 >
//                   <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
//                 </svg>
//               </a>
//               <a href="https://www.facebook.com/" target="_blank">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   className="fill-current"
//                 >
//                   <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
//                 </svg>
//               </a>
//             </div>
//           </nav>
//           <aside>
//             <p>
//               Copyright © {new Date().getFullYear()} - All right reserved by
//               Garments Industries Ltd
//             </p>
//           </aside>
//         </footer>
//         <div className="py-6 text-sm text-center text-gray-400">
//           © 2025-2026 Garments Inc. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Footer;

// -------------------------------

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaTiktok,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#F5F2EE] dark:bg-[#0A2540] text-[#0A2540] py-16 px-6 md:px-20 font-sans tracking-tight">
      <div className="max-w-[1400px] mx-auto">
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* 1. Newsletter */}
          <div className="flex flex-col">
            <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase mb-8 text-[#0A2540] dark:text-[#FFFFFF]">
              Fashion
            </h3>
            <p className="text-[14px] leading-relaxed text-[#1A1A1A] mb-6 max-w-[280px] dark:text-[#FFFFFF]">
              Sign up to our newsletter to receive exclusive offers and updates.
            </p>
            <div className="relative mb-4 max-w-[300px]">
              <input
                type="email"
                placeholder="E-mail"
                className="w-full bg-transparent border border-[#C9A24D]/30 p-3 pr-10 outline-none focus:border-[#C9A24D] transition-colors placeholder:text-gray-400 text-[#1A1A1A]"
              />
              <FaRegEnvelope className="absolute right-3 top-1/2 -translate-y-1/2 text-[#C9A24D] w-4 h-4" />
            </div>

            <button
              className="relative overflow-hidden rounded-lg h-12 px-8 
              bg-[#C9A24D] text-white font-bold
              transition duration-300
              hover:shadow-lg hover:brightness-110 active:scale-95 text-sm uppercase tracking-wider"
            >
              Subscribe
            </button>

            {/* Social Icons */}
            <div className="flex gap-6 mt-12 text-[#0A2540]/80 dark:text-[#FFFFFF]">
              <FaFacebookF
                className="cursor-pointer hover:text-[#C9A24D] transition-colors"
                size={16}
              />
              <FaInstagram
                className="cursor-pointer hover:text-[#C9A24D] transition-colors"
                size={16}
              />
              <FaPinterestP
                className="cursor-pointer hover:text-[#C9A24D] transition-colors"
                size={16}
              />
              <FaTiktok
                className="cursor-pointer hover:text-[#C9A24D] transition-colors"
                size={16}
              />
              <FaLinkedinIn
                className="cursor-pointer hover:text-[#C9A24D] transition-colors"
                size={16}
              />
            </div>
          </div>

          {/* 2. Company */}
          <div className="lg:ml-12">
            <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase mb-8 text-[#0A2540] dark:text-[#FFFFFF]">
              Company
            </h3>
            <ul className="space-y-4 text-[14px] text-[#1A1A1A] dark:text-[#FFFFFF]">
              <li>
                <Link
                  to={"/about-us"}
                  className="hover:text-[#C9A24D] transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#C9A24D] transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* 3. Customer Service */}
          <div>
            <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase mb-8 text-[#0A2540] dark:text-[#FFFFFF]">
              Customer Service
            </h3>
            <ul className="space-y-4 text-[14px] text-[#1A1A1A]">
              <li>
                <Link
                  to={"/contact"}
                  className="hover:text-[#C9A24D] transition-colors dark:text-[#FFFFFF]"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#C9A24D] transition-colors dark:text-[#FFFFFF]"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#C9A24D] transition-colors dark:text-[#FFFFFF]"
                >
                  Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#C9A24D] transition-colors dark:text-[#FFFFFF]"
                >
                  Shipping
                </a>
              </li>
            </ul>
          </div>

          {/* 4. Terms and Privacy */}
          <div className="relative">
            <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase mb-8 text-[#0A2540] dark:text-[#FFFFFF]">
              Terms and Privacy
            </h3>
            <ul className="space-y-4 text-[14px] text-[#1A1A1A]">
              <li>
                <a
                  href="#"
                  className="hover:text-[#C9A24D] transition-colors dark:text-[#FFFFFF]"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#C9A24D] transition-colors dark:text-[#FFFFFF]"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#C9A24D] transition-colors dark:text-[#FFFFFF]"
                >
                  Legal Notice
                </a>
              </li>
            </ul>

            {/* Award Badge */}
            <div className="mt-12 lg:mt-0 lg:absolute lg:right-0 lg:bottom-[-20px]">
              <div className="w-24 h-24 border-[1.5px] border-[#C9A24D] rounded-full flex flex-col items-center justify-center p-2 text-center text-[#0A2540] dark:text-[#FFFFFF]">
                <span className="text-[12px] font-bold leading-none">2025</span>
                <span className="text-[8px] font-bold uppercase leading-tight my-1 ">
                  website van het jaar
                </span>
                <span className="text-[8px] italic leading-none">
                  certified
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-10 border-t border-[#0A2540]/10 flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex-1">
            <h2 className="text-xl font-bold tracking-[0.25em] uppercase text-[#0A2540] dark:text-[#FFFFFF]">
              Fashion Garments
            </h2>
          </div>

          {/* Copyright */}
          <div className="flex-1 text-center">
            <p className="text-[10px] text-[#0A2540]/60 dark:text-[#FFFFFF] tracking-[0.1em] uppercase">
              © 2026 - Fashion Garments - ALL RIGHTS RESERVED
            </p>
          </div>

          {/* Payment Icons */}
          <div className="flex-1 flex flex-wrap justify-center md:justify-end gap-2">
            {[1, 2, 3, 4, 5].map((item) => (
              <div
                key={item}
                className="w-10 h-6 bg-[#0A2540]/5 rounded-sm border border-[#0A2540]/10"
              >
                <img
                  src="https://cdn.shopify.com/s/files/1/0668/0274/5589/files/master.png?v=1746176593"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
