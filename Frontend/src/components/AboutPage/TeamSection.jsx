import { motion } from "framer-motion";
import { teamData } from "../../data/teamData";
import SectionHeading from "../Common/SectionHeading";
import TagChip from "../Common/TagChip";
import { fadeUp, scaleIn, staggerContainer } from "../../animations/animations";
import { Section, Inner, Grid, Card, Avatar, Name, Designation, Qual, Tags } from "./TeamSection.styles";

const TeamSection = () => (
  <Section>
    <Inner>
      <SectionHeading label="The People" title="Meet the Team" center />
      <Grid
        as={motion.div}
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {teamData.map((member, i) => (
          <Card
            key={i}
            as={motion.div}
            variants={fadeUp}
            custom={i}
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
          >
            <Avatar as={motion.div} variants={scaleIn} custom={i}>{member.initials}</Avatar>
            <Name>{member.name}</Name>
            <Designation>{member.designation}</Designation>
            <Qual>{member.qualification}</Qual>
            <Tags>
              {member.expertise.map((e) => <TagChip key={e} label={e} />)}
            </Tags>
          </Card>
        ))}
      </Grid>
    </Inner>
  </Section>
);

export default TeamSection;
