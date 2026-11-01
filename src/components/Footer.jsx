import { hotel, navItems } from "../data/hotelData.js";
import { IconMail, IconPhone, IconPin } from "./Icons.jsx";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-olive text-cream">
      <div className="page-wrap grid gap-10 py-14 sm:py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="min-w-0">
          <a href="#home" className="inline-flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center border border-gold font-display text-sm text-gold">
              {hotel.monogram}
            </span>
            <span className="font-display text-xl">{hotel.name}</span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/80">{hotel.description}</p>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-cream">Explore</h2>
          <ul className="mt-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-flex min-h-11 items-center text-sm text-cream/90 hover:text-gold lg:min-h-0 lg:py-1.5">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-cream">Contact</h2>
          <ul className="mt-4 space-y-3 text-sm text-cream/90">
            <li className="flex min-w-0 items-start gap-2">
              <IconPin className="mt-0.5 shrink-0 text-gold" />
              <span className="min-w-0">{hotel.contact.address}</span>
            </li>
            <li>
              <a href={hotel.contact.phoneHref} className="inline-flex min-h-11 items-center gap-2 hover:text-gold">
                <IconPhone className="text-gold" />
                {hotel.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${hotel.contact.email}`} className="inline-flex min-h-11 items-center gap-2 hover:text-gold">
                <IconMail className="shrink-0 text-gold" />
                {hotel.contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-cream">Social</h2>
          <ul className="mt-4 space-y-2">
            {hotel.socials.map((item) => (
              <li key={item.label}>
                <a
                  href="#contact"
                  className="inline-flex min-h-11 items-center text-sm text-cream/90 hover:text-gold lg:min-h-0 lg:py-1.5"
                  title={`${item.label} placeholder. Add the hotel's profile link in hotelData.js.`}
                  onClick={(event) => event.preventDefault()}
                >
                  {item.label}
                  <span className="ml-2 text-xs uppercase tracking-wider text-cream/60">Placeholder</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/15">
        <div className="page-wrap flex flex-col gap-2 py-5 text-xs leading-relaxed text-cream/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {hotel.name}. All rights reserved.
          </p>
          <p className="max-w-xl sm:text-right">{hotel.footerNote}</p>
        </div>
      </div>
    </footer>
  );
}
