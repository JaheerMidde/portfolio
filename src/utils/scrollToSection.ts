/** Matches Navbar `h-16` (4rem) */
export const NAVBAR_OFFSET = 64;

const SCROLL_GAP = 16;

interface ScrollOptions {
  gap?: number;
  behavior?: ScrollBehavior;
}

export function getPreferredScrollBehavior(behavior: ScrollBehavior = 'smooth'): ScrollBehavior {
  if (
    behavior === 'smooth' &&
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return 'auto';
  }

  return behavior;
}

function maxScrollTop() {
  return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
}

function targetScrollTop(element: HTMLElement, gap = SCROLL_GAP) {
  return element.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET - gap;
}

function ensureScrollRoom(element: HTMLElement, gap = SCROLL_GAP) {
  const section = element.closest('section');
  if (!(section instanceof HTMLElement)) return;

  section.style.paddingBottom = '';
  section.getBoundingClientRect();

  const target = targetScrollTop(element, gap);
  const max = maxScrollTop();

  if (target > max) {
    section.style.paddingBottom = `${target - max + gap}px`;
    section.getBoundingClientRect();
  }
}

/** Ensures enough document height exists, then scrolls element below the fixed navbar. */
export function scrollElementBelowNavbar(element: HTMLElement, options?: ScrollOptions) {
  const gap = options?.gap ?? SCROLL_GAP;
  const behavior = getPreferredScrollBehavior(options?.behavior);

  const runScroll = () => {
    ensureScrollRoom(element, gap);
    window.scrollTo({ top: Math.max(0, targetScrollTop(element, gap)), behavior });
  };

  requestAnimationFrame(() => {
    requestAnimationFrame(runScroll);
  });
}

/** Retries scroll until layout stabilizes (e.g. after accordion swap). */
export function scrollElementBelowNavbarWhenReady(
  getElement: () => HTMLElement | null,
  options?: ScrollOptions & { delays?: number[] },
) {
  const delays = options?.delays ?? [0, 120, 280, 480];
  const scrollOptions = options
    ? { gap: options.gap, behavior: options.behavior }
    : {};

  const timerIds = delays.map((delay) =>
    window.setTimeout(() => {
      const el = getElement();
      if (el) scrollElementBelowNavbar(el, { ...scrollOptions, behavior: 'auto' });
    }, delay),
  );

  return () => {
    timerIds.forEach((id) => window.clearTimeout(id));
  };
}

export function clearSectionScrollPadding(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (section) section.style.paddingBottom = '';
}

export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: getPreferredScrollBehavior() });
}

export function scrollToSection(selector: string) {
  const el = document.querySelector(selector);
  if (!(el instanceof HTMLElement)) return;
  scrollElementBelowNavbar(el);
}
