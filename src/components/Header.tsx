"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#rooms", label: "Rooms" },
  { href: "#services", label: "Services" },
  { href: "#tours", label: "Tours" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Location" },
  { href: "#contact", label: "Contact" },
];

const reservations = site.phones.find((p) => p.role.startsWith("Reservations"))!;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-sand-50/95 backdrop-blur border-b border-sand-200/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-px flex items-center justify-between h-20">
        <Link href="#top" className="flex items-center gap-3 group" aria-label="The Tribe Lodge — home">
          <span
            className={`relative h-12 w-28 sm:h-14 sm:w-32 transition-all ${
              scrolled ? "" : "bg-sand-50/95 rounded-md px-2 py-1 shadow-sm"
            }`}
          >
            <Image
              src="/logo.jpg"
              alt="The Tribe Lodge"
              fill
              priority
              className="object-contain"
              sizes="160px"
            />
          </span>
        </Link>

        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium tracking-wide transition-colors ${
                scrolled ? "text-bark-900 hover:text-clay-600" : "text-sand-50 hover:text-sand-200"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${reservations.tel}`}
            className={`flex items-center gap-2 text-sm font-medium ${
              scrolled ? "text-bark-900" : "text-sand-50"
            }`}
          >
            <Phone className="h-4 w-4" />
            {reservations.display}
          </a>
          <a href="#contact" className="btn-primary">
            Book Your Stay
          </a>
        </div>

        <button
          onClick={() => setOpen(true)}
          className={`lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-full border ${
            scrolled
              ? "border-bark-900/20 text-bark-900"
              : "border-sand-50/50 text-sand-50 bg-bark-900/20 backdrop-blur-sm"
          }`}
          aria-label="Open menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-bark-900/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-[86%] max-w-sm bg-sand-50 shadow-2xl transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between h-20 px-6 border-b border-sand-200">
            <span className="relative h-10 w-24">
              <Image src="/logo.jpg" alt="The Tribe Lodge" fill className="object-contain" />
            </span>
            <button
              onClick={() => setOpen(false)}
              className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-bark-900/15"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-lg font-medium text-bark-900 border-b border-sand-200/60"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-6 w-full"
            >
              Book Your Stay
            </a>
            <a
              href={`https://wa.me/${site.whatsapp.tel.replace("+", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark-outline mt-3 w-full"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Us
            </a>
            <a
              href={`tel:${reservations.tel}`}
              className="btn-dark-outline mt-3 w-full"
            >
              <Phone className="h-4 w-4" /> {reservations.display}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
