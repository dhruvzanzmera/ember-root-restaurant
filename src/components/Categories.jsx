import React from "react";
import { CATEGORIES } from "../data/mockData";

export default function Categories() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 -mt-8 sm:-mt-10 relative z-20">
      <div
        data-aos="fade-up"
        className="bg-[#241E17] border border-white/10 rounded-2xl p-4 sm:p-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 shadow-xl shadow-black/40"
      >
        {CATEGORIES.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-3 text-[#F4EFE6]/80 hover:text-[#D9A441] transition-colors p-2 rounded-xl hover:bg-white/5 cursor-pointer"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#D9A441]/10 flex items-center justify-center shrink-0">
              <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#D9A441]" strokeWidth={1.75} />
            </div>
            <span className="text-xs sm:text-sm tracking-wide font-medium">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
