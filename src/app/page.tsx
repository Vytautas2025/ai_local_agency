import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IsThisYou from "./components/IsThisYou";
import DataVisualization from "./components/DataVisualization";
import AISearchDomination from "./components/AISearchDomination";
import HumanSignal from "./components/HumanSignal";

import TechStack from "./components/TechStack";
import SuccessCalculator from "./components/SuccessCalculator";
import Results from "./components/Results";
import Comparison from "./components/Comparison";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <IsThisYou />
        <DataVisualization />
        <Comparison />
        <AISearchDomination />
        <HumanSignal />
        <TechStack />
        <SuccessCalculator />
        <Results />
        <FAQ />
        <Contact />
      </main>
      <Footer />

      <ScrollToTop />
    </>
  );
}
