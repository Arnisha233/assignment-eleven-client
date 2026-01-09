import React from "react";
import assets from "../assets/assets";

const Brand = () => {
  return (
    <div className="dark-bg-[#101828] text-white min-h-screen font-sans">
      {/* Section 1: The Brand (Image on Left, Text on Right) */}
      <section className="py-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-[500px] h-[600px] overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={assets.brand_cloth}
            alt="Premium Hoodie"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-[#0A2540] dark:text-[#F5F2EE]  text-3xl font-bold uppercase tracking-widest">
            The Brand
          </h2>
          <p className="text-[#0A2540] dark:text-gray-300 leading-relaxed text-lg">
            We believe in fashion with a soul. Based on the principles of
            sustainability and superior quality, we create premium clothing for
            the conscious individual. Our unique design language blends ethical
            production with high-end aesthetics, ensuring that luxury and
            responsibility go hand in hand.
          </p>
        </div>
      </section>

      {/* Section 2: Sustainable Production (Text on Left, Certification Cards on Right) */}
      <section className="py-20 dark:bg-[#101828] px-6">
        {/* flex-col মোবাইলে নিচ নিচ রাখবে, md:flex-row ডেস্কটপে পাশাপাশি আনবে */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">
          {/* বাম পাশের টেক্সট: md:sticky ব্যবহার করা হয়েছে যেন মোবাইলে এটি স্বাভাবিক থাকে */}
          <div className="w-full md:w-1/2 flex flex-col justify-center md:sticky md:top-32 md:min-h-[300px]">
            <h2 className="text-[#0A2540] dark:text-[#F5F2EE] text-3xl font-bold uppercase tracking-widest mb-6 text-left">
              Sustainable Production
            </h2>
            <p className="text-[#0A2540] dark:text-gray-300 leading-relaxed text-lg text-left">
              We strive to make our products as sustainable as possible and as
              such incorporate various standards in textile manufacturing. We
              choose to use organic fibers wherever possible and ensure all
              clothing is made in an ethical manner, with workers earning above
              living wage in healthy and safe working environments.
            </p>
          </div>

          {/* ডান পাশের কার্ডগুলো: মোবাইলে এগুলো অটোমেটিক নিচে চলে যাবে */}
          <div className="w-full md:w-1/2 space-y-6">
            {[
              {
                title: "Fair Wear Foundation",
                desc: "Fair Wear seeks to improve labour conditions in the garment industry.",
              },
              {
                title: "Oeko Tex",
                desc: "OEKO-TEX® STANDARD 100 is one of the world's best-known labels for textiles.",
              },
              {
                title: "Global Organic Textile Standard",
                desc: "The worldwide leading textile processing standard for organic fibres.",
                link: "global-standard.org",
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-[#0A2540] border border-gray-800 p-6 md:p-8 rounded-xl hover:border-[#C9A24D] transition group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-[#0A2540] rounded-lg flex items-center justify-center border border-[#C9A24D]">
                    <span className="text-[#C9A24D] font-bold">★</span>
                  </div>
                  {card.link && (
                    <a
                      href={`https://${card.link}`}
                      target="_blank"
                      className="text-gray-500 text-sm hover:text-[#C9A24D] flex items-center gap-1"
                    >
                      {card.link} <span className="text-xs">↗</span>
                    </a>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#C9A24D] text-white">
                  {card.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Ecological Impact (Boxes on Left, Text on Right) */}
      <section className="py-20 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <div className="bg-[#0A2540] h-64 rounded-2xl flex flex-col items-center justify-center border border-gray-800 p-6 text-center">
            <div className="mb-4 text-[#C9A24D] text-4xl font-light">FSC</div>
            <a
              href="#"
              className="text-xs uppercase tracking-widest text-gray-400 hover:text-white"
            ></a>
          </div>
          <div className="bg-[#0A2540] h-64 rounded-2xl flex flex-col items-center justify-center border border-gray-800 p-6 text-center">
            <div className="mb-4 text-[#C9A24D] text-4xl">✨</div>
            <a
              href="#"
              className="text-xs uppercase tracking-widest text-gray-400 hover:text-white"
            ></a>
          </div>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-[#0A2540] dark:text-[#F5F2EE] text-3xl font-bold uppercase tracking-widest mb-6">
            Ecological Impact
          </h2>
          <p className="text-[#0A2540] dark:text-gray-300 leading-relaxed text-lg">
            In providing sustainable clothing, packaging and transport play a
            large role. To minimize our ecological impact, we use exclusively
            paper based packaging materials sourced from sustainably managed
            forests.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Brand;
