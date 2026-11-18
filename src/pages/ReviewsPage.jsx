import React, { useState } from "react";
import { Star, Quote, Plus, CheckCircle2 } from "lucide-react";
import SEO from "../components/SEO";
import { TESTIMONIALS } from "../data/mockData";
import ReserveCta from "../components/ReserveCta";
import { useApp } from "../context/AppContext";

export default function ReviewsPage() {
  const { showToast } = useApp();
  const [reviewsList, setReviewsList] = useState(TESTIMONIALS);
  const [showAddReview, setShowAddReview] = useState(false);
  const [newReview, setNewReview] = useState({ name: "", meta: "Verified Guest", quote: "", rating: 5 });

  const handleAddReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.quote) return;
    setReviewsList([newReview, ...reviewsList]);
    setShowAddReview(false);
    setNewReview({ name: "", meta: "Verified Guest", quote: "", rating: 5 });
    showToast("Thank you! Your review has been published.");
  };

  return (
    <main className="site-page min-h-screen">
      <SEO
        title="Diner Reviews & Ratings (4.9 Stars) | Ember & Root"
        description="Read real customer reviews and testimonials from over 40,000 satisfied diners at Ember & Root. Share your own dining experience."
        keywords="restaurant reviews, customer testimonials, Ember and Root ratings, fine dining feedback, guest reviews"
      />

      {/* Header */}
      <section className="page-hero bg-[#241E17] border-b border-white/10 py-12 md:py-16 px-4 sm:px-6 lg:px-10 text-center">
        <div className="max-w-7xl mx-auto space-y-4">
          <p className="uppercase tracking-[0.3em] text-[#D9A441] text-xs font-semibold">Guest Experiences</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl">What Diners Say</h1>
          <p className="text-[#F4EFE6]/70 max-w-xl mx-auto text-sm md:text-base">
            Over 40,000 guests served. Read authentic reviews from regular guests, local critics, and first-time diners.
          </p>
        </div>
      </section>

      {/* Ratings Overview Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">
        <div className="bg-[#241E17] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <span className="font-serif text-5xl sm:text-6xl text-[#D9A441] font-bold">4.9</span>
              <div className="flex text-[#D9A441] mt-1 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D9A441]" />
                ))}
              </div>
              <span className="text-xs text-[#F4EFE6]/50 mt-1 block">Based on 1,420+ reviews</span>
            </div>

            <div className="h-16 w-px bg-white/10 hidden sm:block" />

            <div className="space-y-1.5 text-xs text-[#F4EFE6]/70 hidden sm:block min-w-[200px]">
              <div className="flex items-center gap-2">
                <span>Food Quality</span>
                <div className="flex-1 bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#D9A441] h-full w-[98%]" />
                </div>
                <span>4.9</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Service &amp; Ambiance</span>
                <div className="flex-1 bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#D9A441] h-full w-[96%]" />
                </div>
                <span>4.8</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Value &amp; Hospitality</span>
                <div className="flex-1 bg-white/10 h-2 rounded-full overflow-hidden">
                  <div className="bg-[#D9A441] h-full w-[97%]" />
                </div>
                <span>4.9</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowAddReview(!showAddReview)}
            className="flex items-center gap-2 bg-[#D9A441] text-[#1B1712] font-semibold text-xs sm:text-sm px-6 py-3 rounded-full hover:bg-[#eab654] transition-colors"
          >
            <Plus className="w-4 h-4" /> Write a Review
          </button>
        </div>

        {/* Add Review Form Drawer */}
        {showAddReview && (
          <form onSubmit={handleAddReviewSubmit} className="mt-8 bg-[#241E17] border border-[#D9A441]/40 rounded-3xl p-6 md:p-8 space-y-4 animate-slide-down">
            <h2 className="font-serif text-xl">Share Your Dining Experience</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                aria-label="Your Name"
                placeholder="Your Name"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                className="bg-[#1B1712] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#F4EFE6] outline-none focus:border-[#D9A441]"
              />
              <input
                type="text"
                aria-label="Tag or Title"
                placeholder="Tag (e.g. Regular Guest, Food Enthusiast)"
                value={newReview.meta}
                onChange={(e) => setNewReview({ ...newReview, meta: e.target.value })}
                className="bg-[#1B1712] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#F4EFE6] outline-none focus:border-[#D9A441]"
              />
            </div>
            <textarea
              required
              rows="3"
              aria-label="Your feedback details"
              placeholder="Tell us what dish you ordered, how the service was..."
              value={newReview.quote}
              onChange={(e) => setNewReview({ ...newReview, quote: e.target.value })}
              className="w-full bg-[#1B1712] border border-white/15 rounded-xl p-4 text-sm text-[#F4EFE6] outline-none focus:border-[#D9A441] resize-none"
            />
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowAddReview(false)}
                className="px-5 py-2.5 rounded-full border border-white/20 text-xs font-semibold hover:bg-white/5"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-[#D9A441] text-[#1B1712] px-6 py-2.5 rounded-full text-xs font-semibold hover:bg-[#eab654]"
              >
                Submit Review
              </button>
            </div>
          </form>
        )}
      </section>

      {/* Reviews Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviewsList.map(({ quote, name, meta }, i) => (
            <article
              key={i}
              className="bg-[#241E17] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#D9A441]/40 transition-colors"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <Quote className="w-8 h-8 text-[#D9A441]" />
                  <div className="flex text-[#D9A441]">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3.5 h-3.5 fill-[#D9A441]" />
                    ))}
                  </div>
                </div>
                <p className="text-[#F4EFE6]/80 leading-relaxed mb-8 text-sm">"{quote}"</p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-[#D9A441]/20 flex items-center justify-center font-serif text-[#D9A441] font-semibold">
                  {name.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold">{name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#D9A441]" />
                  </div>
                  <span className="text-xs text-[#F4EFE6]/50 block">{meta}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <ReserveCta />
    </main>
  );
}
