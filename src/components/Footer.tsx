import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-bark-900 text-sand-100">
      <div className="container-px py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="bg-sand-50 inline-flex p-3 rounded-lg">
            <Image
              src="/logo.jpg"
              alt="The Tribe Lodge"
              width={160}
              height={70}
              className="object-contain"
            />
          </div>
          <p className="mt-5 text-sand-200/80 leading-relaxed">
            Authentic African hospitality in Hillside, Bulawayo. Comfort, style and
            warm service — all in one place.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sand-50/[0.06] text-sand-200 text-xs">
            <span>{site.motto}.</span>
          </div>
        </div>

        <div>
          <h4 className="font-display text-xl text-sand-50 mb-4">Explore</h4>
          <ul className="space-y-2 text-sand-200/80 text-sm">
            {[
              ["About", "#about"],
              ["Rooms & Rates", "#rooms"],
              ["Services", "#services"],
              ["Tours & Transfers", "#tours"],
              ["Gallery", "#gallery"],
              ["Location", "#location"],
              ["Contact", "#contact"],
            ].map(([l, h]) => (
              <li key={h}>
                <a href={h} className="hover:text-sand-50 transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl text-sand-50 mb-4">Services</h4>
          <ul className="space-y-2 text-sand-200/80 text-sm">
            {site.services.map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl text-sand-50 mb-4">Contact</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2 text-sand-200/85">
              <MapPin className="h-4 w-4 mt-1 text-ochre-500 shrink-0" />
              <span>{site.address}</span>
            </div>
            {site.phones.map((p) => (
              <div key={p.tel} className="flex items-center justify-between gap-2">
                <a
                  href={`tel:${p.tel}`}
                  className="flex items-center gap-2 text-sand-200/85 hover:text-sand-50 min-w-0"
                >
                  <Phone className="h-3.5 w-3.5 text-ochre-500 shrink-0" />
                  <span className="truncate">
                    <span className="text-sand-200/55 text-[10px] uppercase tracking-wider mr-1">
                      {p.role.split(" ")[0]}
                    </span>
                    {p.display}
                  </span>
                </a>
                {p.whatsapp && (
                  <a
                    href={`https://wa.me/${p.tel.replace("+", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`WhatsApp ${p.display}`}
                    className="text-[#25D366] hover:opacity-80 shrink-0"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>
                )}
              </div>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 text-sand-200/85 hover:text-sand-50"
            >
              <Mail className="h-4 w-4 text-ochre-500" />
              {site.email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-sand-50/10">
        <div className="container-px py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sand-200/60">
          <div>© {new Date().getFullYear()} The Tribe Lodge. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <span>Hillside · Bulawayo · Zimbabwe</span>
            <span className="hidden sm:inline text-sand-50/20">|</span>
            <span className="hidden sm:inline">
              Website by{" "}
              <a
                href="https://kuwexstudios.co.zw"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ochre-500/80 hover:text-ochre-500 transition-colors font-medium"
              >
                KuWeX Studios
              </a>
            </span>
          </div>
        </div>
        {/* Mobile KuWeX credit */}
        <div className="sm:hidden text-center pb-4 text-xs text-sand-200/50">
          Website by{" "}
          <a
            href="https://kuwexstudios.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ochre-500/80 hover:text-ochre-500 transition-colors font-medium"
          >
            KuWeX Studios
          </a>
        </div>
      </div>
    </footer>
  );
}
