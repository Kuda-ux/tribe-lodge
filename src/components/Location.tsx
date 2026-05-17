"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Plane, Compass } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function Location() {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const [showMap, setShowMap] = useState(false);

  // Lazy-load the iframe only when the wrapper enters viewport (saves ~500 KB on first paint)
  useEffect(() => {
    const el = mapRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShowMap(true);
          io.disconnect();
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    site.address
  )}`;

  return (
    <section id="location" className="section bg-sand-100/50">
      <div className="container-px grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div>
            <span className="eyebrow">Location</span>
            <h2 className="h-display text-4xl md:text-5xl lg:text-6xl mt-5 text-bark-900">
              Conveniently in <em className="not-italic text-clay-600">Hillside, Bulawayo.</em>
            </h2>
            <p className="mt-5 text-bark-900/75 text-lg leading-relaxed">
              The Tribe Lodge is set in Hillside — one of Bulawayo's leafiest, most peaceful
              suburbs — with easy access to the city centre, business districts, restaurants,
              shopping and Zimbabwe's iconic heritage sites.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-clay-600 mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-bark-900">Address</div>
                  <div className="text-bark-900/70">{site.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Compass className="h-5 w-5 text-clay-600 mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-bark-900">Nearby</div>
                  <div className="text-bark-900/70">
                    Minutes from Bulawayo CBD, restaurants, museums &amp; shopping. Easy reach to
                    Matobo Hills and Khami Ruins.
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Plane className="h-5 w-5 text-clay-600 mt-1 shrink-0" />
                <div>
                  <div className="font-semibold text-bark-900">Travel</div>
                  <div className="text-bark-900/70">
                    Convenient access from J.M. Nkomo International Airport — airport transfers
                    available on request.
                  </div>
                </div>
              </div>
            </div>

            <a
              href={mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark-outline mt-10"
            >
              Open in Google Maps
            </a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            ref={mapRef}
            className="relative rounded-3xl overflow-hidden shadow-xl shadow-bark-900/10 border border-sand-200/60 aspect-[4/5] md:aspect-[5/6] bg-sand-100"
          >
            {showMap ? (
              <iframe
                title="The Tribe Lodge location map"
                src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-bark-900/40 text-sm">
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> Loading map…
                </span>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
