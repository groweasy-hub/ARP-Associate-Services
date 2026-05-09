import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { servicesData } from "../../data/servicesData";
import { TabBar, TabInner, Tab, ActivePill } from "./ServicesTabs.styles";

const ServicesTabs = () => {
  const [active, setActive] = useState(servicesData[0].id);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setActive(id);
    document.getElementById(`service-${id}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <TabBar
      $sticky={sticky}
      as={motion.nav}
      initial={{ y: -20, opacity: 0 }}
      animate={sticky ? { y: 0, opacity: 1 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <TabInner>
        {servicesData.map((s) => (
          <Tab key={s.id} $active={active === s.id} onClick={() => scrollTo(s.id)}>
            {s.name}
            {active === s.id && (
              <ActivePill as={motion.span} layoutId="tab-pill" transition={{ type: "spring", stiffness: 300, damping: 30 }} />
            )}
          </Tab>
        ))}
      </TabInner>
    </TabBar>
  );
};

export default ServicesTabs;
