import { photos } from "../data/hotelData.js";
import HotelImage from "./HotelImage.jsx";

export default function Hero() {
  const hero = photos.hero;

  return (
    <section id="home" className="relative flex min-h-[650px] items-end overflow-hidden bg-charcoal lg:h-[88vh] lg:max-h-[920px] lg:min-h-[700px]">
      <HotelImage
        src={hero.image}
        srcSet={hero.srcSet}
        mobileSrc={hero.mobile.image}
        mobileSrcSet={hero.mobile.srcSet}
        sizes="100vw"
        width={hero.width}
        height={hero.height}
        alt={hero.alt}
        position=""
        priority
        pictureClassName="absolute inset-0 block h-full w-full"
        className="hero-photo h-full w-full object-cover"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-charcoal/55 to-transparent" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent"
        aria-hidden="true"
      />

      <div className="hero-copy page-wrap relative z-10 w-full pb-12 pt-28 sm:pb-16 lg:pb-20">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.28em] text-gold">
          <span className="hidden h-px w-10 bg-gold sm:block" aria-hidden="true" />
          EXPERIENCE THE GOLDEN CITY
        </p>
        <h1 className="mt-4 max-w-3xl font-display text-[2rem] leading-[1.15] text-cream sm:text-4xl lg:text-5xl xl:text-6xl">
          Discover the Golden Charm of Jaisalmer
        </h1>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/90 sm:text-lg">
          Experience timeless Rajasthani hospitality, beautiful sandstone architecture, and the magic of the Thar Desert.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href="#rooms" className="btn btn-primary">
            Explore Our Rooms
          </a>
          <a href="#contact" className="btn btn-line">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
