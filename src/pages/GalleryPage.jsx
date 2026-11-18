import React, { useState, useEffect } from "react";
import { X, Maximize2 } from "lucide-react";
import SEO from "../components/SEO";
import { GALLERY } from "../data/mockData";
import ReserveCta from "../components/ReserveCta";

export default function GalleryPage() {
  const [activePhoto, setActivePhoto] = useState(null);

  // Lightbox animation state
  const [renderLightbox, setRenderLightbox] = useState(false);
  const [lightboxAnimating, setLightboxAnimating] = useState(false);

  useEffect(() => {
    if (activePhoto) {
      setRenderLightbox(true);
      setLightboxAnimating(true);
    } else if (renderLightbox) {
      setLightboxAnimating(false);
      const timer = setTimeout(() => setRenderLightbox(false), 250);
      return () => clearTimeout(timer);
    }
  }, [activePhoto]);

  const galleryItems = [
    { src: GALLERY[0], title: "Main Dining Room", category: "Ambiance", desc: "Warm wood timber, ambient pendant lights, and custom iron fittings." },
    { src: GALLERY[1], title: "Wood-Fired Hearth", category: "Kitchen", desc: "Our central open flame hearth burning local white oak." },
    { src: GALLERY[2], title: "Plating & Detail", category: "Dishes", desc: "Fresh seasonal herbs and house-smoked salts applied with precision." },
    { src: GALLERY[3], title: "Wine Cellar Vault", category: "Ambiance", desc: "Over 180 curated natural and biodynamic wines." },
    { src: GALLERY[4], title: "Chef's Counter", category: "Kitchen", desc: "Front row seats to live kitchen fire craftsmanship." },
    { src: GALLERY[5], title: "Outdoor Courtyard", category: "Ambiance", desc: "Lush green courtyard seating under festoon lights." },
  ];

  return (
    <main className="site-page min-h-screen">
      <SEO
        title="Visual Atmosphere & Kitchen Gallery | Ember & Root"
        description="Take a visual tour through our wood-fired hearth, rustic dining spaces, wine cellar vault, and artisanal dish presentations."
        keywords="restaurant photo gallery, dining room interior, open fire kitchen photos, chef counter, wine cellar"
      />

      {/* Header Banner */}
      <section className="page-hero bg-[#241E17] border-b border-white/10 py-12 md:py-16 px-4 sm:px-6 lg:px-10 text-center">
        <div className="max-w-7xl mx-auto space-y-4">
          <p className="uppercase tracking-[0.3em] text-[#D9A441] text-xs font-semibold">Visual Atmosphere</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl">Inside Ember &amp; Root</h1>
          <p className="text-[#F4EFE6]/70 max-w-xl mx-auto text-sm md:text-base">
            Take a visual tour through our wood-fired kitchen, rustic dining spaces, and artisanal dish presentations.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setActivePhoto(item)}
              className="group relative h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
              
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <span className="text-[#D9A441] text-xs uppercase tracking-widest font-semibold">{item.category}</span>
                  <h2 className="font-serif text-lg sm:text-xl text-[#F4EFE6] mt-0.5">{item.title}</h2>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#D9A441] text-[#1B1712] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {renderLightbox && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className={`fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300 ${
              lightboxAnimating ? "animate-fade-in" : "animate-fade-out"
            }`}
            onClick={() => setActivePhoto(null)}
          />
          <button
            onClick={() => setActivePhoto(null)}
            className="absolute top-6 right-6 text-white p-3 hover:text-[#D9A441] transition-colors z-20"
            aria-label="Close image lightbox"
          >
            <X className="w-8 h-8" />
          </button>
          <div
            className={`relative z-10 max-w-4xl w-full space-y-4 ${
              lightboxAnimating ? "animate-scale-up" : "animate-scale-down"
            }`}
          >
            <img
              src={activePhoto?.src}
              alt={activePhoto?.title}
              className="max-h-[75vh] w-full object-contain rounded-2xl border border-white/15 shadow-2xl"
            />
            <div className="text-center space-y-1">
              <h3 className="font-serif text-xl sm:text-2xl text-[#F4EFE6]">{activePhoto?.title}</h3>
              <p className="text-sm text-[#F4EFE6]/60">{activePhoto?.desc}</p>
            </div>
          </div>
        </div>
      )}

      <ReserveCta />
    </main>
  );
}
