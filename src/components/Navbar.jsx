import { useEffect, useState } from "react";
import { hotel, navItems } from "../data/hotelData.js";
import { IconClose, IconMenu } from "./Icons.jsx";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(() => window.scrollY > 24);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const close = () => setOpen(false);
  const solid = open || scrolled;
  const linkTone = solid ? "text-charcoal hover:text-terracotta" : "text-cream hover:text-gold";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? "border-gold/40 bg-cream" : "border-transparent bg-transparent"
      }`}
    >
      <div className="page-wrap flex h-16 items-center justify-between gap-3 lg:h-[72px]">
        <a href="#home" className="flex min-w-0 items-center gap-2.5" aria-label={hotel.name} onClick={close}>
          <span
            className={`grid h-10 w-10 shrink-0 place-items-center border border-gold font-display text-sm transition-colors duration-300 ${
              solid ? "text-olive" : "text-cream"
            }`}
            aria-hidden="true"
          >
            {hotel.monogram}
          </span>
          <span className="hidden min-w-0 min-[380px]:block">
            <span className={`block truncate font-display text-[0.95rem] leading-none transition-colors duration-300 sm:text-lg ${solid ? "text-charcoal" : "text-cream"}`}>
              {hotel.name}
            </span>
            <span className={`mt-1 hidden text-[0.65rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 sm:block ${solid ? "text-terracotta" : "text-gold"}`}>
              {hotel.location}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 ${linkTone}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a href="#contact" className="btn btn-primary px-3 sm:px-5" onClick={close}>
            <span className="sm:hidden">Book</span>
            <span className="hidden sm:inline">Book Your Stay</span>
          </a>
          <button
            type="button"
            className={`grid h-11 w-11 place-items-center transition-colors duration-300 lg:hidden ${solid ? "text-charcoal" : "text-cream"}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-gold/30 bg-cream px-5 py-6 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-gold/25">
                <a
                  href={item.href}
                  className="block py-3 font-display text-2xl text-charcoal"
                  onClick={close}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn btn-primary mt-6 w-full" onClick={close}>
            Book Your Stay
          </a>
        </nav>
      ) : null}
    </header>
  );
}
