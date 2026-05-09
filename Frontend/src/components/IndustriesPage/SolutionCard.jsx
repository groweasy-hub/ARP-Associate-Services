import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp } from "../../animations/animations";
import TagChip from "../Common/TagChip";
import { Card, Badge, Name, Desc, Includes, Pricing, CTA } from "./SolutionCard.styles";

const SolutionCard = ({ solution, index }) => (
  <Card
    as={motion.div}
    variants={fadeUp}
    custom={index}
    $featured={solution.featured}
    animate={
      solution.featured
        ? {
            boxShadow: [
              "0 0 0 1px rgba(var(--accent-rgb), 0.3)",
              "0 0 0 3px rgba(var(--accent-rgb), 0.15)",
              "0 0 0 1px rgba(var(--accent-rgb), 0.3)",
            ],
          }
        : undefined
    }
    transition={solution.featured ? { duration: 2.5, repeat: Infinity } : undefined}
  >
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <Name>{solution.name}</Name>
      {solution.badge && <Badge>{solution.badge}</Badge>}
    </div>
    <Desc>{solution.desc}</Desc>
    <Includes>
      {solution.includes.map((item) => (
        <TagChip key={item} label={item} />
      ))}
    </Includes>
    <Pricing>Custom Pricing Based on Scope</Pricing>
    <CTA as={Link} to="/contact">Request a Consultation →</CTA>
  </Card>
);

export default SolutionCard;
