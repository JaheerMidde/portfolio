import type { DecisionRecord as DecisionRecordData } from '../data/portfolio';

interface DecisionRecordProps {
  readonly record: DecisionRecordData;
}

export default function DecisionRecord({ record }: DecisionRecordProps) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <div className="rounded-lg bg-surface-900/60 border border-white/5 p-3">
        <h5 className="text-xs uppercase tracking-wider text-gray-400 mb-1">Context</h5>
        <p className="text-gray-400 text-xs leading-relaxed">{record.context}</p>
      </div>
      <div className="rounded-lg bg-surface-900/60 border border-white/5 p-3">
        <h5 className="text-xs uppercase tracking-wider text-gray-400 mb-1">Decision</h5>
        <p className="text-gray-400 text-xs leading-relaxed">{record.decision}</p>
      </div>
      <div className="rounded-lg bg-surface-900/60 border border-white/5 p-3">
        <h5 className="text-xs uppercase tracking-wider text-gray-400 mb-1">Outcome</h5>
        <p className="text-gray-400 text-xs leading-relaxed">{record.outcome}</p>
      </div>
    </div>
  );
}
