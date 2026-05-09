import { motion } from "framer-motion";
import { howWeDoItData } from "../../data/data";
import {
  fadeUp,
  slideLeft,
  slideRight,
} from "../../animations/animations";
import {
  Section,
  Inner,
  SectionLabel,
  SectionHeading,
  Divider,
  ItemsWrapper,
  Item,
  ItemContent,
  ItemTag,
  ItemTitle,
  ItemText,
  ItemImage,
  ItemNumber,
} from "./HowWeDoIt.styles";

const revealViewport = { once: true, amount: 0.35 };

const HowWeDoIt = () => (
  <Section id="how-we-do-it">
    <Inner>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={fadeUp}
      >
        <SectionLabel>{howWeDoItData.sectionLabel}</SectionLabel>
        <SectionHeading>{howWeDoItData.heading}</SectionHeading>
        <Divider />
      </motion.div>

      <ItemsWrapper>
        {howWeDoItData.items.map((item, i) => (
          <Item key={item.id} $reverse={i % 2 !== 0}>
            <ItemContent
              as={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={i % 2 === 0 ? slideLeft : slideRight}
            >
              <ItemNumber>0{item.id}</ItemNumber>
              <ItemTag>{item.tag}</ItemTag>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemText>{item.description}</ItemText>
            </ItemContent>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={revealViewport}
              variants={i % 2 === 0 ? slideRight : slideLeft}
              style={{ borderRadius: "var(--radius-lg)", overflow: "hidden" }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ItemImage src={item.image} alt={item.title} loading="lazy" />
            </motion.div>
          </Item>
        ))}
      </ItemsWrapper>
    </Inner>
  </Section>
);

export default HowWeDoIt;
