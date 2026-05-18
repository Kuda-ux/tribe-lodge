"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Phone, MessageCircle, ArrowRight, MapPin, Play, X, Star } from "lucide-react";
import { site, heroSlides as slides } from "@/lib/site";

export default function Hero() {
  const [active, setActive] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % slides.length),
      6500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden bg-bark-900"
    >
      {/* Ken-Burns background slideshow */}
      <div className="absolute inset-0 z-0">
        {slides.map((s, i) => (
          <div
            key={s.src}
            className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${
              i === active ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className={`absolute inset-0 ${
                i === active ? "animate-kenburns" : ""
              }`}
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                priority={i === 0}
                fetchPriority={i === 0 ? "high" : "low"}
                className="object-cover"
                sizes="100vw"
                quality={85}
              />
            </div>
          </div>
        ))}
        {/* Layered gradients for premium depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-bark-900/85 via-bark-900/55 to-bark-900/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-bark-900/70 via-transparent to-bark-900/30" />
        {/* Subtle film-grain noise */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Top gold accent line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-ochre-500/70 to-transparent z-10" />

      <div className="container-px relative z-10 pt-36 pb-20 md:pt-40 md:pb-28 min-h-[100svh] flex flex-col justify-center">
        <div className="max-w-4xl">
          {/* Eyebrow with location chip */}
          <div className="inline-flex items-center gap-3 mb-7 animate-fade-up">
            <span className="h-px w-12 bg-ochre-500/80" />
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sand-50/[0.08] border border-sand-50/15 backdrop-blur-md text-sand-100">
              <MapPin className="h-3 w-3 text-ochre-500" />
              <span className="text-[10px] uppercase tracking-[0.32em] font-semibold">
                Hillside · Bulawayo · Zimbabwe
              </span>
            </span>
          </div>

          {/* Brand motto */}
          <div
            className="text-ochre-500 text-[11px] sm:text-sm tracking-[0.4em] sm:tracking-[0.45em] uppercase font-semibold mb-5 animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            ✦ {site.motto} ✦
          </div>

          <h1
            className="h-display text-sand-50 text-[clamp(2.25rem,9vw,5.75rem)] xl:text-[88px] leading-[1.02] animate-fade-up break-words"
            style={{ animationDelay: "240ms" }}
          >
            Stay With Us,
            <br />
            <span className="italic text-sand-200 relative inline-block max-w-full">
              Create Memories.
              <svg
                viewBox="0 0 300 12"
                preserveAspectRatio="none"
                className="absolute -bottom-2 sm:-bottom-3 left-0 w-[80%] h-2 text-ochre-500"
                aria-hidden
              >
                <path
                  d="M2 8 Q 80 -2 150 6 T 298 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>

          <p
            className="mt-9 text-sand-100/90 text-lg md:text-xl max-w-2xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "360ms" }}
          >
            Authentic African hospitality at the heart of Bulawayo — eight individually
            styled presidential suites, curated tours and warm service for travellers
            who appreciate the finer details.
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-3 sm:gap-4 animate-fade-up"
            style={{ animationDelay: "480ms" }}
          >
            <a href="#rooms" className="btn-primary">
              Book Your Stay <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={`https://wa.me/${site.whatsapp.tel.replace("+", "")}?text=${encodeURIComponent(
                "Hello Tribe Lodge, I'd like to enquire about a booking."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <button
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center gap-3 text-sand-50 hover:text-ochre-500 transition-colors group"
            >
              <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-sand-50/30 bg-sand-50/[0.05] backdrop-blur-md group-hover:bg-ochre-500 group-hover:border-ochre-500 group-hover:text-bark-900 transition-all">
                <Play className="h-4 w-4 ml-0.5" />
                <span className="absolute inset-0 rounded-full animate-ping bg-sand-50/20 group-hover:bg-ochre-500/20" />
              </span>
              <span className="text-[11px] uppercase tracking-[0.3em] font-semibold">
                Watch Our Story
              </span>
            </button>
          </div>

          {/* Trust strip */}
          <div
            className="mt-12 flex items-center gap-5 text-sand-200/80 text-xs sm:text-sm animate-fade-up"
            style={{ animationDelay: "600ms" }}
          >
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-ochre-500 text-ochre-500" />
              ))}
            </div>
            <span className="hidden sm:inline text-sand-200/40">|</span>
            <span className="hidden sm:inline">8 Presidential Suites · Superking beds · From $60/night</span>
            <span className="sm:hidden">8 Presidential Suites · From $60</span>
          </div>
        </div>

        {/* Slideshow controls + active caption (premium magazine style) */}
        <div className="hidden sm:flex absolute bottom-10 md:bottom-12 right-6 md:right-10 z-10 items-center gap-5 text-sand-50/80">
          <div className="text-right">
            <div className="text-[10px] uppercase tracking-[0.28em] text-sand-200/55">
              Now showing
            </div>
            <div className="font-display text-lg md:text-xl text-sand-50">
              {slides[active].caption}
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Show slide ${i + 1}`}
                className={`h-px transition-all ${
                  i === active ? "w-10 bg-ochre-500" : "w-6 bg-sand-50/40 hover:bg-sand-50/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile slide indicator (centered, simple) */}
        <div className="sm:hidden flex justify-center gap-2 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              aria-label={`Show slide ${i + 1}`}
              className={`h-1 rounded-full transition-all ${
                i === active ? "w-8 bg-ochre-500" : "w-3 bg-sand-50/40"
              }`}
            />
          ))}
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 text-sand-200/55 text-[10px] uppercase tracking-[0.32em]">
          <span>Scroll</span>
          <span className="block h-8 w-px bg-gradient-to-b from-sand-200/60 to-transparent animate-pulse" />
        </div>
      </div>

      {/* Video modal */}
      {videoOpen && (
        <div
          className="fixed inset-0 z-[70] bg-bark-900/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setVideoOpen(false)}
        >
          <button
            onClick={() => setVideoOpen(false)}
            className="absolute top-5 right-5 h-11 w-11 rounded-full bg-sand-50/10 text-sand-50 inline-flex items-center justify-center hover:bg-sand-50/20"
            aria-label="Close video"
          >
            <X className="h-5 w-5" />
          </button>
          <div
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-bark-900/60"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              src="/videos/video-1.mp4"
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
