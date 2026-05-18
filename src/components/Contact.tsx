"use client";

import { useState } from "react";
import Image from "next/image";
import { MessageCircle, Phone, Mail, MapPin, Send } from "lucide-react";
import Reveal from "./Reveal";
import { site } from "@/lib/site";

const flagEmoji: Record<string, string> = {
  ZW: "🇿🇼",
  GB: "🇬🇧",
  ZM: "🇿🇲",
};

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    checkin: "",
    nights: "1",
    suite: "Any available suite",
    breakfast: "with",
    message: "",
  });
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hello Tribe Lodge,\n\nI'd like to book a stay.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nSuite: ${form.suite}\nCheck-in: ${form.checkin}\nNights: ${form.nights}\nBreakfast: ${form.breakfast === "with" ? "Yes ($70/night)" : "No ($60/night)"}\n\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/${site.whatsapp.tel.replace("+", "")}?text=${text}`, "_blank");
    setSent(true);
  }

  return (
    <section id="contact" className="section bg-sand-50">
      <div className="container-px grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <Reveal>
          <div>
            <span className="eyebrow">Contact &amp; Booking</span>
            <h2 className="h-display text-4xl md:text-5xl lg:text-6xl mt-5 text-bark-900">
              We can't wait to <em className="not-italic text-clay-600">welcome you.</em>
            </h2>
            <p className="mt-5 text-bark-900/75 text-lg">
              Reach us by phone, WhatsApp or fill in the form — our team responds quickly,
              every day of the week.
            </p>

            <div className="mt-8 space-y-3">
              {site.phones.map((p) => (
                <div
                  key={p.tel}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-white border border-sand-200 p-4"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="h-11 w-11 rounded-full bg-bark-900 text-sand-50 inline-flex items-center justify-center text-lg shrink-0">
                      {flagEmoji[p.flag] ?? "🌍"}
                    </span>
                    <div className="min-w-0">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-bark-900/55">
                        {p.role}
                      </div>
                      <div className="font-semibold text-bark-900 truncate">{p.display}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={`tel:${p.tel}`}
                      className="h-10 w-10 inline-flex items-center justify-center rounded-full border border-bark-900/15 text-bark-900 hover:bg-bark-900 hover:text-sand-50 transition-colors"
                      aria-label={`Call ${p.display}`}
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                    {p.whatsapp && (
                      <a
                        href={`https://wa.me/${p.tel.replace("+", "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-10 w-10 inline-flex items-center justify-center rounded-full bg-[#25D366] text-white hover:scale-105 transition-transform"
                        aria-label={`WhatsApp ${p.display}`}
                      >
                        <MessageCircle className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-3 px-1 pt-3">
                <MapPin className="h-5 w-5 text-clay-600 mt-1 shrink-0" />
                <div className="text-bark-900/85">{site.address}</div>
              </div>
              <div className="flex items-start gap-3 px-1">
                <Mail className="h-5 w-5 text-clay-600 mt-1 shrink-0" />
                <a
                  href={`mailto:${site.email}`}
                  className="text-bark-900/85 hover:text-clay-600"
                >
                  {site.email}
                </a>
              </div>
            </div>

            <div className="relative aspect-[5/3] rounded-2xl overflow-hidden mt-8">
              <Image
                src="/images/img-09.jpg"
                alt="The Tribe Lodge — pool & gardens"
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl border border-sand-200 shadow-sm p-7 md:p-9"
          >
            <h3 className="font-display text-2xl md:text-3xl text-bark-900">Request a booking</h3>
            <p className="text-bark-900/60 mt-2 text-sm">
              Send your details — we'll confirm via WhatsApp on{" "}
              <span className="font-semibold text-bark-900">{site.whatsapp.display}</span>.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <Field label="Full Name" required>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input"
                  placeholder="Jane Doe"
                />
              </Field>
              <Field label="Phone" required>
                <input
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="input"
                  placeholder="+263 ..."
                />
              </Field>
              <Field label="Email">
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="input"
                  placeholder="you@email.com"
                />
              </Field>
              <Field label="Suite">
                <select
                  className="input"
                  value={form.suite}
                  onChange={(e) => setForm({ ...form, suite: e.target.value })}
                >
                  <option value="Any available suite">Any available suite</option>
                  {site.suites.map((s) => (
                    <option key={s.slug} value={`Suite ${s.number} — ${s.name}`}>
                      Suite {s.number} — {s.name} ({s.style})
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Check-in date">
                <input
                  type="date"
                  value={form.checkin}
                  onChange={(e) => setForm({ ...form, checkin: e.target.value })}
                  className="input"
                />
              </Field>
              <Field label="Nights">
                <input
                  type="number"
                  min={1}
                  value={form.nights}
                  onChange={(e) => setForm({ ...form, nights: e.target.value })}
                  className="input"
                />
              </Field>
              <div className="sm:col-span-2">
                <Field label="Breakfast">
                  <select
                    className="input"
                    value={form.breakfast}
                    onChange={(e) => setForm({ ...form, breakfast: e.target.value })}
                  >
                    <option value="with">With Breakfast ($70/night)</option>
                    <option value="without">Room only ($60/night)</option>
                  </select>
                </Field>
              </div>
              <div className="sm:col-span-2">
                <Field label="Message">
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="input resize-none"
                    placeholder="Special requests, number of guests, transfers, tours, etc."
                  />
                </Field>
              </div>
            </div>

            <button type="submit" className="btn-primary mt-6 w-full">
              <Send className="h-4 w-4" /> Send via WhatsApp
            </button>
            {sent && (
              <p className="text-center text-sm text-clay-600 mt-3">
                Opening WhatsApp… if it didn't open, please call us directly.
              </p>
            )}

            <style jsx>{`
              .input {
                width: 100%;
                background: #faf6ef;
                border: 1px solid rgba(21, 16, 11, 0.1);
                border-radius: 0.75rem;
                padding: 0.7rem 0.9rem;
                font-size: 0.9rem;
                color: #15100b;
                outline: none;
                transition: border-color 0.2s, box-shadow 0.2s;
              }
              .input:focus {
                border-color: #b8862f;
                box-shadow: 0 0 0 3px rgba(184, 134, 47, 0.15);
              }
            `}</style>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.2em] text-bark-900/55 font-semibold">
        {label}
        {required && <span className="text-clay-600"> *</span>}
      </span>
      <div className="mt-1.5">{children}</div>
    </label>
  );
}
