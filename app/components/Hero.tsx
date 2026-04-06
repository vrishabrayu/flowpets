"use client";

import { motion } from "framer-motion";

const floatingPetal = {
  initial: { y: 0, opacity: 0.4 },
  animate: {
    y: -20,
    opacity: 1,
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(165,214,167,0.3),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(27,94,32,0.22),_transparent_55%)]" />
      <div className="section-wrapper relative grid gap-12 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center rounded-full bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-flowpets-forest shadow-sm backdrop-blur"
          >
            Premium Organic Petal Cones
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Premium Organic{" "}
            <span className="text-flowpets-forest">
              Rose &amp; Lotus Petal Cones
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="max-w-xl text-base text-slate-600 sm:text-lg"
          >
            Crafted from the finest organic petals to deliver a pure, natural,
            and aromatic experience. Thoughtfully designed for discerning
            customers who value quality, sustainability, and authenticity.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#products"
              className="rounded-full bg-flowpets-forest px-8 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-emerald-800"
            >
              Explore Products
            </a>
            <a
              href="#contact"
              className="rounded-full border border-flowpets-forest/40 bg-white/70 px-8 py-3 text-sm font-semibold text-flowpets-forest shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-flowpets-forest"
            >
              Contact Us
            </a>
          </motion.div>
        </div>

        <div className="relative">
          <div className="glass-panel relative mx-auto max-w-md rounded-3xl p-6 sm:p-8">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-flowpets-light/40 via-transparent to-flowpets-forest/20 mix-blend-multiply" />
            <div className="relative space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-flowpets-forest/80">
                FLOWPETS PRIVATE LIMITED
              </p>
              <p className="text-lg font-semibold text-slate-900">
                Organic petal cones, cured to perfection for{" "}
                <span className="text-flowpets-forest">
                  vibrant color and soothing aroma.
                </span>
              </p>
              <ul className="grid grid-cols-2 gap-3 text-xs text-slate-700">
                <li className="rounded-2xl bg-white/70 p-3 shadow-sm">
                  <p className="font-semibold text-flowpets-forest">
                    Rose Petal Cones
                  </p>
                  <p className="mt-1 text-[11px]">
                    Deep natural hues and a subtly sweet floral fragrance.
                  </p>
                </li>
                <li className="rounded-2xl bg-white/70 p-3 shadow-sm">
                  <p className="font-semibold text-flowpets-forest">
                    Lotus Petal Cones
                  </p>
                  <p className="mt-1 text-[11px]">
                    Soft, serene aroma with a delicate pastel color palette.
                  </p>
                </li>
              </ul>
              <p className="text-[11px] text-slate-500">
                Protected in premium tubes with humidity control to preserve
                freshness for up to one year.
              </p>
            </div>
          </div>

          <motion.div
            variants={floatingPetal}
            initial="initial"
            animate="animate"
            className="pointer-events-none absolute -left-8 top-8 hidden h-16 w-16 rounded-full bg-gradient-to-tr from-rose-200 to-rose-400 opacity-70 shadow-lg sm:block"
          />
          <motion.div
            variants={floatingPetal}
            initial="initial"
            animate="animate"
            className="pointer-events-none absolute -right-10 bottom-0 hidden h-20 w-20 rounded-[2.5rem] bg-gradient-to-tr from-sky-100 via-flowpets-light to-emerald-400 opacity-80 shadow-lg sm:block"
          />
        </div>
      </div>
    </section>
  );
}

