/**
 * Custom 24×24 pillar icons — 1.5px stroke, rounded caps, no fill.
 * Style ref: Phosphor "regular" / Heroicons "outline".
 */

interface IconProps {
  size?: number;
  color?: string;
}

/**
 * BUILD — </> code brackets
 * Three stroke elements optically balanced: < bracket · / slash · > bracket
 */
export function BuildIcon({ size = 24, color = "#16A34A" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* < left bracket */}
      <polyline
        points="7.5,6 3.5,12 7.5,18"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* / forward-slash */}
      <line
        x1="10.5" y1="18"
        x2="13.5" y2="6"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* > right bracket */}
      <polyline
        points="16.5,6 20.5,12 16.5,18"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * LAUNCH — diagonal arrow breaking through a horizontal barrier
 * Arrow shaft goes SW→NE; barrier splits left/right at the crossing point.
 */
export function LaunchIcon({ size = 24, color = "#16A34A" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Diagonal shaft (SW → NE) */}
      <line
        x1="5"  y1="19"
        x2="19" y2="5"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Arrowhead — L-corner anchored at NE tip */}
      <polyline
        points="13,5 19,5 19,11"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Horizontal barrier — left segment (ends before crossing at x≈10) */}
      <line
        x1="2"   y1="14"
        x2="7.5" y2="14"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      {/* Horizontal barrier — right segment (starts after crossing) */}
      <line
        x1="12.5" y1="14"
        x2="22"   y2="14"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * LEAD — 3-node neural network cluster (triangular arrangement)
 * Nodes: A(5,17) bottom-left · B(12,5) top-center · C(20,13) right
 * Lines are trimmed to node edges (r=2) so circles read as clean nodes.
 */
export function LeadIcon({ size = 24, color = "#16A34A" }: IconProps) {
  /*
   * Line endpoint math (r = 2 per node):
   *   A→B dir (7,−12)/13.89 → start (6.0, 15.3), end (11.0, 6.7)
   *   A→C dir (15,−4)/15.52 → start (6.9, 16.5), end (18.1, 13.5)
   *   B→C dir (8, 8)/11.31  → start (13.4, 6.4), end (18.6, 11.6)
   */
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Edges — drawn first so nodes render on top */}
      <line x1="6.0"  y1="15.3" x2="11.0" y2="6.7"  stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="6.9"  y1="16.5" x2="18.1" y2="13.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="13.4" y1="6.4"  x2="18.6" y2="11.6" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Nodes */}
      <circle cx="5"  cy="17" r="2" stroke={color} strokeWidth="1.5" />
      <circle cx="12" cy="5"  r="2" stroke={color} strokeWidth="1.5" />
      <circle cx="20" cy="13" r="2" stroke={color} strokeWidth="1.5" />
    </svg>
  );
}
