interface MetricDeltaProps {
  readonly metrics: {
    readonly label: string;
    readonly before: string;
    readonly after: string;
    readonly display?: 'delta' | 'kpi';
  }[];
  readonly accentClass?: string;
}

export default function MetricDelta({ metrics, accentClass = 'text-accent-400' }: MetricDeltaProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {metrics.map((metric) => (
        <div
          key={metric.label}
          className="p-3 rounded-xl bg-surface-900/80 border border-white/5 text-center"
        >
          <div className="text-gray-400 text-xs uppercase tracking-wider font-medium mb-2">
            {metric.label}
          </div>
          {metric.display === 'kpi' ? (
            <div className="flex items-center justify-center font-mono text-base">
              <span className={`${accentClass} font-semibold`}>{metric.after}</span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-1.5 font-mono text-sm">
              <span className="text-gray-400 line-through decoration-gray-600">{metric.before}</span>
              <span className={`${accentClass} text-xs`} aria-hidden="true">→</span>
              <span className={`${accentClass} font-semibold`}>{metric.after}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}