import { useState } from "react";
import { Link } from "react-router-dom";
import { SERVICES } from "../data";
import ServiceCard from "../components/ServiceCard";
import { ToggleLeft, CircleUser, Sparkles, Inbox } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Get a unique list of categories from the server data
  const categories = ["All", ...Array.from(new Set(SERVICES.map((s) => s.category)))];

  // Filter services based on active query button
  const filteredServices = selectedCategory === "All"
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory);

  return (
    <div id="page-services" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 space-y-16">
      
      {/* 1. EDITORIAL HEADER SECTION */}
      <section className="text-center md:max-w-3xl mx-auto space-y-4">
        <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-sage-700 font-semibold block leading-none">
          Clinical Formularies
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 leading-tight">
          Restorative Treatment Catalog
        </h1>
        <p className="font-sans text-neutral-500 text-sm font-light leading-relaxed">
          Every procedure we offer is curated for biological biocompatibility and tissue preservation. We formulate custom acid percentages, micro-dose injectives, and calibrate laser wavelengths around your natural epidermis health.
        </p>
      </section>

      {/* 2. CATEGORY SELECTOR CHIPS FILTER */}
      <section className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto border-b border-cream-200 pb-8">
        {categories.map((category) => {
          const isActive = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-300 rounded-none focus:outline-none border ${
                isActive
                  ? "bg-[#1A1A1A] border-[#1A1A1A] text-white"
                  : "bg-white border-cream-200 text-neutral-500 hover:text-[#1A1A1A] hover:border-[#1A1A1A]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </section>

      {/* 3. DYNAMIC SERVICES GRID (With motion layout animation) */}
      <section className="space-y-12 min-h-[400px]">
        
        <AnimatePresence mode="popLayout">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredServices.map((service) => (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty fall-back state (safeguarding) */}
        {filteredServices.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center text-neutral-400">
            <Inbox className="w-10 h-10 stroke-1" />
            <span className="font-sans text-sm mt-3">No services match the selected filter.</span>
          </div>
        )}

      </section>

      {/* 4. ASSISTANCE / FORMULATION ADVICE INFO-BLOCK */}
      <section className="max-w-4xl mx-auto bg-white border border-cream-200 p-8 sm:p-10 rounded-none flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <h4 className="font-serif text-lg font-medium text-neutral-900">
            Unsure of your epidermal priority?
          </h4>
          <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light">
            You do not have to self-diagnose. Over 80% of our patient catalog register for our signature **Aesthetic Barrier Assessment** during their first clinical intake. We evaluate sebum indexes and hydration depth, making real-time treatment modifications on-site.
          </p>
        </div>
        
        <Link
          to="/booking?service=assessment"
          className="px-6 py-3.5 bg-[#1A1A1A] hover:bg-sage-500 text-white text-[11px] font-bold uppercase tracking-widest text-center shrink-0 transition-colors rounded-none"
        >
          Book general study
        </Link>
      </section>

    </div>
  );
}
