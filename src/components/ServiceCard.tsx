import { Link } from "react-router-dom";
import { Service } from "../types";
import { Clock, Tag, ArrowRight } from "lucide-react";

export default function ServiceCard({ service }: { service: Service; key?: string }) {
  return (
    <div
      id={`treatment-card-${service.id}`}
      className="group bg-white flex flex-col justify-between h-full border border-cream-200 rounded-none overflow-hidden transition-all duration-300 hover:border-sage-500"
    >
      {/* Decorative Image Frame */}
      <div className="relative h-64 overflow-hidden border-b border-cream-200">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4">
          <span className="font-sans text-[9px] uppercase tracking-widest bg-white/90 text-neutral-900 backdrop-blur-xs px-2.5 py-1 rounded-none border border-cream-200">
            {service.category}
          </span>
        </div>
      </div>

      {/* Card Content parameters */}
      <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
        <div className="space-y-2">
          {/* Durational specs & Price info */}
          <div className="flex items-center justify-between text-[11px] font-sans uppercase tracking-wider text-neutral-400">
            <span className="flex items-center">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-sage-500" />
              {service.duration}
            </span>
            <span className="flex items-center font-medium pr-1">
              <Tag className="w-3.5 h-3.5 mr-1.5 text-sage-500" />
              Starts at {service.price}
            </span>
          </div>

          <h3 className="font-serif text-lg font-medium text-neutral-950 group-hover:text-sage-500 transition-colors duration-300">
            {service.name}
          </h3>
          
          <p className="font-sans text-xs text-neutral-500 leading-relaxed line-clamp-3">
            {service.shortDescription}
          </p>
        </div>

        {/* Dynamic biological benefits mini-grid */}
        <div className="pt-2 border-t border-cream-100 flex-grow">
          <span className="font-sans text-[9px] uppercase tracking-[0.16em] text-sage-700 font-semibold block mb-1.5">
            Expected Tissue Benefits:
          </span>
          <ul className="space-y-1">
            {service.benefits.slice(0, 2).map((benefit, i) => (
              <li key={i} className="font-sans text-[11px] text-neutral-600 flex items-start leading-snug">
                <span className="text-sage-500 mr-2 font-semibold">✓</span>
                <span className="line-clamp-1">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Link trigger */}
        <div className="pt-4 flex items-center justify-between">
          <Link
            to={`/booking?service=${service.id}`}
            className="text-[11px] font-sans font-semibold uppercase tracking-widest text-[#1A1A1A] group-hover:text-sage-500 flex items-center transition-all"
          >
            Request Treatment
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
