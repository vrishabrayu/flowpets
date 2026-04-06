"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (href: string) => {
    const targetId = href.replace("#", "");
    const el = document.getElementById(targetId);
    if (el) {
      const yOffset = -80;
      const y =
        el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-soft"
          : "bg-white/40 backdrop-blur-md"
      }`}
    >
      <nav className="section-wrapper flex items-center justify-between py-3">
        <Link
          href="#home"
          className="flex items-center gap-2 text-lg font-semibold tracking-wide text-flowpets-forest"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-flowpets-forest to-flowpets-light text-white font-bold">
            F
          </span>
          <span className="uppercase">FLOWPETS</span>
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
          {navItems.map((item) => (
            <button
              key={item.href}
              type="button"
              onClick={() => handleScroll(item.href)}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-flowpets-forest"
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleScroll("#contact")}
            className="rounded-full bg-flowpets-forest px-5 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-emerald-800"
          >
            Buy Now
          </button>
        </div>
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => handleScroll("#contact")}
            className="rounded-full bg-flowpets-forest px-4 py-1.5 text-xs font-semibold text-white shadow-soft transition hover:bg-emerald-800"
          >
            Buy Now
          </button>
        </div>
      </nav>
    </motion.header>
  );
}

