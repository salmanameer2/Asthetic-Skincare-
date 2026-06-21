import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import { motion, AnimatePresence } from "motion/react";

// Scroll To Top on route path transitions
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}

// Custom page exit/entry transition frame
function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <div className="flex flex-col min-h-screen bg-cream-50 overflow-x-hidden selection:bg-sage-200 selection:text-sage-900 selection:bg-opacity-50">
        
        {/* Sticky Global Header */}
        <Header />

        {/* Global Announcement Alert - luxury touch */}
        <div className="bg-sage-900 text-cream-50 py-2.5 text-center px-4">
          <p className="font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase font-light">
            Dr. Laurent is accepting clinical intake studies for Summer 2026. <span className="underline decoration-sage-300 underline-offset-4 font-semibold ml-1"><RouterLink to="/booking">Schedule Assessment</RouterLink></span>
          </p>
        </div>

        {/* Dynamic Route Body */}
        <main className="flex-grow pt-8 sm:pt-14">
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <PageTransitionWrapper>
                    <Home />
                  </PageTransitionWrapper>
                }
              />
              <Route
                path="/services"
                element={
                  <PageTransitionWrapper>
                    <Services />
                  </PageTransitionWrapper>
                }
              />
              <Route
                path="/about"
                element={
                  <PageTransitionWrapper>
                    <About />
                  </PageTransitionWrapper>
                }
              />
              <Route
                path="/booking"
                element={
                  <PageTransitionWrapper>
                    <Booking />
                  </PageTransitionWrapper>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageTransitionWrapper>
                    <Contact />
                  </PageTransitionWrapper>
                }
              />
            </Routes>
          </AnimatePresence>
        </main>

        {/* Structured Global Footer */}
        <Footer />

      </div>
    </Router>
  );
}

// Inline Helper to support smooth router transitions from global announcement strip
import { Link as RouterLink } from "react-router-dom";

