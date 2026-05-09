import ServicesHero from "../components/ServicesPage/ServicesHero";
import ServicesTabs from "../components/ServicesPage/ServicesTabs";
import ServiceBlock from "../components/ServicesPage/ServiceBlock";
import ProcessTimeline from "../components/ServicesPage/ProcessTimeline";
import ServicesStats from "../components/ServicesPage/ServicesStats";
import ServicesFAQ from "../components/ServicesPage/ServicesFAQ";
import ServicesCTA from "../components/ServicesPage/ServicesCTA";
import { servicesData } from "../data/servicesData";

const ServicesPage = () => (
  <main>
    <ServicesHero />
    <ServicesTabs />
    {servicesData.map((service, i) => (
      <ServiceBlock key={service.id} service={service} index={i} />
    ))}
    <ProcessTimeline />
    <ServicesStats />
    <ServicesFAQ />
    <ServicesCTA />
  </main>
);

export default ServicesPage;
