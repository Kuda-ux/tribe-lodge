import Image from "next/image";
import { Check, ArrowRight, Wifi, Snowflake, Car, Waves, ShieldCheck, Sparkles, Coffee, Bell } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

const amenityIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Wifi, Car, Snowflake, Waves, ShieldCheck, Sparkles, Coffee, Bell,
};

export default function Rooms() {
  return (
    <section id="rooms" className="section bg-gradient-to-b from-sand-50 to-sand-100/60">
      <div className="container-px">
        <Reveal>
          <div className="max-w-3xl">
            <span className="eyebrow">Rooms &amp; Rates</span>
            <h2 className="h-display text-4xl md:text-5xl lg:text-6xl mt-5 text-bark-900">
              Three signature suites, one <em className="not-italic text-clay-600">unforgettable stay.</em>
            </h2>
            <p className="mt-5 text-bark-900/70 text-lg">
              Each presidential suite is individually styled with bespoke headboards, statement
              lighting and considered detail. <span className="font-semibold text-bark-900">$60 room only · $70 with breakfast.</span>
            </p>
          </div>
        </Reveal>

        {/* Room cards */}
        <div className="mt-14 space-y-10">
          {site.rooms.map((room, i) => (
            <Reveal key={room.slug} delay={i * 100}>
              <article
                className={`grid lg:grid-cols-12 gap-8 items-stretch ${
                  i % 2 === 1 ? "lg:[&>:first-child]:order-2" : ""
                }`}
              >
                {/* Image collage */}
                <div className="lg:col-span-7 grid grid-cols-3 gap-3 h-[420px] md:h-[520px]">
                  <div className="relative col-span-2 row-span-2 rounded-3xl overflow-hidden group">
                    <Image
                      src={room.images[0]}
                      alt={room.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width:1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bark-900/70 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 text-sand-50">
                      <div className="text-[11px] uppercase tracking-[0.3em] text-sand-200">{room.tagline}</div>
                      <div className="font-display text-2xl md:text-3xl mt-1">{room.name}</div>
                    </div>
                  </div>
                  {room.images.slice(1, 3).map((img, idx) => (
                    <div key={img} className={`relative rounded-2xl overflow-hidden ${idx === 1 && room.images.length < 3 ? "hidden" : ""}`}>
                      <Image
                        src={img}
                        alt={`${room.name} detail`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                        sizes="(max-width:1024px) 33vw, 16vw"
                      />
                    </div>
                  ))}
                  {room.images.length < 3 && (
                    <div className="relative rounded-2xl overflow-hidden">
                      <Image
                        src={room.images[0]}
                        alt={`${room.name} detail`}
                        fill
                        className="object-cover scale-110"
                        sizes="(max-width:1024px) 33vw, 16vw"
                      />
                    </div>
                  )}
                </div>

                {/* Details card */}
                <div className="lg:col-span-5 bg-white rounded-3xl border border-sand-200/60 p-7 md:p-9 shadow-sm flex flex-col">
                  <div className="flex items-center gap-2 text-ochre-600 text-xs uppercase tracking-[0.3em] font-semibold">
                    <span className="h-px w-8 bg-ochre-600/60" /> Suite {i + 1} of {site.rooms.length}
                  </div>

                  <h3 className="h-display text-3xl mt-3 text-bark-900">{room.name}</h3>
                  <p className="text-bark-900/65 mt-2 text-sm">{room.tagline}</p>

                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <div className="rounded-xl border border-sand-200 p-4 text-center bg-sand-50">
                      <div className="text-[10px] uppercase tracking-[0.2em] text-bark-900/55">Room Only</div>
                      <div className="font-display text-3xl text-bark-900 mt-1">${room.priceNoBreakfast}</div>
                      <div className="text-[10px] text-bark-900/50 mt-0.5">per night</div>
                    </div>
                    <div className="rounded-xl p-4 text-center bg-bark-900 text-sand-50 relative overflow-hidden">
                      <div className="absolute -top-5 -right-5 h-16 w-16 rounded-full bg-ochre-500/20" />
                      <div className="text-[10px] uppercase tracking-[0.2em] text-sand-200">+ Breakfast</div>
                      <div className="font-display text-3xl mt-1">${room.priceWithBreakfast}</div>
                      <div className="text-[10px] text-sand-200/80 mt-0.5">per night</div>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-2.5">
                    {room.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-bark-900/85 text-sm">
                        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-ochre-500/15 text-ochre-600 shrink-0">
                          <Check className="h-3 w-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a href="#contact" className="btn-primary mt-7 self-start">
                    Book {room.name} <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Amenities chip strip */}
        <Reveal delay={150}>
          <div className="mt-16 bg-white rounded-2xl border border-sand-200/60 p-6 md:p-8">
            <div className="text-center mb-5">
              <span className="eyebrow">Included with every suite</span>
            </div>
            <div className="flex flex-wrap justify-center gap-2.5">
              {site.amenities.map((a) => {
                const Icon = amenityIcons[a.icon] ?? Sparkles;
                return (
                  <span key={a.title} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sand-100 text-bark-900/85 text-sm">
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
