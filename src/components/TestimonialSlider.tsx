import { useState } from "react";
import { TESTIMONIALS } from "../data";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[index];

  return (
    <div id="testimonial-section-slider" className="relative max-w-4xl mx-auto px-4 py-8">
      {/* Decorative quotes background */}
      <div className="absolute top-0 left-0 -translate-x-4 -translate-y-6 opacity-5 text-neutral-800">
        <Quote className="w-24 h-24 stroke-[1]" />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center text-center space-y-6"
        >
          {/* Aesthetic stars representation */}
          <div className="flex items-center space-x-1.5" aria-hidden="true">
            {Array.from({ length: current.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-sage-500 text-sage-500 stroke-[1.5]" />
            ))}
          </div>

          {/* Testimonial Core text block */}
          <blockquote className="font-serif text-lg sm:text-xl lg:text-2xl italic leading-relaxed text-neutral-800 px-4 sm:px-12">
            “{current.testimonial}”
          </blockquote>

          {/* Patient Profile info details */}
          <div className="flex flex-col items-center">
            <cite className="not-italic font-serif text-base font-semibold text-neutral-900 tracking-wide">
              {current.name}
            </cite>
            
            {/* Skin concern tag display */}
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-sage-500 mt-2 bg-white border border-cream-200 px-2.5 py-1 rounded-none">
              Concern: {current.concern}
            </span>

            {/* Treatment received */}
            <span className="font-sans text-xs text-neutral-500 mt-1 font-light">
              Treatment: {current.treatmentRecieved}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Manual navigational controllers */}
      <div className="flex items-center justify-center space-x-6 mt-10">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-none border border-cream-200 hover:border-[#1A1A1A] hover:bg-white flex items-center justify-center text-neutral-600 hover:text-[#1A1A1A] transition-all focus:outline-none bg-white cursor-pointer"
          aria-label="Previous clinical testimonial"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Dynamic page indication dots */}
        <div className="flex items-center space-x-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1 rounded-none transition-all duration-300 cursor-pointer ${
                i === index ? "w-6 bg-sage-500" : "w-1.5 bg-cream-200"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-none border border-cream-200 hover:border-[#1A1A1A] hover:bg-white flex items-center justify-center text-neutral-600 hover:text-[#1A1A1A] transition-all focus:outline-none bg-white cursor-pointer"
          aria-label="Next clinical testimonial"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
