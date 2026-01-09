import React from "react";
import Button from "../components/Button/Button"; // আপনার তৈরি করা বাটন কম্পোনেন্ট
// import assets from "../assets/logo.png"; // আপনার ইমেজ অ্যাসেটস

const Moments = () => {
  return (
    <div className="min-h-screen">
      {/* --- Hero Section --- */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image/Overlay */}
        <div className="absolute inset-0 bg-[#0A2540] opacity-90">
          <img
            src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070"
            alt="Garments Background"
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>

        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-[#C9A24D] mb-4 tracking-tight">
            The Moment of Elegance
          </h1>
          <p className="text-gray-200 text-lg md:text-xl">
            Experience the fusion of tradition and luxury. Our exclusive winter
            collection is coming soon to redefine your style.
          </p>
        </div>
      </section>

      {/* --- Waitlist Section --- */}
      <section className="py-20 px-4 bg-white dark:bg-[#101828]">
        <div className="max-w-4xl mx-auto bg-[#F5F2EE] dark:bg-[#0A2540] rounded-3xl p-8 md:p-16 shadow-2xl border border-gray-100 dark:border-gray-800 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A2540] dark:text-[#C9A24D] mb-6">
            Join the Exclusive Waitlist
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-10 text-lg">
            Be the first to know when we launch. Join 5000+ fashion enthusiasts
            and get early bird discounts and first access to our premium drops.
          </p>

          <form className="flex flex-col md:flex-row gap-4 items-center justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full md:flex-1 px-6 py-4 rounded-lg bg-white dark:bg-[#101828] border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C9A24D] dark:text-white"
              required
            />
            <div className="w-full md:w-auto">
              <button
                className="btn bg-[#C9A24D] text-[#F8FAFC]"
                label="Join Waitlist"
                onClick={(e) => e.preventDefault()}
              >
                Join Waitlist
              </button>
            </div>
          </form>
          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            *We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      {/* --- Gallery/Moments Preview --- */}
      {/* <section className="py-16 max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-bold mb-8 text-[#0A2540] dark:text-white border-l-4 border-[#C9A24D] pl-4">
          Sneak Peek
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="group relative h-80 overflow-hidden rounded-xl"
            >
              <img
                src={`https://images.unsplash.com/photo-1445205170230-053b83e26371?q=80&w=2071&auto=format&fit=crop`}
                className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                alt="Moment Preview"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white font-medium">
                  Premium Fabric & Stitching
                </p>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default Moments;
