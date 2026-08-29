import { lazy, Suspense } from 'react';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollToTop from './components/ScrollToTop';

const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Contact = lazy(() => import('./components/Contact'));

function SectionFallback() {
  return <div className="py-24 bg-surface-900" aria-hidden="true" />;
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-surface-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent-500 focus:text-white focus:font-semibold focus:outline-none"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">
          <Hero />
          <Suspense fallback={<SectionFallback />}>
            <About />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
        </main>
        <ScrollToTop />
      </div>
    </MotionConfig>
  );
}
