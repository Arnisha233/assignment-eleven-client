import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 dark:border-gray-800">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg md:text-xl font-medium text-[#0A2540] dark:text-[#F5F2EE] group-hover:text-[#C9A24D] transition-colors">
          {question}
        </span>
        <span className="text-[#C9A24D] text-2xl">
          {isOpen ? <FiMinus /> : <FiPlus />}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      category: "Shipping & Delivery",
      questions: [
        {
          question: "How long does shipping take?",
          answer:
            "Our standard shipping usually takes 3-5 business days within the Netherlands and 7-10 days for international orders.",
        },
        {
          question: "Can I track my order in real-time?",
          answer:
            "Yes, once your order is dispatched, you will receive a tracking link via email to monitor your package.",
        },
      ],
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          question: "What is your return policy?",
          answer:
            "We offer a 30-day return policy for all premium garments. Items must be unworn and in their original packaging.",
        },
        {
          question: "Are returns free?",
          answer:
            "Returns within the Netherlands are free. For international returns, shipping costs are the responsibility of the customer.",
        },
      ],
    },
    {
      category: "Sustainability",
      questions: [
        {
          question: "Are your materials organic?",
          answer:
            "Yes, we prioritize organic fibers and sustainable manufacturing standards like GOTS and Oeko-Tex.",
        },
        {
          question: "Where is the clothing manufactured?",
          answer:
            "All our products are made in ethical environments where workers earn living wages and work in safe conditions.",
        },
      ],
    },
  ];

  return (
    <div className="bg-white dark:bg-[#101828] min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h1 className="text-[#0A2540] dark:text-[#C9A24D] text-4xl md:text-6xl font-bold mb-6">
            Happy to make <br /> you happy!
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            Have questions? We're here to help you.
          </p>
        </div>

        {/* FAQ Sections */}
        {faqData.map((section, idx) => (
          <div key={idx} className="mb-16">
            <h2 className="text-[#C9A24D] text-sm uppercase tracking-[0.3em] font-bold mb-8 border-b-2 border-[#C9A24D] inline-block pb-1">
              {section.category}
            </h2>
            <div className="mt-4">
              {section.questions.map((item, qIdx) => (
                <FAQItem
                  key={qIdx}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </div>
        ))}

        {/* Contact Support Box */}
        <div className="mt-20 p-8 bg-[#F5F2EE] dark:bg-[#0A2540] rounded-2xl text-center border border-gray-100 dark:border-gray-800">
          <h3 className="text-2xl font-bold text-[#0A2540] dark:text-[#F5F2EE] mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Can't find the answer you're looking for? Please chat to our
            friendly team.
          </p>
          <button className="bg-[#C9A24D] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#b58f3e] transition shadow-lg">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
