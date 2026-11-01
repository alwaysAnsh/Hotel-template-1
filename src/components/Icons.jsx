export function IconMenu({ className = "h-6 w-6" }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconClose({ className = "h-6 w-6" }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconArch({ className = "h-6 w-6" }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 20V11a8 8 0 0 1 16 0v9" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 20v-5a3 3 0 0 1 6 0v5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconBed({ className = "h-6 w-6" }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 18V8M3 14h18v4M7 14V11h6a4 4 0 0 1 4 3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function IconHospitality({ className = "h-6 w-6" }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 20s-7-4.2-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.8-7 9-7 9Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPin({ className = "h-6 w-6" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconPhone({ className = "h-5 w-5" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M8 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5L17 13l4 1.5V18a2 2 0 0 1-2.2 2A16 16 0 0 1 4 7.2 2 2 0 0 1 6 5h2Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function IconMail({ className = "h-5 w-5" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconWhatsApp({ className = "h-5 w-5" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.15 6.4 2.15 11.83c0 1.74.46 3.44 1.34 4.94L2 22l5.39-1.4a10 10 0 0 0 4.65 1.18h.01c5.46 0 9.89-4.4 9.89-9.84C21.94 6.4 17.5 2 12.04 2Zm5.76 14.1c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.81-.11-.41-.14-.95-.31-1.64-.61-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.16-1.54-1.16-2.94s.73-2.08 1-2.37c.24-.27.64-.39 1.02-.39h.37c.3 0 .45.02.65.5.24.58.82 2 .89 2.15.08.14.12.32.02.51-.1.19-.14.31-.28.48-.14.16-.3.37-.42.49-.14.14-.29.29-.12.56.16.27.73 1.2 1.57 1.95 1.08.96 1.98 1.26 2.27 1.4.29.14.46.12.63-.07.17-.19.73-.85.92-1.14.2-.29.39-.24.65-.14.27.1 1.68.79 1.97.93.29.15.48.21.55.33.07.12.07.69-.17 1.37Z" />
    </svg>
  );
}

export function IconChevron({ className = "h-5 w-5", direction = "left" }) {
  const rotate = direction === "right" ? "rotate-180" : "";
  return (
    <svg className={`${className} ${rotate}`} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14.5 6.5 8.5 12l6 5.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

const featureIcons = {
  arch: IconArch,
  bed: IconBed,
  hospitality: IconHospitality,
  pin: IconPin,
};

export function FeatureIcon({ name, className }) {
  const Icon = featureIcons[name] ?? IconArch;
  return <Icon className={className} />;
}

export function IconArrowUp({ className = "h-5 w-5" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 18V7M7.5 11.5 12 7l4.5 4.5" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}
