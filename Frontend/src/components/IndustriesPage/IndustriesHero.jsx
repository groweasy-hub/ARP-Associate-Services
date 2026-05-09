import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  fadeUp,
  slideLeft,
  scaleIn,
  staggerContainer,
} from "../../animations/animations";
import {
  HeroWrap,
  HeroBg,
  Inner,
  Left,
  Right,
  Breadcrumb,
  Label,
  Heading,
  Sub,
  BtnPrimary,
  MiniGrid,
  MiniCard,
  MiniIcon,
  MiniName,
} from "./IndustriesHero.styles";

const previews = [
  { icon: "Retail", name: "Retail" },
  { icon: "Tech", name: "Technology" },
  { icon: "MFG", name: "Manufacturing" },
  { icon: "HC", name: "Healthcare" },
];

const IndustriesHero = () => (
  <HeroWrap>
    <HeroBg />
    <Inner>
      <Left as={motion.div} variants={slideLeft} initial="hidden" animate="visible">
        <motion.div variants={fadeUp} custom={0} initial="hidden" animate="visible">
          <Breadcrumb>
            <Link to="/">Home</Link> &rsaquo; Industries &amp; Solutions
          </Breadcrumb>
        </motion.div>
        <motion.div variants={fadeUp} custom={1} initial="hidden" animate="visible">
          <Label>Who We Serve</Label>
        </motion.div>
        <motion.div variants={fadeUp} custom={2} initial="hidden" animate="visible">
          <Heading>Solutions Built for Every Industry</Heading>
        </motion.div>
        <motion.div variants={fadeUp} custom={3} initial="hidden" animate="visible">
          <Sub>
            Whether you are a startup, a trading firm, a manufacturer, or a
            professional services company, we have a compliance solution built
            for your workflow.
          </Sub>
        </motion.div>
        <motion.div variants={fadeUp} custom={4} initial="hidden" animate="visible">
          <BtnPrimary to="/contact">Find My Solution →</BtnPrimary>
        </motion.div>
      </Left>

      <Right>
        <MiniGrid
          as={motion.div}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {previews.map((p, i) => (
            <MiniCard
              key={p.name}
              as={motion.div}
              variants={scaleIn}
              custom={i}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
            >
              <MiniIcon>{p.icon}</MiniIcon>
              <MiniName>{p.name}</MiniName>
            </MiniCard>
          ))}
        </MiniGrid>
      </Right>
    </Inner>
  </HeroWrap>
);

export default IndustriesHero;
