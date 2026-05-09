import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import HowWeDoIt from "../components/HowWeDoIt/HowWeDoIt";
import CaseStudies from "../components/CaseStudies/CaseStudies";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import Clients from "../components/Clients/Clients";
import Contact from "../components/Contact/Contact";

const Home = () => (
  <main>
    <Hero />
    <Services />
    <HowWeDoIt />
    <CaseStudies />
    <WhoWeAre />
    <Clients />
    <Contact />
  </main>
);

export default Home;
