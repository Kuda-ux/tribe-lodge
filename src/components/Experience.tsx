"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { Play, X } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

const cards = [
  {
    src: site.videos[0],
    poster: "/images/img-05.jpg",
    title: "The Tribal Suite",
    eyebrow: "Walk-through 01",
  },
  {
    src: site.videos[1],
    poster: "/images/img-08.jpg",
    title: "The Onyx Suite",
    eyebrow: "Walk-through 02",
  },
  {
    src: site.videos[2],
    poster: "/images/img-02.jpg",
    title: "The Navy Suite",
    eyebrow: "Walk-through 03",
  },
];

export default function Experience() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="section bg-sand-50">
      <div className="container-px">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <span className="eyebrow">Experience The Tribe Lodge</span>
              <h2 className="h-display text-4xl md:text-5xl lg:text-6xl mt-5 text-bark-900">
                A glimpse into your <em className="not-italic text-clay-600">next stay.</em>
              </h2>
            </div>
            <p className="text-bark-900/65 max-w-sm">
              Three short walk-throughs of our signature suites — tap any card to play.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <Reveal key={c.src} delay={i * 100}>
              <button
                onClick={() => setActive(i)}
                className="group relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-bark-900 shine"
              >
                <Image
                  src={c.poster}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark-900/90 via-bark-900/15 to-transparent" />

                <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] text-sand-200/80 font-semibold">
                  {c.eyebrow}
                </span>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="relative h-20 w-20 rounded-full bg-sand-50/95 text-bark-900 inline-flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <Play className="h-7 w-7 ml-1" />
                    <span className="absolute inset-0 rounded-full animate-ping bg-sand-50/40" />
                  </span>
                </div>

                <div className="absolute bottom-0 inset-x-0 p-5 text-left text-sand-50">
                  <div className="font-display text-2xl">{c.title}</div>
                  <span className="block mt-2 h-px w-10 bg-ochre-500" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active !== null && (
        <div
          className="fixed inset-0 z-[70] bg-bark-900/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            className="absolute top-5 right-5 h-11 w-11 rounded-full bg-sand-50/10 text-sand-50 inline-flex items-center justify-center hover:bg-sand-50/20 z-[71]"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src={cards[active].src}
              poster={cards[active].poster}
              controls
              autoPlay
              playsInline
              className="absolute inset-0 h-full w-full object-cover bg-bark-900"
            />
          </div>
        </div>
      )}
    </section>
  );
}
