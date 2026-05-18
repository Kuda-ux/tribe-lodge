import { BedDouble, Presentation, UtensilsCrossed, Shirt, BusFront, MapPinned } from "lucide-react";

const items = [
  { icon: BedDouble, title: "Accommodation", text: "8 presidential suites" },
  { icon: Presentation, title: "Conference", text: "Meetings & events" },
  { icon: UtensilsCrossed, title: "Food On Site", text: "Daily meals" },
  { icon: Shirt, title: "Laundry", text: "On-site service" },
  { icon: BusFront, title: "Transfers", text: "Airport shuttle" },
  { icon: MapPinned, title: "Tours", text: "Explore Zimbabwe" },
];

export default function Highlights() {
  return (
    <section className="relative -mt-16 z-10">
      <div className="container-px">
        <div className="bg-sand-50 rounded-3xl shadow-xl shadow-bark-900/10 border border-sand-200/60 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-y sm:divide-y-0 lg:divide-y-0 divide-sand-200/60 overflow-hidden">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="p-6 text-center flex flex-col items-center gap-3 hover:bg-sand-100 transition-colors">
              <span className="h-12 w-12 rounded-full bg-bark-900 text-sand-50 inline-flex items-center justify-center">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <div className="font-display text-lg text-bark-900">{title}</div>
                <div className="text-xs text-bark-900/60 mt-0.5">{text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
