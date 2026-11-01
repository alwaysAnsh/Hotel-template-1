import { formatInr, guestLabel, rooms } from "../data/hotelData.js";
import { roomEnquiryMessage, whatsAppUrl } from "../lib/whatsapp.js";
import HotelImage from "./HotelImage.jsx";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

const roomSizes = "(min-width: 1024px) 360px, (min-width: 768px) 46vw, 100vw";

export default function Rooms() {
  return (
    <section id="rooms" className="section-space bg-white" aria-labelledby="rooms-heading">
      <Reveal className="page-wrap">
        <SectionHeading
          id="rooms-heading"
          eyebrow="Accommodation"
          title="Comfort Meets Heritage"
          description="Three sample room categories for this design proposal. Prices are illustrative nightly rates and are easy to change."
        />

        <div className="mt-10 grid items-stretch gap-8 md:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {rooms.map((room) => (
            <article key={room.id} className="flex h-full flex-col border border-charcoal/10 bg-cream">
              <div className="zoom-frame">
                <HotelImage
                  src={room.image}
                  srcSet={room.srcSet}
                  sizes={roomSizes}
                  width={room.width}
                  height={room.height}
                  alt={room.alt}
                  position={room.position}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-display text-2xl leading-tight text-charcoal">{room.name}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal/80 sm:text-base">{room.description}</p>
                <div className="mt-5">
                  <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-sm text-charcoal/75">
                    <span>{guestLabel(room.guests)}</span>
                    <span className="text-gold" aria-hidden="true">
                      ·
                    </span>
                    <span>
                      <span className="font-semibold text-charcoal">{formatInr(room.price)}</span>
                      <span> / night</span>
                    </span>
                  </p>
                  <a
                    href={whatsAppUrl(roomEnquiryMessage(room.name))}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary mt-5 w-full"
                  >
                    Enquire Now
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
