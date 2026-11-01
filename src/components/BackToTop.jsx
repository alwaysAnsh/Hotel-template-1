import { useEffect, useState } from "react";
import { IconArrowUp } from "./Icons.jsx";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#home"
      className={`fixed bottom-5 right-4 z-30 grid h-11 w-11 place-items-center border border-gold/80 bg-olive text-cream transition-opacity duration-300 hover:bg-charcoal sm:bottom-6 sm:right-6 ${
        show ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-label="Back to top"
      tabIndex={show ? 0 : -1}
    >
      <IconArrowUp />
    </a>
  );
}
