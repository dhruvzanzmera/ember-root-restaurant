import React from "react";
import { GALLERY } from "../data/mockData";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-[#241E17] py-16 sm:py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14" data-aos="fade-up">
          <p className="uppercase tracking-[0.3em] text-[#D9A441] text-xs mb-3 font-semibold">Inside the Kitchen</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">A Look Around</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY.map((src, i) => (
            <div
              key={src}
              data-aos="zoom-in"
              data-aos-delay={(i % 3) * 100}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 ${
                i === 0 ? "sm:col-span-2 sm:row-span-2" : ""
              }`}
            >
              <img
                src={src}
                alt="Restaurant gallery presentation"
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-700 ${
                  i === 0 ? "h-64 sm:h-full min-h-[260px] sm:min-h-[380px] md:min-h-[420px]" : "h-48 sm:h-44 md:h-52"
                }`}
              />
              <div className="absolute inset-0 bg-[#1B1712]/0 group-hover:bg-[#1B1712]/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
