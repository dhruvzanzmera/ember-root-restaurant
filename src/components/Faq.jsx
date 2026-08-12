import React from "react";
import { Plus, Minus } from "lucide-react";
import { FAQS } from "../data/mockData";

export default function Faq({ openFaq, setOpenFaq }) {
  return (
    <section id="faq" className="bg-[#241E17] py-16 sm:py-24 md:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center mb-10 sm:mb-14" data-aos="fade-up">
          <p className="uppercase tracking-[0.3em] text-[#D9A441] text-xs mb-3 font-semibold">Good to Know</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">Frequently Asked</h2>
        </div>

        <div className="space-y-3.5 sm:space-y-4">
          {FAQS.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={item.q}
                data-aos="fade-up"
                data-aos-delay={i * 80}
                className="bg-[#1B1712] border border-white/10 rounded-2xl overflow-hidden transition-colors hover:border-white/20"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left text-sm sm:text-base font-medium"
                >
                  <span>{item.q}</span>
                  <span className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/15 flex items-center justify-center text-[#D9A441] transition-transform duration-300">
                    {isOpen ? <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 cubic-bezier(0.16,1,0.3,1) ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 text-xs sm:text-sm text-[#F4EFE6]/60 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
