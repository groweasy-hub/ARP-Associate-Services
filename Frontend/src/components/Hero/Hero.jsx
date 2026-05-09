import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { heroData } from "../../data/data";
import {
  fadeUp,
  slideLeft,
  slideRight,
  floatAnimation,
} from "../../animations/animations";
import {
  HeroSection,
  HeroBg,
  HeroGrid,
  HeroLeft,
  HeroRight,
  Badge,
  BadgeDot,
  Heading,
  HeadingAccent,
  SubText,
  HeroActions,
  BtnPrimary,
  BtnGhost,
  TrustRow,
  TrustPill,
  VisualStack,
  HeroImageCard,
  HeroImageOverlay,
  InsightCard,
  InsightEyebrow,
  InsightTitle,
  InsightStatGrid,
  InsightStat,
  InsightNumber,
  InsightLabel,
  QuoteCard,
  QuoteIcon,
  QuoteText,
  QuoteAuthor,
} from "./Hero.styles";

const heroStats = [
  { value: "500+", label: "Businesses Supported" },
  { value: "24h", label: "Average Response Window" },
  { value: "98%", label: "On-Time Compliance Rate" },
  { value: "12+", label: "Years of Advisory Experience" },
];

const trustPoints = [
  "Accounting & Bookkeeping",
  "GST, TDS & Payroll",
  "Compliance Advisory",
];

const Hero = () => (
  <HeroSection>
    <HeroBg />
    <HeroGrid>
      <HeroLeft
        as={motion.div}
        initial="hidden"
        animate="visible"
        variants={slideLeft}
      >
        <motion.div
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="visible"
        >
          <Badge>
            <BadgeDot />
            {heroData.badge}
          </Badge>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="visible"
        >
          <Heading>
            {heroData.heading1} <br />
            <HeadingAccent>{heroData.heading2}</HeadingAccent> <br />
            {heroData.heading3}
          </Heading>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="visible"
        >
          <SubText>{heroData.description}</SubText>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="visible"
        >
          <HeroActions>
            <BtnPrimary to="/contact">{heroData.cta1}</BtnPrimary>
            <BtnGhost to="/services">
              {heroData.cta2}
              <FontAwesomeIcon
                icon={faArrowRight}
                style={{ fontSize: "0.85rem" }}
              />
            </BtnGhost>
          </HeroActions>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={4}
          initial="hidden"
          animate="visible"
        >
          <TrustRow>
            {trustPoints.map((item) => (
              <TrustPill key={item}>{item}</TrustPill>
            ))}
          </TrustRow>
        </motion.div>
      </HeroLeft>

      <HeroRight
        as={motion.div}
        variants={slideRight}
        initial="hidden"
        animate="visible"
      >
        <VisualStack>
          <motion.div variants={floatAnimation} animate="animate">
            <HeroImageCard>
              <HeroImageOverlay>
                <InsightEyebrow>Finance Operations, Simplified</InsightEyebrow>
                <InsightTitle>
                  A modern compliance partner for accounting, tax, payroll, and
                  business reporting.
                </InsightTitle>
              </HeroImageOverlay>
            </HeroImageCard>
          </motion.div>

          <InsightCard
            as={motion.div}
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="visible"
          >
            <InsightEyebrow>What Clients Value</InsightEyebrow>
            <InsightStatGrid>
              {heroStats.map((stat) => (
                <InsightStat key={stat.label}>
                  <InsightNumber>{stat.value}</InsightNumber>
                  <InsightLabel>{stat.label}</InsightLabel>
                </InsightStat>
              ))}
            </InsightStatGrid>
          </InsightCard>

          <motion.div variants={floatAnimation} animate="animate">
            <QuoteCard>
              <QuoteIcon>
                <FontAwesomeIcon icon={faQuoteLeft} />
              </QuoteIcon>
              <QuoteText>{heroData.quote.text}</QuoteText>
              <QuoteAuthor>{heroData.quote.author}</QuoteAuthor>
            </QuoteCard>
          </motion.div>
        </VisualStack>
      </HeroRight>
    </HeroGrid>
  </HeroSection>
);

export default Hero;
