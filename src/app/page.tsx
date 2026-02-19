import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DataVisualization from "./components/DataVisualization";
import AISearchDomination from "./components/AISearchDomination";
import HumanSignal from "./components/HumanSignal";
import TrustBadge from "./components/TrustBadge";
import TechStack from "./components/TechStack";
import SuccessCalculator from "./components/SuccessCalculator";
import Results from "./components/Results";
import Comparison from "./components/Comparison";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <DataVisualization />
        <AISearchDomination />
        <HumanSignal />
        <TechStack />
        <SuccessCalculator />
        <Results />
        <Comparison />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <TrustBadge />
    </>
  );
}
