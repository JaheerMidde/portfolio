import type { ReactNode } from 'react';

interface CodeHighlightProps {
  readonly code: string;
}

const KEYWORDS = new Set([
  'import', 'from', 'export', 'function', 'return', 'lazy', 'Suspense', 'const', 'default',
]);

const IDENTIFIERS = new Set([
  'CheckoutRemote', 'CheckoutShell', 'CheckoutSkeleton', 'CheckoutApp',
]);

function highlightLine(line: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < line.length) {
    if (line.startsWith('//', i)) {
      nodes.push(
        <span key={key++} className="text-gray-500">
          {line.slice(i)}
        </span>,
      );
      break;
    }

    if (line[i] === "'") {
      const end = line.indexOf("'", i + 1);
      const value = end === -1 ? line.slice(i) : line.slice(i, end + 1);
      nodes.push(
        <span key={key++} className="text-emerald-400">
          {value}
        </span>,
      );
      i += value.length;
      continue;
    }

    const wordMatch = /^[A-Za-z_$][\w$]*/.exec(line.slice(i));
    if (wordMatch) {
      const word = wordMatch[0];
      if (KEYWORDS.has(word)) {
        nodes.push(
          <span key={key++} className="text-purple-400">
            {word}
          </span>
        );
      } else if (IDENTIFIERS.has(word)) {
        nodes.push(
          <span key={key++} className="text-cyan-400">
            {word}
          </span>
        );
      } else {
        nodes.push(<span key={key++}>{word}</span>);
      }
      i += word.length;
      continue;
    }

    nodes.push(<span key={key++}>{line[i]}</span>);
    i += 1;
  }

  return nodes;
}

function getLineEntries(code: string) {
  const occurrences = new Map<string, number>();

  return code.split('\n').map((line) => {
    const occurrence = occurrences.get(line) ?? 0;
    occurrences.set(line, occurrence + 1);
    return { line, key: `${line}:${occurrence}` };
  });
}

export default function CodeHighlight({ code }: CodeHighlightProps) {
  return (
    <>
      {getLineEntries(code).map(({ line, key }, lineIndex) => (
        <span key={key} className="block">
          <span className="text-gray-600 select-none mr-4 text-xs">
            {String(lineIndex + 1).padStart(2, ' ')}
          </span>
          <span>{highlightLine(line)}</span>
        </span>
      ))}
    </>
  );
}
