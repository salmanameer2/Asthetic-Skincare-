import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram, Mail, Clock, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer id="main-footer" className="bg-[#121212] text-neutral-300 font-sans border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Column 1: Brand & Tagline */}
          <div className="md:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <Link to="/" className="flex flex-col items-start focus:outline-none">
                <span className="font-serif text-2xl font-semibold tracking-[0.22em] text-cream-50">
                  LEUR AESTHETICS
                </span>
                <span className="font-sans text-[8px] uppercase tracking-[0.35em] text-sage-300 mt-1">
                  Clinical Skincare & Aesthetics
                </span>
              </Link>
              <p className="text-sm font-light leading-relaxed text-neutral-400 mt-5 max-w-sm">
                A premium medical aesthetic practice marrying advanced science-led cellular recovery with the absolute art of facial preservation.
              </p>
            </div>
            
            {/* Custom styled Social link blocks */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-none bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-cream-50 hover:border-cream-50/40 transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@leuraesthetics.com"
                className="w-9 h-9 flex items-center justify-center rounded-none bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-cream-50 hover:border-cream-50/40 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Patient Advisory Services Navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-semibold text-cream-100">
              Clinical Offerings
            </h4>
            <ul className="space-y-3 text-sm font-light text-neutral-400">
              <li>
                <Link to="/services" className="hover:text-cream-50 hover:underline hover:decoration-sage-300 transition-all">
                  Sculptra Biostimulation
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cream-50 hover:underline hover:decoration-sage-300 transition-all">
                  Clear + Brilliant Laser
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cream-50 hover:underline hover:decoration-sage-300 transition-all">
                  Restylane Contour Lip Fillers
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cream-50 hover:underline hover:decoration-sage-300 transition-all">
                  Microneedling with PRF
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-cream-50 hover:underline hover:decoration-sage-300 transition-all">
                  Epicuticular Barrier Facials
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Patient Care navigation */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-semibold text-cream-100">
              Patient Care
            </h4>
            <ul className="space-y-3 text-sm font-light text-neutral-400">
              <li>
                <Link to="/" className="hover:text-cream-50 transition-colors">
                  Home Office
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-cream-50 transition-colors">
                  Our Specialists
                </Link>
              </li>
              <li>
                <Link to="/booking" className="hover:text-cream-50 transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-cream-50 transition-colors">
                  Office Locator
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter formulation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-semibold text-cream-100">
              The Aesthetic Letter
            </h4>
            <p className="text-xs font-light text-neutral-400 leading-normal">
              Receive professional biological skin intelligence and seasonal treatment priorities direct from Dr. Laurent.
            </p>
            
            {subscribed ? (
              <div className="p-3 bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs rounded-none font-medium transition-all">
                Signed up successfully. Check your skin guide shortly.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative mt-2 p-0">
                <input
                  type="email"
                  required
                  placeholder="name@clinical.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 text-cream-50 placeholder-neutral-600 text-xs px-4 py-3 rounded-none focus:outline-none focus:border-sage-500 transition-colors duration-250 pr-12"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 bg-neutral-800 hover:bg-sage-500 hover:text-white text-neutral-400 transition-colors rounded-none focus:outline-none flex items-center justify-center cursor-pointer"
                  aria-label="Subscribe to newsletter"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="pt-2 flex flex-col space-y-2 text-xs text-neutral-400">
              <div className="flex items-center">
                <Clock className="w-3.5 h-3.5 text-sage-300 mr-2 shrink-0" />
                <span>Mon – Fri: 09:00 – 18:00</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-3.5 h-3.5 text-sage-300 mr-2 shrink-0" />
                <span>8420 Wilshire Blvd, Beverly Hills, CA</span>
              </div>
            </div>
          </div>

        </div>

        {/* Advisory and bottom row copyright */}
        <div className="mt-16 pt-8 border-t border-neutral-800/60 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-8">
            <p className="text-[10px] font-light leading-relaxed text-neutral-500 tracking-wide max-w-3xl">
              CLINICAL ADVISORY NOTE: LEUR AESTHETICS is a medical skin boutique directed by board-certified physicians. Injective and laser therapies require personalized medical intake clearance and a skin barrier study during consultation on-site. Real-world treatment efficacy and downtimes depend completely on skin type reserves, hydration indexes, and cellular regeneration speeds.
            </p>
          </div>
          <div className="md:col-span-4 md:text-right text-xs font-light text-neutral-500 tracking-wider">
            &copy; {new Date().getFullYear()} LEUR AESTHETICS. All architectural rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}
