import { motion } from "framer-motion";
import { complianceCalendar } from "../../data/solutionsData";
import SectionHeading from "../Common/SectionHeading";
import { scaleIn, lineGrow, staggerContainer, fadeUp } from "../../animations/animations";
import {
  Section, Inner, ScrollWrap, Line, MonthCard, MonthName, DueItem,
} from "./ComplianceCalendar.styles";

const typeColor = { gst: "var(--accent)", tax: "#6ef0c0", payroll: "#f0c06e" };

const ComplianceCalendar = () => (
  <Section>
    <Inner>
      <SectionHeading label="Stay Ahead" title="Compliance Calendar" subtitle="Key due dates across the financial year — never miss a deadline." center />
      <ScrollWrap>
        <Line as={motion.div} variants={lineGrow} initial="hidden" whileInView="visible" viewport={{ once: true }} />
        <motion.div
          style={{ display: "flex", gap: "1.25rem", position: "relative", zIndex: 1 }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {complianceCalendar.map((m, i) => (
            <MonthCard key={i} as={motion.div} variants={scaleIn} custom={i}>
              <MonthName>{m.month}</MonthName>
              {m.items.map((item, j) => (
                <DueItem key={j} as={motion.div} variants={fadeUp} $color={typeColor[item.type]}>
                  {item.label}
                </DueItem>
              ))}
            </MonthCard>
          ))}
        </motion.div>
      </ScrollWrap>
    </Inner>
  </Section>
);

export default ComplianceCalendar;
