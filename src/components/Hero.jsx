import React from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import { useApp } from "../context/AppContext";
import { Link } from "react-router-dom";

export default function Hero() {
  const { setIsReserveModalOpen } = useApp();

  return (
    <section className="relative min-h-[90vh] sm:min-h-screen pt-20 flex items-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop"
        alt="Signature dish on a dark plate"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1B1712] via-[#1B1712]/75 to-[#1B1712]/40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full py-16 sm:py-24">
        <p data-aos="fade-up" className="uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#D9A441] text-xs md:text-sm mb-4 sm:mb-5 font-semibold">
          Open Fire &middot; Honest Ingredients
        </p>
        <h1
          data-aos="fade-up"
          data-aos-delay="100"
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] sm:leading-[1.05] max-w-2xl text-[#F4EFE6]"
        >
          Food cooked the way it used to be.
        </h1>
        <p data-aos="fade-up" data-aos-delay="200" className="mt-4 sm:mt-6 text-[#F4EFE6]/80 max-w-md text-sm sm:text-base md:text-lg leading-relaxed">
          Wood smoke, slow hours, and a menu that changes with the season. No shortcuts, just flavor.
        </p>

        <div data-aos="fade-up" data-aos-delay="300" className="mt-8 sm:mt-10 flex flex-wrap gap-3.5 sm:gap-4">
          <Link
            to="/menu"
            className="flex items-center gap-2 bg-[#D9A441] text-[#1B1712] font-semibold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full hover:bg-[#eab654] transition-all duration-200 shadow-lg active:scale-95"
          >
            View Menu <ChevronRight className="w-4 h-4" />
          </Link>
          <button
            onClick={() => setIsReserveModalOpen(true)}
            className="flex items-center gap-2 border border-[#F4EFE6]/30 text-[#F4EFE6] font-semibold text-xs sm:text-sm px-6 sm:px-7 py-3 sm:py-3.5 rounded-full hover:border-[#F4EFE6] hover:bg-white/5 transition-all duration-200 active:scale-95"
          >
            Reserve a Table
          </button>
        </div>

        <div data-aos="fade-up" data-aos-delay="400" className="mt-10 sm:mt-14 flex flex-wrap gap-6 sm:gap-10 text-[#F4EFE6]/70 text-xs sm:text-sm">
          <div>
            <span className="block font-serif text-2xl sm:text-3xl text-[#F4EFE6]">12+</span>
            Years Open
          </div>
          <div>
            <span className="block font-serif text-2xl sm:text-3xl text-[#F4EFE6]">4.9</span>
            Avg. Rating
          </div>
          <div>
            <span className="block font-serif text-2xl sm:text-3xl text-[#F4EFE6]">40k</span>
            Diners Served
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-[#F4EFE6]/50 hidden sm:block">
        <ChevronDown className="w-6 h-6" />
      </div>
    </section>
  );
}
