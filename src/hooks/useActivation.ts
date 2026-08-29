import { useEffect, useState } from 'react';
import { navLinks } from '../data/portfolio';
import { NAVBAR_OFFSET } from '../utils/scrollToSection';

/** Viewport line used to decide which section is "current" - below fixed navbar. */
const ACTIVATION_OFFSET = NAVBAR_OFFSET + 48;

function resolveActiveSection(): string {
  const sections = navLinks
    .map((link) => ({
      label: link.label,
      el: document.getElementById(link.href.replace('#', '')),
    }))
    .filter((section): section is { label: string; el: HTMLElement } => section.el !== null);

  if (sections.length === 0) return '';

  const scrollPos = window.scrollY + ACTIVATION_OFFSET;
  const nearPageBottom =
    window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 48;

  // Last section can't always scroll its top past the activation line
  if (nearPageBottom) {
    return sections[sections.length - 1].label;
  }

  let activeLabel = '';
  for (const { label, el } of sections) {
    const sectionTop = el.getBoundingClientRect().top + window.scrollY;
    if (scrollPos >= sectionTop) {
      activeLabel = label;
    }
  }

  return activeLabel;
}

export function useActiveSection() {
  const [active, setActive] = useState('');

  useEffect(() => {
    const updateActive = () => {
      const next = resolveActiveSection();
      setActive((prev) => (prev === next ? prev : next));
    };

    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('resize', updateActive);

    const main = document.getElementById('main');
    const observer = main
      ? new MutationObserver(updateActive)
      : null;
    observer?.observe(main!, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('resize', updateActive);
      observer?.disconnect();
    };
  }, []);

  return [active, setActive] as const;
}