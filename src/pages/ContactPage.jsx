import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, Car } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function ContactPage() {
  const { showToast, setIsReserveModalOpen } = useApp();

  const [messageForm, setMessageForm] = useState({
    name: "",
    email: "",
    subject: "Table Inquiry",
    message: "",
  });

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    if (!messageForm.name || !messageForm.email || !messageForm.message) return;
    showToast("Message sent! Our manager will contact you shortly.");
    setMessageForm({ name: "", email: "", subject: "Table Inquiry", message: "" });
  };

  return (
    <main className="site-page min-h-screen">
      {/* Header Banner */}
      <section className="page-hero bg-[#241E17] border-b border-white/10 py-16 px-6 lg:px-10 text-center">
        <div className="max-w-7xl mx-auto space-y-4">
          <p className="uppercase tracking-[0.3em] text-[#D9A441] text-xs font-semibold">Get In Touch</p>
          <h1 className="font-serif text-4xl md:text-6xl">Contact &amp; Location</h1>
          <p className="text-[#F4EFE6]/70 max-w-xl mx-auto text-sm md:text-base">
            Whether you want to reserve a table for a special celebration or inquire about private dining, we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Info Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#241E17] border border-white/10 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#D9A441]/10 flex items-center justify-center text-[#D9A441]">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg">Address</h3>
            <p className="text-sm text-[#F4EFE6]/60 leading-relaxed">
              42 Harborline Street, City Center, Surat, GJ 395007
            </p>
          </div>

          <div className="bg-[#241E17] border border-white/10 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#D9A441]/10 flex items-center justify-center text-[#D9A441]">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg">Phone Call</h3>
            <p className="text-sm text-[#F4EFE6]/60">
              +91 98765 43210 <br />
              +91 98765 43211
            </p>
          </div>

          <div className="bg-[#241E17] border border-white/10 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#D9A441]/10 flex items-center justify-center text-[#D9A441]">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg">Email Inquiry</h3>
            <p className="text-sm text-[#F4EFE6]/60">
              hello@emberandroot.com <br />
              events@emberandroot.com
            </p>
          </div>

          <div className="bg-[#241E17] border border-white/10 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-[#D9A441]/10 flex items-center justify-center text-[#D9A441]">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-lg">Operating Hours</h3>
            <p className="text-sm text-[#F4EFE6]/60">
              Mon – Fri: 12pm – 11pm <br />
              Sat – Sun: 10am – 12am
            </p>
          </div>
        </div>

        {/* Message Form & Map Section */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Message Form */}
          <div className="bg-[#241E17] border border-white/10 rounded-3xl p-8 space-y-6">
            <div>
              <h3 className="font-serif text-2xl">Send Us a Message</h3>
              <p className="text-sm text-[#F4EFE6]/60 mt-1">For general questions, feedback, or media requests.</p>
            </div>

            <form onSubmit={handleMessageSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#F4EFE6]/70 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Arjun"
                    value={messageForm.name}
                    onChange={(e) => setMessageForm({ ...messageForm, name: e.target.value })}
                    className="w-full bg-[#1B1712] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#F4EFE6] outline-none focus:border-[#D9A441]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#F4EFE6]/70 mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="arjun@email.com"
                    value={messageForm.email}
                    onChange={(e) => setMessageForm({ ...messageForm, email: e.target.value })}
                    className="w-full bg-[#1B1712] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#F4EFE6] outline-none focus:border-[#D9A441]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#F4EFE6]/70 mb-1">Subject</label>
                <select
                  value={messageForm.subject}
                  onChange={(e) => setMessageForm({ ...messageForm, subject: e.target.value })}
                  className="w-full bg-[#1B1712] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#F4EFE6] outline-none focus:border-[#D9A441]"
                >
                  <option value="Table Inquiry" className="bg-[#1B1712]">Table &amp; Reservation Inquiry</option>
                  <option value="Private Event" className="bg-[#1B1712]">Private Event Booking</option>
                  <option value="Catering" className="bg-[#1B1712]">Outdoor Catering</option>
                  <option value="Feedback" className="bg-[#1B1712]">General Feedback</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#F4EFE6]/70 mb-1">Message</label>
                <textarea
                  required
                  rows="4"
                  placeholder="How can we assist you?"
                  value={messageForm.message}
                  onChange={(e) => setMessageForm({ ...messageForm, message: e.target.value })}
                  className="w-full bg-[#1B1712] border border-white/15 rounded-xl p-4 text-sm text-[#F4EFE6] outline-none focus:border-[#D9A441] resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#D9A441] text-[#1B1712] font-semibold py-3.5 rounded-full text-sm hover:bg-[#eab654] transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>

          {/* Interactive Map & Valet Info */}
          <div className="space-y-6">
            <div className="bg-[#241E17] border border-white/10 rounded-3xl p-8 space-y-4">
              <h3 className="font-serif text-2xl">Location &amp; Valet Parking</h3>
              <p className="text-sm text-[#F4EFE6]/60 leading-relaxed">
                Located centrally on Harborline Street with complimentary valet parking available at the main entrance for all dining guests.
              </p>
              
              <div className="bg-[#1B1712] border border-white/10 rounded-2xl p-4 flex items-center gap-4 text-xs">
                <Car className="w-6 h-6 text-[#D9A441] shrink-0" />
                <div>
                  <span className="font-semibold block text-[#F4EFE6]">Complimentary Valet Service</span>
                  <span className="text-[#F4EFE6]/50">Available starting 30 mins prior to opening hours.</span>
                </div>
              </div>
            </div>

            {/* Simulated Map View */}
            <div className="relative h-72 rounded-3xl overflow-hidden border border-white/10 bg-[#1B1712] flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop"
                alt="City Map Preview"
                className="w-full h-full object-cover opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B1712] via-transparent to-transparent" />
              <div className="absolute z-10 text-center space-y-2 p-6 bg-[#1B1712]/90 backdrop-blur-md rounded-2xl border border-[#D9A441]/40">
                <MapPin className="w-8 h-8 text-[#D9A441] mx-auto animate-bounce" />
                <h4 className="font-serif text-lg text-[#F4EFE6]">Ember &amp; Root Restaurant</h4>
                <p className="text-xs text-[#F4EFE6]/60">42 Harborline Street, Surat, GJ</p>
                <button
                  onClick={() => setIsReserveModalOpen(true)}
                  className="mt-2 bg-[#D9A441] text-[#1B1712] font-semibold text-xs px-4 py-2 rounded-full hover:bg-[#eab654]"
                >
                  Book Your Table Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
