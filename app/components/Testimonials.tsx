"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Beautiful natural aroma and vibrant color. Truly premium quality cones.",
    name: "Customer Review",
    role: "Rose Petal Cones"
  },
  {
    quote:
      "The lotus cones feel incredibly gentle and refined. You can sense the purity.",
    name: "Customer Review",
    role: "Lotus Petal Cones"
  },
  {
    quote:
      "Thoughtful tube packaging and humidity control—perfect for gifting and long-term storage.",
    name: "Customer Review",
    role: "Premium Tube Pack"
  }
];

const variants = {
  enter: { opacity: 0, x: 30 },
  center: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -30 }
};

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  const testimonial = testimonials[index];

  return (
    <section className="py-20 sm:py-24">
      <div className="section-wrapper">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-flowpets-forest">
            Testimonials
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            What customers appreciate about FLOWPETS.
          </h2>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="glass-panel relative max-w-xl rounded-3xl p-6 sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.quote}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <p className="text-4xl leading-none text-flowpets-light">“</p>
                <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                  {testimonial.quote}
                </p>
                <div className="pt-2 text-left">
                  <p className="text-sm font-semibold text-slate-900">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-slate-500">{testimonial.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index
                        ? "w-5 bg-flowpets-forest"
                        : "w-2 bg-flowpets-light/70"
                    }`}
                    aria-label={`Show testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <span>
                {index + 1} / {testimonials.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

