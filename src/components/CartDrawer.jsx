import React, { useState, useEffect } from "react";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CheckCircle2, MapPin, Phone, User } from "lucide-react";
import { useApp } from "../context/AppContext";

export default function CartDrawer() {
  const { cart, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, subtotal, placeOrder, currentOrder, setCurrentOrder } = useApp();
  const [isCheckout, setIsCheckout] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", address: "", notes: "" });

  // Enter + Exit Animation State
  const [renderDrawer, setRenderDrawer] = useState(false);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    if (isCartOpen) {
      setRenderDrawer(true);
      setAnimating(true);
    } else if (renderDrawer) {
      setAnimating(false);
      const timer = setTimeout(() => setRenderDrawer(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isCartOpen]);

  if (!renderDrawer) return null;

  const deliveryFee = subtotal > 0 ? 3.99 : 0;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.address) return;
    placeOrder(formData);
    setIsCheckout(false);
  };

  const closeDrawer = () => {
    setIsCartOpen(false);
    setIsCheckout(false);
  };

  return (
    <div className="fixed inset-0 z-[90] flex justify-end overflow-hidden">
      {/* Backdrop with Fade Transition */}
      <div
        className={`fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity duration-300 ${
          animating ? "animate-fade-in" : "animate-fade-out"
        }`}
        onClick={closeDrawer}
      />

      {/* Drawer Panel with Slide Transition */}
      <div
        className={`relative z-10 w-full max-w-md bg-[#1B1712] border-l border-white/10 h-full flex flex-col shadow-2xl text-[#F4EFE6] ${
          animating ? "animate-slide-in-right" : "animate-slide-out-right"
        }`}
      >
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-[#241E17]">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#D9A441]" />
            <h2 className="font-serif text-xl tracking-wide">
              {currentOrder ? "Order Details" : isCheckout ? "Checkout Details" : "Your Order"}
            </h2>
          </div>
          <button
            onClick={closeDrawer}
            className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center hover:bg-white/10 transition-colors"
            aria-label="Close cart drawer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Active / Completed Order View */}
          {currentOrder ? (
            <div className="space-y-6 animate-scale-up">
              <div className="bg-[#241E17] border border-[#D9A441]/40 rounded-2xl p-6 text-center space-y-4 shadow-lg">
                <div className="w-14 h-14 bg-[#D9A441]/20 rounded-full flex items-center justify-center mx-auto text-[#D9A441]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#D9A441] font-semibold">Order Placed</span>
                  <h3 className="font-serif text-2xl font-semibold mt-1">#{currentOrder.id}</h3>
                  <p className="text-xs text-[#F4EFE6]/60 mt-1">Estimated delivery: {currentOrder.estimatedTime}</p>
                </div>
              </div>

              {/* Order Tracking Progress */}
              <div className="bg-[#241E17] border border-white/10 rounded-2xl p-5 space-y-4">
                <h4 className="text-xs uppercase tracking-widest text-[#D9A441] font-semibold">Live Status</h4>
                <div className="space-y-3">
                  {[
                    { title: "Order Received", done: true, time: "Just now" },
                    { title: "In the Wood-Fired Kitchen", done: true, time: "Preparing" },
                    { title: "Out for Delivery", done: false, time: "~15 mins" },
                    { title: "Delivered to Door", done: false, time: "~30 mins" },
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${step.done ? "bg-[#D9A441] shadow-[0_0_8px_rgba(217,164,65,0.6)]" : "bg-white/20"}`} />
                        <span className={step.done ? "text-[#F4EFE6] font-medium" : "text-[#F4EFE6]/50"}>
                          {step.title}
                        </span>
                      </div>
                      <span className="text-[#F4EFE6]/40">{step.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Items Summary */}
              <div className="bg-[#241E17] border border-white/10 rounded-2xl p-5 space-y-3">
                <h4 className="text-xs uppercase tracking-widest text-[#D9A441] font-semibold">Order Summary</h4>
                <div className="space-y-2 text-sm border-b border-white/10 pb-3">
                  {currentOrder.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span className="text-[#F4EFE6]/80">{item.quantity}x {item.dish.name}</span>
                      <span className="text-[#D9A441] font-semibold">{item.dish.price}</span>
                    </div>
                  ))}
                </div>
                <div className="flex justify-between text-sm font-semibold pt-1">
                  <span>Total Paid</span>
                  <span className="text-[#D9A441]">${currentOrder.total.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => setCurrentOrder(null)}
                className="w-full bg-[#241E17] border border-white/15 py-3.5 rounded-full text-sm font-semibold hover:border-[#D9A441] transition-colors"
              >
                Place Another Order
              </button>
            </div>
          ) : isCheckout ? (
            /* Checkout Form */
            <form id="checkout-form" onSubmit={handleCheckoutSubmit} className="space-y-4 animate-slide-down">
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#F4EFE6]/70 mb-1 flex items-center gap-1.5 font-medium">
                  <User className="w-3.5 h-3.5 text-[#D9A441]" /> Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Arjun Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#241E17] border border-white/15 rounded-xl px-4 py-3 text-sm focus:border-[#D9A441] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#F4EFE6]/70 mb-1 flex items-center gap-1.5 font-medium">
                  <Phone className="w-3.5 h-3.5 text-[#D9A441]" /> Phone Number
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#241E17] border border-white/15 rounded-xl px-4 py-3 text-sm focus:border-[#D9A441] outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#F4EFE6]/70 mb-1 flex items-center gap-1.5 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-[#D9A441]" /> Delivery Address
                </label>
                <textarea
                  required
                  rows="3"
                  placeholder="Flat 4B, Emerald Heights, Surat"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-[#241E17] border border-white/15 rounded-xl px-4 py-3 text-sm focus:border-[#D9A441] outline-none resize-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-[#F4EFE6]/70 mb-1 font-medium">
                  Delivery Notes / Requests (Optional)
                </label>
                <input
                  type="text"
                  placeholder="Ring doorbell or leave with security"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#241E17] border border-white/15 rounded-xl px-4 py-3 text-sm focus:border-[#D9A441] outline-none transition-colors"
                />
              </div>
            </form>
          ) : cart.length === 0 ? (
            /* Empty Cart */
            <div className="text-center py-20 space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-[#241E17] rounded-full flex items-center justify-center mx-auto text-[#F4EFE6]/30 border border-white/10">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-xl">Your cart is empty</h3>
              <p className="text-sm text-[#F4EFE6]/50 max-w-xs mx-auto">
                Explore our signature menu and add dishes to start your order.
              </p>
            </div>
          ) : (
            /* Cart Item List */
            <div className="space-y-4">
              {cart.map(({ dish, quantity }) => (
                <div
                  key={dish.name}
                  className="bg-[#241E17] border border-white/10 rounded-2xl p-4 flex gap-4 items-center animate-fade-in transition-all"
                >
                  <img
                    src={dish.img}
                    alt={dish.name}
                    className="w-16 h-16 rounded-xl object-cover shrink-0 border border-white/10"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif text-sm font-medium truncate">{dish.name}</h4>
                    <p className="text-[#D9A441] text-sm font-semibold mt-0.5">{dish.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-white/15 rounded-full overflow-hidden bg-[#1B1712]">
                        <button
                          onClick={() => updateQuantity(dish.name, -1)}
                          className="px-2.5 py-1 text-xs hover:bg-white/10 transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2 text-xs font-semibold">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(dish.name, 1)}
                          className="px-2.5 py-1 text-xs hover:bg-white/10 transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(dish.name)}
                    className="text-[#F4EFE6]/40 hover:text-red-400 p-2 transition-colors"
                    aria-label={`Remove ${dish.name} from cart`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {!currentOrder && cart.length > 0 && (
          <div className="p-5 sm:p-6 border-t border-white/10 bg-[#241E17] space-y-4">
            <div className="space-y-2 text-sm text-[#F4EFE6]/70">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (8%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-base font-semibold text-[#F4EFE6] pt-2 border-t border-white/10">
                <span>Total</span>
                <span className="text-[#D9A441]">${total.toFixed(2)}</span>
              </div>
            </div>

            {isCheckout ? (
              <div className="flex gap-3">
                <button
                  onClick={() => setIsCheckout(false)}
                  className="w-1/3 border border-white/20 rounded-full py-3.5 text-sm font-semibold hover:bg-white/5 transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  form="checkout-form"
                  className="w-2/3 bg-[#D9A441] text-[#1B1712] rounded-full py-3.5 text-sm font-semibold hover:bg-[#eab654] transition-colors flex items-center justify-center gap-2"
                >
                  Confirm &amp; Order <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsCheckout(true)}
                className="w-full bg-[#D9A441] text-[#1B1712] rounded-full py-3.5 text-sm font-semibold hover:bg-[#eab654] transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
