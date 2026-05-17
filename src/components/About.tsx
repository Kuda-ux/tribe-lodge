import Image from "next/image";
import { Sparkles } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-px grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <Reveal>
          <div className="grid grid-cols-2 gap-4">
            {/* Star tribal-themed suite */}
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
              <Image
                src="/images/img-05.jpg"
                alt="Tribal Suite at The Tribe Lodge"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="(max-width:1024px) 50vw, 30vw"
              />
            </div>
            <div className="grid gap-4 mt-10">
              {/* Branded steel-cut fence detail */}
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image
                  src="/images/img-04.jpg"
                  alt="Branded steel fence with giraffe motif"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width:1024px) 50vw, 30vw"
                />
              </div>
              {/* Pool */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/images/img-09.jpg"
                  alt="Lodge swimming pool and grounds"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width:1024px) 50vw, 30vw"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <span className="eyebrow">About The Tribe Lodge</span>
            <h2 className="h-display text-4xl md:text-5xl lg:text-6xl mt-5 text-bark-900">
              A peaceful retreat in <em className="not-italic text-clay-600">Hillside, Bulawayo.</em>
            </h2>
            <p className="mt-6 text-bark-900/75 text-lg leading-relaxed">
              The Tribe Lodge is a welcoming hospitality destination offering comfortable
              accommodation in a calm, beautifully styled setting in the leafy Hillside suburb of
              Bulawayo. Each presidential suite is uniquely styled — Tribal, Navy and Onyx — and
              every guest is treated like family.
            </p>
            <p className="mt-4 text-bark-900/75 text-lg leading-relaxed">
              Beyond the rooms we offer conference facilities, on-site dining, laundry services,
              airport transfers and curated tours to Matobo Hills, Khami Ruins, Hwange and
              Victoria Falls — everything you need for a memorable Zimbabwean stay.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {site.whyChoose.map((f) => (
                <div key={f} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-7 w-7 items-center justify-center rounded-full bg-ochre-500/15 text-ochre-600">
                    <Sparkles className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-bark-900/85">{f}</span>
                </div>
              ))}
            </div>

            <a href="#rooms" className="btn-dark-outline mt-10">Discover Our Suites</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
