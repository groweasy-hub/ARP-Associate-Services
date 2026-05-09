import AboutHero from "../components/AboutPage/AboutHero";
import MissionVision from "../components/AboutPage/MissionVision";
import Timeline from "../components/AboutPage/Timeline";
import CoreValues from "../components/AboutPage/CoreValues";
import TeamSection from "../components/AboutPage/TeamSection";
import Certifications from "../components/AboutPage/Certifications";
import AboutStats from "../components/AboutPage/AboutStats";
import ClientTrust from "../components/AboutPage/ClientTrust";
import AboutCTA from "../components/AboutPage/AboutCTA";

const AboutPage = () => (
  <main>
    <AboutHero />
    <MissionVision />
    <Timeline />
    <CoreValues />
    <TeamSection />
    <Certifications />
    <AboutStats />
    <ClientTrust />
    <AboutCTA />
  </main>
);

export default AboutPage;
