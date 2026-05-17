import Image from "next/image";
import { Compass, BusFront, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function Tours() {
  return (
    <section id="tours" className="section bg-sand-100/50">
      <div className="container-px">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <Reveal className="lg:col-span-5">
            <span className="eyebrow">Transfers &amp; Tours</span>
            <h2 className="h-display text-4xl md:text-5xl lg:text-6xl mt-5 text-bark-900">
              Plan Your Trip <em className="not-italic text-clay-600">With Us.</em>
            </h2>
            <p className="mt-5 text-bark-900/75 text-lg leading-relaxed">
              Our branded shuttle is on-call for J.M. Nkomo International Airport pick-ups,
              city transfers and curated excursions to Zimbabwe's most iconic destinations.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/img-22.jpg"
                  alt="The Tribe Lodge shuttle"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 50vw, 25vw"
                />
              </div>
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/img-21.jpg"
                  alt="The Tribe Lodge — Plan Your Trip With Us"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 50vw, 25vw"
                />
              </div>
            </div>

            <a href="#contact" className="btn-primary mt-8">
              Enquire About a Tour <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-5">
              {site.tours.map((t, i) => (
                <div
                  key={t.name}
                  className="bg-white rounded-2xl border border-sand-200/60 p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-10 w-10 rounded-full bg-clay-600/10 text-clay-600 inline-flex items-center justify-center">
                      <Compass className="h-5 w-5" />
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.25em] text-bark-900/55">
                      Destination 0{i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl text-bark-900 mt-4">{t.name}</h3>
                  <p className="text-bark-900/70 mt-2 text-sm leading-relaxed">{t.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-bark-900 text-sand-50 p-6 flex items-start gap-4">
              <span className="h-12 w-12 rounded-xl bg-ochre-500/20 text-ochre-500 inline-flex items-center justify-center shrink-0">
                <BusFront className="h-6 w-6" />
              </span>
              <div>
                <div className="font-display text-xl">Airport Transfers</div>
                <p className="text-sand-200/80 text-sm mt-1">
                  Comfortable Renault Master shuttle, branded and ready to welcome you on arrival.
                  Just share your flight details when you book.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
