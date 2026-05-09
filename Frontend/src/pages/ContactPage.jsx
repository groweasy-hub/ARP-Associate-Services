import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faGift,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import { contactData } from "../data/data";
import {
  fadeIn,
  fadeUp,
  floatAnimation,
  lineGrow,
  revealFromMask,
  scaleIn,
} from "../animations/animations";
import {
  CtaActions,
  CtaBanner,
  CtaHeading,
  CtaSection,
  CtaSubtext,
  DirectionsLink,
  FaqAnswer,
  FaqCard,
  FaqGrid,
  FaqQuestion,
  FaqSection,
  FeatureCard,
  FeatureGrid,
  FeatureIcon,
  FeatureText,
  FeatureTitle,
  HeroLabel,
  HeroSection,
  HeroSubtext,
  HeroTitle,
  Inner,
  MapCaption,
  MapFrame,
  MapHeader,
  MapSection,
  MapSurface,
  PageShell,
  PrimaryCta,
  QuickLabel,
  SecondaryCta,
  SectionIntro,
  SectionTitle,
  TrustSection,
} from "./ContactPage.styles";
import LeadContactSection from "../components/Contact/LeadContactSection";

const viewport = { once: true, amount: 0.2 };

const trustFeatures = [
  {
    title: "Fast Response",
    icon: faBolt,
    description: "We respond to all enquiries within 24 business hours",
  },
  {
    title: "Free First Consultation",
    icon: faGift,
    description:
      "Your first consultation is completely free - no commitment",
  },
  {
    title: "Confidential",
    icon: faLock,
    description:
      "All information shared is treated with full confidentiality",
  },
];

const faqItems = [
  {
    question: "How do I get started?",
    answer:
      "Simply fill the form above or call us. We'll schedule a free consultation to understand your needs.",
  },
  {
    question: "Do I need to visit your office?",
    answer:
      "No. We work fully online. Documents can be shared securely via email or our secure portal.",
  },
  {
    question: "How long does compliance setup take?",
    answer:
      "Most setups are completed within 3-7 business days depending on the service.",
  },
  {
    question: "Do you offer monthly retainer services?",
    answer:
      "Yes. Most clients work with us on a monthly retainer for ongoing compliance management.",
  },
];

const getWhatsappUrl = (phone) =>
  `https://wa.me/${phone.replace(/[^\d]/g, "")}?text=${encodeURIComponent(
    "Hello ARP Associate Services, I would like to discuss my compliance requirements."
  )}`;

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const whatsappUrl = getWhatsappUrl(contactData.phone);

  return (
    <PageShell>
      <HeroSection>
        <Inner>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <HeroLabel as={motion.p} custom={0} variants={fadeIn}>
              Get in Touch
            </HeroLabel>
            <HeroTitle as={motion.h1} custom={0} variants={fadeUp}>
              Let&apos;s Talk Compliance
            </HeroTitle>
            <HeroSubtext as={motion.p} custom={1} variants={fadeUp}>
              Have a question? Need a quote? We respond within 24 hours.
            </HeroSubtext>
          </motion.div>
        </Inner>
      </HeroSection>

      <LeadContactSection />

      <TrustSection>
        <Inner>
          <SectionIntro
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
          >
            <QuickLabel>Why Contact Us</QuickLabel>
            <SectionTitle>Fast, free, and confidential support from the first conversation.</SectionTitle>
          </SectionIntro>

          <FeatureGrid
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {trustFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                as={motion.div}
                custom={index}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <motion.div
                  custom={index}
                  variants={scaleIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  <FeatureIcon>
                    <FontAwesomeIcon icon={feature.icon} />
                  </FeatureIcon>
                </motion.div>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureText>{feature.description}</FeatureText>
              </FeatureCard>
            ))}
          </FeatureGrid>
        </Inner>
      </TrustSection>

      <MapSection>
        <Inner>
          <MapHeader
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
          >
            <QuickLabel>Find Us</QuickLabel>
            <SectionTitle>Visit our Hyderabad office or reach out remotely from anywhere.</SectionTitle>
          </MapHeader>

          <MapSurface
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeIn}
          >
            <motion.div variants={lineGrow} initial="hidden" whileInView="visible" viewport={viewport}>
              <MapFrame />
            </motion.div>
            <iframe
              title="ARP Associate Services location map"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                contactData.mapQuery
              )}&z=16&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapSurface>

          <MapCaption
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
          >
            {contactData.address}
            <DirectionsLink
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                contactData.mapQuery
              )}`}
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
            </DirectionsLink>
          </MapCaption>
        </Inner>
      </MapSection>

      <FaqSection>
        <Inner>
          <SectionIntro
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
          >
            <QuickLabel>Quick FAQ</QuickLabel>
            <SectionTitle>Answers to the questions we hear most often.</SectionTitle>
          </SectionIntro>

          <FaqGrid>
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;

              return (
                <FaqCard
                  key={item.question}
                  as={motion.div}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  variants={fadeUp}
                >
                  <FaqQuestion
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    {item.question}
                    <span>{isOpen ? "−" : "+"}</span>
                  </FaqQuestion>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <FaqAnswer
                        as={motion.div}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p>{item.answer}</p>
                      </FaqAnswer>
                    )}
                  </AnimatePresence>
                </FaqCard>
              );
            })}
          </FaqGrid>
        </Inner>
      </FaqSection>

      <CtaSection>
        <Inner>
          <CtaBanner>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              variants={revealFromMask}
            >
              <CtaHeading>Still Have Questions?</CtaHeading>
            </motion.div>
            <CtaSubtext
              as={motion.p}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              custom={0}
              variants={fadeUp}
            >
              Our team is happy to walk you through everything.
            </CtaSubtext>
            <CtaActions
              as={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              custom={1}
              variants={fadeUp}
            >
              <PrimaryCta
                as={motion.a}
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                animate={floatAnimation.animate}
                whileHover={{ scale: 1.02 }}
              >
                WhatsApp Us Now &rarr;
              </PrimaryCta>
              <SecondaryCta href={`mailto:${contactData.email}`}>
                Or Email Us
              </SecondaryCta>
            </CtaActions>
          </CtaBanner>
        </Inner>
      </CtaSection>
    </PageShell>
  );
};

export default ContactPage;
