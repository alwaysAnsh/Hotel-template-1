import { hotel } from "../data/hotelData.js";

export function whatsAppUrl(message) {
  const number = hotel.contact.whatsapp;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function roomEnquiryMessage(roomName) {
  return `Hello, I would like to enquire about the ${roomName} at ${hotel.name}, Jaisalmer.`;
}

export function stayEnquiryMessage({ name, phone, checkIn, checkOut, guests }) {
  return [
    `Hello, I would like to enquire about a stay at ${hotel.name}, Jaisalmer.`,
    "",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Check-in: ${checkIn}`,
    `Check-out: ${checkOut}`,
    `Guests: ${guests}`,
  ].join("\n");
}

export function generalEnquiryMessage() {
  return `Hello, I would like to enquire about a stay at ${hotel.name}, Jaisalmer.`;
}

/**
 * Opens WhatsApp with a prefilled message.
 * Returns the URL so the form can offer a link if the browser blocks the popup.
 */
export function openWhatsApp(message) {
  const url = whatsAppUrl(message);
  const popup = window.open(url, "_blank", "noopener,noreferrer");
  return { url, opened: Boolean(popup) };
}
