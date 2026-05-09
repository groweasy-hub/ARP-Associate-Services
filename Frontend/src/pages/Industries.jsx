import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IndustriesHero from "../components/IndustriesPage/IndustriesHero";
import IndustriesToggle from "../components/IndustriesPage/IndustriesToggle";
import IndustryCard from "../components/IndustriesPage/IndustryCard";
import SolutionCard from "../components/IndustriesPage/SolutionCard";
import ComplianceCalendar from "../components/IndustriesPage/ComplianceCalendar";
import IndustryTestimonial from "../components/IndustriesPage/IndustryTestimonial";
import IndustriesCTA from "../components/IndustriesPage/IndustriesCTA";
import { industriesData } from "../data/industriesData";
import { solutionsData } from "../data/solutionsData";
import { staggerContainer } from "../animations/animations";
import styled from "styled-components";

const GridSection = styled.section`
  padding: 4rem 5% 6rem;
  background: var(--bg);
`;

const Inner = styled.div`
  max-width: var(--max-w);
  margin: 0 auto;
`;

const IndustryGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

const SolutionGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const IndustriesPage = () => {
  const [mode, setMode] = useState("industry");

  return (
    <main>
      <IndustriesHero />
      <IndustriesToggle mode={mode} onChange={setMode} />

      <GridSection>
        <Inner>
          <AnimatePresence mode="wait">
            {mode === "industry" ? (
              <motion.div
                key="industry"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <IndustryGrid
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {industriesData.map((industry, index) => (
                    <IndustryCard
                      key={industry.id}
                      industry={industry}
                      index={index}
                    />
                  ))}
                </IndustryGrid>
              </motion.div>
            ) : (
              <motion.div
                key="solution"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SolutionGrid
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                >
                  {solutionsData.map((solution, index) => (
                    <SolutionCard
                      key={solution.id}
                      solution={solution}
                      index={index}
                    />
                  ))}
                </SolutionGrid>
              </motion.div>
            )}
          </AnimatePresence>
        </Inner>
      </GridSection>

      <ComplianceCalendar />
      <IndustryTestimonial />
      <IndustriesCTA />
    </main>
  );
};

export default IndustriesPage;
