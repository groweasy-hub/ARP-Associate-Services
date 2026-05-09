import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import TagChip from "../Common/TagChip";
import { slideLeft, slideRight, staggerContainer, fadeUp, scaleIn, floatAnimation } from "../../animations/animations";
import {
  Block, Inner, ContentSide, Visual, ServiceNum, LabelTag, ServiceName,
  Divider, Desc, IncludedList, BulletItem, WhoFor, TagRow, StatCard,
  StatBadge, StatText, EnquireBtn,
} from "./ServiceBlock.styles";

const ServiceBlock = ({ service, index }) => {
  const isEven = index % 2 === 0;
  return (
    <Block id={`service-${service.id}`}>
      <Inner $reverse={!isEven}>
        <ContentSide
          as={motion.div}
          variants={isEven ? slideLeft : slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ServiceNum>{service.number}</ServiceNum>
          <LabelTag>{service.label}</LabelTag>
          <ServiceName>{service.name}</ServiceName>
          <Divider />
          <Desc>{service.description}</Desc>

          <IncludedList
            as={motion.ul}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--accent)", marginBottom: "0.75rem" }}>
              What's Included
            </p>
            {service.included.map((item, i) => (
              <BulletItem as={motion.li} key={i} variants={fadeUp} custom={i}>
                <FontAwesomeIcon icon={faCircleCheck} style={{ color: "var(--accent)", fontSize: "0.9rem", flexShrink: 0 }} />
                {item}
              </BulletItem>
            ))}
          </IncludedList>

          <WhoFor>
            <p style={{ fontSize: "0.8rem", fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", color: "var(--muted)", marginBottom: "0.6rem" }}>
              Who Is This For
            </p>
            <TagRow
              as={motion.div}
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {service.whoFor.map((tag, i) => (
                <motion.span key={i} variants={scaleIn} custom={i}>
                  <TagChip label={tag} />
                </motion.span>
              ))}
            </TagRow>
          </WhoFor>

          <EnquireBtn as={Link} to="/contact">
            Enquire About This Service <FontAwesomeIcon icon={faArrowRight} />
          </EnquireBtn>
        </ContentSide>

        <Visual
          as={motion.div}
          variants={isEven ? slideRight : slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div style={{ width: "100%", aspectRatio: "4/3", background: "var(--surface2)", borderRadius: "var(--radius-lg)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: "5rem", opacity: 0.15, fontFamily: "var(--font-heading)", fontWeight: 800 }}>{service.number}</span>
          </div>
          <StatCard
            as={motion.div}
            variants={floatAnimation}
            animate="animate"
          >
            <StatBadge>✦</StatBadge>
            <StatText>{service.stat}</StatText>
          </StatCard>
        </Visual>
      </Inner>
    </Block>
  );
};

export default ServiceBlock;
