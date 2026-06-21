import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { SERVICES } from "../data";
import { Calendar, Clock, TicketCheck, PhoneCall, AlertCircle, Sparkles, Sliders } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Booking() {
  const [searchParams] = useSearchParams();
  const preSelectedServiceId = searchParams.get("service") || "";

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [notes, setNotes] = useState("");

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [suggestedSql, setSuggestedSql] = useState("");
  const [supabaseSynced, setSupabaseSynced] = useState<boolean | null>(null);
  const [supabaseError, setSupabaseError] = useState("");
  const [troubleshootingSql, setTroubleshootingSql] = useState("");

  // Sync preselected query param on mount/change
  useEffect(() => {
    if (preSelectedServiceId) {
      const match = SERVICES.find((s) => s.id === preSelectedServiceId);
      if (match) {
        setSelectedService(match.name);
      } else if (preSelectedServiceId === "assessment") {
        setSelectedService("Clinical Skin-Barrier Assessment");
      }
    }
  }, [preSelectedServiceId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic verification guards
    if (!name || !email || !phone || !preferredDate || !preferredTime) {
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    setSuggestedSql("");
    setSupabaseSynced(null);
    setSupabaseError("");
    setTroubleshootingSql("");

    const generatedId = `AES-${Math.floor(100000 + Math.random() * 900000)}`;

    try {
      const response = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          selectedService,
          preferredDate,
          preferredTime,
          notes,
          ticketId: generatedId,
        }),
      });

      const result = await response.json();

      // If server returned structured data with synced status
      if (response.ok && result.success) {
        setSupabaseSynced(result.synced);
        if (result.synced === false) {
          setSupabaseError(result.error || "");
          setTroubleshootingSql(result.troubleshootingSql || "");
        }
        setTicketId(generatedId);
        setIsSubmitting(false);
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (!response.ok || result.error) {
        setErrorMessage(
          result.error || result.message || "Failed to submit booking details to Supabase."
        );
        if (result.suggested_sql) {
          setSuggestedSql(result.suggested_sql);
        }
        setIsSubmitting(false);
        return;
      }

      setTicketId(generatedId);
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err: any) {
      console.error("Booking submission error:", err);
      setErrorMessage("Network error connecting to backend. Your session credentials or network route are being provisioned.");
      setIsSubmitting(false);
    }
  };

  const selectedServiceDetail = SERVICES.find((s) => s.name === selectedService);

  return (
    <div id="page-booking" className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
      
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="booking-form"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start max-w-6xl mx-auto"
          >
            
            {/* L. COLUMN: INSTRUCTIONS & PROTOCOL STEPS */}
            <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
              <div className="space-y-3">
                <span className="font-sans text-[11px] uppercase tracking-[0.35em] text-sage-700 font-semibold block leading-none">
                  Request Consultation
                </span>
                <h1 className="font-serif text-3xl sm:text-4xl font-light text-neutral-900 leading-tight">
                  Schedule your clinical intake study.
                </h1>
                <p className="font-sans text-neutral-500 text-sm font-light leading-relaxed">
                  Your facial trajectory begins with an intensive 1-on-1 microscopic sebum map and barrier test. Please fill out the configuration request. Our concierge will call your cellular line within 2 business hours to verify.
                </p>
              </div>

              {/* Patient Preparation Warnings */}
              <div className="bg-white border border-cream-200 p-6 rounded-none space-y-4">
                <h4 className="font-serif text-base font-semibold text-neutral-950 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-2 text-sage-500 shrink-0" />
                  Pre-Appointment Protocols
                </h4>
                <ul className="space-y-3 text-xs text-neutral-500 font-light">
                  <li className="leading-relaxed">
                    <strong>1. Suspend Retinoids</strong>: Please pause standard retinol, salicylic acids, or glycolic peeling compounds for exactly 72 hours prior to clinical intake.
                  </li>
                  <li className="leading-relaxed">
                    <strong>2. Sun Avoidance</strong>: Active sunburns or deep-tanning exposures within 7 days of treatment disqualify you from fractional laser resurfacing.
                  </li>
                  <li className="leading-relaxed">
                    <strong>3. Consultation Fee Policy</strong>: The clinical evaluation map takes 45 minutes on-site. There is no booking fee; cancellations must be reported 24h prior.
                  </li>
                </ul>
              </div>

              {/* Quick Call contact block */}
              <div className="border border-cream-200 p-5 rounded-none flex items-center justify-between bg-white">
                <div className="flex items-center space-x-3">
                  <PhoneCall className="w-4 h-4 text-sage-500" />
                  <div className="font-sans">
                    <span className="text-[10px] uppercase font-bold text-neutral-400 block tracking-wider">
                      Concierge Desk
                    </span>
                    <span className="text-xs font-bold text-[#1A1A1A]">310.555.0190</span>
                  </div>
                </div>
                <span className="font-sans text-[9px] uppercase font-bold bg-white text-sage-500 border border-cream-200 px-2.5 py-1 rounded-none">
                  Active Mon-Fri
                </span>
              </div>
            </div>

            {/* R. COLUMN: FORM WORKFLOW */}
            <div className="lg:col-span-7 bg-white border border-cream-200 p-6 sm:p-10 rounded-none">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Section 1: Demographics */}
                <div className="space-y-4">
                  <h3 className="font-serif text-lg font-medium text-neutral-950 border-b border-cream-100 pb-2">
                    1. Demographics
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="patient-name" className="font-sans text-[10px] uppercase tracking-widest font-bold text-neutral-400">
                        Patient Full Name *
                      </label>
                      <input
                        id="patient-name"
                        type="text"
                        required
                        placeholder="E.g. Evelyn Reed"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-white border border-cream-200 px-4 py-3 text-xs text-neutral-900 rounded-none tracking-wide focus:outline-none focus:border-sage-500 placeholder-neutral-400 transition-colors duration-250"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="patient-phone" className="font-sans text-[10px] uppercase tracking-widest font-bold text-neutral-400">
                        Cellular phone *
                      </label>
                      <input
                        id="patient-phone"
                        type="tel"
                        required
                        placeholder="(310) 555-0190"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-white border border-cream-200 px-4 py-3 text-xs text-neutral-900 rounded-none tracking-wide focus:outline-none focus:border-sage-500 placeholder-neutral-400 transition-colors duration-250"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="patient-email" className="font-sans text-[10px] uppercase tracking-widest font-bold text-neutral-400">
                      Email address *
                    </label>
                    <input
                      id="patient-email"
                      type="email"
                      required
                      placeholder="evelyn@clinical.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-cream-200 px-4 py-3 text-xs text-neutral-900 rounded-none tracking-wide focus:outline-none focus:border-sage-500 placeholder-neutral-400 transition-colors duration-250"
                    />
                  </div>
                </div>

                {/* Section 2: Treatment Configuration */}
                <div className="space-y-4 pt-4">
                  <h3 className="font-serif text-lg font-medium text-neutral-950 border-b border-cream-100 pb-2">
                    2. Therapeutic selection
                  </h3>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="patient-service" className="font-sans text-[10px] uppercase tracking-widest font-bold text-neutral-400">
                      Core Treatment Protocol *
                    </label>
                    <select
                      id="patient-service"
                      required
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-white border border-cream-200 px-4 py-3 text-xs text-neutral-800 rounded-none tracking-wide focus:outline-none focus:border-sage-500 transition-colors duration-250 cursor-pointer appearance-none"
                      style={{
                        backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23191919' stroke-width='1.5' viewBox='0 0 24 24'><path d='M6 9l6 6 6-6'/></svg>")`,
                        backgroundPosition: "right 16px center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "12px"
                      }}
                    >
                      <option value="">-- Please select a program --</option>
                      <option value="Clinical Skin-Barrier Assessment">Clinical Skin-Barrier Assessment (General Intake)</option>
                      {SERVICES.map((serv) => (
                        <option key={serv.id} value={serv.name}>
                          {serv.name} (from {serv.price})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Preselected treatment micro-recap info */}
                  {selectedServiceDetail && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="p-3 bg-white border border-cream-200 text-neutral-700 text-xs rounded-none space-y-1"
                    >
                      <p><strong>Duration</strong>: {selectedServiceDetail.duration} • <strong>Reference Pricing</strong>: {selectedServiceDetail.price}</p>
                      <p className="text-[11px] text-neutral-500 font-light">{selectedServiceDetail.shortDescription}</p>
                    </motion.div>
                  )}
                </div>

                {/* Section 3: Scheduling */}
                <div className="space-y-4 pt-4">
                  <h3 className="font-serif text-lg font-medium text-neutral-950 border-b border-cream-100 pb-2">
                    3. Calendar options
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="patient-date" className="font-sans text-[10px] uppercase tracking-widest font-bold text-neutral-400">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <input
                          id="patient-date"
                          type="date"
                          required
                          min={new Date().toISOString().split("T")[0]}
                          value={preferredDate}
                          onChange={(e) => setPreferredDate(e.target.value)}
                          className="w-full bg-white border border-cream-200 px-4 py-3 text-xs text-neutral-850 rounded-none tracking-wide focus:outline-none focus:border-sage-500 transition-colors duration-250 cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="patient-time" className="font-sans text-[10px] uppercase tracking-widest font-bold text-neutral-400">
                        Preferred window *
                      </label>
                      <select
                        id="patient-time"
                        required
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full bg-white border border-cream-200 px-4 py-3 text-xs text-neutral-800 rounded-none tracking-wide focus:outline-none focus:border-sage-500 transition-colors duration-250 cursor-pointer appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23191919' stroke-width='1.5' viewBox='0 0 24 24'><path d='M6 9l6 6 6-6'/></svg>")`,
                          backgroundPosition: "right 16px center",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "12px"
                        }}
                      >
                        <option value="">-- Choose target slot --</option>
                        <option value="Morning (09:00 - 12:00)">Morning (09:00 - 12:00)</option>
                        <option value="Early Afternoon (12:00 - 15:00)">Early Afternoon (12:00 - 15:00)</option>
                        <option value="Late Afternoon (15:00 - 18:00)">Late Afternoon (15:00 - 18:00)</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Section 4: Clinical History */}
                <div className="space-y-4 pt-4">
                  <h3 className="font-serif text-lg font-medium text-neutral-950 border-b border-cream-100 pb-2">
                    4. Dermal history details (Optional)
                  </h3>
                  
                  <div className="space-y-1.5">
                    <label htmlFor="patient-notes" className="font-sans text-[10px] uppercase tracking-widest font-bold text-neutral-400">
                      Active skin concerns, current medications, or surgery history
                    </label>
                    <textarea
                      id="patient-notes"
                      rows={3}
                      placeholder="E.g. Currently on Spironolactone, micro-peeled 2 weeks ago, concern is cheek congestion."
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-white border border-cream-200 px-4 py-3 text-xs text-neutral-900 rounded-none tracking-wide focus:outline-none focus:border-sage-500 placeholder-neutral-400 transition-colors duration-250 resize-none font-sans"
                    />
                  </div>
                </div>

                {/* Error presentation slot */}
                {errorMessage && (
                  <div className="p-4 bg-red-50 border border-red-200 text-red-800 text-xs rounded-none space-y-2">
                    <p className="font-semibold flex items-center gap-1.5 font-sans">
                      <AlertCircle className="w-4 h-4 text-red-600 shrink-0" />
                      Intake Sync Warning
                    </p>
                    <p className="font-light leading-relaxed">{errorMessage}</p>
                    {suggestedSql && (
                      <div className="mt-3 space-y-1.5 text-left">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-red-600 font-bold block">
                          Execute this SQL in your Supabase SQL Editor:
                        </span>
                        <pre className="p-2.5 bg-neutral-900 text-cream-100 font-mono text-[10px] whitespace-pre-wrap rounded-none overflow-x-auto leading-normal selection:bg-neutral-800 border border-neutral-800">
                          {suggestedSql}
                        </pre>
                      </div>
                    )}
                  </div>
                )}

                {/* Submit trigger button */}
                <div className="pt-4">
                  <button
                    id="submit-booking-button"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-[#1A1A1A] hover:bg-sage-500 disabled:bg-neutral-800 text-white text-xs font-bold uppercase tracking-widest rounded-none transition-colors duration-250 cursor-pointer flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        <span>Verifying medical slot...</span>
                      </>
                    ) : (
                      <span>Request consultation booking</span>
                    )}
                  </button>
                </div>

              </form>
            </div>

          </motion.div>
        ) : (
          /* LUXURY SUCCESS INTAKE RECEIPT SLIP */
          <motion.div
            key="booking-success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-2xl mx-auto bg-white border border-cream-200 p-8 sm:p-12 rounded-none text-center relative overflow-hidden"
          >
            {/* Visual ticket check icon */}
            <div className="w-16 h-16 bg-white text-sage-500 border border-cream-200 flex items-center justify-center rounded-none mx-auto mb-6">
              <TicketCheck className="w-7 h-7 stroke-[1.25]" />
            </div>

            <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-sage-500 font-bold block mb-2 leading-none">
              Request Logged Successfully
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light text-neutral-900 leading-tight">
              Clinical Intake Registered
            </h2>

            {/* Fine receipt-like layout cut out border */}
            <div className="my-8 p-6 bg-white border border-cream-200 text-left rounded-none space-y-4">
              <div className="flex items-center justify-between border-b border-cream-200 pb-3">
                <span className="font-sans text-[10px] text-neutral-400 uppercase tracking-wider font-semibold">
                  Receipt Ticket ID
                </span>
                <span className="font-mono text-xs font-semibold text-neutral-900">
                  {ticketId}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-y-3.5 text-xs text-neutral-600">
                <div>
                  <span className="text-[10px] uppercase text-neutral-400 tracking-wider font-semibold block">
                    Patient Name
                  </span>
                  <span className="font-bold text-neutral-900 mt-0.5 block">{name}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-neutral-400 tracking-wider font-semibold block">
                    Cellular Line
                  </span>
                  <span className="font-bold text-neutral-900 mt-0.5 block">{phone}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-neutral-400 tracking-wider font-semibold block">
                    Target Protocol
                  </span>
                  <span className="font-bold text-neutral-900 mt-0.5 block whitespace-nowrap overflow-hidden text-ellipsis">{selectedService}</span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-neutral-400 tracking-wider font-semibold block">
                    Assigned Slot
                  </span>
                  <span className="font-bold text-neutral-900 mt-0.5 block leading-tight">
                    {preferredDate}
                    <br />
                    <span className="text-[11px] font-normal text-neutral-500">{preferredTime}</span>
                  </span>
                </div>
              </div>

              {/* Database integration synchronization report */}
              <div className="pt-4 border-t border-cream-200 mt-4 text-xs">
                {supabaseSynced === true ? (
                  <div className="flex items-center gap-2 text-emerald-800 bg-emerald-50/50 p-2.5 border border-emerald-100 font-sans text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>Synchronized successfully with Supabase (Project ID: mjavuqwbespsnzlyeaks)</span>
                  </div>
                ) : supabaseSynced === false ? (
                  <div className="space-y-3">
                    <div className="flex items-start gap-2.5 text-amber-800 bg-amber-50/80 p-3.5 border border-amber-200 rounded-none text-left">
                      <AlertCircle className="w-4.5 h-4.5 text-amber-600 shrink-0 mt-0.5" />
                      <div className="space-y-1">
                        <p className="font-semibold font-sans text-[11px] uppercase tracking-wider text-amber-900 leading-none">Database Sync Pending</p>
                        <p className="text-[11px] font-light leading-relaxed">
                          Your appointment details have been reserved in-memory, but they could not be synced to your Supabase account yet because the <code className="bg-neutral-100 px-1 font-mono text-[9.5px] text-neutral-900">bookings</code> table does not exist or has active RLS restrictions.
                        </p>
                      </div>
                    </div>

                    {troubleshootingSql && (
                      <div className="text-left space-y-1.5 pl-0.5">
                        <span className="font-mono text-[9px] uppercase tracking-wider text-neutral-500 font-bold block">
                          Execute this custom SQL in your Supabase SQL Editor:
                        </span>
                        <pre className="p-3 bg-neutral-900 text-cream-100 font-mono text-[10px] whitespace-pre-wrap rounded-none overflow-x-auto text-left leading-normal selection:bg-neutral-800 border border-neutral-800">
                          {troubleshootingSql}
                        </pre>
                      </div>
                    )}
                  </div>
                ) : null}
              </div>
            </div>

            {/* Concierge callback promise note */}
            <div className="space-y-4 text-sm font-light text-neutral-500 leading-relaxed max-w-lg mx-auto">
              <p>
                A LEUR AESTHETICS medical secretary is reviewing your dermal history fields. We will call your cellular device at <strong>{phone}</strong> shortly to coordinate intake verification.
              </p>
              
              <div className="p-3.5 bg-white text-[#1A1A1A] rounded-none text-xs font-sans text-left flex items-start border border-cream-200">
                <AlertCircle className="w-4 h-4 text-sage-500 mr-2.5 shrink-0 mt-0.5" />
                <p className="leading-snug">
                  <strong>Notice Prior to Intake:</strong> Do not use high-potency Vitamin A products (including retinal compounds) starting tonight. This is essential to prevent hyper-dilation during evaluation.
                </p>
              </div>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="text-xs font-bold uppercase tracking-widest px-6 py-3 bg-[#1A1A1A] hover:bg-sage-500 text-white rounded-none transition-colors"
               >
                Return to Home
              </Link>
              <Link
                to="/services"
                className="text-xs font-bold uppercase tracking-widest text-[#1A1A1A] hover:text-sage-500 transition-colors"
              >
                Review other treatments
              </Link>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
