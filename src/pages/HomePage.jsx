import React from "react";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import WhyUs from "../components/WhyUs";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import NewsletterAndApp from "../components/NewsletterAndApp";
import ReserveCta from "../components/ReserveCta";

export default function HomePage({ email, setEmail, subscribed, handleSubscribe, openFaq, setOpenFaq }) {
  return (
    <main>
      <SEO
        title="Ember & Root | Wood-Fired Fine Dining & Artisanal Restaurant"
        description="Food cooked the way it used to be. Wood smoke, slow hours, and a seasonal menu cooked over open flame. Reserve a table or order online today."
        keywords="wood fired restaurant, open flame hearth, seasonal fine dining, farm to table, steakhouse, Ember and Root"
      />
      <Hero />
      <Categories />
      <Menu />
      <Gallery />
      <WhyUs />
      <Team />
      <Testimonials />
      <Faq openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <NewsletterAndApp
        email={email}
        setEmail={setEmail}
        subscribed={subscribed}
        handleSubscribe={handleSubscribe}
      />
      <ReserveCta />
    </main>
  );
}
