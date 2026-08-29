interface ArchitectureDiagramProps {
  readonly className?: string;
}

export default function ArchitectureDiagram({ className = '' }: ArchitectureDiagramProps) {
  return (
    <div className={`rounded-xl bg-surface-900/80 border border-white/5 p-4 min-w-0 ${className}`}>
      <svg
        viewBox="0 0 640 320"
        role="img"
        aria-label="Micro-frontend architecture: host shell connecting browse, configurator, and checkout apps to a shared component library"
        className="hidden sm:block w-full h-auto"
      >
        <defs>
          <linearGradient id="shellGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14b8a6" />
            <stop offset="100%" stopColor="#0d9488" />
          </linearGradient>
          <linearGradient id="mfeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0ea5e9" />
          </linearGradient>
          <linearGradient id="dsGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#888" />
            <stop offset="100%" stopColor="#666" />
          </linearGradient>
          <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#64748b" />
          </marker>
        </defs>

        {/* Host shell */}
        <rect x="220" y="16" width="200" height="44" rx="8" fill="url(#shellGrad)" opacity="0.9" />
        <text x="320" y="44" textAnchor="middle" fill="white" fontSize="13" fontWeight="600" fontFamily="system-ui, sans-serif">
          E-Commerce Host Shell
        </text>

        {/* MFE nodes */}
        {[
          { x: 60, label: 'Browse MFE', sub: '26 MRs' },
          { x: 250, label: 'Configurator MFE', sub: '100+ MRs' },
          { x: 470, label: 'Checkout MFE', sub: '23 MRs' },
        ].map((node) => (
          <g key={node.label}>
            <rect x={node.x} y="100" width="160" height="52" rx="8" fill="url(#mfeGrad)" opacity="0.85" />
            <text x={node.x + 80} y="124" textAnchor="middle" fill="white" fontSize="12" fontWeight="600" fontFamily="system-ui, sans-serif">
              {node.label}
            </text>
            <text x={node.x + 80} y="142" textAnchor="middle" fill="#e2e8f0" fontSize="10" fontFamily="ui-monospace, monospace">
              {node.sub}
            </text>
          </g>
        ))}

        {/* Design system */}
        <rect x="170" y="220" width="300" height="44" rx="8" fill="url(#dsGrad)" opacity="0.85" />
        <text x="320" y="248" textAnchor="middle" fill="white" fontSize="13" fontWeight="600" fontFamily="system-ui, sans-serif">
          Shared Component Library
        </text>

        {/* Shell to MFEs */}
        <line x1="280" y1="60" x2="140" y2="100" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="320" y1="60" x2="330" y2="100" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="360" y1="60" x2="550" y2="100" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />

        {/* MFEs to DS */}
        <line x1="140" y1="152" x2="240" y2="220" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="330" y1="152" x2="320" y2="220" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1="550" y1="152" x2="400" y2="220" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#arrow)" />
      </svg>

      <svg
        viewBox="0 0 360 360"
        role="img"
        aria-label="Mobile micro-frontend architecture: host shell connecting browse, configurator, and checkout apps to a shared component library"
        className="block w-full h-auto sm:hidden"
      >
        <defs>
          <marker id="mobileArchitectureArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill="#64748b" />
          </marker>
        </defs>

        <rect x="60" y="16" width="240" height="48" rx="8" fill="#14b8a6" opacity="0.9" />
        <text x="180" y="46" textAnchor="middle" fill="white" fontSize="13" fontWeight="600" fontFamily="system-ui, sans-serif">
          E-Commerce Host Shell
        </text>

        <line x1="180" y1="64" x2="180" y2="84" stroke="#64748b" strokeWidth="1.5" />
        <line x1="60" y1="84" x2="300" y2="84" stroke="#64748b" strokeWidth="1.5" />
        <line x1="60" y1="84" x2="60" y2="104" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#mobileArchitectureArrow)" />
        <line x1="180" y1="84" x2="180" y2="104" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#mobileArchitectureArrow)" />
        <line x1="300" y1="84" x2="300" y2="104" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#mobileArchitectureArrow)" />

        <rect x="10" y="108" width="100" height="62" rx="8" fill="#0ea5e9" opacity="0.9" />
        <text x="60" y="134" textAnchor="middle" fill="white" fontSize="10" fontWeight="600" fontFamily="system-ui, sans-serif">
          Browse
        </text>
        <text x="60" y="149" textAnchor="middle" fill="white" fontSize="10" fontWeight="600" fontFamily="system-ui, sans-serif">
          MFE
        </text>
        <text x="60" y="162" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">
          26 MRs
        </text>

        <rect x="130" y="108" width="100" height="62" rx="8" fill="#0ea5e9" opacity="0.9" />
        <text x="180" y="134" textAnchor="middle" fill="white" fontSize="9.5" fontWeight="600" fontFamily="system-ui, sans-serif">
          Configurator
        </text>
        <text x="180" y="149" textAnchor="middle" fill="white" fontSize="10" fontWeight="600" fontFamily="system-ui, sans-serif">
          MFE
        </text>
        <text x="180" y="162" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">
          100+ MRs
        </text>

        <rect x="250" y="108" width="100" height="62" rx="8" fill="#0ea5e9" opacity="0.9" />
        <text x="300" y="134" textAnchor="middle" fill="white" fontSize="10" fontWeight="600" fontFamily="system-ui, sans-serif">
          Checkout
        </text>
        <text x="300" y="149" textAnchor="middle" fill="white" fontSize="10" fontWeight="600" fontFamily="system-ui, sans-serif">
          MFE
        </text>
        <text x="300" y="162" textAnchor="middle" fill="#e2e8f0" fontSize="9" fontFamily="ui-monospace, monospace">
          23 MRs
        </text>

        <line x1="60" y1="170" x2="100" y2="218" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#mobileArchitectureArrow)" />
        <line x1="180" y1="170" x2="180" y2="218" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#mobileArchitectureArrow)" />
        <line x1="300" y1="170" x2="260" y2="218" stroke="#64748b" strokeWidth="1.5" markerEnd="url(#mobileArchitectureArrow)" />
        <rect x="60" y="220" width="240" height="48" rx="8" fill="#666" opacity="0.9" />
        <text x="180" y="250" textAnchor="middle" fill="white" fontSize="13" fontWeight="600" fontFamily="system-ui, sans-serif">
          Shared Component Library
        </text>

        <text x="180" y="310" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">
          Independently deployed surfaces
        </text>
        <text x="180" y="328" textAnchor="middle" fill="#64748b" fontSize="10" fontFamily="ui-monospace, monospace">
          share UI contracts and dependencies
        </text>
      </svg>
    </div>
  );
}
