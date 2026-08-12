import React from "react";
import { Mail, Smartphone } from "lucide-react";

export default function NewsletterAndApp({ email, setEmail, subscribed, handleSubscribe }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 md:py-28 grid md:grid-cols-2 gap-6 sm:gap-8">
      <div
        data-aos="fade-right"
        className="bg-[#241E17] border border-white/10 rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-center"
      >
        <Mail className="w-8 h-8 text-[#D9A441] mb-4 sm:mb-5" />
        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl mb-3">Get the seasonal menu first</h3>
        <p className="text-[#F4EFE6]/60 text-xs sm:text-sm mb-6">
          One email a month — new dishes, chef's notes, and the occasional table for two on us.
        </p>
        {subscribed ? (
          <p className="text-[#D9A441] text-sm font-medium animate-fade-in">You're on the list — see you at the table.</p>
        ) : (
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@email.com"
              className="flex-1 bg-[#1B1712] border border-white/15 rounded-full px-5 py-3 text-sm outline-none focus:border-[#D9A441] transition-colors"
            />
            <button
              type="submit"
              className="bg-[#D9A441] text-[#1B1712] font-semibold px-6 py-3 rounded-full hover:bg-[#eab654] transition-all duration-200 active:scale-95 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>

      <div
        data-aos="fade-left"
        className="relative overflow-hidden bg-[#D9A441] text-[#1B1712] rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col justify-center"
      >
        <Smartphone className="w-8 h-8 mb-4 sm:mb-5" />
        <h3 className="font-serif text-xl sm:text-2xl md:text-3xl mb-3">Order faster with the app</h3>
        <p className="text-[#1B1712]/80 text-xs sm:text-sm mb-6">
          Track your delivery live, save your usual order, and unlock app-only specials.
        </p>
        <div className="flex flex-wrap gap-3">
          <button className="bg-[#1B1712] text-[#F4EFE6] px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-semibold hover:opacity-95 transition-opacity active:scale-95">
            Get it on Android
          </button>
          <button className="border border-[#1B1712]/40 px-5 sm:px-6 py-3 rounded-full text-xs sm:text-sm font-semibold hover:border-[#1B1712] hover:bg-black/5 transition-colors active:scale-95">
            Get it on iOS
          </button>
        </div>
      </div>
    </section>
  );
}
