import React from "react";
import { useApp } from "../context/AppContext";

export default function ReserveCta() {
  const { setIsReserveModalOpen, setIsCartOpen } = useApp();

  return (
    <section id="reserve" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24 md:pb-28">
      <div
        data-aos="fade-up"
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#241E17] to-[#1B1712] border border-white/10 px-6 sm:px-10 md:px-16 py-10 sm:py-16 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left"
      >
        <div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-3">Ready when you are.</h2>
          <p className="text-[#F4EFE6]/60 max-w-md text-xs sm:text-sm md:text-base">
            Reserve a table for tonight, or order straight to your door — either way, the fire's already going.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3.5 sm:gap-4">
          <button
            onClick={() => setIsReserveModalOpen(true)}
            className="bg-[#D9A441] text-[#1B1712] px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm hover:bg-[#eab654] transition-all duration-200 active:scale-95 shadow-md"
          >
            Reserve a Table
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="border border-[#F4EFE6]/30 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm hover:border-[#F4EFE6] hover:bg-white/5 transition-all duration-200 active:scale-95"
          >
            Order Online
          </button>
        </div>
      </div>
    </section>
  );
}
