import { motion } from "framer-motion";
import { fadeUp } from "../../animations/animations";
import {
  HeroWrap,
  HeroBg,
  Label,
  Heading,
  Sub,
  ScrollArrow,
} from "./AboutHero.styles";

const chars = "Built on Trust. Driven by Compliance.".split("");

const AboutHero = () => (
  <HeroWrap>
    <HeroBg />
    <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible">
      <Label>Our Story</Label>
    </motion.div>

    <Heading>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.4,
            delay: 0.3 + i * 0.025,
            ease: "easeOut",
          }}
          style={{ display: char === " " ? "inline" : "inline-block" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Heading>

    <motion.div variants={fadeUp} custom={3} initial="hidden" animate="visible">
      <Sub>
        ARP Associate Services was founded with one mission: make financial
        compliance simple, reliable, and stress-free for every business.
      </Sub>
    </motion.div>

    <ScrollArrow
      as={motion.div}
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
    >
      ↓
    </ScrollArrow>
  </HeroWrap>
);

export default AboutHero;
