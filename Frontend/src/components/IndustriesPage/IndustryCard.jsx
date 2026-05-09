import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStore,
  faLaptopCode,
  faIndustry,
  faHospital,
  faBuilding,
  faGraduationCap,
  faUtensils,
  faCartShopping,
  faTruck,
  faBriefcase,
  faHandHoldingHeart,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import TagChip from "../Common/TagChip";
import { scaleIn } from "../../animations/animations";
import { Card, IconWrap, Name, Desc, Tags, ViewLink } from "./IndustryCard.styles";

library.add(
  faStore,
  faLaptopCode,
  faIndustry,
  faHospital,
  faBuilding,
  faGraduationCap,
  faUtensils,
  faCartShopping,
  faTruck,
  faBriefcase,
  faHandHoldingHeart,
  faRocket
);

const iconMap = {
  "fa-store": faStore,
  "fa-laptop-code": faLaptopCode,
  "fa-industry": faIndustry,
  "fa-hospital": faHospital,
  "fa-building": faBuilding,
  "fa-graduation-cap": faGraduationCap,
  "fa-utensils": faUtensils,
  "fa-cart-shopping": faCartShopping,
  "fa-truck": faTruck,
  "fa-briefcase": faBriefcase,
  "fa-hand-holding-heart": faHandHoldingHeart,
  "fa-rocket": faRocket,
};

const IndustryCard = ({ industry, index }) => {
  const navigate = useNavigate();

  const goToContact = () => navigate("/contact");

  return (
    <Card
      as={motion.div}
      variants={scaleIn}
      custom={index}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      role="link"
      tabIndex={0}
      onClick={goToContact}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          goToContact();
        }
      }}
    >
      <IconWrap>
        <FontAwesomeIcon icon={iconMap[industry.icon]} />
      </IconWrap>
      <Name>{industry.name}</Name>
      <Desc>{industry.desc}</Desc>
      <Tags>
        {industry.tags.map((tag) => (
          <TagChip key={tag} label={tag} />
        ))}
      </Tags>
      <ViewLink>
        Talk to an Advisor{" "}
        <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "0.8rem" }} />
      </ViewLink>
    </Card>
  );
};

export default IndustryCard;
