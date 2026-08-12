import React from "react";
import { Award, Flame, Heart } from "lucide-react";
import SEO from "../components/SEO";
import { TEAM } from "../data/mockData";
import ReserveCta from "../components/ReserveCta";

export default function TeamPage() {
  const extendedTeam = [
    ...TEAM,
    {
      name: "Ananya Roy",
      role: "Sommelier & Beverage Director",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop",
      bio: "Master Sommelier with a passion for natural orange wines and smoked botanical cocktails.",
    },
    {
      name: "Marcus Vance",
      role: "Pitmaster & Charcoal Specialist",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop",
      bio: "Over a decade spent perfecting white oak smoke wood pairings for prime cut meats.",
    },
    {
      name: "Priya Sharma",
      role: "General Manager",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop",
      bio: "Ensuring every diner feels like a family guest from entry to farewell.",
    },
  ];

  return (
    <main className="pt-24 min-h-screen">
      <SEO
        title="Meet Our Culinary Team & Executive Chefs | Ember & Root"
        description="Meet executive chef Arjun Mehta, head pastier Sara Fernandes, pitmasters, and sommeliers powering Ember & Root's wood-fired kitchen."
        keywords="executive chef, pitmaster, culinary team, restaurant chefs, sommelier, wood fire cooking experts"
      />

      {/* Header */}
      <section className="bg-[#241E17] border-b border-white/10 py-12 md:py-16 px-4 sm:px-6 lg:px-10 text-center">
        <div className="max-w-7xl mx-auto space-y-4">
          <p className="uppercase tracking-[0.3em] text-[#D9A441] text-xs font-semibold">Craftsmen of Smoke &amp; Spice</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl">Meet Our Culinary Team</h1>
          <p className="text-[#F4EFE6]/70 max-w-xl mx-auto text-sm md:text-base">
            Dedicated artisans, pitmasters, and hospitality professionals driven by a shared devotion to open-flame cooking.
          </p>
        </div>
      </section>

      {/* Culinary Philosophy Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16">
        <div className="bg-[#241E17] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-12 grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="space-y-3">
            <div className="w-12 h-12 bg-[#D9A441]/10 rounded-2xl flex items-center justify-center text-[#D9A441] mx-auto md:mx-0">
              <Flame className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-xl">Fire Craftsmanship</h2>
            <p className="text-sm text-[#F4EFE6]/60 leading-relaxed">
              We cook exclusively over white oak and fruitwood logs, controlling flame heat purely by intuition and experience.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-12 bg-[#D9A441]/10 rounded-2xl flex items-center justify-center text-[#D9A441] mx-auto md:mx-0">
              <Heart className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-xl">Seasonal Dedication</h2>
            <p className="text-sm text-[#F4EFE6]/60 leading-relaxed">
              Our menu shifts every 6 weeks based on local farm yields, ensuring maximum flavor density at peak season.
            </p>
          </div>

          <div className="space-y-3">
            <div className="w-12 h-12 bg-[#D9A441]/10 rounded-2xl flex items-center justify-center text-[#D9A441] mx-auto md:mx-0">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-xl">Michelin Recognized</h2>
            <p className="text-sm text-[#F4EFE6]/60 leading-relaxed">
              Awarded regional Bib Gourmand recognition 3 years running for outstanding quality and warm hospitality.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-20">
        <h2 className="font-serif text-2xl sm:text-3xl mb-10 text-center">The Kitchen &amp; Service Leaders</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {extendedTeam.map((member) => (
            <article
              key={member.name}
              className="bg-[#241E17] border border-white/10 rounded-2xl overflow-hidden group hover:border-[#D9A441]/50 transition-colors"
            >
              <div className="h-64 sm:h-72 overflow-hidden relative">
                <img
                  src={member.img}
                  alt={`${member.name} - ${member.role}`}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="p-6 space-y-2">
                <h3 className="font-serif text-xl">{member.name}</h3>
                <p className="text-[#D9A441] text-xs uppercase tracking-widest font-semibold">{member.role}</p>
                <p className="text-sm text-[#F4EFE6]/60 leading-relaxed pt-2">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ReserveCta />
    </main>
  );
}
