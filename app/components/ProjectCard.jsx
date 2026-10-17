"use client";

import { useState } from "react";
import SignificaButton from "./SignificaButton";
import { ArrowLeftIcon, ArrowRightIcon } from "./Icons";

export default function ProjectCard({
  name,
  tagline,
  category,
  deliverables = [],
  images = [],
  linkText = "Explore System Architecture",
  href = "/portfolio",
  metrics
}) {
  const [imageIndex, setImageIndex] = useState(0);

  const prevImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="group rounded-2xl border border-border bg-background-panel p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-brand/40 shadow-xs">
      <div>
        {/* Top Image Frame with Carousel Controls */}
        <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-background-offset border border-border mb-6">
          {images.length > 0 ? (
            <img
              src={images[imageIndex]}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              onError={(e) => {
                e.target.style.display = "none";
              }}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-foreground-secondary p-6 text-center">
              <span className="material-symbols-outlined text-4xl mb-2 text-brand">dataset</span>
              <span className="text-xs font-mono uppercase tracking-wider">Live System Interface</span>
            </div>
          )}

          {/* Category Tag overlay */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-background/90 backdrop-blur-md border border-border text-[11px] font-semibold uppercase tracking-wider text-foreground">
            {category}
          </div>

          {/* Carousel Arrows */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={prevImage}
                aria-label="Previous preview"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/90 backdrop-blur-md border border-border flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background shadow-sm"
              >
                <ArrowLeftIcon className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={nextImage}
                aria-label="Next preview"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/90 backdrop-blur-md border border-border flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background shadow-sm"
              >
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </>
          )}

          {/* Metrics Pill if available */}
          {metrics && (
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-foreground text-background text-[11px] font-bold tracking-tight shadow-md">
              {metrics}
            </div>
          )}
        </div>

        {/* Project Metadata */}
        <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 leading-tight">
          {name}
        </h3>
        <p className="text-sm sm:text-base text-foreground-secondary mb-4 leading-relaxed">
          {tagline}
        </p>

        {/* Deliverables tags */}
        {deliverables.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-6">
            {deliverables.map((del, dIdx) => (
              <span
                key={dIdx}
                className="px-2.5 py-1 rounded-md bg-background-offset border border-border text-[11px] font-medium text-foreground-secondary"
              >
                {del}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="pt-4 border-t border-border flex items-center justify-between">
        <SignificaButton href={href} variant="secondary" size="md" arrow>
          {linkText}
        </SignificaButton>
      </div>
    </div>
  );
}
