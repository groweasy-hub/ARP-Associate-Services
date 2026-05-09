import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { fadeUp } from "../../animations/animations";
import styled from "styled-components";

const List = styled(motion.div)`display: flex; flex-direction: column; gap: 1rem;`;
const Item = styled(motion.div)`
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: border-color 0.3s;
  ${({ $open }) => $open && "border-color: var(--accent);"}
  ${({ $open }) => $open && "border-left: 3px solid var(--accent);"}
`;
const Question = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 1.5rem;
  background: var(--surface);
  color: var(--text);
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  gap: 1rem;
`;
const Icon = styled(motion.span)`color: var(--accent); font-size: 0.9rem; flex-shrink: 0;`;
const Answer = styled(motion.div)`
  overflow: hidden;
  background: var(--surface2);
`;
const AnswerInner = styled.p`
  padding: 1rem 1.5rem 1.25rem;
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.8;
`;

const FAQAccordion = ({ items }) => {
  const [open, setOpen] = useState(null);
  return (
    <List initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ visible: { transition: { staggerChildren: 0.08 } } }}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <Item key={i} $open={isOpen} variants={fadeUp} custom={i}>
            <Question onClick={() => setOpen(isOpen ? null : i)}>
              {item.q}
              <Icon animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25 }}>
                <FontAwesomeIcon icon={faPlus} />
              </Icon>
            </Question>
            <AnimatePresence initial={false}>
              {isOpen && (
                <Answer
                  key="answer"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <AnswerInner>{item.a}</AnswerInner>
                </Answer>
              )}
            </AnimatePresence>
          </Item>
        );
      })}
    </List>
  );
};

export default FAQAccordion;
