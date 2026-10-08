// Rounded-square badge for an organisation: its logo when there is one, otherwise initials on a brand colour.
export default function OrgBadge({ logo, logoAlt, initials, color }) {
  return (
    <div
      className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line"
      style={{ backgroundColor: color }}
    >
      {logo ? (
        <img src={logo} alt={logoAlt} loading="lazy" className="h-full w-full object-cover" />
      ) : (
        <span className="font-mono text-xs font-semibold text-white" aria-hidden="true">
          {initials}
        </span>
      )}
    </div>
  );
}
