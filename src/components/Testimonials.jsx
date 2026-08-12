import React from "react";
import { Quote } from "lucide-react";
import { TESTIMONIALS } from "../data/mockData";

export default function Testimonials() {
  return (
    <section id="reviews" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 md:py-28">
      <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16" data-aos="fade-up">
        <p className="uppercase tracking-[0.3em] text-[#D9A441] text-xs mb-3 font-semibold">Guest Reviews</p>
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">What People Are Saying</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        {TESTIMONIALS.map(({ quote, name, meta }, i) => (
          <div
            key={name}
            data-aos="fade-up"
            data-aos-delay={i * 120}
            className="bg-[#241E17] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#D9A441]/40 transition-colors"
          >
            <div>
              <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-[#D9A441] mb-4 sm:mb-6" />
              <p className="text-[#F4EFE6]/80 text-sm leading-relaxed mb-6 sm:mb-8">"{quote}"</p>
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <div className="w-10 h-10 rounded-full bg-[#D9A441]/20 flex items-center justify-center font-serif text-[#D9A441] font-semibold">
                {name.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold">{name}</p>
                <p className="text-xs text-[#F4EFE6]/50">{meta}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
