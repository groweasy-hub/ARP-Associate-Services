import { motion } from "framer-motion";
import { ToggleWrap, Pill, Option, Indicator } from "./IndustriesToggle.styles";

const IndustriesToggle = ({ mode, onChange }) => (
  <ToggleWrap>
    <Pill>
      {["industry", "solution"].map((m) => (
        <Option key={m} $active={mode === m} onClick={() => onChange(m)}>
          {m === "industry" ? "Browse by Industry" : "Browse by Solution"}
          {mode === m && (
            <Indicator
              as={motion.span}
              layoutId="toggle-indicator"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
        </Option>
      ))}
    </Pill>
  </ToggleWrap>
);

export default IndustriesToggle;
