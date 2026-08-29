interface ApiSequenceDiagramProps {
  className?: string;
}

/** Brand palette: accent teal #14b8a6 / #2dd4bf, warm sky #38bdf8 / #0ea5e9 */
const ACCENT = '#14b8a6';
const ACCENT_LIGHT = '#2dd4bf';
const WARM = '#38bdf8';
const SURFACE = '#1a1a27';
const SURFACE_DARK = '#12121a';
const LINE = '#334155';
const MUTED = '#64748b';
const LABEL = '#94a3b8';

export default function ApiSequenceDiagram({ className = '' }: ApiSequenceDiagramProps) {
  return (
    <div className={`rounded-xl bg-surface-900/80 border border-white/5 p-4 overflow-x-auto ${className}`}>
      <svg
        viewBox="0 0 720 280"
        role="img"
        aria-label="API sequence diagram: cart open triggers parallel bundle pricing fetch before carousel render"
        className="w-full min-w-[520px] h-auto"
      >
        <defs>
          <marker id="seqArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={MUTED} />
          </marker>
          <marker id="seqArrowAccent" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={ACCENT} />
          </marker>
        </defs>

        {/* Actors */}
        {[
          { x: 80, label: 'User' },
          { x: 240, label: 'Flyout Cart' },
          { x: 400, label: 'Bundle API' },
          { x: 560, label: 'Carousel' },
        ].map((actor) => (
          <g key={actor.label}>
            <rect x={actor.x - 50} y="8" width="100" height="32" rx="6" fill={SURFACE} stroke={ACCENT} strokeWidth="1" />
            <text x={actor.x} y="28" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">
              {actor.label}
            </text>
            <line x1={actor.x} y1="40" x2={actor.x} y2="260" stroke={LINE} strokeWidth="1" strokeDasharray="4 4" />
          </g>
        ))}

        {/* Messages */}
        {[
          { y: 60, x1: 80, x2: 240, label: '1. Open cart', accent: false },
          { y: 90, x1: 240, x2: 400, label: '2. Fetch bundle pricing (parallel)', accent: true },
          { y: 120, x1: 400, x2: 240, label: '3. Pricing + stackability rules', accent: false, dashed: true },
          { y: 150, x1: 240, x2: 560, label: '4. Render carousel (data ready)', accent: true },
          { y: 180, x1: 560, x2: 80, label: '5. First paint <2s p95', accent: false, dashed: true },
        ].map((msg, i) => (
          <g key={i}>
            <line
              x1={msg.x1}
              y1={msg.y}
              x2={msg.x2}
              y2={msg.y}
              stroke={msg.accent ? ACCENT : MUTED}
              strokeWidth={msg.accent ? 2 : 1.5}
              strokeDasharray={msg.dashed ? '4 3' : undefined}
              markerEnd={msg.dashed ? 'url(#seqArrow)' : `url(#${msg.accent ? 'seqArrowAccent' : 'seqArrow'})`}
            />
            <text
              x={(msg.x1 + msg.x2) / 2}
              y={msg.y - 6}
              textAnchor="middle"
              fill={msg.accent ? ACCENT_LIGHT : LABEL}
              fontSize="10"
              fontFamily="ui-monospace, monospace"
            >
              {msg.label}
            </text>
          </g>
        ))}

        {/* Before/After annotation - qualitative, metrics anchored in About */}
        <rect x="16" y="210" width="688" height="48" rx="8" fill={SURFACE_DARK} stroke={LINE} strokeWidth="1" />
        <text x="32" y="232" fill={MUTED} fontSize="10" fontFamily="ui-monospace, monospace">Before:</text>
        <text x="88" y="232" fill={WARM} fontSize="10" fontFamily="ui-monospace, monospace">carousel mount → then fetch → blocked paint</text>
        <text x="32" y="250" fill={MUTED} fontSize="10" fontFamily="ui-monospace, monospace">After:</text>
        <text x="88" y="250" fill={ACCENT_LIGHT} fontSize="10" fontFamily="ui-monospace, monospace">cart open → parallel fetch → sub-2s p95</text>
      </svg>
    </div>
  );
}
