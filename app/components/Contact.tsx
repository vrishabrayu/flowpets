"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-flowpets-beige/40 py-20 sm:py-24">
      <div className="section-wrapper grid gap-10 lg:grid-cols-[minmax(0,1.1fr),minmax(0,0.9fr)] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-flowpets-forest">
            Contact
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Enquiries, collaborations, and distribution.
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Share your details and we&apos;ll get back to you with product
            information, pricing, and availability.
          </p>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="mt-8 space-y-4"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-slate-700">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 w-full rounded-2xl border border-flowpets-light/70 bg-white/80 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-flowpets-forest focus:ring-1 focus:ring-flowpets-forest"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-2xl border border-flowpets-light/70 bg-white/80 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-flowpets-forest focus:ring-1 focus:ring-flowpets-forest"
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs font-medium text-slate-700">
                  Phone
                </label>
                <input
                  type="tel"
                  className="mt-1 w-full rounded-2xl border border-flowpets-light/70 bg-white/80 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-flowpets-forest focus:ring-1 focus:ring-flowpets-forest"
                />
              </div>
            </div>
            <div>
              <label className="text-xs font-medium text-slate-700">
                Message
              </label>
              <textarea
                required
                rows={4}
                className="mt-1 w-full rounded-2xl border border-flowpets-light/70 bg-white/80 px-3 py-2 text-sm text-slate-900 shadow-sm outline-none transition focus:border-flowpets-forest focus:ring-1 focus:ring-flowpets-forest"
              />
            </div>
            <div className="flex items-center gap-3 pt-2">
              <button
                type="submit"
                className="rounded-full bg-flowpets-forest px-6 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-emerald-800"
              >
                Send Message
              </button>
              {submitted && (
                <p className="text-xs text-flowpets-forest">
                  Thank you. We&apos;ll get back to you shortly.
                </p>
              )}
            </div>
          </motion.form>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5"
        >
          <div className="glass-panel rounded-3xl p-5 text-sm text-slate-700 sm:p-6">
            <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
              Company Details
            </h3>
            <p className="mt-2 text-sm font-medium text-flowpets-forest">
              FLOWPETS PRIVATE LIMITED
            </p>
            <p className="mt-1 text-xs text-slate-600 sm:text-sm">
              Email:{" "}
              <a
                href="mailto:info@flowpets.com"
                className="font-medium text-flowpets-forest underline-offset-2 hover:underline"
              >
                info@flowpets.com
              </a>
            </p>
            <p className="text-xs text-slate-600 sm:text-sm">
              Phone: +91 XXXXX XXXXX
            </p>
          </div>

          <div className="glass-panel h-56 rounded-3xl p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-flowpets-forest">
              Location Map
            </p>
            <div className="mt-3 flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-flowpets-light/40 via-white to-flowpets-forest/20 text-xs text-slate-600">
              Map placeholder for FLOWPETS PRIVATE LIMITED
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

