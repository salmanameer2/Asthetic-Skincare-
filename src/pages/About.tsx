import { DOCTORS, VALUES } from "../data";
import { GraduationCap, Award, CheckCircle } from "lucide-react";

export default function About() {
  return (
    <div id="page-about" className="space-y-24 pb-20">
      
      {/* 1. BRAND STORY & PHILOSOPHY */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Mission Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-sage-700 font-semibold block leading-none">
              LEUR AESTHETICS Core Mission
            </span>
            
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 leading-tight">
              A departure from the synthetic standards of skin correction.
            </h1>
            
            <p className="font-sans text-neutral-500 text-sm font-light leading-relaxed">
              Founded in 2012 by Board-Certified Dermatologist Dr. Evelyne Laurent, LEUR AESTHETICS was built as a sanctuary for science-focused clinical skincare and refined medical aesthetics. We noticed a troubling industry drift toward exaggerated facial contours, synthetic filling agents, and compromised skin-barrier states.
            </p>
            
            <p className="font-sans text-neutral-500 text-sm font-light leading-relaxed">
              We choose path illumination over concealment. Our protocols prioritize your biological skin health first, reconstructing lipids and boosting natural autologous collagen fibers. The goal of our practice is not to alter, but to optimize facial preservation and release cellular radiance.
            </p>

            {/* Signature quote signoff */}
            <div className="pt-4 border-t border-cream-200">
              <span className="font-serif italic text-base text-neutral-800 block">
                “Your organic facial harmony should never be homogenized. We preserve the lines that tell your authentic design story.”
              </span>
              <span className="font-sans text-[10px] uppercase tracking-wider text-neutral-500 mt-2 block font-medium">
                — Dr. Evelyne Laurent, MD
              </span>
            </div>
          </div>

          {/* Large split images layout representing clinical interior */}
          <div className="lg:col-span-6 grid grid-cols-12 gap-4 items-center">
            <div className="col-span-7 aspect-3/4 rounded-none overflow-hidden border border-cream-200">
              <img
                src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=500"
                alt="Minimal clinic reception lounge"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="col-span-5 flex flex-col space-y-4">
              <div className="aspect-square rounded-none overflow-hidden border border-cream-200">
                <img
                  src="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=400"
                  alt="Detailed clinical skincare equipment"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="aspect-square rounded-none overflow-hidden border border-cream-200 bg-white p-6 flex flex-col justify-center text-center">
                <span className="font-serif text-2xl font-light text-sage-500 block">98%</span>
                <span className="font-sans text-[10px] uppercase tracking-wider text-neutral-500 mt-2 font-semibold">
                  Patient Barrier Recovery
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. THE SPECIALISTS / DOCTORS SECTION */}
      <section className="bg-white border-y border-cream-200 py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-sage-500 font-bold block">
              Dermatological Excellence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light text-neutral-900">
              Meet our Clinical Directors
            </h2>
            <p className="font-sans text-neutral-500 text-sm font-light leading-relaxed">
              Our clinical crew brings together licensed medical expertise, research tenures, and artistic facial symmetry mapping to design hyper-precise treatments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {DOCTORS.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white border border-cream-200 rounded-none overflow-hidden flex flex-col sm:flex-row"
              >
                {/* Doctor Portrait Frame */}
                <div className="sm:w-2/5 aspect-square sm:aspect-auto h-72 sm:h-auto overflow-hidden bg-cream-50 border-b sm:border-b-0 sm:border-r border-cream-200">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-103"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Doctor Bio and credentials */}
                <div className="sm:w-3/5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-serif text-xl font-medium text-neutral-950">
                        {doctor.name}
                      </h3>
                      <span className="font-sans text-[10px] uppercase tracking-wider font-semibold text-sage-500 block mt-1">
                        {doctor.title}
                      </span>
                      <span className="font-sans text-[11px] text-neutral-400 block pb-1.5 border-b border-cream-100 mt-1">
                        {doctor.role}
                      </span>
                    </div>

                    <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light">
                      {doctor.bio}
                    </p>
                  </div>

                  {/* Education & Credentials box */}
                  <div className="space-y-4 pt-4 border-t border-cream-100">
                    <div>
                      <span className="font-sans text-[9px] uppercase tracking-wider text-neutral-400 font-semibold flex items-center mb-1.5">
                        <GraduationCap className="w-3.5 h-3.5 mr-1.5 text-sage-500" />
                        Education & Residency
                      </span>
                      <ul className="space-y-1">
                        {doctor.education.map((edu, idx) => (
                          <li key={idx} className="font-sans text-[10px] text-neutral-600 font-light flex items-start leading-snug">
                            <span className="text-sage-500 mr-1.5">•</span>
                            <span>{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="font-sans text-[9px] uppercase tracking-wider text-neutral-400 font-semibold flex items-center mb-1.5">
                        <Award className="w-3.5 h-3.5 mr-1.5 text-sage-500" />
                        Clinical Specialties
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {doctor.specialty.map((spec, idx) => (
                          <span
                            key={idx}
                            className="text-[9px] font-semibold font-sans bg-white text-sage-500 border border-cream-200 px-2.5 py-0.5 rounded-none"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. CORE COVENANT VALUES SECTION */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        
        <div className="flex flex-col items-center text-center space-y-3 max-w-2xl mx-auto">
          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-sage-500 font-bold block">
            Clinical Standards
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-neutral-900">
            Our Care Covenants
          </h2>
          <p className="font-sans text-neutral-500 text-sm font-light leading-relaxed">
            Every clinical micro-treatment we run is bound by four key principles of patient preservation, safety, and scientific efficacy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {VALUES.map((val, idx) => (
            <div
              key={idx}
              className="bg-white p-8 border border-cream-200 rounded-none flex flex-col space-y-3 hover:border-sage-500 transition-colors duration-300"
            >
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-sage-500 shrink-0 stroke-[1.5]" />
                <h3 className="font-serif text-lg font-medium text-neutral-950">
                  {val.title}
                </h3>
              </div>
              
              <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light pl-8">
                {val.description}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* 4. THE INTERIOR ATMOSPHERE GALLERY */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-12">
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-sage-700 font-semibold block">
            The Sanctuary
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light text-neutral-900">
            A Clean, Uncluttered Atmosphere
          </h2>
          <p className="font-sans text-neutral-500 text-sm font-light leading-relaxed">
            Our physical practice in Beverly Hills is curated down to the air filtration, creating a silent, peaceful clinical space to escape sensory overload.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="h-64 sm:h-80 rounded-none overflow-hidden border border-cream-200">
            <img
              src="https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=500"
              alt="Treatment Room"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-104"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="h-64 sm:h-80 rounded-none overflow-hidden border border-cream-200">
            <img
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=500"
              alt="Skincare formulation cabinet"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-104"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="h-64 sm:h-80 rounded-none overflow-hidden border border-cream-200">
            <img
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=500"
              alt="Consultation desk space"
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-104"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

    </div>
  );
}
