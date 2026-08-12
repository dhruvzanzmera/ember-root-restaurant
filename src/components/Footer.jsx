import React from "react";
import { Link } from "react-router-dom";
import { ChefHat, MapPin, PhoneCall } from "lucide-react";
import { InstagramIcon, FacebookIcon, XIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#14110E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
        <div data-aos="fade-up">
          <div className="flex items-center gap-2 mb-4">
            <ChefHat className="w-6 h-6 text-[#D9A441]" strokeWidth={1.75} />
            <span className="font-serif text-xl">Ember &amp; Root</span>
          </div>
          <p className="text-[#F4EFE6]/55 text-sm leading-relaxed mb-4">
            Wood-fired, season-driven cooking in the heart of the city.
          </p>
          <div className="flex gap-3 text-xs font-semibold uppercase tracking-wider text-[#D9A441]">
            <Link to="/menu" className="hover:underline">Menu</Link>
            <span className="text-white/20">&bull;</span>
            <Link to="/gallery" className="hover:underline">Gallery</Link>
            <span className="text-white/20">&bull;</span>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <h4 className="uppercase text-xs tracking-widest text-[#D9A441] mb-4 font-semibold">Visit Us</h4>
          <p className="flex items-start gap-2 text-sm text-[#F4EFE6]/60 mb-3">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-[#D9A441]" /> 42 Harborline Street, Surat, GJ
          </p>
          <p className="flex items-center gap-2 text-sm text-[#F4EFE6]/60">
            <PhoneCall className="w-4 h-4 shrink-0 text-[#D9A441]" /> +91 98765 43210
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="200">
          <h4 className="uppercase text-xs tracking-widest text-[#D9A441] mb-4 font-semibold">Opening Hours</h4>
          <p className="text-sm text-[#F4EFE6]/60 mb-2">Mon – Fri: 12:00 PM – 11:00 PM</p>
          <p className="text-sm text-[#F4EFE6]/60">Sat – Sun: 10:00 AM – 12:00 AM</p>
        </div>

        <div data-aos="fade-up" data-aos-delay="300">
          <h4 className="uppercase text-xs tracking-widest text-[#D9A441] mb-4 font-semibold">Follow Along</h4>
          <div className="flex gap-3">
            {[InstagramIcon, FacebookIcon, XIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media profile"
                className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center hover:bg-[#D9A441] hover:text-[#1B1712] hover:border-[#D9A441] transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-xs text-[#F4EFE6]/40">
        © {new Date().getFullYear()} Ember &amp; Root. All rights reserved.
      </div>
    </footer>
  );
}
