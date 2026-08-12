import React, { useState, useEffect } from "react";
import { X, Calendar, Clock, Users, Sparkles, CheckCircle2, Phone, Mail, User } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function ReservationModal() {
  const { isReserveModalOpen, setIsReserveModalOpen, makeReservation, activeReservation, setActiveReservation } = useApp();

  const [formData, setFormData] = useState({
    date: new Date().toISOString().split("T")[0],
    time: "19:00",
    guests: "2 Guests",
    seating: "Main Dining Room",
    name: "",
    email: "",
    phone: "",
    specialRequest: "",
  });

  // Enter + Exit Animation State
  const [renderModal, setRenderModal] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (isReserveModalOpen) {
      setRenderModal(true);
      setAnimating(true);
    } else if (renderModal) {
      setAnimating(false);
      const timer = setTimeout(() => setRenderModal(false), 250);
      return () => clearTimeout(timer);
    }
  }, [isReserveModalOpen]);

  if (!renderModal) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.email) return;
    makeReservation(formData);
  };

  const closeModal = () => {
    setIsReserveModalOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[95] flex items-center justify-center p-4 overflow-y-auto">
      {/* Backdrop with Fade */}
      <div
        className={`fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity duration-300 ${
          animating ? "animate-fade-in" : "animate-fade-out"
        }`}
        onClick={closeModal}
      />

      {/* Modal Card with Scale/Fade */}
      <div
        className={`relative z-10 w-full max-w-lg bg-[#1B1712] border border-white/15 rounded-3xl p-6 sm:p-8 text-[#F4EFE6] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto my-auto ${
          animating ? "animate-scale-up" : "animate-scale-down"
        }`}
      >
        <button
          onClick={closeModal}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors"
          aria-label="Close reservation modal"
        >
          <X className="w-4 h-4" />
        </button>

        {activeReservation ? (
          /* Confirmation Ticket View */
          <div className="text-center py-4 space-y-6 animate-fade-in">
            <div className="w-16 h-16 bg-[#D9A441]/20 rounded-full flex items-center justify-center mx-auto text-[#D9A441] border border-[#D9A441]/30">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest text-[#D9A441] font-semibold">Table Reserved</span>
              <h2 className="font-serif text-3xl mt-1">Reservation Confirmed</h2>
              <p className="text-xs text-[#F4EFE6]/60 mt-1">
                Confirmation Code: <span className="text-[#D9A441] font-mono">{activeReservation.id}</span>
              </p>
            </div>

            <div className="bg-[#241E17] border border-white/10 rounded-2xl p-5 text-left space-y-3 text-sm">
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#F4EFE6]/60">Guest Name</span>
                <span className="font-medium">{activeReservation.name}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#F4EFE6]/60">Date &amp; Time</span>
                <span className="font-medium">{activeReservation.date} at {activeReservation.time}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2">
                <span className="text-[#F4EFE6]/60">Party Size</span>
                <span className="font-medium">{activeReservation.guests}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#F4EFE6]/60">Seating Section</span>
                <span className="text-[#D9A441] font-medium">{activeReservation.seating}</span>
              </div>
            </div>

            <p className="text-xs text-[#F4EFE6]/50">
              A confirmation email has been sent to <span className="text-[#F4EFE6]">{activeReservation.email}</span>. We look forward to hosting you!
            </p>

            <button
              onClick={() => {
                setActiveReservation(null);
                closeModal();
              }}
              className="w-full bg-[#D9A441] text-[#1B1712] py-3.5 rounded-full font-semibold text-sm hover:bg-[#eab654] transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          /* Form View */
          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#D9A441] font-semibold mb-1">Ember &amp; Root</p>
              <h2 className="font-serif text-2xl sm:text-3xl">Reserve a Table</h2>
              <p className="text-xs text-[#F4EFE6]/60 mt-1">Book your dining experience in real-time</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#F4EFE6]/70 mb-1 flex items-center gap-1.5 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#D9A441]" /> Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-[#241E17] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm focus:border-[#D9A441] outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#F4EFE6]/70 mb-1 flex items-center gap-1.5 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#D9A441]" /> Time
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full bg-[#241E17] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm focus:border-[#D9A441] outline-none transition-colors"
                  >
                    {["12:00", "13:00", "14:00", "18:00", "19:00", "20:00", "21:00"].map((t) => (
                      <option key={t} value={t} className="bg-[#1B1712]">{t} PM</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#F4EFE6]/70 mb-1 flex items-center gap-1.5 font-medium">
                    <Users className="w-3.5 h-3.5 text-[#D9A441]" /> Party Size
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full bg-[#241E17] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm focus:border-[#D9A441] outline-none transition-colors"
                  >
                    {["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5-6 Guests", "7+ Guests (Private Room)"].map((g) => (
                      <option key={g} value={g} className="bg-[#1B1712]">{g}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#F4EFE6]/70 mb-1 flex items-center gap-1.5 font-medium">
                    <Sparkles className="w-3.5 h-3.5 text-[#D9A441]" /> Seating Area
                  </label>
                  <select
                    value={formData.seating}
                    onChange={(e) => setFormData({ ...formData, seating: e.target.value })}
                    className="w-full bg-[#241E17] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm focus:border-[#D9A441] outline-none transition-colors"
                  >
                    {["Main Dining Room", "Wood-Fire Counter", "Outdoor Patio", "Private Wine Cellar"].map((s) => (
                      <option key={s} value={s} className="bg-[#1B1712]">{s}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="border-t border-white/10 pt-3 space-y-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#F4EFE6]/70 mb-1 flex items-center gap-1.5 font-medium">
                    <User className="w-3.5 h-3.5 text-[#D9A441]" /> Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Arjun Mehta"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#241E17] border border-white/15 rounded-xl px-4 py-2.5 text-sm focus:border-[#D9A441] outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#F4EFE6]/70 mb-1 flex items-center gap-1.5 font-medium">
                      <Mail className="w-3.5 h-3.5 text-[#D9A441]" /> Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="arjun@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#241E17] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm focus:border-[#D9A441] outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#F4EFE6]/70 mb-1 flex items-center gap-1.5 font-medium">
                      <Phone className="w-3.5 h-3.5 text-[#D9A441]" /> Phone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#241E17] border border-white/15 rounded-xl px-3.5 py-2.5 text-sm focus:border-[#D9A441] outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-[#F4EFE6]/70 mb-1 font-medium">
                    Special Requests / Dietary Restrictions (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="Anniversary dinner, corner table, nut allergy"
                    value={formData.specialRequest}
                    onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                    className="w-full bg-[#241E17] border border-white/15 rounded-xl px-4 py-2.5 text-sm focus:border-[#D9A441] outline-none transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#D9A441] text-[#1B1712] font-semibold py-3.5 rounded-full text-sm hover:bg-[#eab654] transition-colors mt-2 shadow-lg"
              >
                Confirm Table Reservation
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
