export default function PijlerIcon({ type }: { type: string }) {
  const common = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none" };
  switch (type) {
    case "fairwork":
      return (
        <svg {...common}>
          <path
            d="M12 20.5c-2-1.4-7.5-5.1-7.5-9.5A4 4 0 0 1 12 8.3 4 4 0 0 1 19.5 11c0 4.4-5.5 8.1-7.5 9.5Z"
            stroke="#1B3B6F"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M8 12.5l1.8 1.8L11.5 12l1.2 1.6L15 11"
            stroke="#1B3B6F"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "money":
      return (
        <svg {...common}>
          <path
            d="M4 19V5M4 19h16"
            stroke="#1B3B6F"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="6.5" y="13" width="2.6" height="6" rx="0.5" stroke="#1B3B6F" strokeWidth="1.6" />
          <rect x="11" y="10" width="2.6" height="9" rx="0.5" stroke="#1B3B6F" strokeWidth="1.6" />
          <rect x="15.5" y="6.5" width="2.6" height="12.5" rx="0.5" stroke="#1B3B6F" strokeWidth="1.6" />
          <path d="M14 6l3.3-1.2L18.5 8" stroke="#1B3B6F" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "human":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3" stroke="#1B3B6F" strokeWidth="1.6" />
          <path
            d="M5.5 20c0-3.6 2.9-6 6.5-6s6.5 2.4 6.5 6"
            stroke="#1B3B6F"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    case "ethical":
      return (
        <svg {...common}>
          <path
            d="M12 3.5l7 2.4v5.3c0 4.7-3 8.1-7 9.3-4-1.2-7-4.6-7-9.3V5.9l7-2.4Z"
            stroke="#1B3B6F"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M12 8l1.2 2.5 2.7.4-2 1.9.5 2.7L12 14.2l-2.4 1.3.5-2.7-2-1.9 2.7-.4L12 8Z"
            fill="#EE7E06"
            stroke="#EE7E06"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "diversity":
      return (
        <svg {...common}>
          <circle cx="8.5" cy="8.5" r="2.4" stroke="#1B3B6F" strokeWidth="1.6" />
          <circle cx="15.5" cy="8.5" r="2.4" stroke="#1B3B6F" strokeWidth="1.6" />
          <path
            d="M3.5 19c0-2.8 2.2-4.7 5-4.7s5 1.9 5 4.7"
            stroke="#1B3B6F"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M13 14.6c2.5.3 4.5 2.1 4.5 4.4"
            stroke="#1B3B6F"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
