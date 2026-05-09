import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { contactData } from "../../data/data";
import { submitContactForm } from "../../utils/contactApi";
import {
  fadeUp,
  pulseAnimation,
  scaleIn,
  slideRight,
} from "../../animations/animations";
import {
  ContactGrid,
  ContactPanel,
  FeatureText,
  FieldWrap,
  FormCard,
  FormGrid,
  FormPanel,
  FormStatus,
  InfoCard,
  InfoCards,
  InfoDescription,
  InfoIconWrap,
  InfoLabel,
  InfoLink,
  Inner,
  MainSection,
  QuickLabel,
  SectionIntro,
  SectionTitle,
  SelectField,
  SocialCluster,
  SocialLink,
  SubmitButton,
  TextArea,
  TextField,
} from "../../pages/ContactPage.styles";

const viewport = { once: true, amount: 0.2 };

const serviceOptions = [
  "Accounting & Compliance",
  "Tax & Regulatory",
  "Income Tax",
  "GST Services",
  "Payroll & Statutory",
  "Business Advisory",
  "Not Sure (Let's Discuss)",
];

const infoCards = [
  {
    title: "Call Us",
    icon: faPhone,
    primary: contactData.phone,
    href: `tel:${contactData.phone}`,
    secondary: "Mon-Sat: 9 AM - 7 PM",
  },
  {
    title: "Email Us",
    icon: faEnvelope,
    primary: contactData.email,
    href: `mailto:${contactData.email}`,
    secondary: "We reply within 24 hours",
  },
  {
    title: "Visit Us",
    icon: faLocationDot,
    primary: contactData.addressLines[0],
    secondary: `${contactData.addressLines[1]}, ${contactData.addressLines[2]}`,
    tertiary: `${contactData.addressLines[3]} | GSTIN: ${contactData.gstin}`,
  },
];

const brandIconMap = {
  WhatsApp: faWhatsapp,
  Facebook: faFacebookF,
  LinkedIn: faLinkedinIn,
};

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  companyName: "",
  service: "",
  message: "",
};

const getWhatsappUrl = (phone) =>
  `https://wa.me/${phone.replace(/[^\d]/g, "")}?text=${encodeURIComponent(
    "Hello ARP Associate Services, I would like to discuss my compliance requirements."
  )}`;

const resolveSocialUrl = (social) => {
  if (social.label === "WhatsApp") return getWhatsappUrl(contactData.phone);
  return social.url && social.url !== "#" ? social.url : null;
};

const LeadContactSection = ({
  id,
  quickLabel = "Contact Form",
  title = "Tell us what you need and we'll take it from there.",
  padded = true,
}) => {
  const [formValues, setFormValues] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const sectionStyle = padded ? undefined : { paddingBottom: "6rem" };

  const whatsappUrl = useMemo(() => getWhatsappUrl(contactData.phone), []);

  const handleChange = (field) => (event) => {
    setFormValues((current) => ({
      ...current,
      [field]: event.target.value,
    }));

    setErrors((current) => {
      if (!current[field]) return current;
      const next = { ...current };
      delete next[field];
      return next;
    });

    if (status !== "idle") {
      setStatus("idle");
      setStatusMessage("");
    }
  };

  const validateForm = () => {
    const nextErrors = {};

    if (!formValues.fullName.trim()) nextErrors.fullName = true;
    if (!formValues.email.trim() || !/\S+@\S+\.\S+/.test(formValues.email)) {
      nextErrors.email = true;
    }
    if (!formValues.phone.trim()) nextErrors.phone = true;
    if (!formValues.service) nextErrors.service = true;
    if (!formValues.message.trim()) nextErrors.message = true;

    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateForm();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("error");
      setStatusMessage("Please fill in all required fields correctly.");
      return;
    }

    setErrors({});
    setStatus("sending");
    setStatusMessage("");

    try {
      const result = await submitContactForm({
        name: formValues.fullName.trim(),
        email: formValues.email.trim(),
        phone: formValues.phone.trim(),
        company: formValues.companyName.trim(),
        service: formValues.service,
        message: formValues.message.trim(),
      });

      setFormValues(initialForm);

      if (result?.emailSent === false) {
        setStatus("warning");
        setStatusMessage(
          result.message ||
            "Your enquiry was saved, but the acknowledgement email could not be sent right now."
        );
        return;
      }

      setStatus("success");
      setStatusMessage("Thank you! We've sent a confirmation email and will reach out within 24 hours.");
    } catch (error) {
      setStatus("error");
      setStatusMessage(
        error.message || "We could not send your enquiry right now. Please try again."
      );
    }
  };

  return (
    <MainSection id={id} style={sectionStyle}>
      <Inner>
        <SectionIntro
          as={motion.div}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
        >
          <QuickLabel>{quickLabel}</QuickLabel>
          <SectionTitle>{title}</SectionTitle>
        </SectionIntro>

        <ContactGrid>
          <FormPanel
            as={motion.div}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
          >
            <FormCard
              as={motion.form}
              onSubmit={handleSubmit}
              animate={
                status === "error"
                  ? { x: [0, -8, 8, -6, 6, 0] }
                  : { x: 0 }
              }
              transition={{ duration: 0.35 }}
            >
              <FormGrid>
                <FieldWrap
                  as={motion.div}
                  custom={0}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  <TextField
                    type="text"
                    placeholder="Full Name *"
                    value={formValues.fullName}
                    onChange={handleChange("fullName")}
                    $invalid={errors.fullName}
                    disabled={status === "sending"}
                  />
                </FieldWrap>

                <FieldWrap
                  as={motion.div}
                  custom={1}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  <TextField
                    type="email"
                    placeholder="Email Address *"
                    value={formValues.email}
                    onChange={handleChange("email")}
                    $invalid={errors.email}
                    disabled={status === "sending"}
                  />
                </FieldWrap>

                <FieldWrap
                  as={motion.div}
                  custom={2}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  <TextField
                    type="tel"
                    placeholder="Phone Number *"
                    value={formValues.phone}
                    onChange={handleChange("phone")}
                    $invalid={errors.phone}
                    disabled={status === "sending"}
                  />
                </FieldWrap>

                <FieldWrap
                  as={motion.div}
                  custom={3}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  <TextField
                    type="text"
                    placeholder="Company Name"
                    value={formValues.companyName}
                    onChange={handleChange("companyName")}
                    disabled={status === "sending"}
                  />
                </FieldWrap>

                <FieldWrap
                  as={motion.div}
                  custom={4}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  <SelectField
                    value={formValues.service}
                    onChange={handleChange("service")}
                    $invalid={errors.service}
                    disabled={status === "sending"}
                  >
                    <option value="">Select Service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </SelectField>
                </FieldWrap>

                <FieldWrap
                  as={motion.div}
                  custom={5}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  style={{ gridColumn: "1 / -1" }}
                >
                  <TextArea
                    rows={6}
                    placeholder="Message / Query *"
                    value={formValues.message}
                    onChange={handleChange("message")}
                    $invalid={errors.message}
                    disabled={status === "sending"}
                  />
                </FieldWrap>
              </FormGrid>

              <motion.div
                custom={6}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <SubmitButton
                  type="submit"
                  disabled={status === "sending"}
                  as={motion.button}
                  whileHover={
                    status === "sending" ? undefined : { scale: 1.02, opacity: 0.9 }
                  }
                  whileTap={status === "sending" ? undefined : { scale: 0.99 }}
                  animate={pulseAnimation.animate}
                >
                  {status === "sending" ? "Sending..." : "Send My Enquiry ->"}
                </SubmitButton>
              </motion.div>

              <AnimatePresence>
                {(status === "success" || status === "warning") && statusMessage ? (
                  <FormStatus
                    $tone={status === "warning" ? "warning" : "success"}
                    as={motion.div}
                    key={status}
                    initial={{ opacity: 0, scale: 0.92, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -8 }}
                    transition={{ duration: 0.45 }}
                  >
                    <FontAwesomeIcon icon={status === "warning" ? faEnvelope : faCircleCheck} />
                    {statusMessage}
                  </FormStatus>
                ) : null}
                {status === "error" && statusMessage ? (
                  <FormStatus
                    $tone="error"
                    as={motion.div}
                    key="error"
                    initial={{ opacity: 0, scale: 0.92, y: 12 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -8 }}
                    transition={{ duration: 0.45 }}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                    {statusMessage}
                  </FormStatus>
                ) : null}
              </AnimatePresence>
            </FormCard>
          </FormPanel>

          <ContactPanel>
            <InfoCards
              as={motion.div}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {infoCards.map((card, index) => (
                <InfoCard
                  key={card.title}
                  as={motion.div}
                  custom={index}
                  variants={slideRight}
                  whileHover={{ y: -7 }}
                  transition={{ duration: 0.25 }}
                >
                  <motion.div
                    custom={index}
                    variants={scaleIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={viewport}
                  >
                    <InfoIconWrap>
                      <FontAwesomeIcon icon={card.icon} />
                    </InfoIconWrap>
                  </motion.div>
                  <div>
                    <InfoLabel>{card.title}</InfoLabel>
                    {card.href ? (
                      <InfoLink href={card.href}>{card.primary}</InfoLink>
                    ) : (
                      <InfoDescription>{card.primary}</InfoDescription>
                    )}
                    <InfoDescription>{card.secondary}</InfoDescription>
                    {card.tertiary ? <InfoDescription>{card.tertiary}</InfoDescription> : null}
                  </div>
                </InfoCard>
              ))}

              <InfoCard
                as={motion.div}
                custom={3}
                variants={slideRight}
                whileHover={{ y: -7 }}
                transition={{ duration: 0.25 }}
              >
                <div>
                  <InfoLabel>Social</InfoLabel>
                  <FeatureText>
                    Stay connected on your preferred channel.
                  </FeatureText>
                  <SocialCluster>
                    {contactData.socials.map((social) => {
                      const url = resolveSocialUrl(social);
                      const icon = brandIconMap[social.label];

                      return (
                        <SocialLink
                          key={social.label}
                          as={motion.a}
                          href={url || whatsappUrl}
                          aria-label={social.label}
                          whileHover={{
                            y: [0, -5, 0],
                            scale: 1.1,
                            transition: { duration: 0.25 },
                          }}
                          {...(url ? { target: "_blank", rel: "noreferrer" } : {})}
                        >
                          <FontAwesomeIcon icon={icon} />
                        </SocialLink>
                      );
                    })}
                  </SocialCluster>
                </div>
              </InfoCard>
            </InfoCards>
          </ContactPanel>
        </ContactGrid>
      </Inner>
    </MainSection>
  );
};

export default LeadContactSection;
