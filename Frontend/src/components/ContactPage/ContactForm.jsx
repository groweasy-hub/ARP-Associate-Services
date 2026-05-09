import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { fadeUp, staggerContainer, scaleIn } from "../../animations/animations";
import { contactData } from "../../data/data";
import {
  FormWrap,
  Form,
  Field,
  Label,
  Input,
  Select,
  Textarea,
  SubmitBtn,
  SuccessMsg,
  ErrorMsg,
} from "./ContactForm.styles";

const services = [
  "Accounting & Compliance",
  "Tax & Regulatory",
  "Income Tax",
  "GST Services",
  "Payroll & Statutory",
  "Business Advisory",
  "Not Sure (Let's Discuss)",
];

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = true;
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) {
      nextErrors.email = true;
    }
    if (!form.phone.trim()) nextErrors.phone = true;
    if (!form.message.trim()) nextErrors.message = true;
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("success");
  };

  return (
    <FormWrap
      as={motion.div}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <SuccessMsg
            key="success"
            as={motion.div}
            variants={scaleIn}
            initial="hidden"
            animate="visible"
          >
            <FontAwesomeIcon
              icon={faCircleCheck}
              style={{
                fontSize: "2.5rem",
                color: "var(--accent)",
                marginBottom: "1rem",
              }}
            />
            <h3>Thank you!</h3>
            <p>We&apos;ll be in touch within 24 hours.</p>
          </SuccessMsg>
        ) : (
          <Form key="form" onSubmit={handleSubmit} noValidate>
            {[
              {
                id: "name",
                label: "Full Name *",
                type: "text",
                placeholder: "Your full name",
              },
              {
                id: "email",
                label: "Email Address *",
                type: "email",
                placeholder: "you@example.com",
              },
              {
                id: "phone",
                label: "Phone Number *",
                type: "tel",
                placeholder: contactData.phone,
              },
              {
                id: "company",
                label: "Company Name",
                type: "text",
                placeholder: "Your company (optional)",
              },
            ].map((field, index) => (
              <Field key={field.id} as={motion.div} variants={fadeUp} custom={index}>
                <Label htmlFor={field.id}>{field.label}</Label>
                <Input
                  id={field.id}
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.id]}
                  onChange={(event) =>
                    setForm({ ...form, [field.id]: event.target.value })
                  }
                  $error={errors[field.id]}
                />
              </Field>
            ))}

            <Field as={motion.div} variants={fadeUp} custom={4}>
              <Label htmlFor="service">Service Interested In</Label>
              <Select
                id="service"
                value={form.service}
                onChange={(event) =>
                  setForm({ ...form, service: event.target.value })
                }
              >
                <option value="">Select Service</option>
                {services.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </Select>
            </Field>

            <Field as={motion.div} variants={fadeUp} custom={5}>
              <Label htmlFor="message">Message / Query *</Label>
              <Textarea
                id="message"
                rows={5}
                placeholder="Tell us about your requirements..."
                value={form.message}
                onChange={(event) =>
                  setForm({ ...form, message: event.target.value })
                }
                $error={errors.message}
              />
            </Field>

            {status === "error" && Object.keys(errors).length > 0 ? (
              <ErrorMsg>Please fill in all required fields correctly.</ErrorMsg>
            ) : null}

            <motion.div variants={fadeUp} custom={6}>
              <SubmitBtn
                type="submit"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Send My Enquiry &rarr;
              </SubmitBtn>
            </motion.div>
          </Form>
        )}
      </AnimatePresence>
    </FormWrap>
  );
};

export default ContactForm;
