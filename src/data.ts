import { Service, Doctor, Testimonial, ValueItem, BeforeAfterItem } from "./types";

export const SERVICES: Service[] = [
  {
    id: "sculptra-biostimulator",
    name: "Sculptra® Collagen Biostimulator",
    category: "Injectables",
    shortDescription: "Gradually restores youthful skin structure and volume by stimulating your own natural collagen production.",
    description: "Unlike traditional fillers containing hyaluronic acid, Sculptra works deep within the dermis to revitalize collagen production and help restore your skin’s inner structure. This FDA-approved injectable treatment yields a subtle, natural-looking restoration that improves progressively over several months.",
    duration: "45 mins",
    price: "$850",
    benefits: [
      "Stimulates deep-dermal collagen synthesis",
      "Delivers progressive, natural-looking results for up to 2 years",
      "Excellent for temples, mid-face hollows, and jawline refinement",
      "Gradually restores facial volume lost to natural aging"
    ],
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "clear-brilliant-laser",
    name: "Clear + Brilliant® Laser Resurfacing",
    category: "Laser Treatments",
    shortDescription: "A gentle fractional laser designed to correct early signs of aging, uneven skin texture, and pore density.",
    description: "Often called the 'baby Fraxel', Clear + Brilliant is a precise, gentle resurfacing laser treatment that addresses the first signs of aging. It stimulates cell renewal from the inside out, replacing damaged skin cells with healthy, radiant tissue. Perfect for maintaining a youthful, luminous glow.",
    duration: "60 mins",
    price: "$375",
    benefits: [
      "Minimizes structural pore size and smooths coarse texture",
      "Visibly brightens and evens skin tone/hyperpigmentation",
      "Minimal downtime (usually just 12–24 hours of mild redness)",
      "Enhances permeability for clinical skincare products"
    ],
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "bespoke-clinical-peel",
    name: "Custom Formulation Chemex Peel",
    category: "Clinical Peels",
    shortDescription: "A personalized acid peeling treatment formulated in-house to reset skin clarity, congestion, and tone.",
    description: "Our bespoke signature chemical peels bypass the one-size-fits-all approach. Your clinician custom-blends pharmaceutical-grade acids (Mandelic, Lactic, Salicylic, or Glycolic) balanced with healing anti-inflammatory agents to target acne congestion, stubborn sun spots, or dull cellular buildup safely.",
    duration: "45 mins",
    price: "$180",
    benefits: [
      "Tailored precisely to your current epidermal thickness and concern",
      "Accelerates healthy cellular turnover and clears active congestion",
      "Softens fine structural lines and fades superficial acne scarring",
      "Reinforces cellular cohesion for a glass-like dermal reflection"
    ],
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "dermal-fillers",
    name: "Hyaluronic Acid Contour (Juvederm & Restylane)",
    category: "Injectables",
    shortDescription: "Precision micro-drops of hyaluronic gel to contour features, restore structural symmetry, and hydrate tissue.",
    description: "Using world-renowned, high-cohesivity hyaluronic acid formulations, our board-certified MD performs structural facial mapping prior to application. We prioritize conservative, hyper-calibrated dosing to elevate symmetry, support natural volume depletion, and deliver soft, refreshed contours.",
    duration: "50 mins",
    price: "$650",
    benefits: [
      "Delivers instant hydration and structural support",
      "Calculated lip, cheekbone, or jaw contours matching natural bone structure",
      "Fully reversible and high-safety profile",
      "Blended with lidocaine for optimal treatment comfort"
    ],
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "microneedling-prf",
    name: "Clinical Microneedling with PRF (Platelet-Rich Fibrin)",
    category: "Anti-Aging",
    shortDescription: "Synergistic micro-channeling paired with autologous PRF to deeply regenerate elastin and fade scars.",
    description: "Combining medical-grade microneedling (micro-channels in the epidermis) with your own Platelet-Rich Fibrin (PRF). PRF has a higher concentration of growth factors than traditional PRP, slowly releasing regenerative cells over a longer period. This process dramatically jump-starts skin repair, collagen renewal, and scar correction.",
    duration: "75 mins",
    price: "$550",
    benefits: [
      "Drastically reduces deep-set acne pits, wrinkles, and stretch marks",
      "Harnesses autologous growth factors directly from your own system",
      "Accelerates post-treatment healing compared to standard microneedling",
      "Strengthens skin epidermal density for a firmer matrix structure"
    ],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "advanced-barrier-facial",
    name: "Epidermal Barrier Rebuilding Facial",
    category: "Facials",
    shortDescription: "A highly restorative clinical facial focused on replenishing lipids, ceramides, and reducing vascular redness.",
    description: "Specially formulated for sensitized, compromised, or over-exfoliated skin. This specialized clinical facial centers on non-abrasive purification, cryo-lymphatic face sculpting to soothe capillaries, and intensive transdermal infusion of essential skin lipids, ceramides, and beta-glucans to restore barrier integrity.",
    duration: "60 mins",
    price: "$165",
    benefits: [
      "Repairs compromised skin barriers and calms eczema/rosacea flares",
      "Intensely saturates tissues with essential biomimetic lipids",
      "Reduces immediate redness, swelling, and trans-epidermal water loss (TEWL)",
      "Cryotherapy massage to stimulate lymphatic path drainage"
    ],
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=600"
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "dr-evelyne-laurent",
    name: "Dr. Evelyne Laurent, MD",
    title: "Medical Director & Board-Certified Dermatologist",
    role: "Founder, Lead Clinical Practitioner",
    bio: "Dr. Laurent has spent over 14 years specializing in restorative dermatology and advanced non-surgical aesthetics. Renowned for her conservative design approach, she focuses on facial harmonization that respects natural structural anatomy. She serves as a medical advisory voice and actively conducts research on epidermal barrier mechanics.",
    education: [
      "Doctor of Medicine (MD) — Johns Hopkins School of Medicine",
      "Residency in Dermatology — Stanford University Medical Center",
      "Fellowship in Advanced Laser & Aesthetic Dermatology — Harvard Medical School"
    ],
    specialty: [
      "Autologous Peptide & PRF Restorations",
      "Advanced Structural Facial Mapping",
      "High-Precision Non-Surgical Volumization"
    ],
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "sarah-chen-le",
    name: "Sarah Chen, LE",
    title: "Senior Clinical Esthetician",
    role: "Director of Epidermal Restorations",
    bio: "With over 9 years of clinical practice in upscale medical spas, Sarah specializes in non-invasive skin barrier therapy and customized cellular peels. She believes that beautiful makeup begins with flawless epidermal cellular structure and designs highly individual homework skin regimens for patients.",
    education: [
      "Licensed Medical Aesthetician — CIDESCO International Diploma",
      "Advanced Certification in Chemical Exfoliation — SkinCeuticals Academy",
      "Vascular Cryotherapy Sculpting Specialist — Paris Esthetique Institute"
    ],
    specialty: [
      "Bespoke Chemical Resurfacing Formulation",
      "Barrier Lipophilic Re-balancing Therapy",
      "Lymphatic Contour Massage & Cryotherapy"
    ],
    image: "https://images.unsplash.com/photo-1594824813573-246434de83fb?auto=format&fit=crop&q=80&w=600"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Madeline Vance",
    concern: "Severe Skin-Barrier Sensitization & Redness",
    treatmentRecieved: "Epidermal Barrier Rebuilding Facial & Custom Peel",
    rating: 5,
    testimonial: "After over-using retinol products, my face was in a state of constant burning redness. Dr. Laurent and Sarah literally saved my skin barrier. The bespoke formula peel and hydration facial were unbelievably soothing. Three weeks later, my skin is resilient, healthy, and back to reflecting light beautifully."
  },
  {
    id: "test-2",
    name: "Arthur Pendelton",
    concern: "Volume Loss, Cheek and Temple Hollowing",
    treatmentRecieved: "Sculptra® Collagen Biostimulator",
    rating: 5,
    testimonial: "I wanted a solution for looking permanently tired, but was terrified of looking 'over-filled.' Dr. Laurent recommended Sculptra. The process was slow, but after 3 months, friends keep asking if I've been sleeping better. The result is completely natural, supporting my face structure exactly as promised."
  },
  {
    id: "test-3",
    name: "Camille Rodriguez",
    concern: "Epidermal Texture, Hyperpigmentation, and Sun Damage",
    treatmentRecieved: "Clear + Brilliant® Laser & PRF",
    rating: 5,
    testimonial: "I schedule three Clear + Brilliant sessions with Sarah annually. It completely clears the stubborn sun spots around my cheekbones and reduces my pore depth. There is a tiny sting during the appointment, but my face literally recovers by the next afternoon. Absolutely vital skincare maintenance."
  }
];

export const VALUES: ValueItem[] = [
  {
    title: "Preservation Over Alteration",
    description: "We refuse to create exaggerated or homogenizing treatments. We believe true clinical design preserves your native facial proportions, respecting the organic lines and symmetry of your natural anatomy."
  },
  {
    title: "Scientific Rigour & Efficacy",
    description: "Every technology, active ingredient, and syringe deployed at LEUR AESTHETICS is backed by clinical dermatology research papers. If an treatment cannot prove clinical tissue efficacy, we will not offer it."
  },
  {
    title: "Continuous Barrier Defense",
    description: "Restorative work is counterproductive if we compromise the epidermal skin barrier. Every aggressive chemical or laser treatment is carefully offset using lipid-replenishing protocols to defend skin health."
  },
  {
    title: "Bespoke Dosing Alignment",
    description: "Your facial anatomy, skin pH, melanin response, and lipid reserves are uniquely yours. We strictly reject protocolized bundles, choosing instead to draft highly calibrated clinical receipts for every patient."
  }
];

export const BEFORE_AFTERS: BeforeAfterItem[] = [
  {
    id: "case-barrier-repair",
    title: "Skin-Barrier Repair & Vascular Calm",
    concern: "Sensitized epidermal barrier, severe Rosacea flares & peeling.",
    timeline: "6 weeks protocol: 2 Barrier Restoration Facials + Bespoke lipid hydration homecare.",
    beforeImg: "https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?auto=format&fit=crop&q=80&w=600", // texture / hands / details placeholder acting as a subtle, high-end design image
    afterImg: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "case-sculptra-volume",
    title: "Collagen Biostimulation & Temple Contours",
    concern: "Moderate temple depletion, lateral cheek dynamic volume loss.",
    timeline: "14 weeks protocol: 2 sessions of Sculptra Collagen Biostimulator.",
    beforeImg: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=600",
    afterImg: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=600"
  }
];
