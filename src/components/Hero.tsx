import { Phone, MessageCircle, ArrowRight, MapPin } from "lucide-react";
import { site } from "@/lib/site";

const reservations = site.phones.find((p) => p.role.startsWith("Reservations"))!;

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background video with image fallback (poster = tribal suite) */}
      <div className="absolute inset-0 -z-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/img-05.jpg"
          className="h-full w-full object-cover"
        >
          <source src="/videos/video-1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      <div className="container-px relative pt-36 pb-20 md:pt-44 md:pb-32 min-h-[100svh] flex flex-col justify-center">
        <div className="max-w-3xl animate-fade-up">
          <div className="inline-flex items-center gap-3 mb-6 text-sand-200/90">
            <span className="h-px w-10 bg-sand-200/70" />
            <MapPin className="h-3.5 w-3.5" />
            <span className="text-[11px] uppercase tracking-[0.32em] font-semibold text-sand-100">
              Hillside • Bulawayo • Zimbabwe
            </span>
          </div>

          <h1 className="h-display text-sand-50 text-5xl sm:text-6xl md:text-7xl lg:text-[88px]">
            Stay With Us,
            <br />
            <span className="italic text-sand-200">Create Memories.</span>
          </h1>

          <p className="mt-7 text-sand-100/90 text-lg md:text-xl max-w-2xl leading-relaxed">
            Authentic African hospitality at the heart of Bulawayo — comfort, style and
            personalized service for business and leisure travellers. Stay in style, feel at home.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
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
            <a
              href={`tel:${reservations.tel}`}
              className="hidden sm:inline-flex btn-outline"
            >
              <Phone className="h-4 w-4" /> Call Reservations
            </a>
          </div>
        </div>

        {/* Floating stats / trust card */}
        <div className="mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-sand-50/10 backdrop-blur-md rounded-2xl overflow-hidden border border-sand-50/15 max-w-4xl">
          {[
            { k: "From $60", v: "Per Night" },
            { k: "3 Suites", v: "Tribal • Navy • Onyx" },
            { k: "Pool & Wi-Fi", v: "Free Parking" },
            { k: "Airport", v: "Transfers & Tours" },
          ].map((s) => (
            <div key={s.v} className="bg-bark-900/35 px-5 py-6 text-center">
              <div className="text-sand-50 font-display text-2xl md:text-[26px]">{s.k}</div>
              <div className="text-sand-200/85 text-[11px] uppercase tracking-[0.2em] mt-1">{s.v}</div>
            </div>
          ))}
        </div>
      </div>

      {/* subtle scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sand-100/70 text-[11px] tracking-[0.32em] uppercase animate-fade-in">
        Scroll
      </div>
    </section>
  );
}
