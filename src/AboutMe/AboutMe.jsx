import "./AboutMe.scss";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { AnimatedSection } from "../utils/AnimatedSection";
import avatar from "../img/avatar_ico.png";

export const AboutMe = () => {
  return (
    <div className="about-me">
      <AnimatedSection>
        <div className="about-me__card">
          <div className="about-me__profile">
            <img src={avatar} alt="Profile" className="about-me__avatar" />
            <h1 className="about-me__title">Daria</h1>
            <p className="about-me__subtitle">Frontend / React Developer</p>
          </div>
          <div className="about-me__info">
            <ul className="about-me__list">
              <li className="about-me__list-item">
                <span className="about-me__icon-circle about-me__icon--orange">
                  <AccessibilityNewIcon style={{ fontSize: 28 }} />
                </span>
                <span>
                  Passionate about building beautiful and functional web
                  experiences.
                </span>
              </li>
              <li className="about-me__list-item">
                <span className="about-me__icon-circle about-me__icon--purple">
                  <AutoAwesomeMosaicIcon style={{ fontSize: 28 }} />
                </span>
                <span>
                  Completed courses in React, HTML/CSS, JavaScript, soft skills,
                  and English.
                </span>
              </li>
              <li className="about-me__list-item">
                <span className="about-me__icon-circle about-me__icon--yellow">
                  <WorkIcon style={{ fontSize: 28 }} />
                </span>
                <span>
                  Pet projects: Weather App (API forecasts), Movie App (search,
                  local storage, react-router-dom, Redux).
                </span>
              </li>
              <li className="about-me__list-item">
                <span className="about-me__icon-circle about-me__icon--blue">
                  <ContactMailIcon style={{ fontSize: 28 }} />
                </span>
                <span>
                  Commercial experience at Brainly Solution: landing pages,
                  Firebase, animation, user forms. <br />
                  Admin panel with charts, tables, calendars, and adaptive
                  interfaces.
                </span>
              </li>
            </ul>
            <button
              className="about-me__cta"
              onClick={() => window.history.back()}
            >
              Go Back
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};
