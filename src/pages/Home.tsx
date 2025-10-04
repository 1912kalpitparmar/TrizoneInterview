import AboutSection from "../component/AboutSection";
import Benefits from "../component/Benefits";
import CTA from "../component/cta";
import EasySteps from "../component/EasySteps";
import FAQ from "../component/FAQ";
import Feature from "../component/Feature";
import HeroBanner from "../component/HeroBanner";
import Impact from "../component/Impact";
import ScienceBehind from "../component/ScienceBehind";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <AboutSection />
      <ScienceBehind />
      <EasySteps />
      <Feature />
      <Benefits />
      <FAQ />
      <Impact />
      <CTA />
    </>
  );
}

export default Home;
