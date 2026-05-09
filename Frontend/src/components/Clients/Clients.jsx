import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { clientsData } from "../../data/data";
import {
  fadeUp,
  scaleIn,
  logoMarquee,
} from "../../animations/animations";
import {
  Section,
  Inner,
  SectionLabel,
  SectionHeading,
  Divider,
  Grid,
  Card,
  QuoteIcon,
  QuoteText,
  AuthorRow,
  Avatar,
  AuthorName,
  AuthorRole,
  Stars,
  LogoTrack,
  LogoWrapper,
  LogoItem,
  LogoText,
} from "./Clients.styles";

const revealViewport = { once: true, amount: 0.35 };

const Clients = () => (
  <Section id="clients">
    <Inner>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={fadeUp}
      >
        <SectionLabel>{clientsData.sectionLabel}</SectionLabel>
        <SectionHeading>{clientsData.heading}</SectionHeading>
        <Divider />
      </motion.div>

      <Grid>
        {clientsData.testimonials.map((t, i) => (
          <Card
            key={t.id}
            as={motion.div}
            variants={scaleIn}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <QuoteIcon>
              <FontAwesomeIcon icon={faQuoteLeft} />
            </QuoteIcon>
            <Stars>
              {[...Array(5)].map((_, si) => (
                <FontAwesomeIcon key={si} icon={faStar} />
              ))}
            </Stars>
            <QuoteText>{t.text}</QuoteText>
            <AuthorRow>
              <Avatar>{t.avatar}</Avatar>
              <div>
                <AuthorName>{t.name}</AuthorName>
                <AuthorRole>{t.role}</AuthorRole>
              </div>
            </AuthorRow>
          </Card>
        ))}
      </Grid>

      <LogoTrack>
        <LogoWrapper as={motion.div} variants={logoMarquee} animate="animate">
          {[...clientsData.logos, ...clientsData.logos].map((logo, i) => (
            <LogoItem key={i} style={{ background: logo.bg }}>
              <LogoText style={{ color: logo.color }}>{logo.label}</LogoText>
            </LogoItem>
          ))}
        </LogoWrapper>
      </LogoTrack>
    </Inner>
  </Section>
);

export default Clients;
