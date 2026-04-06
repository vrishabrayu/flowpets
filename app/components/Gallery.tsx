"use client";

import { motion } from "framer-motion";

const images = [
  {
    title: "Organic rose petals",
    url: "https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Lotus petals",
    url: "https://images.pexels.com/photos/6620891/pexels-photo-6620891.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Premium tube packaging",
    url: "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    title: "Curated floral palette",
    url: "https://images.pexels.com/photos/4337069/pexels-photo-4337069.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];

export function Gallery() {
  return (
    <section className="bg-flowpets-beige/40 py-20 sm:py-24">
      <div className="section-wrapper">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-flowpets-forest">
            Gallery
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            A closer look at petals, cones, and packaging.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {images.map((image) => (
            <motion.figure
              key={image.title}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative h-48 overflow-hidden rounded-3xl shadow-soft"
            >
              <div
                className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${image.url})` }}
              />
              <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/50 via-black/10 to-transparent p-4 text-xs font-medium text-white opacity-90">
                {image.title}
              </figcaption>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

