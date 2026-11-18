import React from "react";
import { FEATURES } from "../data/mockData";

export default function WhyUs() {
  return (
    <section className="why-section py-16 sm:py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="section-heading text-center max-w-xl mx-auto mb-12 sm:mb-16" data-aos="fade-up">
          <p className="uppercase tracking-[0.3em] text-[#D9A441] text-xs mb-3 font-semibold">Why Ember &amp; Root</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">A kitchen built on patience</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="feature-card bg-[#241E17] border border-white/10 rounded-2xl p-6 sm:p-8 hover:-translate-y-1.5 transition-all duration-300 hover:border-[#D9A441]/40"
            >
              <div className="w-12 h-12 rounded-xl bg-[#D9A441]/10 flex items-center justify-center mb-5 sm:mb-6">
                <Icon className="w-6 h-6 text-[#D9A441]" strokeWidth={1.75} />
              </div>
              <h3 className="font-serif text-lg sm:text-xl mb-3">{title}</h3>
              <p className="text-[#F4EFE6]/60 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
