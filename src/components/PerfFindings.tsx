import type { PerfFinding } from '../data/portfolio';

interface PerfFindingsProps {
  findings: PerfFinding[];
}

export default function PerfFindings({ findings }: PerfFindingsProps) {
  return (
    <div className="rounded-xl bg-surface-900/80 border border-white/5 overflow-hidden">
      <div className="px-4 py-3 border-b border-white/5">
        <span className="text-white text-sm font-medium">Performance Investigation</span>
      </div>
      <div className="divide-y divide-white/5">
        {findings.map((item, i) => (
          <div key={i} className="p-4 grid sm:grid-cols-[140px_1fr_1fr] gap-3 items-start">
            <span className="px-2 py-1 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 text-[10px] font-mono w-fit">
              {item.tool}
            </span>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-violet-400 font-semibold mb-1">Finding</div>
              <p className="text-gray-400 text-xs leading-relaxed">{item.finding}</p>
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold mb-1">Fix</div>
              <p className="text-gray-400 text-xs leading-relaxed">{item.fix}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
