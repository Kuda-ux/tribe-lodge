import { BedDouble, Presentation, UtensilsCrossed, Shirt, BusFront, MapPinned } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  BedDouble, Presentation, UtensilsCrossed, Shirt, BusFront, MapPinned,
};

export default function Services() {
  return (
    <section id="services" className="section bg-bark-900 text-sand-50 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 30%, #C49E5E 0, transparent 40%), radial-gradient(circle at 75% 70%, #A8482B 0, transparent 40%)",
        }}
      />
      <div className="container-px relative">
        <Reveal>
          <div className="max-w-2xl">
            <span className="eyebrow !text-ochre-500">What We Offer</span>
            <h2 className="h-display text-4xl md:text-5xl lg:text-6xl mt-5">
              Everything you need for a <em className="not-italic text-sand-200">memorable stay.</em>
            </h2>
            <p className="mt-5 text-sand-200/80 text-lg">
              From peaceful suites to professional conference spaces, on-site dining, laundry,
              airport transfers and curated tours — we take care of every detail.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {site.services.map((s, i) => {
            const Icon = icons[s.icon] ?? BedDouble;
            return (
              <Reveal key={s.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-sand-50/10 bg-sand-50/[0.03] hover:bg-sand-50/[0.06] transition-all p-7 backdrop-blur-sm">
                  <div className="h-14 w-14 rounded-xl bg-ochre-500/15 text-ochre-500 inline-flex items-center justify-center mb-6 group-hover:bg-ochre-500 group-hover:text-bark-900 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl text-sand-50">{s.title}</h3>
                  <p className="mt-3 text-sand-200/75 leading-relaxed text-sm">{s.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
