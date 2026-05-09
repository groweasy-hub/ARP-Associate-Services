import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faComments, faFolderOpen, faGears, faChartBar, faHeadset } from "@fortawesome/free-solid-svg-icons";
import { processSteps } from "../../data/servicesData";
import SectionHeading from "../Common/SectionHeading";
import { fadeUp, scaleIn, lineGrow, staggerContainer } from "../../animations/animations";
import {
  Section, Inner, Timeline, Line, Steps, Step, StepCircle, StepContent, StepTitle, StepDesc,
} from "./ProcessTimeline.styles";

library.add(faComments, faFolderOpen, faGears, faChartBar, faHeadset);

const iconMap = {
  "fa-comments": faComments,
  "fa-folder-open": faFolderOpen,
  "fa-gears": faGears,
  "fa-chart-bar": faChartBar,
  "fa-headset": faHeadset,
};

const ProcessTimeline = () => (
  <Section>
    <Inner>
      <SectionHeading
        label="How We Work"
        title="Our Process"
        subtitle="A simple, transparent 5-step process from consultation to ongoing support."
        center
      />
      <Timeline>
        <Line
          as={motion.div}
          variants={lineGrow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
        <Steps
          as={motion.div}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {processSteps.map((step, i) => (
            <Step key={i} as={motion.div} variants={fadeUp} custom={i}>
              <StepCircle as={motion.div} variants={scaleIn} custom={i}>
                <FontAwesomeIcon icon={iconMap[step.icon]} />
              </StepCircle>
              <StepContent>
                <StepTitle>{step.title}</StepTitle>
                <StepDesc>{step.desc}</StepDesc>
              </StepContent>
            </Step>
          ))}
        </Steps>
      </Timeline>
    </Inner>
  </Section>
);

export default ProcessTimeline;
