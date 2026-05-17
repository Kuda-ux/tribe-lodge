"use client";
import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={`https://wa.me/${site.whatsapp.tel.replace("+", "")}?text=${encodeURIComponent(
        "Hello Tribe Lodge, I'd like to enquire about a booking."
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp ${site.whatsapp.display}`}
      className="fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/40 inline-flex items-center justify-center hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-6 w-6" />
      <span
        className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/50"
        aria-hidden
      />
    </a>
  );
}
