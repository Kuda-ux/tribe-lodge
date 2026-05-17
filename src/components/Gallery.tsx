"use client";
import Image from "next/image";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import { galleryImages } from "@/lib/site";

export default function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  const close = () => setActive(null);
  const next = () =>
    setActive((i) => (i === null ? null : (i + 1) % galleryImages.length));
  const prev = () =>
    setActive((i) => (i === null ? null : (i - 1 + galleryImages.length) % galleryImages.length));

  return (
    <section id="gallery" className="section">
      <div className="container-px">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow">Gallery</span>
              <h2 className="h-display text-4xl md:text-5xl lg:text-6xl mt-5 text-bark-900">
                Step inside our <em className="not-italic text-clay-600">world.</em>
              </h2>
            </div>
            <p className="text-bark-900/65 max-w-md">
              Beautifully styled suites, our pool and tropical gardens, the branded shuttle and
              the architectural vision behind it all.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] md:auto-rows-[260px] gap-4">
          {galleryImages.map((src, i) => {
            const span =
              i === 0
                ? "col-span-2 row-span-2"
                : i % 7 === 0
                ? "row-span-2"
                : i % 5 === 0
                ? "col-span-2"
                : "";
            return (
              <Reveal
                key={src}
                delay={(i % 6) * 60}
                className={`relative overflow-hidden rounded-2xl group cursor-pointer ${span}`}
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className="absolute inset-0"
                  aria-label="Open image"
                >
                  <Image
                    src={src}
                    alt={`The Tribe Lodge — gallery ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-[1.2s] group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, (max-width:1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-bark-900/0 group-hover:bg-bark-900/30 transition-colors" />
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div className="fixed inset-0 z-[60] bg-bark-900/95 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={close}
            className="absolute top-5 right-5 h-11 w-11 rounded-full bg-sand-50/10 text-sand-50 inline-flex items-center justify-center hover:bg-sand-50/20"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            onClick={prev}
            className="absolute left-3 md:left-8 h-12 w-12 rounded-full bg-sand-50/10 text-sand-50 inline-flex items-center justify-center hover:bg-sand-50/20"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-3 md:right-8 h-12 w-12 rounded-full bg-sand-50/10 text-sand-50 inline-flex items-center justify-center hover:bg-sand-50/20"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div className="relative w-full max-w-5xl aspect-[3/2]">
            <Image
              src={galleryImages[active]}
              alt="The Tribe Lodge"
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
