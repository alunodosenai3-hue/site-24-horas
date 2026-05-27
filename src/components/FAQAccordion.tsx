import { useState } from "react";
import { FAQS } from "../data";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-3">
      {FAQS.map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={faq.id}
            id={`faq-item-${faq.id}`}
            className="rounded-xl overflow-hidden border border-purple-500/10 bg-purple-950/10 backdrop-blur-md transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 cursor-pointer hover:bg-purple-500/5 transition-colors focus:outline-none"
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors ${isOpen ? "text-purple-400" : "text-purple-500/60"}`} />
                <span className="font-display font-medium text-sm md:text-base text-gray-100 leading-snug">
                  {faq.question}
                </span>
              </div>
              <ChevronDown 
                className={`w-5 h-5 flex-shrink-0 text-purple-400 transition-transform duration-300 ${
                  isOpen ? "transform rotate-180 text-purple-300" : ""
                }`} 
              />
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-gray-400 leading-relaxed border-t border-purple-500/5 bg-purple-950/20">
                    <p className="whitespace-pre-line">{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
