"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-wrapper grid gap-12 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="glass-panel relative h-72 w-full overflow-hidden rounded-3xl sm:h-80">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(244,143,177,0.65),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(165,214,167,0.9),_transparent_60%)]" />
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center mix-blend-soft-light opacity-70" />
          </div>
          <div className="pointer-events-none absolute -left-6 -top-6 h-16 w-16 rounded-3xl bg-flowpets-light/70 blur-2xl" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-20 w-32 rounded-[2.5rem] bg-flowpets-forest/40 blur-2xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-flowpets-forest">
            About Flowpets
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Premium organic rose &amp; lotus petal cones, crafted with care.
          </h2>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            FLOWPETS PRIVATE LIMITED manufactures premium quality organic rose
            and lotus petal cones. We carefully select the finest organic
            petals and naturally cure them to preserve their intrinsic color,
            character, and aroma.
          </p>
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            Every cone is meticulously crafted to deliver vibrant natural color,
            a soothing floral fragrance, and long-lasting freshness. No
            chemicals, fillers, or artificial enhancements—only authentic
            petal-based purity designed for mindful, eco-conscious customers.
          </p>
          <div className="grid gap-4 text-sm sm:grid-cols-3">
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-flowpets-forest/80">
                100% Petal Based
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Nothing but carefully curated rose and lotus petals.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-flowpets-forest/80">
                Naturally Cured
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Gentle curing process to retain aroma and color.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wide text-flowpets-forest/80">
                Sustainably Crafted
              </p>
              <p className="mt-1 text-xs text-slate-600">
                Crafted with a focus on purity, sustainability, and quality.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

