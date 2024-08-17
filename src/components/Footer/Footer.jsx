import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Github from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span className="f-mail">r.kumar111998a@gmail.com</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/__rahul2002_/" target="_blank">
            <Insta color="white" size="3rem" className="icon"/>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100019474412590" target="_blank">
            <Facebook color="white" size="3rem" className="icon"/>
          </a>
          <a href="https://linkedin.com/in/rahul-pal-71498a244" target="_blank">
            <Linkedin color="white" size="3rem" className="icon"/>
          </a>
          <a href="https://github.com/dashboard" target="_blank">
            <Github color="white" size="3rem" className="icon"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
