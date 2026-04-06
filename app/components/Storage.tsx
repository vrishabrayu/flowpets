"use client";

import { motion } from "framer-motion";

const tips = [
  {
    title: "Keep away from direct sunlight",
    description:
      "Store the tubes in a shaded area to protect the natural petal color from fading."
  },
  {
    title: "Store in a cool, dry place",
    description:
      "Avoid excess heat and humidity to preserve the cured petals and their gentle aroma."
  },
  {
    title: "Keep sealed in the original tube",
    description:
      "Always reseal the cork and keep the humidity pack inside for optimal freshness."
  }
];

export function Storage() {
  return (
    <section className="py-20 sm:py-24">
      <div className="section-wrapper">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-flowpets-forest">
            Storage Instructions
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Simple care for long-lasting vibrancy.
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            When stored correctly, FLOWPETS cones retain their color and aroma
            for up to one year.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid gap-6 md:grid-cols-3"
        >
          {tips.map((tip) => (
            <motion.div
              key={tip.title}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="glass-panel h-full rounded-3xl p-5 text-left"
            >
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                {tip.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {tip.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <p className="mt-6 text-center text-xs text-slate-500 sm:text-sm">
          Proper storage helps maintain natural color vibrancy and gentle aroma
          for up to{" "}
          <span className="font-semibold text-flowpets-forest">one year</span>.
        </p>
      </div>
    </section>
  );
}

