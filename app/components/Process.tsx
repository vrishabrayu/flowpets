"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Petal Selection",
    number: "01",
    description:
      "Finest organic rose and lotus petals are hand-selected for color, aroma, and integrity."
  },
  {
    title: "Natural Curing",
    number: "02",
    description:
      "Petals are gently cured using a controlled natural process to preserve fragrance and hue."
  },
  {
    title: "Cone Crafting",
    number: "03",
    description:
      "Cured petals are carefully shaped into premium cones with consistent structure and density."
  },
  {
    title: "Humidity Protection Packaging",
    number: "04",
    description:
      "Cones are stored in tubes with a 2-way humidity exchange pack and cork seal for long-term protection."
  }
];

export function Process() {
  return (
    <section id="process" className="bg-flowpets-beige/40 py-20 sm:py-24">
      <div className="section-wrapper">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-flowpets-forest">
            Our Natural Process
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            From petal to premium cone in four thoughtful steps.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] md:items-start">
          <motion.ol
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-4 border-l border-flowpets-light/60 pl-4 sm:pl-6"
          >
            {steps.map((step, index) => (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="relative pl-6"
              >
                <div className="absolute -left-[29px] top-1 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-soft ring-2 ring-flowpets-light">
                  <span className="text-xs font-semibold text-flowpets-forest">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </motion.ol>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass-panel rounded-3xl p-6 sm:p-8"
          >
            <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
              Purposefully minimal, naturally effective.
            </h3>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              Each stage in the FLOWPETS process is intentionally designed to
              protect what matters most: the natural essence of the petal. We
              avoid harsh treatments and synthetic additives, focusing instead
              on gentle handling, gradual curing, and intelligent packaging.
            </p>
            <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
              The result is a petal cone that feels as close to nature as
              possible—visibly vibrant, aromatically rich, and beautifully
              preserved from the moment it is crafted to the moment it is
              enjoyed.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

