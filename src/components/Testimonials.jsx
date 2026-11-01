import { testimonials } from "../data/hotelData.js";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Testimonials() {
  return (
    <section className="section-space bg-cream" aria-labelledby="testimonials-heading">
      <Reveal className="page-wrap">
        <SectionHeading id="testimonials-heading" eyebrow="Guest Notes" title="How a Stay Can Feel" />
        <p className="mx-auto mt-6 max-w-2xl border-l-2 border-gold pl-4 text-sm leading-relaxed text-charcoal/75">
          Demonstration content. Replace these notes with genuine guest reviews before the website is published.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3 lg:mt-12 lg:gap-10">
          {testimonials.map((item) => (
            <blockquote key={item.id} className="border-t-2 border-gold pt-6">
              <p className="font-display text-xl leading-snug text-charcoal">“{item.quote}”</p>
              <footer className="mt-6 text-sm">
                <cite className="not-italic font-semibold text-charcoal">{item.name}</cite>
                <span className="mt-1 block text-charcoal/70">{item.place}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
