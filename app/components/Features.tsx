"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "100% Organic Petals",
    emoji: "🌹",
    description:
      "Crafted exclusively from pure organic rose and lotus petals—no blends, no shortcuts."
  },
  {
    title: "No Chemicals or Fillers",
    emoji: "🌿",
    description:
      "Absolutely free from pesticides, dyes, artificial flavors, glues, or synthetic binders."
  },
  {
    title: "Natural Aroma & Vibrant Color",
    emoji: "🎨",
    description:
      "Preserves the intrinsic petal fragrance and naturally vivid hues without additives."
  },
  {
    title: "Long Shelf Life (1 Year)",
    emoji: "⏳",
    description:
      "Specially cured and protected so color and freshness last for up to one year."
  },
  {
    title: "Premium Tube Packaging",
    emoji: "📦",
    description:
      "Packed in premium tubes with a 2-way humidity exchange pack and cork seal."
  }
];

export function Features() {
  return (
    <section id="features" className="bg-flowpets-beige/40 py-20 sm:py-24">
      <div className="section-wrapper">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-flowpets-forest">
            Product Features
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Designed for purity, longevity, and a genuinely natural experience.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="glass-panel flex h-full flex-col rounded-3xl p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-flowpets-light/40 text-lg">
                <span aria-hidden="true">{feature.emoji}</span>
              </div>
              <h3 className="mt-4 text-sm font-semibold text-slate-900 sm:text-base">
                {feature.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

