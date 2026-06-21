import React, { useState } from "react";
import { Mail, PhoneCall, MapPin, Clock, MessageSquare, Compass, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleMessageSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !msg) return;

    setSending(true);

    // Simulate trans-agency message transmission
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setName("");
      setEmail("");
      setMsg("");
    }, 1100);
  };

  return (
    <div id="page-contact" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 space-y-20">
      
      {/* 1. SECTION EDITORIAL HEADER */}
      <section className="text-center md:max-w-xl mx-auto space-y-3">
        <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-sage-800 font-semibold block leading-none">
          Connect Clinic
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-neutral-900 leading-tight">
          We invite clinical dialogue.
        </h1>
        <p className="font-sans text-neutral-500 text-sm font-light leading-relaxed">
          Whether you are a prospective patient inquiring about deep laser recovery times or a visiting physician, our administration is ready to assist you.
        </p>
      </section>

      {/* 2. CHANNELS & MAP OVERVIEW GRID */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
        
        {/* L. Column: Hours, Locations and Satellite Coordinates Map */}
        <div className="lg:col-span-5 space-y-8">
          
          <div className="space-y-6">
            <h3 className="font-serif text-xl font-medium text-neutral-950">
              Physical Practice
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-sage-600 mt-0.5 shrink-0" />
                <div className="pl-4 font-sans text-xs text-neutral-500 font-light leading-relaxed">
                  <strong className="text-neutral-800 font-medium block">Beverly Hills, California Office</strong>
                  8420 Wilshire Blvd, Suite 210<br />
                  Beverly Hills, CA 90211
                </div>
              </div>

              <div className="flex items-start">
                <PhoneCall className="w-5 h-5 text-sage-600 mt-0.5 shrink-0" />
                <div className="pl-4 font-sans text-xs text-neutral-500 font-light leading-relaxed">
                  <strong className="text-neutral-800 font-medium block">Clinical Inquiries</strong>
                  Direct Corridor: 310.555.0190
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="w-5 h-5 text-sage-600 mt-0.5 shrink-0" />
                <div className="pl-4 font-sans text-xs text-neutral-500 font-light leading-relaxed">
                  <strong className="text-neutral-800 font-medium block">Electronic Registry</strong>
                  patientcare@aestheteclinic.com
                </div>
              </div>
            </div>
          </div>

          {/* Operating Hours Table */}
          <div className="border-t border-cream-200/70 pt-6 space-y-4">
            <h4 className="font-serif text-base font-semibold text-neutral-950 flex items-center">
              <Clock className="w-4 h-4 text-sage-600 mr-2.5" />
              Office Corridor Hours
            </h4>
            
            <div className="font-sans text-xs text-neutral-500 space-y-2">
              <div className="flex items-center justify-between border-b border-cream-100 pb-1.5 font-light">
                <span>Monday – Thursday</span>
                <span className="text-neutral-900 font-medium">09:00 – 18:00</span>
              </div>
              <div className="flex items-center justify-between border-b border-cream-100 pb-1.5 font-light">
                <span>Friday</span>
                <span className="text-neutral-900 font-medium">09:00 – 17:00</span>
              </div>
              <div className="flex items-center justify-between border-b border-cream-100 pb-1.5 font-light text-neutral-400">
                <span>Saturday</span>
                <span>By Special Appointment</span>
              </div>
              <div className="flex items-center justify-between pb-1 font-light text-neutral-400">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>
          </div>

          {/* DESIGN-FIRST SATELLITE ARCHITECTURAL MAP */}
          <div className="relative h-64 rounded-none border border-cream-200 overflow-hidden bg-white p-4 group">
            
            {/* Fine architectural drafting grid lines overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#E5E4E2_1px,transparent_1px),linear-gradient(to_bottom,#E5E4E2_1px,transparent_1px)] bg-[size:18px_18px] opacity-40"></div>
            
            {/* Minimal Map abstract vectors */}
            <div className="relative w-full h-full border border-cream-200 rounded-none flex flex-col justify-between p-4 bg-white/20 backdrop-blur-xs">
              <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 tracking-wider">
                <span className="flex items-center">
                  <Compass className="w-3.5 h-3.5 mr-1 text-sage-500" />
                  GPS MATRIX
                </span>
                <span>LN: 34.0628° N, 118.3731° W</span>
              </div>

              {/* Central pinpoint target crosshairs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full border border-sage-500/20 animate-pulse relative flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full border border-sage-500/35 flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-sage-500 relative">
                      <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 font-sans text-[9px] uppercase tracking-wider font-semibold text-neutral-900 whitespace-nowrap">LEUR</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom directions block */}
              <div className="flex items-end justify-between font-sans relative z-10">
                <div>
                  <span className="text-[10px] font-semibold text-neutral-900 uppercase block tracking-wider">Wilshire Blvd</span>
                  <span className="text-[9px] text-neutral-400 font-light block mt-0.5">Adjacent to Crescent Dr Parking</span>
                </div>
                <a
                  href="https://maps.apple.com"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#1A1A1A] text-white hover:bg-sage-500 text-[10px] font-sans font-bold uppercase tracking-widest px-3 py-1.5 rounded-none transition-colors"
                >
                  NAVIGATE
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* R. Column: Secure Form Transmission */}
        <div className="lg:col-span-7 bg-white border border-cream-200 p-6 sm:p-10 rounded-none">
          
          <AnimatePresence mode="wait">
            {!sent ? (
              <motion.div
                key="contact-form-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div className="space-y-1.5 flex items-center">
                  <MessageSquare className="w-4 h-4 text-sage-500 mr-2.5" />
                  <h3 className="font-serif text-lg font-medium text-neutral-950">
                    Send Administrative Message
                  </h3>
                </div>

                <form onSubmit={handleMessageSubmit} className="space-y-5">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="font-sans text-[10px] uppercase tracking-widest font-bold text-neutral-400">
                      Your full name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="E.g. Olivia Winters"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-white border border-cream-200 px-4 py-3 text-xs text-neutral-900 rounded-none tracking-wide focus:outline-none focus:border-sage-500 placeholder-neutral-400 transition-colors duration-250"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="font-sans text-[10px] uppercase tracking-widest font-bold text-neutral-400">
                      Your email address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="olivia@clinical.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-cream-200 px-4 py-3 text-xs text-neutral-900 rounded-none tracking-wide focus:outline-none focus:border-sage-500 placeholder-neutral-400 transition-colors duration-250"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="font-sans text-[10px] uppercase tracking-widest font-bold text-neutral-400">
                      Your clinical inquiry or message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      placeholder="Specify cellular response requests or specific compound queries."
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      className="w-full bg-white border border-cream-200 px-4 py-3 text-xs text-neutral-900 rounded-none tracking-wide focus:outline-none focus:border-sage-500 placeholder-neutral-400 transition-colors duration-250 resize-none font-sans"
                    />
                  </div>

                  <button
                    id="submit-contact-button"
                    type="submit"
                    disabled={sending}
                    className="w-full py-4 bg-[#1A1A1A] hover:bg-sage-500 disabled:bg-neutral-800 text-[#F7F6F4] text-xs font-bold uppercase tracking-widest rounded-none transition-colors duration-250 cursor-pointer flex items-center justify-center space-x-2"
                  >
                    {sending ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Transmitting channel secure...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 stroke-[1.7]" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              /* TRANSMITTED ELEGANT SUCCESS BLOCK */
              <motion.div
                key="contact-form-success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-6 space-y-5"
              >
                <div className="w-12 h-12 bg-white text-sage-500 border border-cream-200 flex items-center justify-center rounded-none mx-auto">
                  <Send className="w-5 h-5 stroke-[1.5]" />
                </div>

                <div className="space-y-2">
                  <span className="font-sans text-[10px] uppercase tracking-widest text-sage-500 font-bold block">
                    Secured Transmission Succeeded
                  </span>
                  <h3 className="font-serif text-xl font-medium text-neutral-950">
                    Dialogue Pipeline Engaged
                  </h3>
                  <p className="font-sans text-xs text-neutral-500 leading-relaxed font-light max-w-sm mx-auto">
                    Your message has been encrypted and saved directly to the clinic clinical queue. Sarah Chen or Dr. Laurent will review the note and contact you.
                  </p>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setSent(false)}
                    className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A] hover:text-sage-500 font-sans border-b border-cream-200 hover:border-sage-500 pb-0.5 transition-all focus:outline-none"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </section>

    </div>
  );
}
