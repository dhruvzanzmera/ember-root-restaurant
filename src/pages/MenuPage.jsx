import React, { useState } from "react";
import { Search, Filter } from "lucide-react";
import SEO from "../components/SEO";
import { DISHES } from "../data/mockData";
import DishCard from "../components/DishCard";
import ReserveCta from "../components/ReserveCta";

export default function MenuPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = ["All", "Chef's Pick", "Spicy", "Vegetarian", "Signature", "Vegan", "House Favorite"];

  const filteredDishes = DISHES.filter((dish) => {
    const matchesSearch = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          dish.tag.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === "All" || dish.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  return (
    <main className="site-page min-h-screen">
      <SEO
        title="Seasonal Culinary Menu | Ember & Root Wood-Fired Restaurant"
        description="Explore our seasonal menu featuring wood-fired meats, organic plant-based dishes, smoked seafood, and handcrafted desserts."
        keywords="food menu, wood fired grill dishes, charred chicken, smoked brisket bowl, vegan options, Ember and Root menu"
      />

      {/* Header Banner */}
      <section className="page-hero bg-[#241E17] border-b border-white/10 py-12 md:py-16 px-4 sm:px-6 lg:px-10 text-center">
        <div className="max-w-7xl mx-auto space-y-4">
          <p className="uppercase tracking-[0.3em] text-[#D9A441] text-xs font-semibold">Seasonal Selection</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl">Our Full Culinary Menu</h1>
          <p className="text-[#F4EFE6]/70 max-w-xl mx-auto text-sm md:text-base">
            Wood-fired perfection, prepared fresh daily using organic local ingredients and time-honored smoking techniques.
          </p>
        </div>
      </section>

      {/* Controls & Search */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 space-y-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#F4EFE6]/40" />
            <input
              type="text"
              placeholder="Search dishes or tags..."
              aria-label="Search dishes or tags"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#241E17] border border-white/15 rounded-full pl-11 pr-4 py-2.5 text-sm text-[#F4EFE6] outline-none focus:border-[#D9A441] transition-colors"
            />
          </div>

          {/* Tag Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 text-xs">
            <Filter className="w-3.5 h-3.5 text-[#D9A441] shrink-0 mr-1" />
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 py-1.5 rounded-full border transition-all shrink-0 font-medium ${
                  selectedTag === tag
                    ? "bg-[#D9A441] text-[#1B1712] border-[#D9A441]"
                    : "bg-[#241E17] border-white/10 text-[#F4EFE6]/70 hover:border-white/30"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Dish Grid */}
        {filteredDishes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4">
            {filteredDishes.map((dish, idx) => (
              <DishCard key={dish.name} dish={dish} index={idx} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-[#F4EFE6]/50 space-y-2">
            <h2 className="font-serif text-xl">No dishes match your search criteria</h2>
            <p className="text-sm">Try clearing filters or searching for something else.</p>
          </div>
        )}
      </section>

      <ReserveCta />
    </main>
  );
}
