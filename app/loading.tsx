"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-flowpets-light/30 via-white to-flowpets-beige/40">
      <div className="glass-panel flex flex-col items-center rounded-3xl px-8 py-6 text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1.6,
            ease: "linear"
          }}
          className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-flowpets-forest to-flowpets-light text-white shadow-soft"
        >
          <span className="text-sm font-semibold">F</span>
        </motion.div>
        <p className="text-xs font-medium tracking-[0.3em] text-flowpets-forest">
          FLOWPETS
        </p>
        <p className="mt-1 text-[11px] text-slate-500">
          Preparing your organic petal experience...
        </p>
      </div>
    </div>
  );
}

