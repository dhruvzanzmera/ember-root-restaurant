import React, { useState } from "react";
import { Search, Plus, Minus, HelpCircle, Send } from "lucide-react";
import SEO from "../components/SEO";
import { FAQS } from "../data/mockData";
import ReserveCta from "../components/ReserveCta";
import { useApp } from "../context/AppContext";

export default function FaqPage() {
  const { showToast } = useApp();
  const [openFaq, setOpenFaq] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [questionInput, setQuestionInput] = useState("");

  const extraFaqs = [
    ...FAQS,
    {
      q: "What is your dress code policy?",
      a: "Smart casual. We want you to feel comfortable enjoying your meal, whether in jeans or formal attire.",
    },
    {
      q: "Are children allowed at Ember & Root?",
      a: "Yes! We welcome guests of all ages and offer high chairs as well as kid-friendly grilled skewers and sides.",
    },
    {
      q: "Do you offer gift cards?",
      a: "Yes, digital and physical gift cards can be purchased directly at the restaurant or requested via email.",
    },
  ];

  const filteredFaqs = extraFaqs.filter(
    (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAskQuestion = (e) => {
    e.preventDefault();
    if (!questionInput) return;
    showToast("Question sent! Our team will respond within 24 hours.");
    setQuestionInput("");
  };

  return (
    <main className="pt-24 min-h-screen">
      <SEO
        title="Frequently Asked Questions & Seating Help | Ember & Root"
        description="Find answers to common questions about reservations, dress code, vegan options, parking, private events, and delivery."
        keywords="restaurant FAQ, dress code, vegan options, reservation policy, valet parking, private dining questions"
      />

      {/* Header */}
      <section className="bg-[#241E17] border-b border-white/10 py-12 md:py-16 px-4 sm:px-6 lg:px-10 text-center">
        <div className="max-w-7xl mx-auto space-y-4">
          <p className="uppercase tracking-[0.3em] text-[#D9A441] text-xs font-semibold">Help &amp; Information</p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-6xl">Frequently Asked Questions</h1>
          <p className="text-[#F4EFE6]/70 max-w-xl mx-auto text-sm md:text-base">
            Everything you need to know about dining with us, reservations, dietary preferences, and home delivery.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16 space-y-8">
        {/* Search */}
        <div className="relative">
          <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#F4EFE6]/40" />
          <input
            type="text"
            placeholder="Search questions (e.g. reservation, vegan, parking)..."
            aria-label="Search FAQ questions"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-[#241E17] border border-white/15 rounded-full pl-12 pr-6 py-3.5 text-sm text-[#F4EFE6] outline-none focus:border-[#D9A441] transition-colors"
          />
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {filteredFaqs.map((item, i) => {
            const isOpen = openFaq === i;
            return (
              <div
                key={i}
                className="bg-[#241E17] border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left font-medium text-sm sm:text-base"
                >
                  <span>{item.q}</span>
                  <span className="shrink-0 w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/15 flex items-center justify-center text-[#D9A441]">
                    {isOpen ? <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  </span>
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <p className="px-5 sm:px-6 pb-5 text-xs sm:text-sm text-[#F4EFE6]/60 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Inquiry Box */}
        <div className="bg-[#241E17] border border-white/10 rounded-3xl p-6 sm:p-8 space-y-4 text-center">
          <HelpCircle className="w-8 h-8 text-[#D9A441] mx-auto" />
          <h2 className="font-serif text-xl sm:text-2xl">Have a specific question?</h2>
          <p className="text-xs sm:text-sm text-[#F4EFE6]/60 max-w-md mx-auto">
            Can't find the answer above? Send your query directly to our concierge team.
          </p>
          <form onSubmit={handleAskQuestion} className="flex gap-2 max-w-md mx-auto pt-2">
            <input
              type="text"
              required
              aria-label="Direct question message"
              placeholder="Ask anything about our menu or seating..."
              value={questionInput}
              onChange={(e) => setQuestionInput(e.target.value)}
              className="flex-1 bg-[#1B1712] border border-white/15 rounded-full px-5 py-3 text-xs sm:text-sm outline-none focus:border-[#D9A441] transition-colors"
            />
            <button
              type="submit"
              aria-label="Submit question"
              className="bg-[#D9A441] text-[#1B1712] p-3.5 rounded-full hover:bg-[#eab654] transition-colors shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>

      <ReserveCta />
    </main>
  );
}
