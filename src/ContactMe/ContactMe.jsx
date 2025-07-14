import "./ContactMe.scss";
import Lottie from "lottie-react";
import animationContact from "../img/animation_contact.json";

export const ContactMe = () => {
  return (
    <div className="contact-me">
      Contact
      <Lottie
        animationData={animationContact}
        loop={true}
        style={{ width: "250px" }}
      />
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};
