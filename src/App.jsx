import { useEffect } from "react";
import { FaCommentDots } from "react-icons/fa";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import FeaturedImage from "./components/FeaturedImage";
import TrustedBrands from "./components/TrustedBrands";
import LogoMarquee from "./components/LogoMarquee";
import WhatWeDo from "./components/WhatWeDo";
import RecentWork from "./components/RecentWork";
import Partnerships from "./components/Partnerships";
import TestimonialsSection from "./components/TestimonialsSection";
import ProductsSection from "./components/ProductsSection";
import StatsSection from "./components/StatsSection";
import LifeAt7Span from "./components/LifeAt7Script";
import ContactCTA from "./components/ContactCTA";
import KnowledgeHub from "./components/KnowledgeHub";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll(".app-main > *");

    if (!("IntersectionObserver" in window)) {
      sections.forEach((section) => section.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );

    sections.forEach((section) => {
      section.classList.add("scroll-reveal");
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main className="app-main">
        <HeroSection />
        <FeaturedImage />
        <TrustedBrands />
        <LogoMarquee />
        <WhatWeDo />
        <RecentWork />
        <TestimonialsSection />
        <Partnerships />
        <ProductsSection />
        <StatsSection />
        <LifeAt7Span />
        <KnowledgeHub />
        <ContactCTA />
        <Footer/>
      </main>
      <a
        className="chat-button"
        href="#contact"
        aria-label="Chat with support"
      >
        <FaCommentDots />
      </a>
    </>
  );
}

export default App;
