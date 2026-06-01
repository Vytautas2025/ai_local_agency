"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MetaLandingPage from "./components/MetaLandingPage";

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

const Plans = dynamic(() => import("./components/Plans"), {
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
  const [isMetaVisitor, setIsMetaVisitor] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.has("fbclid")) {
      sessionStorage.setItem("meta_visitor", "true");
    }
    if (sessionStorage.getItem("meta_visitor") === "true") {
      setIsMetaVisitor(true);
    }
  }, []);

  if (isMetaVisitor) {
    return <MetaLandingPage />;
  }

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IsThisYou />
        <DataVisualization />
        <Comparison />
        <Plans />
        <Results />
        <AISearchDomination />
        <HumanSignal />
        <TechStack />
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
