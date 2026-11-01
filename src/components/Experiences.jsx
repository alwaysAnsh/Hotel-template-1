import { experiences } from "../data/hotelData.js";
import HotelImage from "./HotelImage.jsx";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const experienceSizes = "(min-width: 1024px) 360px, (min-width: 768px) 46vw, 100vw";

export default function Experiences() {
  return (
    <section id="experiences" className="section-space bg-cream" aria-labelledby="experiences-heading">
      <Reveal className="page-wrap">
        <SectionHeading
          id="experiences-heading"
          eyebrow="Around Jaisalmer"
          title="Jaisalmer Experiences"
          description="A few of the experiences guests enjoy during a stay. This is a guide, not a tour booking system."
        />

        <div className="mt-10 grid items-stretch gap-8 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {experiences.map((item) => (
            <article key={item.id} className="flex h-full flex-col bg-white">
              <div className="zoom-frame">
                <HotelImage
                  src={item.image}
                  srcSet={item.srcSet}
                  sizes={experienceSizes}
                  width={item.width}
                  height={item.height}
                  alt={item.alt}
                  position={item.position}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col border border-t-0 border-charcoal/10 p-5 sm:p-6">
                <p className="text-xs font-semibold tracking-[0.22em] text-terracotta">{item.index}</p>
                <h3 className="mt-2 font-display text-2xl text-charcoal">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-charcoal/80 sm:text-base">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
