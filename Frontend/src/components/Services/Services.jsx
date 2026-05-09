import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faCalculator,
  faFileInvoice,
  faLandmark,
  faPercent,
  faUsers,
  faChartLine,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { servicesData } from "../../data/data";
import { fadeUp, scaleIn } from "../../animations/animations";
import {
  ServicesSection,
  SectionLabel,
  SectionHeading,
  Divider,
  Grid,
  Card,
  CardIcon,
  CardTitle,
  CardText,
  CardArrow,
} from "./Services.styles";

const iconMap = {
  "fa-calculator": faCalculator,
  "fa-file-invoice": faFileInvoice,
  "fa-landmark": faLandmark,
  "fa-percent": faPercent,
  "fa-users": faUsers,
  "fa-chart-line": faChartLine,
};

const revealViewport = { once: true, amount: 0.35 };

const Services = () => {
  const navigate = useNavigate();

  const goToServicesPage = () => navigate("/services");

  return (
    <ServicesSection id="services">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={fadeUp}
      >
        <SectionLabel>{servicesData.sectionLabel}</SectionLabel>
        <SectionHeading>{servicesData.heading}</SectionHeading>
        <Divider />
      </motion.div>

      <Grid>
        {servicesData.cards.map((card, i) => (
          <Card
            key={card.id}
            as={motion.div}
            variants={scaleIn}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={revealViewport}
            whileHover={{ y: -8, transition: { duration: 0.25 } }}
            role="link"
            tabIndex={0}
            onClick={goToServicesPage}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                goToServicesPage();
              }
            }}
          >
            <CardIcon>
              <FontAwesomeIcon icon={iconMap[card.icon]} />
            </CardIcon>
            <CardTitle>{card.title}</CardTitle>
            <CardText>{card.description}</CardText>
            <CardArrow>
              <FontAwesomeIcon icon={faArrowRight} />
            </CardArrow>
          </Card>
        ))}
      </Grid>
    </ServicesSection>
  );
};

export default Services;
