import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { fadeUp } from "../../animations/animations";
import { Panel, PanelInner, CloseBtn, PanelTitle, Col, ColTitle, List, Item, PackRow, PackLabel, PackName, CTA } from "./IndustryDeepDive.styles";

const IndustryDeepDive = ({ industry, onClose }) => (
  <AnimatePresence>
    {industry && (
      <Panel
        as={motion.div}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <PanelInner
          as={motion.div}
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <PanelTitle as={motion.h3} variants={fadeUp}>{industry.name}</PanelTitle>
            <CloseBtn onClick={onClose}>
              <FontAwesomeIcon icon={faTimes} />
            </CloseBtn>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            <Col as={motion.div} variants={fadeUp}>
              <ColTitle>Common Challenges</ColTitle>
              <List>
                {industry.challenges.map((c, i) => (
                  <Item key={i}><FontAwesomeIcon icon={faCircleCheck} style={{ color: "var(--muted)" }} />{c}</Item>
                ))}
              </List>
            </Col>
            <Col as={motion.div} variants={fadeUp}>
              <ColTitle>How ABP Helps</ColTitle>
              <List>
                {industry.howWeHelp.map((h, i) => (
                  <Item key={i}><FontAwesomeIcon icon={faCircleCheck} style={{ color: "var(--accent)" }} />{h}</Item>
                ))}
              </List>
            </Col>
          </div>

          <PackRow as={motion.div} variants={fadeUp}>
            <PackLabel>Recommended Pack:</PackLabel>
            <PackName>{industry.pack}</PackName>
            <CTA as={Link} to="/contact">Get Started for {industry.name} →</CTA>
          </PackRow>
        </PanelInner>
      </Panel>
    )}
  </AnimatePresence>
);

export default IndustryDeepDive;
