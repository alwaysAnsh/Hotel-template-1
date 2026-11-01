import { highlights, photos } from "../data/hotelData.js";
import HotelImage from "./HotelImage.jsx";
import Reveal from "./Reveal.jsx";

export default function About() {
  const about = photos.about;

  return (
    <section id="about" className="section-space bg-cream" aria-labelledby="about-heading">
      <Reveal className="page-wrap grid items-center gap-10 md:grid-cols-2 md:gap-12 lg:gap-16">
        <div className="relative mx-auto w-full max-w-[520px] px-3 pb-3 pt-3 sm:px-4 sm:pb-4 sm:pt-4 md:max-w-none">
          <span className="absolute left-0 top-0 h-12 w-12 border-l border-t border-gold" aria-hidden="true" />
          <span className="absolute bottom-0 right-0 h-12 w-12 border-b border-r border-terracotta" aria-hidden="true" />
          <HotelImage
            src={about.image}
            srcSet={about.srcSet}
            sizes="(min-width: 768px) 42vw, min(520px, 100vw)"
            width={about.width}
            height={about.height}
            alt={about.alt}
            position={about.position}
            className="relative aspect-[4/5] w-full object-cover"
          />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-olive">Welcome</p>
          <h2 id="about-heading" className="mt-3 font-display text-[1.65rem] leading-tight text-charcoal sm:text-3xl lg:text-[2.5rem]">
            A Stay Rooted in Rajasthan
          </h2>
          <p className="mt-5 text-base leading-relaxed text-charcoal/80 sm:text-[1.0625rem]">
            Discover the warmth of traditional Rajasthani hospitality in the heart of Jaisalmer. From golden sandstone architecture to thoughtfully designed spaces, every corner invites you to slow down and experience the charm of the desert.
          </p>
          <ul className="mt-8 space-y-5">
            {highlights.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-gold" aria-hidden="true" />
                <span>
                  <span className="block font-semibold text-charcoal">{item.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-charcoal/75 sm:text-base">{item.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
