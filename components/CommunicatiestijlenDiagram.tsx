export default function CommunicatiestijlenDiagram() {
  return (
    <svg viewBox="0 0 440 420" className="w-full max-w-[420px] mx-auto block">
      <defs>
        <clipPath id="clipPionier">
          <circle cx="220" cy="150" r="115" />
        </clipPath>
        <clipPath id="clipZorger">
          <circle cx="155" cy="255" r="115" />
        </clipPath>
      </defs>

      <text x="220" y="16" textAnchor="middle" fontSize="12" fill="#6b6b6b">
        willen
      </text>
      <text x="30" y="405" fontSize="12" fill="#6b6b6b">
        voelen
      </text>
      <text x="365" y="405" fontSize="12" fill="#6b6b6b">
        denken
      </text>

      {/* basiscirkels */}
      <circle cx="220" cy="150" r="115" fill="#1B3B6F" />
      <circle cx="155" cy="255" r="115" fill="#D7263D" />
      <circle cx="285" cy="255" r="115" fill="#2E7D52" />

      {/* paarsgewijze overlap */}
      <circle cx="155" cy="255" r="115" fill="#8B3FA0" clipPath="url(#clipPionier)" />
      <circle cx="285" cy="255" r="115" fill="#3E8FA3" clipPath="url(#clipPionier)" />
      <circle cx="285" cy="255" r="115" fill="#F2C12E" clipPath="url(#clipZorger)" />

      {/* drievoudige overlap */}
      <g clipPath="url(#clipPionier)">
        <g clipPath="url(#clipZorger)">
          <circle cx="285" cy="255" r="115" fill="#8a8a8a" />
        </g>
      </g>

      {/* labels */}
      <text x="220" y="95" textAnchor="middle" fontSize="15" fill="#fff" fontWeight={500}>
        Pionier
      </text>
      <text x="95" y="285" textAnchor="middle" fontSize="15" fill="#fff" fontWeight={500}>
        Zorger
      </text>
      <text x="345" y="285" textAnchor="middle" fontSize="15" fill="#fff" fontWeight={500}>
        Doordenker
      </text>
      <text x="175" y="178" textAnchor="middle" fontSize="13" fill="#fff" fontWeight={500}>
        Doener
      </text>
      <text x="265" y="178" textAnchor="middle" fontSize="13" fill="#fff" fontWeight={500}>
        Strateeg
      </text>
      <text x="220" y="294" textAnchor="middle" fontSize="13" fill="#5c4a12" fontWeight={500}>
        Verbinder
      </text>
      <text x="220" y="222" textAnchor="middle" fontSize="11" fill="#fff" fontWeight={500}>
        Beheerder
      </text>
    </svg>
  );
}
