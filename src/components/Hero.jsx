import React from "react";
import { ArrowDownRight, ArrowUpRight, ChefHat, Clock3, Star } from "lucide-react";
import { useApp } from "../context/AppContext";
import { Link } from "react-router-dom";

export default function Hero() {
  const { setIsReserveModalOpen } = useApp();

  return (
    <section className="hero-section relative min-h-[90vh] pt-20 flex items-center overflow-hidden">
      <div className="hero-layout relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 w-full py-16 sm:py-24">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-mark"><ChefHat className="w-4 h-4" /></span>
            Open fire <span>&middot;</span> honest ingredients
          </p>
          <h1 className="font-serif">
            Good things take <em>fire.</em>
          </h1>
          <p className="hero-description">
            Slow hours, seasonal ingredients, and the kind of flavor that only comes from cooking over an open flame.
          </p>
          <div className="hero-actions">
            <Link to="/menu" className="button-primary">
              Explore the menu <ArrowUpRight className="w-4 h-4" />
            </Link>
            <button onClick={() => setIsReserveModalOpen(true)} className="button-quiet">
              Reserve your evening
            </button>
          </div>
          <div className="hero-proof">
            <span className="proof-rating"><Star className="w-4 h-4 fill-current" /> 4.9</span>
            <span>Beloved by 40,000+ diners</span>
            <span className="proof-divider" />
            <span><Clock3 className="w-4 h-4" /> Open daily, 'til late</span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo-frame">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1400&auto=format&fit=crop"
              alt="Warmly lit Ember & Root dining room"
              className="hero-photo"
            />
            <div className="hero-photo-shade" />
            <div className="hero-photo-caption">
              <span>From our hearth</span>
              <strong>Made for lingering.</strong>
            </div>
          </div>
          <div className="hero-note">
            <span className="hero-note-icon"><Star className="w-4 h-4 fill-current" /></span>
            <span><strong>Season-led, always</strong><small>Our menu follows the harvest</small></span>
            <ArrowDownRight className="w-5 h-5 hero-note-arrow" />
          </div>
          <span className="hero-orbit hero-orbit-one" />
          <span className="hero-orbit hero-orbit-two" />
        </div>
      </div>
    </section>
  );
}
