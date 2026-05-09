import { useState, useEffect, useRef } from "react";

const useInView = (options = { threshold: 0.2, triggerOnce: true }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (options.triggerOnce) observer.disconnect();
      }
    }, { threshold: options.threshold });
    observer.observe(el);
    return () => observer.disconnect();
  }, [options.threshold, options.triggerOnce]);

  return [ref, inView];
};

export default useInView;
