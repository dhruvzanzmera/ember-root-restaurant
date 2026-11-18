import React from "react";
import { DISHES } from "../data/mockData";
import DishCard from "./DishCard";

export default function Menu() {
  return (
    <section id="menu" className="menu-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 md:py-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-10 sm:mb-14">
        <div className="section-title" data-aos="fade-right">
          <p className="uppercase tracking-[0.3em] text-[#D9A441] text-xs mb-2 sm:mb-3 font-semibold">The Menu</p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl">Most Loved Dishes</h2>
        </div>
        <p data-aos="fade-left" className="section-intro text-[#F4EFE6]/60 max-w-sm text-sm sm:text-base">
          A short list of what keeps people coming back — updated with the seasons, plated the same way every time.
        </p>
      </div>

      <div className="dish-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {DISHES.map((dish, i) => (
          <DishCard key={dish.name} dish={dish} index={i} />
        ))}
      </div>
    </section>
  );
}
