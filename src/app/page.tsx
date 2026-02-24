import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// ✅ FIX: Dynamic imports for all below-fold components
// Splits the JS bundle — browser only downloads each chunk
// when the component is about to enter the viewport.
//
// ssr: true  → rendered on server (good for SEO content sections)
// ssr: false → client-only (interactive widgets, scroll utilities)

// --- SEO-critical content sections (ssr: true) ---
const IsThisYou = dynamic(() => import("./components/IsThisYou"), {
  ssr: true,
  loading: () => <div className="min-h-[400px]" />,
});

const DataVisualization = dynamic(() => import("./components/DataVisualization"), {
  ssr: true,
  loading: () => <div className="min-h-[400px]" />,
});

const Comparison = dynamic(() => import("./components/Comparison"), {
  ssr: true,
  loading: () => <div className="min-h-[400px]" />,
});

const Results = dynamic(() => import("./components/Results"), {
  ssr: true,
  loading: () => <div className="min-h-[400px]" />,
});

const AISearchDomination = dynamic(() => import("./components/AISearchDomination"), {
  ssr: true,
  loading: () => <div className="min-h-[400px]" />,
});

const HumanSignal = dynamic(() => import("./components/HumanSignal"), {
  ssr: true,
  loading: () => <div className="min-h-[400px]" />,
});

const TechStack = dynamic(() => import("./components/TechStack"), {
  ssr: true,
  loading: () => <div className="min-h-[300px]" />,
});

const FAQ = dynamic(() => import("./components/FAQ"), {
  ssr: true,
  loading: () => <div className="min-h-[400px]" />,
});

const Contact = dynamic(() => import("./components/Contact"), {
  ssr: true,
  loading: () => <div className="min-h-[400px]" />,
});

const Footer = dynamic(() => import("./components/Footer"), {
  ssr: true,
  loading: () => <div className="min-h-[200px]" />,
});

// --- Client-only interactive components (ssr: false) ---
// SuccessCalculator: uses client state/interactivity, no SEO value
const SuccessCalculator = dynamic(() => import("./components/SuccessCalculator"), {
  ssr: false,
  loading: () => <div className="min-h-[400px]" />,
});

// ScrollToTop: pure UI utility, no SSR needed
const ScrollToTop = dynamic(() => import("./components/ScrollToTop"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      {/* Above-fold: loaded immediately, no dynamic import */}
      <Navbar />
      <main>
        <Hero />

        {/* Below-fold: dynamically imported, split into separate chunks */}
        <IsThisYou />
        <DataVisualization />
        <Comparison />
        <Results />
        <AISearchDomination />
        <HumanSignal />
        <TechStack />
        <SuccessCalculator />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
