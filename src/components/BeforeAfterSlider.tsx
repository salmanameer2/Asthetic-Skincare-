import { useState, useRef, useEffect } from "react";
import { BeforeAfterItem } from "../types";

interface Props {
  item: BeforeAfterItem;
}

export default function BeforeAfterSlider({ item }: Props) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="flex flex-col space-y-4">
      {/* Title block */}
      <div className="border-l-2 border-sage-500 pl-4">
        <span className="font-sans text-[10px] uppercase tracking-widest text-sage-600 font-medium block">
          Clinical Case Study
        </span>
        <h4 className="font-serif text-lg font-medium text-neutral-900 mt-1">
          {item.title}
        </h4>
        <p className="font-sans text-xs text-neutral-500 mt-1 italic font-light">
          Concern: {item.concern} • Timeline: {item.timeline}
        </p>
      </div>

      {/* Slider Window */}
      <div
        ref={containerRef}
        className="relative h-80 sm:h-96 w-full overflow-hidden rounded-none bg-cream-50 select-none cursor-ew-resize border border-cream-200"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* BEFORE IMAGE (Bottom base layer, shown fully) */}
        <div className="absolute inset-0">
          <img
            src={item.beforeImg}
            alt="Before Treatment state"
            className="h-full w-full object-cover pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <span className="absolute top-4 left-4 z-10 px-2.5 py-1 bg-[#1A1A1A]/80 backdrop-blur-xs text-[9px] uppercase tracking-[0.2em] text-white font-bold font-sans rounded-none border border-neutral-800">
            BEFORE TREATMENT
          </span>
        </div>

        {/* AFTER IMAGE (Top overlapping clip-path layer) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
        >
          <img
            src={item.afterImg}
            alt="After Treatment State"
            className="h-full w-full object-cover pointer-events-none"
            referrerPolicy="no-referrer"
          />
          <span className="absolute top-4 right-4 z-10 px-2.5 py-1 bg-sage-500/90 backdrop-blur-xs text-[9px] uppercase tracking-[0.2em] text-white font-bold font-sans rounded-none border border-sage-600">
            AFTER PROTOCOL
          </span>
        </div>

        {/* DRAGGABLE BAR LINE */}
        <div
          className="absolute top-0 bottom-0 z-20 w-[1.5px] bg-[#1A1A1A] pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Circular drag anchor pill custom styled as a square */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-none bg-white border border-cream-200 flex items-center justify-between px-1.5 bg-opacity-95 backdrop-blur-xs transition-transform duration-200 hover:scale-105 active:scale-95 cursor-grab">
            <span className="text-[10px] text-sage-500 select-none font-bold">‹</span>
            <span className="w-[1.5px] h-3.5 bg-cream-200"></span>
            <span className="text-[10px] text-sage-500 select-none font-bold">›</span>
          </div>
        </div>
      </div>
      
      {/* Help tooltip labels */}
      <span className="font-sans text-[10px] text-neutral-400 text-center tracking-wider block">
        Drag slider left or right to inspect epidermal micro-clarity results
      </span>
    </div>
  );
}
