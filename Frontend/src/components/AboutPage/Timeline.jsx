import { motion } from "framer-motion";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFlag, faFileInvoice, faUsers, faTrophy, faLaptop, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { timelineData } from "../../data/timelineData";
import SectionHeading from "../Common/SectionHeading";
import { slideLeft, slideRight, scaleIn } from "../../animations/animations";
import { Section, Inner, Line, Items, Item, YearBadge, Card, CardTitle, CardDesc } from "./Timeline.styles";

library.add(faFlag, faFileInvoice, faUsers, faTrophy, faLaptop, faChartLine);
const Timeline = () => (
  <Section>
    <Inner>
      <SectionHeading label="Our Journey" title="How We Got Here" center />
      <Items>
        <Line
          as={motion.div}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        {timelineData.map((item, i) => {
          const isLeft = i % 2 === 0;
          return (
            <Item key={i} $left={isLeft}>
              <Card
                as={motion.div}
                variants={isLeft ? slideLeft : slideRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <CardTitle>{item.title}</CardTitle>
                <CardDesc>{item.desc}</CardDesc>
              </Card>
              <YearBadge
                as={motion.div}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {item.year}
              </YearBadge>
            </Item>
          );
        })}
      </Items>
    </Inner>
  </Section>
);

export default Timeline;
