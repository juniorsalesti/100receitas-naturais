/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { PainAgitation } from './components/PainAgitation';
import { InsideBook } from './components/InsideBook';
import { AboutTeacher } from './components/AboutTeacher';
import { Bonus } from './components/Bonus';
import { TargetAudience } from './components/TargetAudience';
import { Testimonials } from './components/Testimonials';
import { OfferSection } from './components/OfferSection';
import { Guarantee } from './components/Guarantee';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { StickyBottomBar } from './components/StickyBottomBar';

export default function App() {
  useEffect(() => {
    // Scroll reveal with fail-safe support for In-App Browsers (Instagram/FB/TikTok)
    const elements = document.querySelectorAll('.reveal-on-scroll');

    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.05,
          rootMargin: '100px 0px 100px 0px',
        }
      );

      elements.forEach((el) => observer.observe(el));

      // Fail-safe: Ensure all elements become visible after max 600ms even if observer fails
      const safetyTimer = setTimeout(() => {
        elements.forEach((el) => {
          el.classList.add('reveal-visible');
        });
      }, 600);

      return () => {
        clearTimeout(safetyTimer);
        elements.forEach((el) => observer.unobserve(el));
      };
    } else {
      // Direct fallback if IntersectionObserver is unavailable
      elements.forEach((el) => el.classList.add('reveal-visible'));
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F6F1E4] text-[#20261F] overflow-x-hidden selection:bg-[#B23A2E] selection:text-white">
      {/* Background SVG Grain Overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      {/* Header */}
      <Header />

      {/* Hero Section - NEVER HIDDEN, RENDERS IMMEDIATELY */}
      <main>
        <Hero />

        {/* Infinite Social Proof Marquee */}
        <Marquee />

        {/* Pain Agitation Section */}
        <div className="reveal-on-scroll reveal-init">
          <PainAgitation />
        </div>

        {/* Inside the Book */}
        <div className="reveal-on-scroll reveal-init">
          <InsideBook />
        </div>

        {/* Who Teaches */}
        <div className="reveal-on-scroll reveal-init">
          <AboutTeacher />
        </div>

        {/* Bonus Section */}
        <div className="reveal-on-scroll reveal-init">
          <Bonus />
        </div>

        {/* For Whom / Not For Whom */}
        <div className="reveal-on-scroll reveal-init">
          <TargetAudience />
        </div>

        {/* Testimonials */}
        <div className="reveal-on-scroll reveal-init">
          <Testimonials />
        </div>

        {/* Offer Section */}
        <OfferSection />

        {/* Guarantee */}
        <div className="reveal-on-scroll reveal-init">
          <Guarantee />
        </div>

        {/* FAQ Accordion */}
        <div className="reveal-on-scroll reveal-init">
          <FAQ />
        </div>

        {/* Final Call to Action */}
        <div className="reveal-on-scroll reveal-init">
          <FinalCTA />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Bottom Bar */}
      <StickyBottomBar />
    </div>
  );
}

