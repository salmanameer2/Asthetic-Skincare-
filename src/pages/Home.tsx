import { Link } from "react-router-dom";
import { SERVICES, BEFORE_AFTERS } from "../data";
import ServiceCard from "../components/ServiceCard";
import TestimonialSlider from "../components/TestimonialSlider";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { ShieldCheck, Award, Layers, Target, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  // Take first 3 services to feature on home page
  const featuredServices = SERVICES.slice(0, 3);

  return (
    <div id="page-home" className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 md:pt-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Narrative Frame */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="space-y-4">
                <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-sage-700 font-semibold block leading-none">
                  Clinical Facial Architecture
                </span>
                
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-neutral-900 leading-[1.1] tracking-tight">
                  We design cell-level <br className="hidden sm:inline" />
                  <span className="italic">restoration</span> for natural facial symmetry.
                </h1>
                
                <p className="font-sans text-neutral-500 text-sm sm:text-base font-light leading-relaxed max-w-xl">
                  Directed by board-certified dermatology physicians, LEUR AESTHETICS departs from the exaggerated filler formulas of the past. We employ autologous medical peptides and biostimulative lasers to restore biological integrity, tone, and organic luster.
                </p>
              </div>

              {/* Responsive CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-5">
                <Link
                  id="hero-primary-cta"
                  to="/booking"
                  className="px-8 py-4 bg-[#1A1A1A] text-white text-xs font-bold uppercase tracking-widest text-center rounded-none hover:bg-sage-500 transition-all duration-300"
                >
                  Book Clinical Assessment
                </Link>
                <Link
                  id="hero-secondary-cta"
                  to="/services"
                  className="px-8 py-4 border border-[#1A1A1A] text-[#1A1A1A] text-xs font-bold uppercase tracking-widest text-center rounded-none hover:bg-white hover:border-sage-500 hover:text-sage-500 transition-all duration-300"
                >
                  Explore Offerings
                </Link>
              </div>

              {/* Micro Accreditation details */}
              <div className="pt-6 border-t border-cream-200 grid grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <ShieldCheck className="w-5 h-5 text-sage-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-sans text-[11px] uppercase tracking-wider font-semibold text-neutral-900">
                      Medical Grade
                    </h4>
                    <p className="font-sans text-[11px] text-neutral-500 font-light mt-0.5 leading-snug">
                      FDA approved devices & biological formulas only.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Layers className="w-5 h-5 text-sage-600 mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-sans text-[11px] uppercase tracking-wider font-semibold text-neutral-900">
                      Vascular Protection
                    </h4>
                    <p className="font-sans text-[11px] text-neutral-500 font-light mt-0.5 leading-snug">
                      Dermal mapping to protect vessel density.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Asymmetrical Image Frame */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative z-10 w-full aspect-4/5 rounded-none overflow-hidden border border-cream-200">
                <img
                  src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=700"
                  alt="Clinical high-end dermatology skin scan treatment environment"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Overlap background badge */}
              <div className="absolute -bottom-6 -left-6 z-20 bg-white border border-cream-200 p-5 rounded-none max-w-[200px] hidden sm:block">
                <span className="font-serif text-3xl font-medium text-sage-500 block leading-none">
                  100%
                </span>
                <p className="font-sans text-[10px] uppercase tracking-wider text-neutral-500 mt-1.5 leading-snug">
                  Individually Formulated Clinical Receipts
                </p>
              </div>

              {/* Decorative framing lines */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-sage-500 opacity-40 rounded-none pointer-events-none"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-sage-500 opacity-40 rounded-none pointer-events-none"></div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. CLINICAL TRUST STRIP */}
      <section className="bg-white border-y border-cream-200 py-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-cream-200">
            <div className="flex flex-col items-center text-center px-4">
              <span className="font-serif text-3xl font-medium text-neutral-900">14+</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-medium mt-1">
                Years Active Research
              </span>
            </div>
            <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
              <span className="font-serif text-3xl font-medium text-neutral-900">2,400+</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-medium mt-1">
                Barrier Reset Cycles
              </span>
            </div>
            <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
              <span className="font-serif text-3xl font-medium text-neutral-900">100%</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-medium mt-1">
                Physician Owned Clinic
              </span>
            </div>
            <div className="flex flex-col items-center text-center px-4 pt-4 md:pt-0">
              <span className="font-serif text-3xl font-medium text-neutral-900">Zero</span>
              <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-medium mt-1">
                Artificial Fillers
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED WORKSHOPS/TREATMENTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="space-y-12">
          
          {/* Header Block */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-sage-700 font-semibold block">
                The Clinical Standard
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-neutral-900">
                Bespoke Cellular Treatments
              </h2>
              <p className="font-sans text-neutral-500 text-sm font-light max-w-xl">
                A highly selected collection of chemical, mechanical, and biostimulative protocols designed to replenish skin volume and barrier density.
              </p>
            </div>

            <Link
              to="/services"
              className="group inline-flex items-center text-xs font-semibold uppercase tracking-widest text-neutral-900 hover:text-sage-700 transition-colors shrink-0"
            >
              See All Treatments
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

        </div>
      </section>

      {/* 4. RESULTS COMPARATIVE PANEL OVERVIEW */}
      <section className="bg-cream-100/30 border-y border-cream-200/40 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Descriptive column */}
            <div className="lg:col-span-5 space-y-6">
              <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-sage-700 font-semibold block">
                Visualizing Success
              </span>
              
              <h2 className="font-serif text-3xl sm:text-4xl font-light text-neutral-900 leading-tight">
                Authentic Micro-Clarity Progress
              </h2>
              
              <p className="font-sans text-neutral-500 text-sm font-light leading-relaxed">
                True dermal restoration is a cumulative biological curve. We document patients' real epidermis progress under strict clinical studio lighting to track capillary dilation, melanin distribution, and structural pore depth adjustments.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-none border border-sage-500 flex items-center justify-center text-sage-500 font-bold shrink-0 mt-0.5 text-xs font-mono">
                    1
                  </div>
                  <p className="font-sans text-xs text-neutral-600 pl-3 leading-relaxed">
                    <strong>Tissue Calibration</strong>: Photos taken with standardized spectral filters to avoid white-balance changes or digital trickery.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-none border border-sage-500 flex items-center justify-center text-sage-500 font-bold shrink-0 mt-0.5 text-xs font-mono">
                    2
                  </div>
                  <p className="font-sans text-xs text-neutral-600 pl-3 leading-relaxed">
                    <strong>Barrier Tracking</strong>: Every treatment case focuses first on capillary calming and lipid re-balancing before invasive triggers.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <Link
                  to="/booking"
                  className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-[#1A1A1A] hover:text-sage-500 transition-colors"
                >
                  Schedule an assessment
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Slider Case display */}
            <div className="lg:col-span-7">
              {/* Show the first casing study */}
              <BeforeAfterSlider item={BEFORE_AFTERS[0]} />
            </div>

          </div>

        </div>
      </section>

      {/* 5. TESTIMONIAL PANEL */}
      <section className="bg-white text-neutral-900 py-16 sm:py-24 relative overflow-hidden border-y border-cream-200">
        {/* Accent visual details */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-sage-50 rounded-full filter blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage-50 rounded-full filter blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 space-y-12">
          
          <div className="text-center space-y-3">
            <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-sage-500 font-bold block">
              Patient Experiences
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-neutral-950">
              Trust in Clean Restoration
            </h2>
            <div className="w-12 h-[1px] bg-sage-500 mx-auto mt-4"></div>
          </div>

          <TestimonialSlider />

        </div>
      </section>

      {/* 6. FINAL CALL TO ACTION CARD */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="relative bg-white border border-cream-200 rounded-none overflow-hidden py-16 px-8 sm:px-12 lg:px-16 text-center max-w-5xl mx-auto">
          
          {/* Subtle branding seal illustration */}
          <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-none border border-sage-500 text-sage-500 mb-6" aria-hidden="true">
            <Award className="w-5 h-5 stroke-[1.25]" />
          </div>

          <div className="max-w-2xl mx-auto space-y-5">
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-neutral-900 leading-tight">
              Begin your restorative skin mapping.
            </h2>
            <p className="font-sans text-neutral-500 text-sm font-light leading-relaxed">
              Every client trajectory begins with an exclusive 45-minute clinical barrier evaluation and microvascular study. We map your current dermal thickness index to draft a hyper-calibrated treatment plan.
            </p>
            
            <div className="pt-6">
              <Link
                id="footer-card-cta"
                to="/booking"
                className="px-8 py-4 bg-[#1A1A1A] hover:bg-sage-500 hover:text-white text-cream-50 text-xs font-bold uppercase tracking-widest rounded-none transition-colors duration-300 inline-block"
              >
                Book consultation online
              </Link>
            </div>
            
            <span className="font-sans text-[10px] text-neutral-400 block pt-2 tracking-wider">
              No deposit required • Clinical study takes place in Beverly Hills, CA
            </span>
          </div>

        </div>
      </section>

    </div>
  );
}
