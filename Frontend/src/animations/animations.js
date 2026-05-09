// Framer Motion animation variants — chosen to suit
// a professional financial services website:
// clean, confident, not overly flashy.

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({
    opacity: 1,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" },
  }),
};

export const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
  }),
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

export const cardHover = {
  rest: { y: 0, boxShadow: "0 4px 20px rgba(0,0,0,0.18)" },
  hover: {
    y: -8,
    boxShadow: "0 16px 40px rgba(0,0,0,0.32)",
    transition: { duration: 0.3 },
  },
};

export const pulseAnimation = {
  animate: {
    scale: [1, 1.06, 1],
    transition: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
  },
};

export const floatAnimation = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

export const revealFromMask = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 0.9, ease: "easeInOut" },
  },
};

export const counterAnimation = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.15,
      type: "spring",
      stiffness: 120,
    },
  }),
};

export const lineGrow = {
  hidden: { scaleX: 0, originX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

export const logoMarquee = {
  animate: {
    x: ["0%", "-50%"],
    transition: { duration: 18, repeat: Infinity, ease: "linear" },
  },
};
