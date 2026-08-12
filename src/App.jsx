import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { AppProvider } from "./context/AppContext";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Toast from "./components/Toast";
import CartDrawer from "./components/CartDrawer";
import ReservationModal from "./components/ReservationModal";

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import GalleryPage from "./pages/GalleryPage";
import TeamPage from "./pages/TeamPage";
import ReviewsPage from "./pages/ReviewsPage";
import FaqPage from "./pages/FaqPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 60 });

    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <AppProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-[#1B1712] text-[#F4EFE6] font-sans selection:bg-[#D9A441] selection:text-[#1B1712] flex flex-col justify-between">
          <Navbar scrolled={scrolled} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

          <div className="flex-1">
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage
                    email={email}
                    setEmail={setEmail}
                    subscribed={subscribed}
                    handleSubscribe={handleSubscribe}
                    openFaq={openFaq}
                    setOpenFaq={setOpenFaq}
                  />
                }
              />
              <Route path="/menu" element={<MenuPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/faq" element={<FaqPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>

          <Footer />

          {/* Real-time Interactive Overlays */}
          <Toast />
          <CartDrawer />
          <ReservationModal />
        </div>
      </Router>
    </AppProvider>
  );
}