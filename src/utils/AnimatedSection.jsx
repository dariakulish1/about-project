import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

export const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={item}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
};
