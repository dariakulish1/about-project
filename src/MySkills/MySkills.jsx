import "./MySkills.scss";
import typeScript from "../img/typeScript.svg";
import jsIco from "../img/jsIco.png";
import icoApi from "../img/api.png";
import reactRouterIco from "../img/rr_logo_light.svg";
import reduxIco from "../img/reduxIco.svg";
import logoScss from "../img/logoScss.svg";
import reactLogo from "../img/logo_dark.svg";
import logoGit from "../img/logoGit.png";
import reactAdminIco from "../img/reactAdminIco.svg";
import cssLogo from "../img/cssLogo.png";
import reactChartsLogo from "../img/react-charts-logo.svg";
import muiLogo from "../img/muiLogoIco.svg";
import htmlIco from "../img/htmlIco.png";
import { AnimatedSection } from "../utils/AnimatedSection";
import { TypeAnimation } from "react-type-animation";

const skillsNames = [
  "Material UI",
  "Redux",
  "React",
  "TypeScript",
  "JavaScript",
  "Git",
  "CSS",
  "SCSS",
  "HTML",
  "REST API",
  "React Hooks",
  "Redux Toolkit",
  "React Router",
  "Recharts",
  "react-admin",
];
const iconSkills = [
  muiLogo,
  reduxIco,
  reactLogo,
  typeScript,
  jsIco,
  logoGit,
  cssLogo,
  logoScss,
  htmlIco,
  icoApi,
  reactLogo,
  reduxIco,
  reactRouterIco,
  reactChartsLogo,
  reactAdminIco,
];
const boxsColors = [
  "#001219",
  "#005F73",
  "#0A9396",
  "#94D2BD",
  "#DECD98",
  "#EE9B00",
  "#CA6702",
  "#BB3E03",
  "#AE2012",
  "#9B2226",
  "#2F0040",
  "#5D008F",
  "#6F0EB5",
  "#B39DD6",
  "#AED2E0",
];

export const MySkills = () => {
  return (
    <AnimatedSection>
      <div className="my-skills">
        <TypeAnimation
          sequence={[
            "My Сapabilities",
            500,
            "My Skills",
            100,
            () => {
              console.log("Sequence completed");
            },
          ]}
          wrapper="span"
          cursor={false}
          repeat={0}
          style={{
            color: "#333",
            marginBottom: "2rem",
            fontSize: "32px",
            display: "inline-block",
            fontWeight: "700",
          }}
        />
        <div className="my-skills__skills-grid">
          <div className="my-skills__skill-item">
            {skillsNames.map((name, index) => {
              return (
                <div
                  className="my-skills__skill-box"
                  style={{
                    background: `${boxsColors[index]}`,
                  }}
                >
                  <TypeAnimation
                    sequence={[
                      `${name}`,
                      1000,
                      () => {
                        console.log("Sequence completed");
                      },
                    ]}
                    wrapper="span"
                    cursor={false}
                    repeat={0}
                    style={{ fontSize: "16px", display: "inline-block" }}
                  />
                  <img
                    src={iconSkills[index]}
                    alt="skill ico"
                    style={{
                      width: "40px",
                      margin: "auto",
                    }}
                  />
                </div>
              );
            })}
            <button
              onClick={() => window.history.back()}
              className="my-skills__back-btn"
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};
