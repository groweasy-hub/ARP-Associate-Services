import { servicesFAQ } from "../../data/servicesData";
import FAQAccordion from "../Common/FAQAccordion";
import SectionHeading from "../Common/SectionHeading";
import styled from "styled-components";

const Section = styled.section`
  padding: 6rem 5%;
  background: var(--surface);
`;
const Inner = styled.div`
  max-width: 780px;
  margin: 0 auto;
`;

const ServicesFAQ = () => (
  <Section>
    <Inner>
      <SectionHeading label="FAQs" title="Common Questions" center />
      <FAQAccordion items={servicesFAQ} />
    </Inner>
  </Section>
);

export default ServicesFAQ;
