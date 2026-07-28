"use client";

import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

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

const Offer = dynamic(() => import("./components/Offer"), {
  loading: () => <div className="min-h-[400px]" />,
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

const AnchorScroller = dynamic(() => import("./components/AnchorScroller"), {
  loading: () => null,
});

const ScrollToTop = dynamic(() => import("./components/ScrollToTop"));

const StickyMobileBar = dynamic(() => import("./components/StickyMobileBar"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IsThisYou />
        <DataVisualization />
        <Comparison />
        <Results />
        <Offer />
        <SuccessCalculator />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <AnchorScroller />
      <ScrollToTop />
      <StickyMobileBar />
    </>
  );
}
