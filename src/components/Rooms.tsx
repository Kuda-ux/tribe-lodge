import Image from "next/image";
import {
  Check,
  ArrowRight,
  Wifi,
  Snowflake,
  Car,
  Waves,
  ShieldCheck,
  Sparkles,
  Coffee,
  Bell,
  BedDouble,
} from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

const amenityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Wifi,
  Car,
  Snowflake,
  Waves,
  ShieldCheck,
  Sparkles,
  Coffee,
  Bell,
};

export default function Rooms() {
  const { roomOnly, withBreakfast } = site.pricing;

  return (
    <section
      id="rooms"
      className="section bg-gradient-to-b from-sand-50 to-sand-100/60"
    >
      <div className="container-px">
        <Reveal>
          <div className="grid lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <span className="eyebrow">Rooms &amp; Rates</span>
              <h2 className="h-display text-4xl md:text-5xl lg:text-6xl mt-5 text-bark-900">
                Eight Presidential Suites,
                <br />
                <em className="not-italic text-clay-600">individually styled.</em>
              </h2>
              <p className="mt-5 text-bark-900/70 text-lg max-w-2xl">
                Every suite at The Tribe Lodge is a presidential-class room —
                each with its own personality, all sharing the same level of
                comfort and detail.
              </p>
            </div>

            {/* Headline pricing card */}
            <div className="lg:col-span-5">
              <div className="bg-bark-900 text-sand-50 rounded-3xl p-6 md:p-7 relative overflow-hidden shadow-xl shadow-bark-900/15">
                <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-ochre-500/15" />
                <div className="absolute -bottom-10 -left-6 h-28 w-28 rounded-full bg-clay-600/15" />
                <div className="relative">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-ochre-500 font-semibold">
                    Per suite, per night
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-5">
                    <div>
                      <div className="font-display text-4xl md:text-5xl leading-none">
                        ${roomOnly}
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-sand-200/70 mt-2">
                        Room only
                      </div>
                    </div>
                    <div>
                      <div className="font-display text-4xl md:text-5xl leading-none">
                        ${withBreakfast}
                      </div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-sand-200/70 mt-2">
                        With breakfast
                      </div>
                    </div>
                  </div>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ochre-500 hover:text-sand-50 transition-colors"
                  >
                    Reserve your suite <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* What every suite includes */}
        <Reveal delay={100}>
          <div className="mt-14 bg-white rounded-3xl border border-sand-200/60 p-6 md:p-8 shadow-sm">
            <div className="flex flex-wrap items-center gap-4 mb-5">
              <span className="h-10 w-10 rounded-full bg-bark-900 text-sand-50 inline-flex items-center justify-center">
                <BedDouble className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[10px] uppercase tracking-[0.28em] text-bark-900/55 font-semibold">
                  Standard in every suite
                </div>
                <div className="font-display text-2xl text-bark-900">
                  Designed for restful, premium stays.
                </div>
              </div>
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-3">
              {site.suiteFeatures.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-bark-900/85 text-sm"
                >
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-ochre-500/15 text-ochre-600 shrink-0">
                    <Check className="h-3 w-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        {/* The 8 suites — magazine grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {site.suites.map((suite, i) => (
            <Reveal key={suite.slug} delay={(i % 4) * 80}>
              <a
                href="#contact"
                className="group block relative aspect-[4/5] rounded-2xl overflow-hidden bg-bark-900/5 shine"
              >
                <Image
                  src={suite.image}
                  alt={`${suite.name} — presidential suite at The Tribe Lodge`}
                  fill
                  sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-[1.3s] ease-out group-hover:scale-110"
                  quality={86}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bark-900/85 via-bark-900/10 to-transparent" />

                {/* Suite number */}
                <span className="absolute top-4 left-4 inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-sand-50/15 backdrop-blur-md border border-sand-50/25 text-sand-50 text-[10px] uppercase tracking-[0.25em] font-semibold">
                  Suite {suite.number}
                </span>

                {/* Style chip top right */}
                <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-bark-900/45 backdrop-blur-md text-sand-100 text-[9px] uppercase tracking-[0.2em] font-semibold">
                  Superking
                </span>

                {/* Caption */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-sand-50 translate-y-1 group-hover:translate-y-0 transition-transform">
                  <div className="font-display text-2xl leading-tight">
                    {suite.name}
                  </div>
                  <div className="text-xs text-sand-200/80 mt-1">
                    {suite.style}
                  </div>
                  <span className="block mt-3 h-px w-8 bg-ochre-500 transition-all duration-500 group-hover:w-16" />
                  <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.25em] text-sand-100 opacity-0 group-hover:opacity-100 transition-opacity">
                    Reserve <ArrowRight className="h-3 w-3" />
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Amenities chip strip */}
        <Reveal delay={150}>
          <div className="mt-14 bg-white rounded-2xl border border-sand-200/60 p-6 md:p-8">
            <div className="text-center mb-5">
              <span className="eyebrow">Included with every suite</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2.5">
              {site.amenities.map((a) => {
                const Icon = amenityIcons[a.icon] ?? Sparkles;
                return (
                  <span
                    key={a.title}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sand-100 text-bark-900/85 text-sm"
                  >
                    <Icon className="h-4 w-4 text-ochre-600" />
                    {a.title}
                  </span>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
