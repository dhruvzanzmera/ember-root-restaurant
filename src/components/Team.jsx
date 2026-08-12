import React from "react";
import { TEAM } from "../data/mockData";

export default function Team() {
  return (
    <section id="team" className="bg-[#241E17] py-16 sm:py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-xl mx-auto mb-12 sm:mb-16" data-aos="fade-up">
          <p className="uppercase tracking-[0.3em] text-[#D9A441] text-xs mb-3 font-semibold">The People Behind It</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">Meet the Kitchen</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {TEAM.map(({ name, role, img, bio }, i) => (
            <div
              key={name}
              data-aos="fade-up"
              data-aos-delay={i * 120}
              className="group bg-[#1B1712] border border-white/10 rounded-2xl overflow-hidden text-center hover:border-[#D9A441]/40 transition-colors"
            >
              <div className="h-60 sm:h-64 overflow-hidden">
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl">{name}</h3>
                <p className="text-[#D9A441] text-xs uppercase tracking-widest mt-1 mb-3 font-semibold">{role}</p>
                <p className="text-[#F4EFE6]/60 text-sm leading-relaxed">{bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
