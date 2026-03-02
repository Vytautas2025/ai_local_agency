// [Tier3Labs] — "Is This You?" qualification block between Hero and Numbers section
import { CheckCircle, MapPin, PhoneOff } from "lucide-react";

const items = [
  {
    icon: <CheckCircle size={20} className="text-green-400" />,
    title: "You have a Google Business Profile",
    body: "You're verified and listed — the foundation is there.",
  },
  {
    icon: <MapPin size={20} className="text-amber-400" />,
    title: "You rank — just not in the Top 3",
    body: "You show up somewhere on Google. Just not where 60% of clicks happen.",
  },
  {
    icon: <PhoneOff size={20} className="text-red-400" />,
    title: "The phone isn't ringing like it should",
    body: "Competitors above you are getting the calls, visits, and bookings you should be winning.",
  },
];

export default function IsThisYou() {
  return (
    <section className="bg-gray-900/40 py-12 border-y border-gray-800">
      <div className="max-w-4xl mx-auto px-6">
        <p className="text-sm uppercase tracking-widest text-gray-400 mb-8 text-center">
          Sound familiar?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center gap-2">
              {item.icon}
              <p className="text-white font-semibold text-sm">{item.title}</p>
              <p className="text-gray-400 text-sm">{item.body}</p>
            </div>
          ))}
        </div>

        <p className="text-green-400 font-semibold text-base mt-8 text-center">
          If that sounds like your business — you&apos;re in exactly the right place.
        </p>
      </div>
    </section>
  );
}
