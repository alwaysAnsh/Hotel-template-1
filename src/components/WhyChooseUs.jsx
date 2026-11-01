import { features } from "../data/hotelData.js";
import { FeatureIcon } from "./Icons.jsx";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function WhyChooseUs() {
  return (
    <section className="section-space bg-olive" aria-labelledby="why-heading">
      <Reveal className="page-wrap">
        <SectionHeading
          id="why-heading"
          eyebrow="The Stay"
          title="Why Stay With Us"
          light
          description="The things guests notice first: the setting, the rooms, the people, and where the haveli sits in the city."
        />
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {features.map((feature) => (
            <article key={feature.id}>
              <span className="grid h-12 w-12 place-items-center border border-gold text-gold">
                <FeatureIcon name={feature.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-4 font-display text-xl leading-snug text-cream">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/80 sm:text-base">{feature.text}</p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
