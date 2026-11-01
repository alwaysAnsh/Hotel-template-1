/**
 * The Golden Haveli — site content
 * --------------------------------
 * Change this file to adapt the template for another hotel:
 * name, contact details, rooms, prices, copy, and image paths.
 *
 * WHATSAPP NUMBER
 * `contact.whatsapp` is a placeholder. Replace `91XXXXXXXXXX` with the
 * hotel's real WhatsApp number in international format, digits only.
 * Example: 919876543210
 * Do not include a plus sign, spaces, or dashes.
 *
 * CONTACT DETAILS
 * Phone, email, and address below are sample placeholders.
 *
 * PHOTOGRAPHS
 * Images in /public/images are sample photographs for this design proposal
 * (Jaisalmer, the Thar Desert, and Rajasthani interiors via Wikimedia Commons).
 * Replace them with the hotel's own photography before publishing.
 *
 * TESTIMONIALS AND PRICES
 * Guest notes and nightly rates are illustrative. Replace them with genuine
 * reviews and the hotel's actual tariffs.
 */

export const hotel = {
  name: "The Golden Haveli",
  monogram: "GH",
  location: "Jaisalmer",
  tagline: "A heritage stay in the Golden City",
  description:
    "A sandstone haveli in Jaisalmer, with quiet courtyards, comfortable rooms, and a warm welcome for travellers exploring the fort and the Thar Desert.",
  footerNote:
    "Sample photographs are for this design proposal and should be replaced with the hotel's own images. Sources include Wikimedia Commons.",
  contact: {
    // PLACEHOLDER — replace with the hotel's WhatsApp number (digits only).
    whatsapp: "91XXXXXXXXXX",
    phoneDisplay: "+91 00000 00000",
    phoneHref: "tel:+910000000000",
    email: "stay@thegoldenhaveni.example",
    address: "Near Patwon Ki Haveli, Jaisalmer, Rajasthan 345001",
  },
  socials: [
    { label: "Instagram", placeholder: true },
    { label: "Facebook", placeholder: true },
    { label: "TripAdvisor", placeholder: true },
  ],
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Experiences", href: "#experiences" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const highlights = [
  {
    title: "Traditional Rajasthani Architecture",
    text: "Carved sandstone, jharokha balconies, and courtyards that belong to Jaisalmer.",
  },
  {
    title: "Warm and Personalized Hospitality",
    text: "A small team that looks after guests with the ease of a family haveli.",
  },
  {
    title: "An Ideal Base to Explore Jaisalmer",
    text: "The fort, the old city, and the road to the dunes are all close at hand.",
  },
];

function photo(name, width, height, smallWidth, alt, position = "center") {
  return {
    image: `/images/${name}.jpg`,
    srcSet: `/images/${name}-640.jpg ${smallWidth}w, /images/${name}.jpg ${width}w`,
    width,
    height,
    alt,
    position,
  };
}

export const photos = {
  hero: {
    ...photo("hero", 1800, 1012, 720, "The golden sandstone city of Jaisalmer"),
    mobile: photo("hero-mobile", 825, 1100, 540, "The golden sandstone city of Jaisalmer"),
  },
  about: photo(
    "about",
    743,
    929,
    576,
    "Golden sandstone haveli courtyard in Jaisalmer, with carved stairs and a jharokha balcony",
  ),
  contact: photo("contact", 1600, 1065, 720, "", "center 38%"),
};

export const rooms = [
  {
    id: "heritage-deluxe",
    name: "Heritage Deluxe Room",
    description:
      "A quiet room for two, with hand-painted walls, a traditional carved bed, and the warm colours of a Rajput haveli.",
    guests: 2,
    price: 2499,
    ...photo(
      "room-deluxe",
      986,
      740,
      720,
      "Traditional Rajasthani bedroom with a carved bed, painted walls, and wooden chairs",
    ),
  },
  {
    id: "royal-suite",
    name: "Royal Heritage Suite",
    description:
      "Our most spacious suite, with stained-glass windows, frescoed walls, and a ceremonial sense of room for a special stay.",
    guests: 2,
    price: 4499,
    ...photo(
      "room-royal",
      1146,
      860,
      720,
      "Grand Rajasthani suite with stained-glass windows, frescoed walls, and a low bed",
    ),
  },
  {
    id: "family-room",
    name: "Traditional Family Room",
    description:
      "A generous family room around carved sandstone arches, with cushioned seating and a courtyard view for up to four guests.",
    guests: 4,
    price: 3499,
    ...photo(
      "room-family",
      1400,
      1050,
      720,
      "Carved sandstone arches opening onto a sunlit Jaisalmer haveli courtyard",
    ),
  },
];

export const experiences = [
  {
    id: "fort",
    index: "01",
    title: "Jaisalmer Fort",
    text: "Explore the golden sandstone fort and the lanes of havelis, temples, and viewpoints above the city.",
    ...photo("experience-fort", 1400, 1050, 720, "Jaisalmer Fort, a golden sandstone palace rising above its bastions", "center 46%"),
  },
  {
    id: "dunes",
    index: "02",
    title: "Sam Sand Dunes",
    text: "Discover the Thar Desert on a camel trail, and stay for a sunset that turns the dunes copper and gold.",
    ...photo("experience-dunes", 1400, 1050, 720, "A camel resting on the Sam sand dunes at sunset near Jaisalmer", "70% 46%"),
  },
  {
    id: "culture",
    index: "03",
    title: "Culture and Cuisine",
    text: "Experience Rajasthani folk music, traditional dishes such as dal baati, and an evening that feels unhurried.",
    ...photo("experience-culture", 1236, 927, 720, "Rajasthani folk musicians in red turbans playing a flute and hand cymbals", "center 32%"),
  },
];

export const gallery = [
  {
    id: "facade",
    frame: "feature",
    ...photo("gallery-facade", 1600, 1066, 720, "Carved jharokha balconies across a Jaisalmer sandstone facade", "center 42%"),
  },
  {
    id: "jharokha",
    frame: "tile",
    ...photo("gallery-jharokha", 1400, 929, 720, "Carved jharokha balconies on a Jaisalmer sandstone facade", "72% center"),
  },
  {
    id: "carving",
    frame: "tile",
    ...photo("gallery-carving", 1200, 1200, 720, "Sandstone carving of peacocks on a doorway at Jaisalmer Fort", "center 62%"),
  },
  {
    id: "door",
    frame: "tile",
    ...photo("gallery-door", 1500, 1004, 720, "A carved sandstone doorway and balcony in a Jaisalmer haveli courtyard", "center 40%"),
  },
  {
    id: "bastions",
    frame: "tile",
    ...photo("gallery-bastions", 1600, 981, 720, "Curved sandstone bastions of Jaisalmer Fort", "center 34%"),
  },
  {
    id: "dunes",
    frame: "band",
    ...photo("gallery-dunes", 1600, 1063, 720, "Rippled sand dunes in the Thar Desert at golden hour", "center 70%"),
  },
  {
    id: "city",
    frame: "wide",
    ...photo("gallery-city", 1400, 927, 720, "The golden sandstone city of Jaisalmer seen from the fort", "center"),
  },
  {
    id: "thali",
    frame: "wide",
    ...photo("gallery-thali", 1400, 1050, 720, "A traditional Rajasthani thali served in small metal bowls", "center"),
  },
];

export const features = [
  {
    id: "ambience",
    title: "Traditional Heritage Ambience",
    text: "Sandstone walls, carved balconies, and courtyards that feel unmistakably of Jaisalmer.",
    icon: "arch",
  },
  {
    id: "comfort",
    title: "Comfortable Accommodation",
    text: "Restful rooms with practical comforts for couples, families, and longer stays.",
    icon: "bed",
  },
  {
    id: "hospitality",
    title: "Friendly Local Hospitality",
    text: "Hosts who know the city and take time with every arrival.",
    icon: "hospitality",
  },
  {
    id: "location",
    title: "Convenient Location",
    text: "In the old city, with the fort and the road to the dunes within easy reach.",
    icon: "pin",
  },
];

export const testimonials = [
  {
    id: "meera",
    quote:
      "The sandstone courtyard felt calm the moment we arrived. The family looked after us as if we were staying in their own haveli.",
    name: "Meera Kapoor",
    place: "Mumbai",
  },
  {
    id: "arjun",
    quote:
      "Warm hosts, a comfortable room, and an easy walk into the old city. The evening light over Jaisalmer was the best part of our trip.",
    name: "Arjun Singh",
    place: "Jaipur",
  },
  {
    id: "elena",
    quote:
      "Beautiful architecture and genuine hospitality. They helped us plan the desert sunset without making the stay feel rushed.",
    name: "Elena Rossi",
    place: "Milan",
  },
];

export const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8];

export function formatInr(amount) {
  return `₹${Number(amount).toLocaleString("en-IN")}`;
}

export function guestLabel(count) {
  return `${count} guest${count === 1 ? "" : "s"}`;
}
