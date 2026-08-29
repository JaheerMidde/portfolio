import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { ChevronDown, ChevronUp, Layers } from 'lucide-react';
import { scrollElementBelowNavbar } from '../utils/scrollToSection';

interface CollapsibleSectionProps {
  readonly title: string;
  readonly defaultOpen?: boolean;
  readonly children: ReactNode;
}

export default function CollapsibleSection({
  title,
  defaultOpen = false,
  children,
}: CollapsibleSectionProps) {
  const [open, setOpen] = useState(defaultOpen);
  const headerRef = useRef<HTMLButtonElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const contentId = useId();

  const toggle = () => setOpen((prev) => !prev);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.inert = !open;
    }
  }, [open]);

  useEffect(() => {
    if (!open || !headerRef.current) return;

    const header = headerRef.current;
    const timer = window.setTimeout(() => {
      scrollElementBelowNavbar(header);
    }, 320);

    return () => window.clearTimeout(timer);
  }, [open]);

  return (
    <div className="rounded-xl border border-white/10 bg-surface-900/40">
      <button
        ref={headerRef}
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls={contentId}
        className="w-full flex items-center justify-between gap-3 px-4 py-3.5 text-left hover:bg-white/[0.02] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 focus-visible:ring-inset"
      >
        <span className="flex items-center gap-2 text-sm font-medium text-gray-300">
          <Layers className="w-4 h-4 text-accent-400 flex-shrink-0" aria-hidden="true" />
          {title}
        </span>
        <span className="text-gray-400 flex-shrink-0" aria-hidden="true">
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </span>
      </button>

      <div
        ref={contentRef}
        id={contentId}
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
          open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="px-4 pb-4 pt-1 space-y-4 border-t border-white/5">{children}</div>
        </div>
      </div>
    </div>
  );
}