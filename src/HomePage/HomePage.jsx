import "./HomePage.scss";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WorkIcon from "@mui/icons-material/Work";
import BoyIcon from "@mui/icons-material/Boy";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};

const AnimatedSection = ({ children }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

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

const rightAnimation = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const leftAnimation = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

export const HomePage = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return (
    <div className="home-page">
      <div className="home-page__flex-box-skills">
        <div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={leftAnimation}
            transition={{ duration: 0.7 }}
          >
            <p className="home-page__welcome-text">Welcome!</p>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={leftAnimation}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <NavLink
              to="/about-me"
              className="home-page__box-skill"
              style={{ background: "#ef601e", height: "322px" }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {isHovered ? (
                <AccessibilityNewIcon
                  style={{
                    fontSize: "50px",
                    color: "white",
                    marginTop: "15px",
                  }}
                />
              ) : (
                <BoyIcon
                  style={{
                    fontSize: "55px",
                    color: "white",
                    marginTop: "15px",
                  }}
                />
              )}
              <p>About me</p>
            </NavLink>
          </motion.div>
        </div>
        <div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={leftAnimation}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <NavLink
              to="/my-skills"
              className="home-page__box-skill"
              style={{ background: "#d6e8f7" }}
            >
              <AutoAwesomeMosaicIcon
                style={{
                  fontSize: "50px",
                  color: "#caaacd",
                  marginTop: "15px",
                }}
              />
              <p style={{ color: "#caaacd" }}>My skills</p>
            </NavLink>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={leftAnimation}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <NavLink
              to="/my-skills"
              className="home-page__box-skill"
              style={{ background: "#caaacd" }}
            >
              <AutoAwesomeMosaicIcon
                style={{
                  fontSize: "50px",
                  color: "#e8cace",
                  marginTop: "15px",
                }}
              />
              <p style={{ color: "#fdf3dd" }}>My skills</p>
            </NavLink>
          </motion.div>
        </div>
        <div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={rightAnimation}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <NavLink
              to="/commercial-projects"
              className="home-page__box-skill"
              style={{ background: "#cb962e" }}
            >
              <WorkIcon
                style={{
                  fontSize: "50px",
                  color: "#fdf3dd",
                  marginTop: "15px",
                }}
              />
              <p style={{ color: "#fdf3dd" }}>Commercial projects</p>
            </NavLink>
          </motion.div>
          <motion.div
            ref={ref}
            initial="hidden"
            animate={hasAnimated ? "visible" : "hidden"}
            variants={rightAnimation}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            <NavLink
              to="/contact-me"
              className="home-page__box-skill"
              style={{ background: "#f1dfb6" }}
            >
              <ContactMailIcon
                style={{
                  fontSize: "50px",
                  color: "#ef601e",
                  marginTop: "15px",
                }}
              />
              <p style={{ color: "#ef601e" }}>Contsct me</p>
            </NavLink>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
