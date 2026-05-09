import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { contactData, navLinks } from "../../data/data";
import {
  Foot,
  Inner,
  Top,
  BrandBlock,
  Logo,
  LogoAccent,
  TagLine,
  SectionTitle,
  NavGroup,
  NavLink,
  ContactBlock,
  ContactGroup,
  ContactRow,
  ContactIcon,
  ContactItem,
  ContactText,
  SocialRow,
  SocialLink,
  Divider,
  Bottom,
  Copy,
} from "./Footer.styles";

const brandIconMap = {
  "fa-whatsapp": faWhatsapp,
  "fa-facebook-f": faFacebookF,
  "fa-linkedin-in": faLinkedinIn,
};

const resolveSocialUrl = (social) =>
  social.url && social.url !== "#" ? social.url : undefined;

const Footer = () => (
  <Foot>
    <Inner>
      <Top>
        <BrandBlock>
          <div>
            <Logo>
              <LogoAccent>ARP</LogoAccent> Associate Services
            </Logo>

            <TagLine>
              Providing reliable accounting, tax, auditing & compliance
              solutions designed to help modern businesses grow with
              confidence.
            </TagLine>
          </div>

          <SocialRow>
            {contactData.socials.map((social) => {
              const href = resolveSocialUrl(social);

              return (
                <SocialLink
                  key={social.label}
                  href={href}
                  aria-label={social.label}
                  {...(href ? { target: "_blank", rel: "noreferrer" } : {})}
                >
                  <FontAwesomeIcon icon={brandIconMap[social.icon]} />
                </SocialLink>
              );
            })}
          </SocialRow>
        </BrandBlock>

        <NavGroup>
          <SectionTitle>Quick Links</SectionTitle>

          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path}>
              {link.label}
            </NavLink>
          ))}
        </NavGroup>

        <ContactBlock>
          <SectionTitle>Contact Info</SectionTitle>

          <ContactGroup>
            <ContactRow>
              <ContactIcon>
                <FontAwesomeIcon icon={faPhone} />
              </ContactIcon>

              <ContactItem href={`tel:${contactData.phone}`}>
                {contactData.phone}
              </ContactItem>
            </ContactRow>

            <ContactRow>
              <ContactIcon>
                <FontAwesomeIcon icon={faEnvelope} />
              </ContactIcon>

              <ContactItem href={`mailto:${contactData.email}`}>
                {contactData.email}
              </ContactItem>
            </ContactRow>

            <ContactRow>
              <ContactIcon>
                <FontAwesomeIcon icon={faLocationDot} />
              </ContactIcon>

              <ContactText as="div">
                {contactData.addressLines.map((line) => (
                  <div key={line}>{line}</div>
                ))}
                <div>GSTIN: {contactData.gstin}</div>
              </ContactText>
            </ContactRow>
          </ContactGroup>
        </ContactBlock>
      </Top>

      <Divider />

      <Bottom>
        <Copy>
          &copy; {new Date().getFullYear()} ARP Associate Services. All Rights
          Reserved.
        </Copy>

        <Copy>Powered & Secured by Kommu Tech & Marketing Pvt. Ltd.</Copy>
      </Bottom>
    </Inner>
  </Foot>
);

export default Footer;
