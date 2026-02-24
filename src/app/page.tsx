import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// ✅ Dynamic imports for all below-fold components
// Splits the JS bundle — browser only downloads each chunk when needed.
// Note: ssr:false is not allowed in Server Components (App Router).
// Components with 'use client' will still hydrate client-side automatically.

const IsThisYou = dynamic(() => import("./components/IsThisYou"), {
  loading: () => <div className="min-h-[400px]" />,
});

const DataVisualization = dynamic(() => import("./components/DataVisualization"), {
  loading: () => <div className="min-h-[400px]" />,
});

const Comparison = dynamic(() => import("./components/Comparison"), {
  loading: () => <div className="min-h-[400px]" />,
});

const Results = dynamic(() => import("./components/Results"), {
  loading: () => <div className="min-h-[400px]" />,
});

const AISearchDomination = dynamic(() => import("./components/AISearchDomination"), {
  loading: () => <div className="min-h-[400px]" />,
});

const HumanSignal = dynamic(() => import("./components/HumanSignal"), {
  loading: () => <div className="min-h-[400px]" />,
});

const TechStack = dynamic(() => import("./components/TechStack"), {
  loading: () => <div className="min-h-[300px]" />,
});

const SuccessCalculator = dynamic(() => import("./components/SuccessCalculator"), {
  loading: () => <div className="min-h-[400px]" />,
});

const FAQ = dynamic(() => import("./components/FAQ"), {
  loading: () => <div className="min-h-[400px]" />,
});

const Contact = dynamic(() => import("./components/Contact"), {
  loading: () => <div className="min-h-[400px]" />,
});

const Footer = dynamic(() => import("./components/Footer"), {
  loading: () => <div className="min-h-[200px]" />,
});

const ScrollToTop = dynamic(() => import("./components/ScrollToTop"));

export default function Home() {
  return (
    <>
      {/* Above-fold: loaded immediately */}
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
