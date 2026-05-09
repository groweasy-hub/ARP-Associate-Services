import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  slideRight,
  scaleIn,
  staggerContainer,
} from "../../animations/animations";
import { contactData } from "../../data/data";
import {
  Wrap,
  Card,
  IconBox,
  CardTitle,
  CardText,
  SocialRow,
  SocialLink,
} from "./ContactInfo.styles";

const ContactInfo = () => (
  <Wrap
    as={motion.div}
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    {[
      {
        icon: faPhone,
        title: "Call Us",
        lines: [contactData.phone, "Mon-Sat: 9 AM - 7 PM"],
        href: `tel:${contactData.phone}`,
      },
      {
        icon: faEnvelope,
        title: "Email Us",
        lines: [contactData.email, "We reply within 24 hours"],
        href: `mailto:${contactData.email}`,
      },
      {
        icon: faLocationDot,
        title: "Visit Us",
        lines: [...contactData.addressLines, `GSTIN: ${contactData.gstin}`],
        href: null,
      },
    ].map((item, i) => (
      <Card key={item.title} as={motion.div} variants={slideRight} custom={i}>
        <IconBox as={motion.div} variants={scaleIn} custom={i}>
          <FontAwesomeIcon icon={item.icon} />
        </IconBox>
        <div>
          <CardTitle>{item.title}</CardTitle>
          {item.lines.map((line, index) =>
            item.href && index === 0 ? (
              <CardText key={line} as="a" href={item.href}>
                {line}
              </CardText>
            ) : (
              <CardText key={line}>{line}</CardText>
            )
          )}
        </div>
      </Card>
    ))}

    <Card as={motion.div} variants={slideRight} custom={3}>
      <CardTitle style={{ marginBottom: "0.75rem" }}>Follow Us</CardTitle>
      <SocialRow>
        {[
          { icon: faWhatsapp, href: "https://wa.me/917013785840", label: "WhatsApp" },
          { icon: faFacebook, href: "#", label: "Facebook" },
          { icon: faLinkedin, href: "#", label: "LinkedIn" },
        ].map((social) => (
          <SocialLink
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            whileHover={{ y: -4, scale: 1.1 }}
            as={motion.a}
            transition={{ duration: 0.2 }}
          >
            <FontAwesomeIcon icon={social.icon} />
          </SocialLink>
        ))}
      </SocialRow>
    </Card>
  </Wrap>
);

export default ContactInfo;
