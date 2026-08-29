interface ConfiguratorStateDiagramProps {
  className?: string;
}

/** Brand palette: accent teal, warm sky - matches ArchitectureDiagram & ApiSequenceDiagram */
const ACCENT = '#14b8a6';
const WARM = '#38bdf8';
const WARM_DARK = '#0ea5e9';
const SURFACE_DARK = '#12121a';
const LINE = '#334155';
const MUTED = '#64748b';
const LABEL = '#94a3b8';

export default function ConfiguratorStateDiagram({ className = '' }: ConfiguratorStateDiagramProps) {
  const states = [
    { x: 40, y: 60, label: 'Phone Added', sub: 'plan tier, line count', color: ACCENT },
    { x: 280, y: 60, label: 'Watch Added', sub: 'Number Share check', color: WARM },
    { x: 520, y: 60, label: 'Tablet Added', sub: 'cross-category valid.', color: WARM_DARK },
  ];

  const stackLayers = [
    { y: 152, label: 'stack[2]: Tablet - plan validated', color: WARM_DARK },
    { y: 178, label: 'stack[1]: Watch - Number Share ✓', color: WARM },
    { y: 204, label: 'stack[0]: Phone - base line', color: ACCENT },
  ];

  return (
    <div className={`rounded-xl bg-surface-900/80 border border-white/5 p-4 min-w-0 ${className}`}>
      <svg
        viewBox="0 0 680 260"
        role="img"
        aria-label="Device-context stack state machine for multi-product configurator sessions"
        className="hidden sm:block w-full h-auto"
      >
        <defs>
          <marker id="stateArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={MUTED} />
          </marker>
        </defs>

        <text x="340" y="24" textAnchor="middle" fill={LABEL} fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">
          Device-Context Stack (client state)
        </text>

        {/* Stack container */}
        <rect x="200" y="120" width="280" height="120" rx="10" fill={SURFACE_DARK} stroke={LINE} strokeWidth="1.5" strokeDasharray="6 3" />
        <text x="340" y="140" textAnchor="middle" fill={MUTED} fontSize="10" fontFamily="ui-monospace, monospace">
          stack[] - newest device on top
        </text>

        {/* Stack layers */}
        {stackLayers.map((layer) => (
          <g key={layer.y}>
            <rect x="220" y={layer.y} width="240" height="22" rx="4" fill={layer.color} opacity="0.15" stroke={layer.color} strokeWidth="1" />
            <text x="340" y={layer.y + 15} textAnchor="middle" fill={layer.color} fontSize="10" fontFamily="ui-monospace, monospace">
              {layer.label}
            </text>
          </g>
        ))}

        {/* State nodes */}
        {states.map((state, i) => (
          <g key={state.label}>
            <rect x={state.x} y={state.y} width="120" height="44" rx="8" fill={state.color} opacity="0.2" stroke={state.color} strokeWidth="1.5" />
            <text x={state.x + 60} y={state.y + 20} textAnchor="middle" fill="white" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">
              {state.label}
            </text>
            <text x={state.x + 60} y={state.y + 36} textAnchor="middle" fill={LABEL} fontSize="9" fontFamily="ui-monospace, monospace">
              {state.sub}
            </text>
            {i < states.length - 1 && (
              <line
                x1={state.x + 120}
                y1={state.y + 22}
                x2={states[i + 1].x}
                y2={states[i + 1].y + 22}
                stroke={MUTED}
                strokeWidth="1.5"
                markerEnd="url(#stateArrow)"
              />
            )}
            <line
              x1={state.x + 60}
              y1={state.y + 44}
              x2={state.x + 60}
              y2="120"
              stroke={MUTED}
              strokeWidth="1"
              strokeDasharray="3 3"
            />
          </g>
        ))}

        {/* Validation note */}
        <text x="340" y="252" textAnchor="middle" fill={MUTED} fontSize="9" fontFamily="ui-monospace, monospace">
          Dependency validation at config time - not at checkout
        </text>
      </svg>
      <svg
        viewBox="0 0 360 520"
        role="img"
        aria-label="Mobile device-context stack state machine for multi-product configurator sessions"
        className="block w-full h-auto sm:hidden"
      >
        <defs>
          <marker id="mobileStateArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={MUTED} />
          </marker>
        </defs>

        <text x="180" y="20" textAnchor="middle" fill={LABEL} fontSize="12" fontWeight="600" fontFamily="system-ui, sans-serif">
          Device-Context Stack
        </text>
        <text x="180" y="36" textAnchor="middle" fill={MUTED} fontSize="10" fontFamily="ui-monospace, monospace">
          client state across the journey
        </text>

        <rect x="60" y="50" width="240" height="44" rx="8" fill={ACCENT} opacity="0.2" stroke={ACCENT} strokeWidth="1.5" />
        <text x="180" y="70" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">
          Phone Added
        </text>
        <text x="180" y="86" textAnchor="middle" fill={LABEL} fontSize="9" fontFamily="ui-monospace, monospace">
          plan tier · line count
        </text>
        <line x1="180" y1="94" x2="180" y2="108" stroke={MUTED} markerEnd="url(#mobileStateArrow)" />

        <rect x="60" y="112" width="240" height="44" rx="8" fill={WARM} opacity="0.2" stroke={WARM} strokeWidth="1.5" />
        <text x="180" y="132" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">
          Watch Added
        </text>
        <text x="180" y="148" textAnchor="middle" fill={LABEL} fontSize="9" fontFamily="ui-monospace, monospace">
          Number Share check
        </text>
        <line x1="180" y1="156" x2="180" y2="170" stroke={MUTED} markerEnd="url(#mobileStateArrow)" />

        <rect x="60" y="174" width="240" height="44" rx="8" fill={WARM_DARK} opacity="0.2" stroke={WARM_DARK} strokeWidth="1.5" />
        <text x="180" y="194" textAnchor="middle" fill="white" fontSize="11" fontWeight="600" fontFamily="system-ui, sans-serif">
          Tablet Added
        </text>
        <text x="180" y="210" textAnchor="middle" fill={LABEL} fontSize="9" fontFamily="ui-monospace, monospace">
          cross-category valid
        </text>

        <rect x="20" y="250" width="320" height="190" rx="10" fill={SURFACE_DARK} stroke={LINE} strokeWidth="1.5"
          strokeDasharray="6 3" />
        <text x="180" y="274" textAnchor="middle" fill={MUTED} fontSize="10" fontFamily="ui-monospace, monospace">
          stack[] - newest device on top
        </text>

        <rect x="40" y="294" width="280" height="28" rx="4" fill={WARM_DARK} opacity="0.15" stroke={WARM_DARK} />
        <text x="180" y="312" textAnchor="middle" fill={WARM_DARK} fontSize="10" fontFamily="ui-monospace, monospace">
          stack[2]: Tablet · plan validated
        </text>

        <rect x="40" y="330" width="280" height="28" rx="4" fill={WARM} opacity="0.15" stroke={WARM} />
        <text x="180" y="348" textAnchor="middle" fill={WARM} fontSize="10" fontFamily="ui-monospace, monospace">
          stack[1]: Watch · Number Share ✓
        </text>

        <rect x="40" y="366" width="280" height="28" rx="4" fill={ACCENT} opacity="0.15" stroke={ACCENT} />
        <text x="180" y="384" textAnchor="middle" fill={ACCENT} fontSize="10" fontFamily="ui-monospace, monospace">
          stack[0]: Phone · base line
        </text>

        <text x="180" y="470" textAnchor="middle" fill={MUTED} fontSize="10" fontFamily="ui-monospace, monospace">
          Validate dependencies at config time
        </text>
        <text x="180" y="488" textAnchor="middle" fill={MUTED} fontSize="10" fontFamily="ui-monospace, monospace">
          before the user reaches checkout
        </text>
      </svg>
    </div>
  );
}