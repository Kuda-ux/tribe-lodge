"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import Reveal from "./Reveal";

type Category = "All" | "Suites" | "Pool & Grounds" | "Architecture" | "Tours";

type GalleryItem = {
  src: string;
  title: string;
  category: Exclude<Category, "All">;
};

const items: GalleryItem[] = [
  // Suites
  { src: "/images/img-05.jpg", title: "Tribal Suite", category: "Suites" },
  { src: "/images/img-07.jpg", title: "Tribal Suite — Detail", category: "Suites" },
  { src: "/images/img-02.jpg", title: "Navy Velvet Suite", category: "Suites" },
  { src: "/images/img-03.jpg", title: "Navy Suite — Alt View", category: "Suites" },
  { src: "/images/img-01.jpg", title: "Suite Lounge Detail", category: "Suites" },
  { src: "/images/img-08.jpg", title: "Onyx Presidential Suite", category: "Suites" },
  { src: "/images/img-23.jpg", title: "Onyx Suite — Side View", category: "Suites" },
  { src: "/images/img-24.jpg", title: "Onyx Suite — Wide Angle", category: "Suites" },
  // Pool & Grounds
  { src: "/images/img-09.jpg", title: "Swimming Pool & Gazebo", category: "Pool & Grounds" },
  { src: "/images/img-04.jpg", title: "Branded Steel Fence Detail", category: "Pool & Grounds" },
  // Architecture / Vision
  { src: "/images/img-10.jpg", title: "Master Plan — Aerial", category: "Architecture" },
  { src: "/images/img-12.jpg", title: "Guest Block Facade", category: "Architecture" },
  // Tours / Shuttle
  { src: "/images/img-22.jpg", title: "Branded Shuttle", category: "Tours" },
  { src: "/images/img-14.jpg", title: "Shuttle at the Lodge", category: "Tours" },
  { src: "/images/img-19.jpg", title: "Shuttle — Side Profile", category: "Tours" },
  { src: "/images/img-15.jpg", title: "Renault Master", category: "Tours" },
];

const categories: Category[] = ["All", "Suites", "Pool & Grounds", "Architecture", "Tours"];

export default function Gallery() {
  const [filter, setFilter] = useState<Category>("All");
  const [active, setActive] = useState<number | null>(null);

  const filtered = useMemo(
    () => (filter === "All" ? items : items.filter((i) => i.category === filter)),
    [filter]
  );

  const close = () => setActive(null);
  const next = () =>
    setActive((i) => (i === null ? null : (i + 1) % filtered.length));
  const prev = () =>
    setActive((i) =>
      i === null ? null : (i - 1 + filtered.length) % filtered.length
    );

  // Keyboard nav
  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, filtered.length]);

  return (
    <section id="gallery" className="section relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(#15100B 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="container-px">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-8 mb-4">
            <div className="max-w-2xl">
              <span className="eyebrow">Gallery</span>
              <h2 className="h-display text-4xl md:text-5xl lg:text-6xl mt-5 text-bark-900">
                A look <em className="not-italic text-clay-600">inside our world.</em>
              </h2>
              <p className="mt-5 text-bark-900/65 max-w-md">
                Three signature suites, manicured grounds, our branded shuttle and the
                architectural vision behind it all — captured in detail.
              </p>
            </div>

            {/* Category chips */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] font-semibold border transition-all ${
                    filter === c
                      ? "bg-bark-900 text-sand-50 border-bark-900"
                      : "bg-transparent text-bark-900/70 border-bark-900/15 hover:border-bark-900/40 hover:text-bark-900"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Magazine-style masonry */}
        <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 [column-fill:_balance]">
          {filtered.map((item, i) => {
            // pseudo-randomized aspect for masonry feel — deterministic from index
            const aspects = ["aspect-[3/4]", "aspect-[4/5]", "aspect-square", "aspect-[5/6]", "aspect-[4/3]"];
            const ar = aspects[i % aspects.length];
            const isFeature = i === 0;
            return (
              <Reveal
                key={item.src}
                delay={(i % 8) * 50}
                className={`mb-5 break-inside-avoid ${isFeature ? "" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={`group relative w-full ${ar} overflow-hidden rounded-2xl bg-bark-900/5 block shine`}
                  aria-label={`Open ${item.title}`}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
                    quality={82}
                  />

                  {/* Gradient + caption overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-bark-900/85 via-bark-900/15 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

                  {/* Top-right zoom chip */}
                  <span className="absolute top-3 right-3 h-9 w-9 rounded-full bg-sand-50/15 backdrop-blur-md border border-sand-50/30 text-sand-50 inline-flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all">
                    <Maximize2 className="h-3.5 w-3.5" />
                  </span>

                  {/* Category tag */}
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-bark-900/55 backdrop-blur-md text-sand-100 text-[9px] uppercase tracking-[0.25em] font-semibold border border-sand-50/15">
                    {item.category}
                  </span>

                  {/* Title + animated underline */}
                  <div className="absolute bottom-0 inset-x-0 p-5 text-left text-sand-50 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="font-display text-xl md:text-2xl leading-tight">
                      {item.title}
                    </div>
                    <span className="block mt-2 h-px w-8 bg-ochre-500 transition-all duration-500 group-hover:w-20" />
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-bark-900/50">
            Nothing here yet.
          </div>
        )}
      </div>

      {/* Premium Lightbox */}
      {active !== null && filtered[active] && (
        <div className="fixed inset-0 z-[80] bg-bark-900/96 backdrop-blur-md flex flex-col animate-fade-in">
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 md:px-10 py-5 border-b border-sand-50/10">
            <div className="text-sand-50">
              <div className="text-[10px] uppercase tracking-[0.3em] text-sand-200/55">
                {filtered[active].category}
              </div>
              <div className="font-display text-xl md:text-2xl">
                {filtered[active].title}
              </div>
            </div>
            <div className="flex items-center gap-3 text-sand-200/75 text-sm">
              <span className="hidden sm:inline">
                {active + 1} / {filtered.length}
              </span>
              <button
                onClick={close}
                className="h-11 w-11 rounded-full bg-sand-50/10 text-sand-50 inline-flex items-center justify-center hover:bg-sand-50/20"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Main image area */}
          <div className="relative flex-1 flex items-center justify-center p-4 md:p-8">
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
            <div className="relative w-full max-w-6xl h-full max-h-[70vh]">
              <Image
                key={filtered[active].src}
                src={filtered[active].src}
                alt={filtered[active].title}
                fill
                sizes="100vw"
                className="object-contain animate-fade-in"
                priority
                quality={92}
              />
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="border-t border-sand-50/10 bg-bark-900/60 backdrop-blur">
            <div className="px-3 md:px-10 py-3 overflow-x-auto">
              <div className="flex gap-2 min-w-min">
                {filtered.map((it, i) => (
                  <button
                    key={it.src}
                    onClick={() => setActive(i)}
                    className={`relative shrink-0 h-14 w-20 md:h-16 md:w-24 rounded-md overflow-hidden border-2 transition-all ${
                      i === active
                        ? "border-ochre-500 opacity-100"
                        : "border-transparent opacity-55 hover:opacity-100"
                    }`}
                    aria-label={it.title}
                  >
                    <Image
                      src={it.src}
                      alt=""
                      fill
                      sizes="100px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
