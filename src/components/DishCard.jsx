import React from "react";
import { Clock, Star, ShoppingBag } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function DishCard({ dish, index = 0 }) {
  const { addToCart } = useApp();

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={(index % 3) * 100}
      className="group bg-[#241E17] border border-white/10 rounded-2xl overflow-hidden hover:border-[#D9A441]/50 transition-colors flex flex-col justify-between"
    >
      <div>
        <div className="relative h-52 overflow-hidden">
          <img
            src={dish.img}
            alt={dish.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <span className="absolute top-4 left-4 bg-[#1B1712]/80 backdrop-blur text-[#D9A441] text-xs uppercase tracking-wide px-3 py-1 rounded-full border border-[#D9A441]/30 font-medium">
            {dish.tag}
          </span>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-serif text-xl">{dish.name}</h3>
            <span className="text-[#D9A441] font-semibold">{dish.price}</span>
          </div>

          <div className="flex items-center gap-4 text-[#F4EFE6]/55 text-xs mb-5">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {dish.time}
            </span>
            <span className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-[#D9A441] text-[#D9A441]" /> {dish.rating}
            </span>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0">
        <button
          onClick={() => addToCart(dish)}
          className="w-full flex items-center justify-center gap-2 border border-white/15 rounded-full py-2.5 text-sm hover:bg-[#D9A441] hover:text-[#1B1712] hover:border-[#D9A441] transition-all font-semibold"
        >
          <ShoppingBag className="w-4 h-4" />
          Add to Order
        </button>
      </div>
    </div>
  );
}
