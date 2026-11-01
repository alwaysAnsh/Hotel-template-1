import { useMemo, useState } from "react";
import { guestOptions, hotel, photos } from "../data/hotelData.js";
import { generalEnquiryMessage, openWhatsApp, stayEnquiryMessage, whatsAppUrl } from "../lib/whatsapp.js";
import HotelImage from "./HotelImage.jsx";
import Reveal from "./Reveal.jsx";
import { IconMail, IconPhone, IconPin, IconWhatsApp } from "./Icons.jsx";

const emptyForm = {
  name: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  guests: "",
};

function todayISO() {
  const now = new Date();
  const local = new Date(now.getTime() - now.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0, 10);
}

function formatDisplayDate(value) {
  if (!value) return "";
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function validate(form) {
  const errors = {};
  const name = form.name.trim();
  const phoneDigits = form.phone.replace(/\D/g, "");

  if (name.length < 2) errors.name = "Please enter your name.";
  if (phoneDigits.length < 8 || phoneDigits.length > 15) {
    errors.phone = "Please enter a valid phone number.";
  }
  if (!form.checkIn) errors.checkIn = "Please select a check-in date.";
  if (!form.checkOut) errors.checkOut = "Please select a check-out date.";
  if (form.checkIn && form.checkOut && form.checkOut <= form.checkIn) {
    errors.checkOut = "Check-out must be after check-in.";
  }
  if (!form.guests) errors.guests = "Please select the number of guests.";

  return errors;
}

function Field({ id, label, error, children }) {
  return (
    <div className={`min-w-0 ${id === "guests" ? "md:col-span-2" : ""}`}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-charcoal">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-terracotta">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [fallbackUrl, setFallbackUrl] = useState("");
  const [sent, setSent] = useState(false);
  const today = useMemo(() => todayISO(), []);

  const update = (key) => (event) => {
    const value = event.target.value;
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setSent(false);
    setFallbackUrl("");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    setSent(false);
    setFallbackUrl("");

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = ["name", "phone", "checkIn", "checkOut", "guests"].find((key) => nextErrors[key]);
      document.getElementById(firstInvalid)?.focus();
      return;
    }

    const guests = Number(form.guests);
    const message = stayEnquiryMessage({
      name: form.name.trim(),
      phone: form.phone.trim(),
      checkIn: formatDisplayDate(form.checkIn),
      checkOut: formatDisplayDate(form.checkOut),
      guests: `${guests} guest${guests === 1 ? "" : "s"}`,
    });
    const result = openWhatsApp(message);
    setSent(true);
    if (!result.opened) setFallbackUrl(result.url);
  };

  const inputClass = (invalid) => `field ${invalid ? "border-terracotta" : "border-charcoal/20"}`;

  const backdrop = photos.contact;

  return (
    <section id="contact" className="relative overflow-hidden bg-olive" aria-labelledby="contact-heading">
      <HotelImage
        src={backdrop.image}
        srcSet={backdrop.srcSet}
        sizes="100vw"
        width={backdrop.width}
        height={backdrop.height}
        alt={backdrop.alt}
        position={backdrop.position}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-charcoal/55 via-olive/78 to-olive/88 lg:bg-gradient-to-r lg:from-olive/88 lg:via-olive/74 lg:to-charcoal/62"
        aria-hidden="true"
      />

      <Reveal className="page-wrap section-space relative z-10 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="text-cream">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-gold">Plan Your Visit</p>
          <h2 id="contact-heading" className="mt-3 font-display text-[1.65rem] leading-tight sm:text-3xl lg:text-[2.5rem]">
            Your Golden City Experience Awaits
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/90 sm:text-[1.0625rem]">
            Planning your visit to Jaisalmer? Get in touch with us to enquire about rooms and plan your stay.
          </p>

          <ul className="mt-8 space-y-4 text-sm sm:text-base">
            <li>
              <a href={hotel.contact.phoneHref} className="inline-flex min-h-11 items-center gap-3">
                <IconPhone className="shrink-0 text-gold" />
                <span>{hotel.contact.phoneDisplay}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${hotel.contact.email}`} className="inline-flex min-h-11 items-center gap-3">
                <IconMail className="shrink-0 text-gold" />
                <span className="break-words">{hotel.contact.email}</span>
              </a>
            </li>
            <li className="flex min-w-0 items-start gap-3">
              <IconPin className="mt-0.5 shrink-0 text-gold" />
              <span className="min-w-0">{hotel.contact.address}</span>
            </li>
          </ul>

          <a
            href={whatsAppUrl(generalEnquiryMessage())}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary mt-8"
          >
            <IconWhatsApp className="mr-2 h-5 w-5" />
            Enquire on WhatsApp
          </a>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/75">
            Phone, email, address, and the WhatsApp number are placeholders. Update them in the site settings before a live launch.
          </p>
        </div>

        <form
          id="contact-form"
          className="bg-cream p-5 sm:p-8"
          onSubmit={onSubmit}
          noValidate
        >
          <h3 className="font-display text-2xl text-charcoal">Send an Enquiry</h3>
          <p className="mt-2 text-sm leading-relaxed text-charcoal/75">
            This form opens WhatsApp with your details. It does not confirm a reservation.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <Field id="name" label="Guest name" error={errors.name}>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={update("name")}
                className={inputClass(errors.name)}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "name-error" : undefined}
                placeholder="Your name"
              />
            </Field>

            <Field id="phone" label="Phone number" error={errors.phone}>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                value={form.phone}
                onChange={update("phone")}
                className={inputClass(errors.phone)}
                aria-invalid={Boolean(errors.phone)}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                placeholder="+91 98XXX XXXXX"
              />
            </Field>

            <Field id="checkIn" label="Check-in date" error={errors.checkIn}>
              <input
                id="checkIn"
                name="checkIn"
                type="date"
                min={today}
                value={form.checkIn}
                onChange={update("checkIn")}
                className={inputClass(errors.checkIn)}
                aria-invalid={Boolean(errors.checkIn)}
                aria-describedby={errors.checkIn ? "checkIn-error" : undefined}
              />
            </Field>

            <Field id="checkOut" label="Check-out date" error={errors.checkOut}>
              <input
                id="checkOut"
                name="checkOut"
                type="date"
                min={form.checkIn || today}
                value={form.checkOut}
                onChange={update("checkOut")}
                className={inputClass(errors.checkOut)}
                aria-invalid={Boolean(errors.checkOut)}
                aria-describedby={errors.checkOut ? "checkOut-error" : undefined}
              />
            </Field>

            <Field id="guests" label="Number of guests" error={errors.guests}>
              <select
                id="guests"
                name="guests"
                value={form.guests}
                onChange={update("guests")}
                className={inputClass(errors.guests)}
                aria-invalid={Boolean(errors.guests)}
                aria-describedby={errors.guests ? "guests-error" : undefined}
              >
                <option value="">Select guests</option>
                {guestOptions.map((count) => (
                  <option key={count} value={count}>
                    {count} {count === 1 ? "guest" : "guests"}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <button type="submit" className="btn btn-olive mt-6 w-full">
            Submit Enquiry
          </button>

          {sent ? (
            <p className="mt-4 text-sm leading-relaxed text-olive" role="status">
              Your enquiry is ready in WhatsApp. Send the message there to reach the hotel. This website does not confirm a booking.
            </p>
          ) : null}
          {fallbackUrl ? (
            <a href={fallbackUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex text-sm font-semibold text-terracotta underline">
              Open WhatsApp enquiry
            </a>
          ) : null}
        </form>
      </Reveal>
    </section>
  );
}
