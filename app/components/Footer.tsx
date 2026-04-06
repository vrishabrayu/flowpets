export function Footer() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/80 py-8 text-xs text-slate-600">
      <div className="section-wrapper flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-flowpets-forest">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-flowpets-forest to-flowpets-light text-white text-xs font-bold">
              F
            </span>
            <span className="uppercase">FLOWPETS</span>
          </div>
          <p className="text-[11px] text-slate-500">
            Premium organic rose and lotus petal cones crafted with purity and
            sustainability in mind.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-8">
          <nav className="flex gap-4">
            <a
              href="#about"
              className="text-[11px] font-medium text-slate-600 hover:text-flowpets-forest"
            >
              About
            </a>
            <a
              href="#products"
              className="text-[11px] font-medium text-slate-600 hover:text-flowpets-forest"
            >
              Products
            </a>
            <a
              href="#process"
              className="text-[11px] font-medium text-slate-600 hover:text-flowpets-forest"
            >
              Process
            </a>
            <a
              href="#contact"
              className="text-[11px] font-medium text-slate-600 hover:text-flowpets-forest"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-medium text-slate-500">
              Follow
            </span>
            <div className="flex gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-flowpets-light/60 text-[11px] text-flowpets-forest">
                in
              </span>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-flowpets-light/60 text-[11px] text-flowpets-forest">
                ig
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 border-t border-slate-200/70 pt-4">
        <p className="section-wrapper text-[11px] text-slate-500">
          © 2026 FLOWPETS PRIVATE LIMITED. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

