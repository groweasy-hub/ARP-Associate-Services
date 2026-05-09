import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp, fadeIn, revealFromMask } from "../../animations/animations";
import {
  HeroWrap,
  HeroBg,
  Particles,
  Particle,
  Breadcrumb,
  Label,
  Heading,
  Sub,
  Actions,
  BtnPrimary,
  BtnGhost,
} from "./ServicesHero.styles";

const nums = ["01", "02", "03", "04", "05", "06", "07", "08"];

const ServicesHero = () => (
  <HeroWrap>
    <HeroBg />
    <Particles>
      {nums.map((n, i) => (
        <Particle
          key={n}
          as={motion.span}
          animate={{ y: [0, -18, 0], opacity: [0.04, 0.09, 0.04] }}
          transition={{
            duration: 5 + i * 0.7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
          style={{ left: `${8 + i * 12}%`, top: `${20 + (i % 3) * 25}%` }}
        >
          {n}
        </Particle>
      ))}
    </Particles>

    <motion.div variants={fadeIn} custom={0} initial="hidden" animate="visible">
      <Breadcrumb>
        <Link to="/">Home</Link> &rsaquo; Services
      </Breadcrumb>
    </motion.div>

    <motion.div variants={fadeUp} custom={1} initial="hidden" animate="visible">
      <Label>What We Offer</Label>
    </motion.div>

    <Heading variants={revealFromMask} initial="hidden" animate="visible">
      Comprehensive Financial and Compliance Services
    </Heading>

    <motion.div variants={fadeUp} custom={3} initial="hidden" animate="visible">
      <Sub>
        From accounting to GST, payroll to tax advisory, we handle it all so
        you can focus on growth.
      </Sub>
    </motion.div>

    <motion.div variants={fadeUp} custom={4} initial="hidden" animate="visible">
      <Actions>
        <BtnPrimary to="/contact">Get Free Consultation</BtnPrimary>
        <BtnGhost
          as="a"
          href="#service-accounting"
          onClick={(e) => {
            e.preventDefault();
            document
              .getElementById("service-accounting")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          View All Services ↓
        </BtnGhost>
      </Actions>
    </motion.div>
  </HeroWrap>
);

export default ServicesHero;
