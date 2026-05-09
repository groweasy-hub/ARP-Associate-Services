import { motion } from "framer-motion";
import { fadeIn } from "../../animations/animations";
import { contactData } from "../../data/data";
import styled from "styled-components";

const Section = styled.section`padding: 5rem 5%; background: var(--bg);`;
const Inner = styled.div`max-width: var(--max-w); margin: 0 auto;`;
const Heading = styled.h2`
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--text);
  margin-bottom: 2rem;
  text-align: center;
`;
const MapWrap = styled(motion.div)`
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border);
  height: 400px;
`;
const MapFrame = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  filter: grayscale(0.8) invert(0.9) contrast(0.85);
`;
const Address = styled.p`
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: var(--muted);
  a { color: var(--accent); margin-left: 0.5rem; }
`;

const MapSection = () => (
  <Section>
    <Inner>
      <Heading>Find Us</Heading>
      <MapWrap variants={fadeIn} custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <MapFrame
          src={`https://www.google.com/maps?q=${encodeURIComponent(
            contactData.mapQuery
          )}&z=16&output=embed`}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ARP Associate Services Location"
        />
      </MapWrap>
      <Address>
        {contactData.address}
        <a
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            contactData.mapQuery
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Directions →
        </a>
      </Address>
    </Inner>
  </Section>
);

export default MapSection;
