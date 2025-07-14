import "./ContactMe.scss";
import Lottie from "lottie-react";
import animationContact from "../img/animation_contact.json";
import { AnimatedSection } from "../utils/AnimatedSection";

export const ContactMe = () => {
  return (
      <div className="contact-me">
        <AnimatedSection>
          <div className="contact-card">
            <div className="contact-animation">
              <Lottie
                animationData={animationContact}
                loop={true}
                style={{ width: "250px", maxWidth: "100%" }}
              />
            </div>
            <div className="contact-content">
              <h2>Contact Me</h2>
              <div className="contact-details">
                <p><strong>Email:</strong> <a href="https://mail.google.com/mail/?view=cm&to=dashaklsh1507@gmail.com" target="_blank" rel="noopener noreferrer">dashaklsh1507@gmail.com</a></p>
                <p><strong>Telegram:</strong> <a href="https://web.telegram.org/" target="_blank" rel="noopener noreferrer">@dcoolesh</a></p>
                <p><strong>LinkedIn:</strong> <a href="http://www.linkedin.com/in/daria-kulish-5a4a66257" target="_blank" rel="noopener noreferrer">http://www.linkedin.com/in/daria-kulish-5a4a66257</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/dariakulish1" target="_blank" rel="noopener noreferrer">https://github.com/dariakulish1</a></p>
              </div>
              <button className="back-btn" onClick={() => window.history.back()}>Go Back</button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    
  );
};
