"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "Rose Petal Cones",
    tag: "Rich floral warmth",
    description:
      "Crafted from handpicked organic rose petals for a deep, naturally sweet floral aroma.",
    imageUrl:
      "https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    name: "Lotus Petal Cones",
    tag: "Soft & serene",
    description:
      "Delicate lotus petals naturally cured to preserve their calming, subtle fragrance.",
    imageUrl:
      "https://images.pexels.com/photos/6620891/pexels-photo-6620891.jpeg?auto=compress&cs=tinysrgb&w=1200"
  },
  {
    name: "Premium Tube Pack",
    tag: "Gift ready",
    description:
      "Elegant tube packaging with humidity control and cork seal—perfect for gifting.",
    imageUrl:
      "https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=1200"
  }
];

export function Products() {
  return (
    <section id="products" className="py-20 sm:py-24">
      <div className="section-wrapper">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-flowpets-forest">
            Product Range
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            A curated collection of premium organic petal cones.
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mt-10 grid gap-8 md:grid-cols-3"
        >
          {products.map((product) => (
            <motion.article
              key={product.name}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="glass-panel flex h-full flex-col overflow-hidden rounded-3xl"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 hover:scale-110"
                  style={{ backgroundImage: `url(${product.imageUrl})` }}
                />
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                    {product.name}
                  </h3>
                  <span className="rounded-full bg-flowpets-light/40 px-3 py-1 text-[11px] font-medium text-flowpets-forest">
                    {product.tag}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {product.description}
                </p>
                <div className="mt-2 flex gap-2">
                  <button className="rounded-full bg-flowpets-forest px-4 py-2 text-xs font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-emerald-800">
                    Enquire
                  </button>
                  <button className="rounded-full border border-flowpets-forest/40 bg-white/70 px-4 py-2 text-xs font-semibold text-flowpets-forest shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:border-flowpets-forest">
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

