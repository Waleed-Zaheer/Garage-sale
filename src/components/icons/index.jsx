/**
 * Lightweight SVG icon set for A&M Auto Repairs.
 * All icons accept a `className` prop for sizing / colour.
 */

const base = "fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]";

export const IconWrench = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

export const IconDroplets = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`}>
    <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
    <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
  </svg>
);

export const IconCoffee = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`}>
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" x2="6" y1="2" y2="4" />
    <line x1="10" x2="10" y1="2" y2="4" />
    <line x1="14" x2="14" y1="2" y2="4" />
  </svg>
);

export const IconCar = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`}>
    <path d="M19 17H5a2 2 0 0 1-2-2V9l2-4h14l2 4v6a2 2 0 0 1-2 2Z" />
    <circle cx="7.5" cy="17" r="1.5" />
    <circle cx="16.5" cy="17" r="1.5" />
    <path d="M5 9h14" />
  </svg>
);

export const IconMapPin = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const IconPhone = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.92 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export const IconClock = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export const IconCheck = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
    strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export const IconStar = ({ filled = false, className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"}
    stroke="currentColor" strokeWidth="2" className={className}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const IconMenu = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`}>
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6"  y2="6"  />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

export const IconX = ({ className = "w-6 h-6" }) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

export const IconSun = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
  </svg>
);

export const IconMoon = ({ className = "w-5 h-5" }) => (
  <svg viewBox="0 0 24 24" className={`${base} ${className}`}>
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);
