import { useEffect, useRef, useState } from "react";
import { gallery } from "../data/hotelData.js";
import { IconChevron, IconClose } from "./Icons.jsx";
import HotelImage from "./HotelImage.jsx";
import Reveal from "./Reveal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function Gallery() {
  const [active, setActive] = useState(null);
  const closeRef = useRef(null);
  const touchStart = useRef(null);
  const count = gallery.length;
  const current = active === null ? null : gallery[active];

  const close = () => setActive(null);
  const show = (index) => setActive((index + count) % count);

  const isOpen = active !== null;

  useEffect(() => {
    if (!isOpen) return undefined;
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (event) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((current) => (current === null ? current : (current + 1) % count));
      }
      if (event.key === "ArrowLeft") {
        setActive((current) => (current === null ? current : (current - 1 + count) % count));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [isOpen, count]);

  return (
    <section id="gallery" className="section-space bg-white" aria-labelledby="gallery-heading">
      <Reveal className="page-wrap">
        <SectionHeading
          id="gallery-heading"
          eyebrow="Photographs"
          title="Sandstone, Rooms, and Desert"
          description="A look at the architecture, interiors, fort, and dunes that shape a stay in Jaisalmer."
        />

        <div className="gallery-grid mt-10 lg:mt-14">
          {gallery.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={`gallery-frame zoom-frame ${item.frame}`}
              onClick={() => setActive(index)}
            >
              <HotelImage
                src={item.image}
                srcSet={item.srcSet}
                sizes={
                  item.frame === "band"
                    ? "100vw"
                    : item.frame === "feature" || item.frame === "wide"
                      ? "(min-width: 1024px) 50vw, 100vw"
                      : "(min-width: 1024px) 25vw, (min-width: 480px) 50vw, 100vw"
                }
                width={item.width}
                height={item.height}
                alt={item.alt}
                position={item.position}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span className="sr-only">Open photograph: {item.alt}</span>
            </button>
          ))}
        </div>
      </Reveal>

      {current ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/92 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={close}
          onTouchStart={(event) => {
            touchStart.current = event.changedTouches[0].clientX;
          }}
          onTouchEnd={(event) => {
            if (touchStart.current === null) return;
            const delta = event.changedTouches[0].clientX - touchStart.current;
            if (delta > 50) show(active - 1);
            if (delta < -50) show(active + 1);
            touchStart.current = null;
          }}
        >
          <button
            ref={closeRef}
            type="button"
            className="absolute right-3 top-3 z-20 grid h-11 w-11 place-items-center bg-charcoal/75 text-cream sm:right-6 sm:top-6"
            onClick={close}
          >
            <span className="sr-only">Close gallery</span>
            <IconClose />
          </button>

          <button
            type="button"
            className="absolute left-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center bg-charcoal/50 text-cream sm:left-6"
            onClick={(event) => {
              event.stopPropagation();
              show(active - 1);
            }}
          >
            <span className="sr-only">Previous photograph</span>
            <IconChevron direction="left" />
          </button>

          <figure className="flex max-h-full w-full max-w-5xl flex-col items-center px-11 sm:px-16" onClick={(event) => event.stopPropagation()}>
            <img
              src={current.image}
              alt={current.alt}
              width={current.width}
              height={current.height}
              className="max-h-[68vh] w-auto max-w-full object-contain"
            />
            <figcaption className="mt-4 max-w-2xl text-center text-sm text-cream/90">
              {current.alt}
              <span className="mt-1 block text-xs tracking-wide text-gold">
                {active + 1} / {count}
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            className="absolute right-2 top-1/2 z-10 grid h-11 w-11 -translate-y-1/2 place-items-center bg-charcoal/50 text-cream sm:right-6"
            onClick={(event) => {
              event.stopPropagation();
              show(active + 1);
            }}
          >
            <span className="sr-only">Next photograph</span>
            <IconChevron direction="right" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
