import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, CalendarDays } from 'lucide-react';
import { navLinks, personal } from '../data/portfolio';
import { personalCalendarHref as calendarHref } from '../utils/personalCalendar';
import { scrollToTop } from '../utils/scrollToSection';
import { useActiveSection } from '../hooks/useActivation';


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useActiveSection();
  const menuTriggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const mobileMenuId = 'mobile-navigation';

  const handleNavClick = (label: string) => {
    setActive(label);
    setMenuOpen(false);
    menuTriggerRef.current?.focus();
  };

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuTriggerRef.current?.focus();
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (
        target instanceof Node &&
        !menuRef.current?.contains(target) &&
        !menuTriggerRef.current?.contains(target)
      ) {
        setMenuOpen(false);
        menuTriggerRef.current?.focus();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-900 border-b border-white/6 shadow-sm shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between" aria-label="Main navigation">
        <a
          href="#"
          onClick={(event) => {
            event.preventDefault();
            window.history.pushState(null, '', `${window.location.pathname}${window.location.search}`);
            scrollToTop();
          }}
          className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 rounded-lg"
        >
          <span className="font-serif text-lg text-white tracking-tight">
            JM
          </span>
          <span className="hidden sm:inline font-medium text-gray-400 text-sm">
            {personal.name.split(' ')[0]}
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={() => setActive(link.label)}
                aria-current={active === link.label ? 'location' : undefined}
                className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${
                  active === link.label
                    ? 'text-white bg-white/10'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
          {personal.resume && (
            <li>
              <a
                href={personal.resume}
                download
                className="ml-1 flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-500/40 text-gray-300 hover:text-accent-400 text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
              >
                <Download className="w-3.5 h-3.5" aria-hidden="true" />
                Resume
              </a>
            </li>
          )}
          <li>
            <a
              href={calendarHref}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 flex items-center gap-1.5 px-4 py-2 rounded-lg bg-accent-500 hover:bg-accent-400 text-white text-sm font-medium transition-all duration-200 shadow-lg shadow-accent-500/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-900"
            >
              <CalendarDays className="w-3.5 h-3.5" aria-hidden="true" />
              Propose a time
            </a>
          </li>
        </ul>

        <button
          ref={menuTriggerRef}
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="md:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls={mobileMenuId}
        >
          {menuOpen
            ? <X className="w-5 h-5" aria-hidden="true" />
            : <Menu className="w-5 h-5" aria-hidden="true" />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            id={mobileMenuId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden bg-surface-800 border-b border-white/6"
          >
            <ul className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => handleNavClick(link.label)}
                    aria-current={active === link.label ? 'location' : undefined}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500 ${
                      active === link.label
                        ? 'text-white bg-white/10'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {personal.resume && (
                <li>
                  <a
                    href={personal.resume}
                    download
                    className="flex items-center gap-2 w-full px-4 py-3 rounded-lg text-gray-300 hover:text-accent-400 hover:bg-white/5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
                  >
                    <Download className="w-4 h-4" aria-hidden="true" />
                    Download Resume
                  </a>
                </li>
              )}
              <li className="pt-1">
                <a
                  href={calendarHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-accent-500 hover:bg-accent-400 text-white text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400"
                >
                  <CalendarDays className="w-4 h-4" aria-hidden="true" />
                  Propose a time
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
